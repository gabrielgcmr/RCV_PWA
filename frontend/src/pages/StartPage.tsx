import DebugPatient from "@/hooks/debugPatient";
import IdentificationSection from "../components/contents/startPage/1-IdentificationSection";
import PhysicalExamForm from "../components/contents/startPage/2-PhysicalExamForm";
import ProblemListForm from "../components/contents/startPage/3-ProblemListForm";
import ExamsForm from "../components/contents/startPage/4-ExamForm";
import SummaryBuilder from "../components/contents/startPage/5-summaryBuilder";
import ClinicalCalculations from "../components/contents/startPage/6-ClinicalCalculationsSection";
import MinimizedSectionBar from "../components/contents/startPage/MinimizedSectionBar";
import TiptapEditor from "../components/editors/TipTap.txt";
import { SectionProvider } from "../context/SectionProvider";
import EditorProvider from "@/providers/EditorProvider";
import extensionsConfig from "@/config/tiptap/ExtensionConfig";
import initialTextContentHTLM from "@/constants/initialTextContentHTML";

function StartPage() {
  return (
    <SectionProvider>
      <EditorProvider
        extensions={extensionsConfig}
        content={initialTextContentHTLM}
      >
        <div className="grid md:grid-cols-[0.2fr_2fr_1.5fr_2.5fr_0.5fr] gap-2 p-2 ">
          <MinimizedSectionBar />
          <div className="flex flex-col gap-1">
            <IdentificationSection />
            <ProblemListForm />
            <PhysicalExamForm />
          </div>
          <ExamsForm />
          <SummaryBuilder />
          <TiptapEditor />
          <ClinicalCalculations />
        </div>
        <DebugPatient />
      </EditorProvider>
    </SectionProvider>
  );
}

export default StartPage;
