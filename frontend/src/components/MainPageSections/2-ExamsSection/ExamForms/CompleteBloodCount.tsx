import ExamProfileForm from "../../../common/ExamForm/ExamForm";
import { createExamInput } from "../../../common/ExamInput/ExamUtils";
import { ExamInputProps } from "../../../common/ExamInput/ExamInputProps";

export default function CompleteBloodCountForm() {
  const CompleteBloodCount : ExamInputProps[] = [
    createExamInput("CompleteBloodCount","HMG", "Hemograma", "","",false,[
      {label: "Normal", value: "Normal" },
      {label: "Alterado", value: "Alterado"}
    ]),
    createExamInput("platelets", "plaq.", "Plaquetas (mil)", "plaq."),
  ];

  return <ExamProfileForm title="Hemograma" exams={CompleteBloodCount} />;
}
