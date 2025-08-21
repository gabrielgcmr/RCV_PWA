import IdentificationForm from "../components/contents/startPage/1-IdentificationForm";
import PhysicalExamForm from "../components/contents/startPage/2-PhysicalExamForm";
import ProblemListForm from "../components/contents/startPage/3-ProblemListForm";
import ExamsForm from "../components/contents/startPage/4-ExamForm";
import SummaryBuilder from "../components/contents/startPage/5-summaryBuilder";
import MinimizedSectionBar from "../components/contents/startPage/MinimizedSectionBar";
import TiptapEditor from "../components/editors/TipTap";
import { SectionProvider } from "../context/SectionProvider";

function StartPage() {
  return (
    <SectionProvider>
      <div className="grid h-full w-full md:grid-cols-[1.2fr_2.5fr_1.5fr_2fr] gap-2 p-2 overflow-hidden">
        <MinimizedSectionBar />
        <div className="flex flex-col gap-1 overflow-auto">
          <IdentificationForm />
          <ProblemListForm />
          <PhysicalExamForm />
        </div>
        <ExamsForm />
        <SummaryBuilder />
        <TiptapEditor />
      </div>
    </SectionProvider>
  );
}

export default StartPage;
