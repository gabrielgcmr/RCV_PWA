package dto

// RegisterInput é o payload esperado no endpoint POST /users/register
type RegisterInput struct {
	FullName string `json:"full_name" validate:"required"`
	CPF      string `json:"cpf" validate:"required,len=14"` // ex: "123.456.789-00"
	CNS      string `json:"cns,omitempty" validate:"omitempty,len=15"`
	Email    string `json:"email" validate:"required,email"`
	Password string `json:"password" validate:"required,min=8"`
}
