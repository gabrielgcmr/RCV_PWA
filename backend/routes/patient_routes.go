package routes

import (
	"github.com/gabrielgcmr/medapp/middleware"
	"github.com/gin-gonic/gin"
)

func RegisterPatientRoutes(r *gin.Engine) {
	auth := r.Group("/patients")
	auth.Use(middleware.JWTAuthMiddleware())

	auth.GET("/", func(c *gin.Context) {
		userID := c.GetUint("user_id")
		c.JSON(200, gin.H{
			"message": "Você está autenticado!",
			"user_id": userID,
		})
	})

	// Aqui você adiciona outras rotas protegidas (POST, PUT, DELETE...)
}
