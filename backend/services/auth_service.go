package services

import (
	"errors"

	"github.com/gabrielgcmr/medapp/models"
	"github.com/gabrielgcmr/medapp/pkg/database"
	"github.com/gabrielgcmr/medapp/pkg/utils"
)

func RegisterUser(user *models.User) (*models.User, error) {
	// Verifica se email já existe
	var existing models.User
	if err := database.DB.Where("email = ?", user.Email).First(&existing).Error; err == nil {
		return nil, errors.New("email already registered")
	}

	// Hash da senha
	hashedPassword, err := utils.HashPassword(user.Password)
	if err != nil {
		return nil, err
	}
	user.Password = hashedPassword

	// Salva no banco
	if err := database.DB.Create(user).Error; err != nil {
		return nil, err
	}

	return user, nil
}
