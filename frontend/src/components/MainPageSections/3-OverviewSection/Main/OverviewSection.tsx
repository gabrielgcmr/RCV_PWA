import ClipboardComponent from "../components/ClipboardComponent";
import SummaryComponent from "../components/SummaryComponent";

export default function OverviewSection() {
      return(
        <div className="bg-zinc-800 p-4 rounded-lg shadow space-y-4 mb-2">
          <h2 className="text-lg font-bold mb-4 text-center">📊 Resultado e Resumo</h2>
          <SummaryComponent/>
          <ClipboardComponent/>
        </div>
      )
}