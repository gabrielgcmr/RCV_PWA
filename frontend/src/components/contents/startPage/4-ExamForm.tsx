import { useExamSectionStore } from "@/store/useExamSectionStore";
import ExamDate from "../../common/exam/ExamDate";

import SectionBase from "../../common/FormBase";
import CategoryExamForm from "@/components/common/exam/CategoryExamForm";

function ExamsSection() {
  const minimizedExamForms = useExamSectionStore(
    (state) => state.minimizedExamForms
  );
  const restoreExamForm = useExamSectionStore((state) => state.restoreExamForm);

  return (
    <SectionBase
      title=" Exames Complementares"
      icon="🧪"
      id="complementaryExams"
      className="max-w-160"
    >
      <div className="sm:grid sm:grid-cols-2 gap-4 mb-1">
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
        <CategoryExamForm category="LipidProfile" title="Lipidograma" />
        <CategoryExamForm category="RenalProfile" title="Perfil Renal" />
        <CategoryExamForm category="LiverProfile" title="Perfil Hepático" />
        <CategoryExamForm category="GlucoseProfile" title="Perfil Glicemico" />
        <CategoryExamForm category="Electrolytes" title="Eletrólitos" />
        <CategoryExamForm category="Vitamins" title="Vitaminas" />
        <CategoryExamForm category="CBC" title="Hemograma" />
        <CategoryExamForm category="Urinalysis" title="EAS" />
        <CategoryExamForm
          category="ThyroidProfile"
          title="Perfil Tireoideano"
        />
        <CategoryExamForm category="Inflamatory" title="Inflamatórios" />
        <CategoryExamForm category="Fecal" title=" Fecal" />
      </div>
    </SectionBase>
  );
}

export default ExamsSection;
