package main

import (
	"log"

	"github.com/gin-gonic/gin"

	"github.com/gabrielgcmr/medapp/config"
	"github.com/gabrielgcmr/medapp/model"
	"github.com/gabrielgcmr/medapp/pkg/database"
	"github.com/gabrielgcmr/medapp/pkg/validation"
	"github.com/gabrielgcmr/medapp/routes"
)

func main() {
	database.Connect()
	database.DB.AutoMigrate(&model.User{})

	r := gin.Default()

	// 🌐 Aplica o middleware de CORS
	r.Use(config.SetupCors())

	// Registra as rotas
	routes.RegisterAuthRoutes(r)

	if err := validation.InitValidator(); err != nil {
		log.Fatalf("Erro ao iniciar validador: %v", err)
	}

	log.Println("🚀 API running at http://localhost:8080")
	r.Run(":8080")
}
