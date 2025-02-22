import { usePatient } from "../../../../hooks/usePatient";

export default function HabitsForm() {
  const { patientData, updatePatientData } = usePatient();

  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md text-white">
      <h2 className="text-lg font-bold mb-4">💡 Hábitos de Vida</h2>

      {/* Tratamento para HAS */}
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id="treatingHAS"
          checked={patientData.lifeHabits.isTreatingHAS}
          onChange={(e) => updatePatientData("lifeHabits", {isTreatingHAS: e.target.checked})}
          className="mr-2"
        />
        <label htmlFor="treatingHAS" className="text-sm font-medium">
          Tratando HAS
        </label>
      </div>

      {/* Diabetes */}
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id="diabetes"
          checked={patientData.lifeHabits.hasDiabetes}
          onChange={(e) => updatePatientData("lifeHabits", {hasDiabetes: e.target.checked})}
          className="mr-2"
        />
        <label htmlFor="diabetes" className="text-sm font-medium">
          Diabetes
        </label>
      </div>

      {/* Tabagismo */}
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id="smoker"
          checked={patientData.lifeHabits.isSmoker}
          onChange={(e) => updatePatientData("lifeHabits", {isSmoker: e.target.checked})}
          className="mr-2"
        />
        <label htmlFor="smoker" className="text-sm font-medium">
          Tabagismo
        </label>
      </div>
    </div>
  );
}
