package controllers

import (
	"net/http"

	"github.com/gabrielgcmr/medapp/models"
	"github.com/gabrielgcmr/medapp/services"
	"github.com/gin-gonic/gin"
)

func Register(c *gin.Context) {
	var input models.User

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	user := models.User{
		Name:     input.Name,
		Email:    input.Email,
		Password: input.Password,
	}

	createdUser, err := services.RegisterUser(&user)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Oculta a senha no retorno
	createdUser.Password = ""
	c.JSON(http.StatusCreated, createdUser)
}
