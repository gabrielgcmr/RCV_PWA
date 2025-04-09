import DebugPatient from "@/hooks/debugPatient";
import IdentificationSection from "../components/contents/startPage/1-IdentificationSection";
import PhysicalExamForm from "../components/contents/startPage/2-PhysicalExamForm";
import ProblemListForm from "../components/contents/startPage/3-ProblemListForm";
import ExamsForm from "../components/contents/startPage/4-ExamForm";
import SummaryBuilder from "../components/contents/startPage/5-summaryBuilder";
import ClinicalCalculations from "../components/contents/startPage/6-ClinicalCalculationsSection";
import MinimizedSectionBar from "../components/contents/startPage/MinimizedSectionBar";
import { SectionProvider } from "../context/SectionProvider";
import initialTextContentHTML from "@/constants/initialTextContentHTML";
import { useEditor } from "@tiptap/react";
import extensionsConfig from "@/config/tiptap/extensionConfig";
import EditorSection from "@/components/contents/startPage/EditorSection";

function StartPage() {
  const editor = useEditor({
    extensions: extensionsConfig,
    content: initialTextContentHTML,
  });

  return (
    <SectionProvider>
      <div className="grid md:grid-cols-[0.2fr_2fr_1.5fr_2.5fr_0.5fr] gap-2 p-2 ">
        <MinimizedSectionBar />
        <div className="flex flex-col gap-1">
          <IdentificationSection editor={editor} />
          <ProblemListForm />
          <PhysicalExamForm />
        </div>
        <ExamsForm />
        <SummaryBuilder />
        <EditorSection editor={editor} />
        <ClinicalCalculations />
      </div>
      <DebugPatient />
    </SectionProvider>
  );
}

export default StartPage;
