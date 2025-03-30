interface ErrorPopupProps {
  errors: string[];
  onClose: () => void;
}

export function ErrorPopup({ errors, onClose }: ErrorPopupProps) {
  if (errors.length === 0) return null;

  return (
    <div className="fixed top-5 right-5 bg-red-700 text-white p-2 rounded-lg shadow-lg max-w-xs z-50">
      <div className="flex justify-between items-center">
        <strong>⚠️ Não foi possível calcular:</strong>
        <button onClick={onClose} className="ml-2 text-lg font-bold">✖</button>
      </div>
      <ul className="mt-2 text-base">
        {errors.map((err, index) => (
          <li key={index}>• {err}</li>
        ))}
      </ul>
    </div>
  );
}
