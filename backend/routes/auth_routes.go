package routes

import (
	"github.com/gabrielgcmr/medapp/controllers"
	"github.com/gabrielgcmr/medapp/services"
	"github.com/gin-gonic/gin"
)

func RegisterAuthRoutes(r *gin.Engine) {
	userService := services.NewUserService()
	authController := controllers.NewAuthController(userService)

	r.POST("/register", authController.Register)
	r.POST("/login", authController.Login)
}
