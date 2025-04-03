package validation

import (
	"github.com/go-playground/locales/pt_BR"
	ut "github.com/go-playground/universal-translator"
	"github.com/go-playground/validator/v10"
	pt_translations "github.com/go-playground/validator/v10/translations/pt_BR"
)

var (
	Validate   *validator.Validate
	Translator ut.Translator
)

func InitValidator() error {
	Validate = validator.New()

	// Configurar tradutor
	locale := pt_BR.New()
	uni := ut.New(locale, locale)
	trans, _ := uni.GetTranslator("pt_BR")
	Translator = trans

	// Registrar traduções
	return pt_translations.RegisterDefaultTranslations(Validate, Translator)
}
