package controllers

import (
	"net/http"

	"github.com/gabrielgcmr/medapp/dtos"
	"github.com/gabrielgcmr/medapp/models"
	"github.com/gabrielgcmr/medapp/pkg/utils"
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

var validate = validator.New()

func (ac *AuthController) Register(c *gin.Context) {
	var input dtos.RegisterInput

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid input"})
		return
	}

	if err := validate.Struct(input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	user := models.User{
		Name:     input.Name,
		Email:    input.Email,
		Password: input.Password,
	}

	createdUser, err := ac.UserService.RegisterUser(&user)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
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
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid input"})
		return
	}

	user, err := ac.UserService.LoginUser(input.Email, input.Password)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": err.Error()})
		return
	}

	token, err := utils.GenerateJWT(user.ID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not generate token"})
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
