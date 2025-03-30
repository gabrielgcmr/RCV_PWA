package routes

import (
	"github.com/gabrielgcmr/medapp/controller"
	"github.com/gabrielgcmr/medapp/service"
	"github.com/gin-gonic/gin"
)

func RegisterAuthRoutes(r *gin.Engine) {
	userService := service.NewUserService()
	authController := controller.NewAuthController(userService)

	r.POST("/api/register", authController.Register)
	r.POST("/api/login", authController.Login)
}
