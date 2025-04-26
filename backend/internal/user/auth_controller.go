package user

import (
	"net/http"

	"github.com/gabrielgcmr/medapp/pkg/dto"
	"github.com/gabrielgcmr/medapp/pkg/errs"
	"github.com/gabrielgcmr/medapp/pkg/utils"
	"github.com/gabrielgcmr/medapp/pkg/validation"
	"github.com/gabrielgcmr/medapp/service"
	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
)

type Handler struct {
	Repo *service.UserService
}

func NewAuthController(userService *service.UserService) *Handler {
	return &Handler{Repo: userService}
}

func (h *Handler) Register(c *gin.Context) {
	var input dto.RegisterInput

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

	user := model.User{
		Name:     input.Name,
		Email:    input.Email,
		Password: input.Password,
	}

	createdUser, err := h.Repo.RegisterUser(&user)
	if err != nil {
		switch err {
		case errs.ErrDuplicateEmail:
			c.JSON(http.StatusConflict, gin.H{"error": err.Error()})
		default:
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		}
		return

	}

	response := dto.AuthResponse{
		ID:    createdUser.ID,
		Name:  createdUser.Name,
		Email: createdUser.Email,
	}

	c.JSON(http.StatusCreated, response)
}

func (ac *Handler) Login(c *gin.Context) {
	var input dto.LoginInput

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Input Inválido"})
		return
	}

	user, err := ac.Repo.LoginUser(input.Email, input.Password)
	if err != nil {
		switch err {
		case errs.ErrInvalidLogin:
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

	response := dto.AuthResponse{
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
