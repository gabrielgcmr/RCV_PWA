package service

import (
	"log"

	"github.com/gabrielgcmr/medapp/model"
	"github.com/gabrielgcmr/medapp/pkg/database"
	"github.com/gabrielgcmr/medapp/pkg/errs"
	"github.com/gabrielgcmr/medapp/pkg/utils"
)

type UserService struct{}

func NewUserService() *UserService {
	return &UserService{}
}

func (s *UserService) RegisterUser(user *model.User) (*model.User, error) {
	var existing model.User
	if err := database.DB.Where("email = ?", user.Email).First(&existing).Error; err == nil {
		return nil, errs.ErrDuplicateEmail
	}

	hashedPassword, err := utils.HashPassword(user.Password)
	if err != nil {
		return nil, err
	}
	user.Password = hashedPassword

	// Salva no banco
	if err := database.DB.Create(user).Error; err != nil {
		log.Println("Erro ao salvar usuário:", err)
		return nil, errs.ErrCreateUser
	}

	return user, nil
}

func (s *UserService) LoginUser(email, password string) (*model.User, error) {
	var user model.User

	// Busca o usuário pelo e-mail
	if err := database.DB.Where("email = ?", email).First(&user).Error; err != nil {
		return nil, errs.ErrInvalidLogin
	}

	// Verifica se a senha bate com o hash
	if !utils.CheckPasswordHash(password, user.Password) {
		return nil, errs.ErrInvalidLogin
	}

	return &user, nil
}
