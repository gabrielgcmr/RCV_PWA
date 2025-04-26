package user

import (
	"time"
)

type User struct {
	ID           int        `gorm:"primaryKey;autoIncrement" json:"id"`
	CPF          string     `gorm:"size:14;not null;uniqueIndex" json:"cpf"` // ex: “123.456.789-00”
	PasswordHash string     `gorm:"size:255;not null" json:"-"`
	CNS          *string    `gorm:"size:15" json:"cns,omitempty"` // Carteira Nacional de Saúde
	FullName     string     `gorm:"size:255;not null" json:"full_name"`
	Age          *int       `json:"age,omitempty"`
	Gender       *string    `gorm:"size:10" json:"gender,omitempty"`             // “male”, “female”
	Race         *string    `gorm:"size:20" json:"race,omitempty"`               // “white”, “black”
	Phone        *string    `gorm:"size:20" json:"phone,omitempty"`              // Telefone de contato
	Email        *string    `gorm:"size:100;uniqueIndex" json:"email,omitempty"` // E-mail de contato
	CreatedAt    *time.Time `gorm:"autoCreateTime" json:"created_at,omitempty"`
	UpdatedAt    *time.Time `gorm:"autoUpdateTime" json:"updated_at,omitempty"`
}
