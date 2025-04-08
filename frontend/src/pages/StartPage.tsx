import DebugPatient from "@/hooks/debugPatient";
import IdentificationForm from "../components/contents/startPage/1-IdentificationForm";
import PhysicalExamForm from "../components/contents/startPage/2-PhysicalExamForm";
import ProblemListForm from "../components/contents/startPage/3-ProblemListForm";
import ExamsForm from "../components/contents/startPage/4-ExamForm";
import SummaryBuilder from "../components/contents/startPage/5-summaryBuilder";
import ClinicalCalculations from "../components/contents/startPage/6-ClinicalCalculationsSection";
import MinimizedSectionBar from "../components/contents/startPage/MinimizedSectionBar";
import TiptapEditor from "../components/editors/TipTap";
import { SectionProvider } from "../context/SectionProvider";

function StartPage() {
  return (
    <SectionProvider>
      <div className="grid md:grid-cols-[0.2fr_2fr_1.5fr_2.5fr_0.5fr] gap-2 p-2 ">
        <MinimizedSectionBar />
        <div className="flex flex-col gap-1">
          <IdentificationForm />
          <ProblemListForm />
          <PhysicalExamForm />
        </div>
        <ExamsForm />
        <SummaryBuilder />
        <TiptapEditor />
        <ClinicalCalculations />
      </div>
      <DebugPatient />
    </SectionProvider>
  );
}

export default StartPage;
