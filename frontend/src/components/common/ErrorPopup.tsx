interface ErrorPopupProps {
  errors: string[];
  onClose: () => void;
}

function ErrorPopup({ errors, onClose }: ErrorPopupProps) {
  if (errors.length === 0) return null;

  return (
    <div className="fixed top-5 right-5 bg-red-500 text-white p-4 rounded-lg shadow-lg max-w-xs z-50">
      <div className="flex justify-between items-center">
        <strong>⚠️ Erro</strong>
        <button onClick={onClose} className="ml-4 text-lg font-bold">✖</button>
      </div>
      <ul className="mt-2 text-sm">
        {errors.map((err, index) => (
          <li key={index}>• {err}</li>
        ))}
      </ul>
    </div>
  );
}

export default ErrorPopup