import IdentificationForm from "../components/contents/startPage/1-IdentificationSection";
import ProblemListForm from "../components/contents/startPage/3-ProblemListForm";
import ExamsSection from "../components/contents/startPage/4-ExamForm";
import MinimizedSectionBar from "../components/layout/MinimizedSectionBar";
import { SectionProvider } from "../context/SectionProvider";
import initialTextContentHTML from "@/components/editors/initialTextContentHTML";
import { useEditor } from "@tiptap/react";
import extensionsConfig from "@/components/editors/extensionConfig";
import EditorSection from "@/components/editors/EditorSection";
import ClinicalHistory from "@/components/contents/startPage/SummaryBuilder";
import { useSectionStore } from "@/store/useSectionStore";
import PhysicalExamForm from "@/components/contents/startPage/2-PhysicalExamForm";
import PatientDebugPanel from "@/components/devtools/PatientDebugPanel";

function StartPage() {
  const editor = useEditor({
    extensions: extensionsConfig,
    content: initialTextContentHTML,
  });
  const isVisible = useSectionStore((state) => state.isVisible);

  return (
    <SectionProvider>
      <div className="flex ">
        <PatientDebugPanel />
        <MinimizedSectionBar />
        <div className="flex flex-col ">
          {isVisible("identification") && <IdentificationForm />}
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
