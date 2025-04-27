package user

import (
	"github.com/gabrielgcmr/medapp/internal/database"
	"github.com/gabrielgcmr/medapp/internal/middleware"
	"github.com/gin-gonic/gin"
)

func UserRoutes(r *gin.Engine) {
	repo := NewRepository(database.DB)
	svc := NewService(repo)
	handler := NewHandler(svc)

	// públicas
	r.POST("/api/user/register", handler.Register)
	r.POST("/api/user/login", handler.Login)

	// protegida
	r.GET("/api/users/me", middleware.JWTAuthMiddleware(), handler.Me)
}
