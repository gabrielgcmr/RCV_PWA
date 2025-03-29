package services

import (
	"errors"
	"log"

	"github.com/gabrielgcmr/medapp/models"
	"github.com/gabrielgcmr/medapp/pkg/database"
	"github.com/gabrielgcmr/medapp/pkg/utils"
)

type UserService struct{}

func NewUserService() *UserService {
	return &UserService{}
}

func (s *UserService) RegisterUser(user *models.User) (*models.User, error) {
	var existing models.User
	if err := database.DB.Where("email = ?", user.Email).First(&existing).Error; err == nil {
		return nil, errors.New("email already registered")
	}

	hashedPassword, err := utils.HashPassword(user.Password)
	if err != nil {
		return nil, err
	}
	user.Password = hashedPassword

	// Salva no banco
	if err := database.DB.Create(user).Error; err != nil {
		log.Println("Erro ao salvar usuário:", err)
		return nil, errors.New("could not create user")
	}

	return user, nil
}

func (s *UserService) LoginUser(email, password string) (*models.User, error) {
	var user models.User

	// Busca o usuário pelo e-mail
	if err := database.DB.Where("email = ?", email).First(&user).Error; err != nil {
		return nil, errors.New("invalid email or password")
	}

	// Verifica se a senha bate com o hash
	if !utils.CheckPasswordHash(password, user.Password) {
		return nil, errors.New("invalid email or password")
	}

	return &user, nil
}
