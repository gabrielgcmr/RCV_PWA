package routes

import (
	"github.com/gabrielgcmr/medapp/controllers"
	"github.com/gin-gonic/gin"
)

func RegisterAuthRoutes(r *gin.Engine) {
	r.POST("/register", controllers.Register)
}
