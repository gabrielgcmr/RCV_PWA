package main

import (
	"log"

	"github.com/gabrielgcmr/medapp/models"
	"github.com/gabrielgcmr/medapp/pkg/database"
	"github.com/gabrielgcmr/medapp/routes"
	"github.com/gin-gonic/gin"
)

func main() {
	database.Connect()
	database.DB.AutoMigrate(&models.User{})

	r := gin.Default()
	routes.RegisterAuthRoutes(r)

	log.Println("🚀 API running at http://localhost:8080")
	r.Run(":8080")
}
