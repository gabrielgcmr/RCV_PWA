package errors

import "errors"

var (
	ErrPatientNotFound = errors.New("paciente não encontrado")
	ErrCreatePatient   = errors.New("erro ao criar paciente")
)
