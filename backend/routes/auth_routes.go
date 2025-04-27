package routes

import (
	"github.com/gabrielgcmr/medapp/internal/database"
	"github.com/gabrielgcmr/medapp/internal/user"
	"github.com/gin-gonic/gin"
)

func AuthRoutes(r *gin.Engine) {
	repo := user.NewRepository(database.DB)
	svc := user.NewService(repo)
	handler := user.NewHandler(svc)

	r.POST("/api/register", handler.Register)
	r.POST("/api/login", handler.Login)
}
