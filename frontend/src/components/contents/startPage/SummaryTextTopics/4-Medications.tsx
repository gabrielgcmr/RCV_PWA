import { summaryTitle } from "./styles";

export default function Medications() {
  return (
    <>
      <p className={summaryTitle}>
        {" "}
        💊<b>MUC</b>{" "}
      </p>
      <ul className="list-disc pl-4">
        <li>Nenhuma</li>
      </ul>
    </>
  );
}
