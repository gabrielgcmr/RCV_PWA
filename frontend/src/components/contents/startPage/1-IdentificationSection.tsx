import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SectionBase from "../../common/FormBase";
import { usePatientStore } from "@/store/patient/usePatientStore";
import { useEditor } from "@tiptap/react";

const genderOptions = [
  { value: "male", label: "Masculino" },
  { value: "female", label: "Feminino" },
];

const raceOptions = [
  { label: "Branco", value: "white" },
  { label: "Preto", value: "black" },
  { label: "Outro", value: "other" },
];

export default function IdentificationForm({
  editor,
}: {
  editor: ReturnType<typeof useEditor>;
}) {
  const { identification, setIdentificationField } = usePatientStore();

  if (!editor) {
    return <div>Carregando editor...</div>;
  }

  const handleFieldChange = (
    field: keyof typeof identification,
    value: string
  ) => {
    setIdentificationField(field, value);
  };

  return (
    <SectionBase
      title="Identificação"
      icon="🏷️"
      id="identification"
      className="max-w-80 overflow-y-auto"
    >
      <form className="space-y-2">
        <div>
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            placeholder="Digite o nome do paciente"
            value={identification.fullName}
            onChange={(e) => handleFieldChange("fullName", e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="age">Idade</Label>
          <Input
            id="age"
            type="number"
            placeholder="Idade"
            value={identification.age}
            onChange={(e) => handleFieldChange("age", e.target.value)}
          />
        </div>

        <div>
          <Label>Gênero</Label>
          <RadioGroup
            value={identification.gender}
            onValueChange={(value) => handleFieldChange("gender", value)}
            className="flex gap-4 mt-1"
          >
            {genderOptions.map((option) => (
              <div key={option.value} className="flex items-center gap-1">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div>
          <Label>Raça</Label>
          <Select
            value={identification.race}
            onValueChange={(value) => handleFieldChange("race", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              {raceOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </form>
    </SectionBase>
  );
}
