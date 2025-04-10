import DebugPatient from "@/hooks/debugPatient";
import IdentificationSection from "../components/contents/startPage/1-IdentificationSection";
import PhysicalExamForm from "../components/contents/startPage/2-PhysicalExamForm";
import ProblemListForm from "../components/contents/startPage/3-ProblemListForm";
import ExamsSection from "../components/contents/startPage/4-ExamForm";
import MinimizedSectionBar from "../components/layout/MinimizedSectionBar";
import { SectionProvider } from "../context/SectionProvider";
import initialTextContentHTML from "@/constants/initialTextContentHTML";
import { useEditor } from "@tiptap/react";
import extensionsConfig from "@/config/tiptap/extensionConfig";
import EditorSection from "@/components/contents/startPage/EditorSection";
import SummaryBuilder from "@/components/contents/startPage/SummaryBuilder";
import { useSectionStore } from "@/store/useSectionStore";

function StartPage() {
  const editor = useEditor({
    extensions: extensionsConfig,
    content: initialTextContentHTML,
  });
  const isVisible = useSectionStore((state) => state.isVisible);

  return (
    <SectionProvider>
      <div className="flex ">
        <MinimizedSectionBar />
        <div className="flex flex-col ">
          {isVisible("identification") && (
            <IdentificationSection editor={editor} />
          )}
          {isVisible("problemList") && <ProblemListForm />}
          {isVisible("physicalExam") && <PhysicalExamForm />}
        </div>

        <ExamsSection />
        <SummaryBuilder />
        <EditorSection editor={editor} />
      </div>
      <DebugPatient />
    </SectionProvider>
  );
}

export default StartPage;
