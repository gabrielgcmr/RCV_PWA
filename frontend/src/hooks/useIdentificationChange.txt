import { Identification } from "@/types";
import { updateIdentificationField } from "@/lib/editor/editorHandlers";
import { usePatientStore } from "@/store";

type IdentificationField = keyof Identification;

export const useIdentificationForm = (editor: any) => {
  const { patient, setPatient } = usePatientStore();

  const handleIdentificationChange = (
    field: IdentificationField,
    value: Identification[IdentificationField]
  ): void => {
    setPatient({
      identification: {
        ...patient.identification,
        [field]: value,
      },
    });

    if (typeof value === "string") {
      updateIdentificationField(editor, field, value.toString());
    }
  };

  return { patient, handleIdentificationChange };
};