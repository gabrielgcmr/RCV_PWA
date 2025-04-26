package user

import (
	"log"

	"github.com/gabrielgcmr/medapp/internal/database"
	"github.com/gabrielgcmr/medapp/pkg/errs"
	"github.com/gabrielgcmr/medapp/pkg/utils"
)

type UserService struct{}

func NewUserService() *UserService {
	return &UserService{}
}

func (s *UserService) RegisterUser(user *User) (*User, error) {
	var existing User
	if err := database.DB.Where("email = ?", user.Email).First(&existing).Error; err == nil {
		return nil, errs.ErrDuplicateEmail
	}

	hashedPassword, err := utils.HashPassword(user.PasswordHash)
	if err != nil {
		return nil, err
	}
	user.PasswordHash = hashedPassword

	// Salva no banco
	if err := database.DB.Create(user).Error; err != nil {
		log.Println("Erro ao salvar usuário:", err)
		return nil, errs.ErrCreateUser
	}

	return user, nil
}

func (s *UserService) LoginUser(email, password string) (*User, error) {
	var user User

	// Busca o usuário pelo e-mail
	if err := database.DB.Where("email = ?", email).First(&user).Error; err != nil {
		return nil, errs.ErrInvalidLogin
	}

	// Verifica se a senha bate com o hash
	if !utils.CheckPasswordHash(password, user.PasswordHash) {
		return nil, errs.ErrInvalidLogin
	}

	return &user, nil
}
