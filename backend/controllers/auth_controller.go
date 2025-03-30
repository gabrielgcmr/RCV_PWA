package controllers

import (
	"net/http"

	"github.com/gabrielgcmr/medapp/dtos"
	"github.com/gabrielgcmr/medapp/models"
	authErr "github.com/gabrielgcmr/medapp/pkg/errors"
	"github.com/gabrielgcmr/medapp/pkg/utils"
	"github.com/gabrielgcmr/medapp/pkg/validation"
	"github.com/gabrielgcmr/medapp/services"
	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
)

type AuthController struct {
	UserService *services.UserService
}

func NewAuthController(userService *services.UserService) *AuthController {
	return &AuthController{UserService: userService}
}

func (ac *AuthController) Register(c *gin.Context) {
	var input dtos.RegisterInput

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Input inválido"})
		return
	}

	if err := validation.Validate.Struct(input); err != nil {
		errors := err.(validator.ValidationErrors)
		errMap := make(map[string]string)
		for _, e := range errors {
			errMap[e.Field()] = e.Translate(validation.Translator)
		}
		c.JSON(http.StatusBadRequest, gin.H{"errors": errMap})
		return
	}

	user := models.User{
		Name:     input.Name,
		Email:    input.Email,
		Password: input.Password,
	}

	createdUser, err := ac.UserService.RegisterUser(&user)
	if err != nil {
		switch err {
		case authErr.ErrDuplicateEmail:
			c.JSON(http.StatusConflict, gin.H{"error": err.Error()})
		default:
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		}
		return

	}

	response := dtos.AuthResponse{
		ID:    createdUser.ID,
		Name:  createdUser.Name,
		Email: createdUser.Email,
	}

	c.JSON(http.StatusCreated, response)
}

func (ac *AuthController) Login(c *gin.Context) {
	var input dtos.LoginInput

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Input Inválido"})
		return
	}

	user, err := ac.UserService.LoginUser(input.Email, input.Password)
	if err != nil {
		switch err {
		case authErr.ErrInvalidLogin:
			c.JSON(http.StatusUnauthorized, gin.H{"error": err.Error()})
		default:
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Erro interno no login"})
		}
		return
	}

	token, err := utils.GenerateJWT(user.ID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Não foi possível gerar o token"})
		return
	}

	response := dtos.AuthResponse{
		ID:    user.ID,
		Name:  user.Name,
		Email: user.Email,
	}

	c.JSON(http.StatusOK, gin.H{
		"token": token,
		"user":  response,
	},
	)
}
