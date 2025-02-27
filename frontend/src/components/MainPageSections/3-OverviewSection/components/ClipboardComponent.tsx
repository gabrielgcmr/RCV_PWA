import { usePatient } from "../../../../hooks/usePatient";
import { useMemo } from "react";
import QuillEditor from "./QuillEditor";
import { InitialContent } from "./InitialContent";

export default function ClipboardComponent() {
  const { patientData} = usePatient();
  const { complementaryExams } = patientData || {};
  const { exams, date } = complementaryExams || {};

  const Tingk = useMemo(() => InitialContent(exams, date), [exams, date]);

  return (
    <div className="p-4 bg-zinc-100 text-black rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">RESULTADO</h2>
      <QuillEditor value={Tingk} onChange={()=>{}} />
    </div>
  );
}
