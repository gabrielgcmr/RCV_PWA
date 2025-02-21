import {
  ExamDateForm,
  LipidProfileForm,
  RenalProfileForm,
  CBCForm
} from '../ExamForms';

export default function ExamsSection() {
  return (
    <div className="bg-zinc-800 p-4 rounded-lg shadow h-full space-y-4">
      <h2 className="text-lg font-bold mb-4 text-center">🧪 Exames Complementares</h2>
      <ExamDateForm />
      <LipidProfileForm />
      <RenalProfileForm />
      <CBCForm />
    </div>
  );
}