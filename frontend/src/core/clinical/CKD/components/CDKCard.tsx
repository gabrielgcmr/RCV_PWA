// src/core/assesment/CKDAssessment.tsx
import { usePatientStore } from "@/store";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import { CKDAssesment } from "../assesment/CKDAssesment";

export default function CKDCard() {
  const patient = usePatientStore((state) => state);

  const { hasSuspicion, stage } = CKDAssesment(patient);

  if (!hasSuspicion) return null;

  return (
    <Card className="bg-yellow-100 dark:bg-yellow-900/20 border-yellow-400 dark:border-yellow-700 text-yellow-900 dark:text-yellow-200 my-2">
      <CardContent className="flex items-start gap-3 p-4 text-lg">
        <AlertTriangle className="w-6 h-6 mt-1" />
        <div>
          <p className="font-semibold">Suspeita de DRC</p>
          <p>
            Estadiamento atual:{" "}
            <span className="font-bold text-yellow-800 dark:text-yellow-100">
              {stage}
            </span>
          </p>
          <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
            Achado isolado. Repetir exames em ≥ 3 meses para confirmação.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
