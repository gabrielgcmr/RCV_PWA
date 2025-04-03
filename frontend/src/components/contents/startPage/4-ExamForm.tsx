import usePatient from "../../../hooks/usePatient";
import ExamDate from "../../common/exam/ExamDate";
import ExamForm from "../../common/exam/ExamForm";
import ExamsLayout from "../../common/exam/ExamsLayout";
import FormBase from "../../common/form/FormBase";

function ExamsForm() {
  const { patient, handleExamChange, getExamValue } = usePatient();
  return (
    <ExamsLayout
      dateComponent={<ExamDate />}
      actionComponent={<p>Futura funcionalidade</p>}
      examComponents={examCategories.map(({ category, title }) => (
        <ExamCategory
          key={category}
          title={title}
          category={category}
          getExamValue={getExamValue}
          onExamChange={handleExamChange}
        />
      ))}
    />
  );
}

export default ExamsForm;
