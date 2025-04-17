import IdentificationForm from "../components/contents/startPage/1-IdentificationSection";
import ProblemListForm from "../components/contents/startPage/3-ProblemListForm";
import ExamsSection from "../components/contents/startPage/4-ExamForm";
import MinimizedSectionBar from "../components/layout/MinimizedSectionBar";
import { SectionProvider } from "../context/SectionProvider";
import { useEditor } from "@tiptap/react";
import extensionsConfig from "@/components/editors/extensionConfig";
import EditorSection from "@/components/editors/EditorSection";
import ClinicalHistory from "@/components/contents/startPage/SummaryBuilder";
import { useSectionStore } from "@/store/useSectionStore";
import PhysicalExamForm from "@/components/contents/startPage/2-PhysicalExamForm";
import PatientDebugPanel from "@/components/devtools/PatientDebugPanel";
import IdentificationJSON from "@/core/clinical/clinicalHistory/identification/IdentificationJSON";
import { usePatientStore } from "@/store";
import { useEffect } from "react";

function StartPage() {
  const { identification } = usePatientStore();
  const editor = useEditor({
    extensions: extensionsConfig,
    content: IdentificationJSON(identification),
  });
  const isVisible = useSectionStore((state) => state.isVisible);

  // Garanta que o editor seja atualizado quando o estado mudar
  useEffect(() => {
    if (editor && !editor.isDestroyed) {
      editor.commands.setContent(IdentificationJSON(identification));
    }
  }, [identification, editor]);

  return (
    <SectionProvider>
      <div className="flex ">
        <PatientDebugPanel />
        <MinimizedSectionBar />
        <div className="flex flex-col ">
          {isVisible("identification") && (
            <IdentificationForm editor={editor} />
          )}
          {isVisible("problemList") && <ProblemListForm />}
          {isVisible("physicalExam") && <PhysicalExamForm />}
        </div>

        <ExamsSection />
        <ClinicalHistory />
        <EditorSection editor={editor} />
        <PatientDebugPanel />
      </div>
    </SectionProvider>
  );
}

export default StartPage;
