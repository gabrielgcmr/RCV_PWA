import { useExamSectionStore } from "@/store/useExamSectionStore";
import ExamDate from "../../common/exam/ExamDate";
import ExamForm from "../../common/exam/ExamForm";
import FormBase from "../../common/FormBase";

function ExamsSection() {
  const minimizedExamForms = useExamSectionStore(
    (state) => state.minimizedExamForms
  );
  const restoreExamForm = useExamSectionStore((state) => state.restoreExamForm);

  return (
    <FormBase
      title=" Exames Complementares"
      icon="🧪"
      id="complementaryExams"
      className="max-w-160"
    >
      <div className="grid grid-cols-4 gap-4 mb-1">
        <div className="col-span-2">
          <ExamDate />
        </div>
        {/* Container dos exames minimizados */}
        <div className=" max-h-25 overflow-x-auto bg-zinc-500 col-span-2 p-2 rounded-lg">
          <div className="grid grid-cols-2 gap-1 whitespace-nowrap">
            {minimizedExamForms.length === 0 ? (
              <p></p>
            ) : (
              minimizedExamForms.map((category) => (
                <button
                  key={category}
                  className="bg-zinc-700 px-2 py-1 rounded hover:bg-zinc-600"
                  onClick={() => restoreExamForm(category)}
                >
                  {category}
                </button>
              ))
            )}
          </div>
        </div>
        {/* Exames e outros componentes ocupam os 3/4 restantes */}
      </div>
      <div className="flex flex-wrap gap-1">
        <ExamForm category="LipidProfile" title="Lipidograma" />
        <ExamForm category="RenalProfile" title="Perfil Renal" />
        <ExamForm category="LiverProfile" title="Perfil Hepático" />
        <ExamForm category="GlucoseProfile" title="Perfil Glicemico" />
        <ExamForm category="Electrolytes" title="Eletrólitos" />
        <ExamForm category="Vitamins" title="Vitaminas" />
        <ExamForm category="CBC" title="Hemograma" />
        <ExamForm category="Urinalysis" title="EAS" />
        <ExamForm category="ThyroidProfile" title="Perfil Tireoideano" />
        <ExamForm category="Inflamatory" title="Inflamatórios" />
        <ExamForm category="Fecal" title=" Fecal" />
      </div>
    </FormBase>
  );
}

export default ExamsSection;
