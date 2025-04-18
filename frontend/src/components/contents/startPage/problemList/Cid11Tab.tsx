import { useIcdSearch } from "@/hooks/useIcdSearch";
import { Problem } from "@/types";

interface Cid11TabProps {
  token: string | undefined;
  getProblem: (key: string) => Problem | undefined;
  toggleProblem: (problem: Problem, checked: boolean) => void;
}

export default function Cid11Tab({ token }: Cid11TabProps) {
  const { query, setQuery, results, isLoading } = useIcdSearch(token);

  return (
    <div className="p-2 space-y-2">
      <input
        type="text"
        placeholder="Pesquisar CID‑11..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-1 border rounded"
      />
      {isLoading && <p>A pesquisar...</p> /* Indicador de Loading */}
      <div className="max-h-40 overflow-y-auto">
        {results.map((ent) => (
          <div key={ent.id} className="flex items-center">
            {/* Checkbox e Label, usando toggleProblem e getProblem */}
          </div>
        ))}
      </div>
    </div>
  );
}
