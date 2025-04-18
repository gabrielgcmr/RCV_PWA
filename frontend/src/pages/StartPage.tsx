import IdentificationForm from "../components/contents/startPage/identification/IdentificationForm";
import ProblemListForm from "../components/contents/startPage/problemList/ProblemListForm";
import ExamsSection from "../components/contents/startPage/4-ExamForm";
import MinimizedSectionBar from "../components/layout/MinimizedSectionBar";
import { SectionProvider } from "../context/SectionProvider";
import { useEditor } from "@tiptap/react";
import extensionsConfig from "@/components/editors/extensionConfig";
import EditorSection from "@/components/editors/EditorSection";
import Preventions from "@/components/contents/startPage/PreventionsSection";
import { useSectionStore } from "@/store/useSectionStore";
import PhysicalExamForm from "@/components/contents/startPage/physicalExam/PhysicalExamForm";
import PatientDebugPanel from "@/components/devtools/PatientDebugPanel";
import { usePatientStore } from "@/store";
import { useEffect } from "react";
import clinicalHistoryJSON from "@/core/clinicalHistory/fullClinicalHistoryJSON";

function StartPage() {
  const patient = usePatientStore();
  const editor = useEditor({
    extensions: extensionsConfig,
    content: clinicalHistoryJSON(patient),
  });
  const isVisible = useSectionStore((state) => state.isVisible);

  // Garanta que o editor seja atualizado quando o estado mudar
  useEffect(() => {
    if (editor && !editor.isDestroyed) {
      editor.commands.setContent(clinicalHistoryJSON(patient));
    }
  }, [patient, editor]);

  return (
    <SectionProvider>
      <div className="flex ">
        <MinimizedSectionBar />
        <div className="flex flex-col ">
          {isVisible("identification") && (
            <IdentificationForm editor={editor} />
          )}
          {isVisible("problemList") && <ProblemListForm />}
          {isVisible("physicalExam") && <PhysicalExamForm />}
        </div>
        <ExamsSection />
        <Preventions />
        <EditorSection editor={editor} />
        <PatientDebugPanel />
      </div>
    </SectionProvider>
  );
}

export default StartPage;
