import { ExamSection } from "../components/MainPageSections/2-ExamsSection";
import { IdentificationSection } from "../components/MainPageSections/1-IdentificationSection";
import { OverviewSection } from "../components/MainPageSections/3-OverviewSection";

export default function MainPage() {
  return (
    <div className="grid grid-cols-[1fr_2fr_2fr] gap-4 p-6 bg-zinc-900 min-h-screen h-full">
      <IdentificationSection />
      <ExamSection />
      <OverviewSection />
    </div>
  );
}
