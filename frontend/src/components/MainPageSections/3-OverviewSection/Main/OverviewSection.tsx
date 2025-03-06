import CopyboadComponent from "../components/ClipboardComponent";
import SummaryComponent from "../components/SummaryComponent";

export default function OverviewSection() {
      return(
        <div className="bg-zinc-800 p-4 rounded-lg shadow h-full space-y-2">
          <h2 className="text-lg font-bold mb-2 text-center">📊 Resultado e Resumo</h2>
          <SummaryComponent/>
          <CopyboadComponent/>
        </div>
      )
}