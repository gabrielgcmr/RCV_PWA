package main

import (
	"log"

	"github.com/gabrielgcmr/medapp/internal/database"
	"github.com/gabrielgcmr/medapp/internal/middleware"
	"github.com/gabrielgcmr/medapp/internal/user"
	"github.com/gabrielgcmr/medapp/pkg/validation"
	"github.com/gabrielgcmr/medapp/routes"
	"github.com/gin-gonic/gin"
)

func main() {
	//conectar db
	database.Connect()
	database.DB.AutoMigrate(&user.User{})

	//montar o gin e rotas
	r := gin.Default()

	// 🌐 Aplica o middleware de CORS
	r.Use(middleware.SetupCors())

	// Registra as rotas
	routes.AuthRoutes(r)

	_ = validation.Init()

	if err := validation.Init(); err != nil {
		log.Fatalf("Erro ao iniciar validador: %v", err)
	}

	log.Println("🚀 API running at http://localhost:8080")
	r.Run(":8080")
}
