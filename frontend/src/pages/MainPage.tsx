import { ExamSection } from "../components/MainPageSections/2-ExamsSection";
import { IdentificationSection } from "../components/MainPageSections/1-IdentificationSection";
import { OverviewSection } from "../components/MainPageSections/3-OverviewSection";

export default function MainPage() {
  return (
    <div className="grid grid-cols-[1fr_2fr_2fr] gap-4 p-2 bg-zinc-900 min-h-screen h-full  ">
      <div className="grid grid-cols-[1fr_2fr] bg-zinc-800 gap-2 col-span-2 h-full rounded-lg shadow">
      <IdentificationSection />
      <ExamSection />
      </div>
      <OverviewSection />
    </div>
  );
}
