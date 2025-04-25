import React, { useEffect } from "react";
import IdentificationForm from "../components/contents/startPage/forms/IdentificationForm";
import ProblemListForm from "../components/contents/startPage/problemList/ProblemListForm";
import ExamsForm from "../components/contents/startPage/forms/exam/ExamForm";
import PhysicalExamForm from "../components/contents/startPage/forms/PhysicalExamForm";
import PreventionsView from "@/components/contents/startPage/views/PreventionsView";
import ProblemsView from "@/components/contents/startPage/views/ProblemView";
import EditorView from "@/components/editors/EditorSection";
import MinimizedSectionBar from "../components/layout/MinimizedSectionBar";
import { SectionProvider } from "../context/SectionProvider";
import { useEditor } from "@tiptap/react";
import extensionsConfig from "@/components/editors/extensionConfig";
import clinicalHistoryJSON from "@/core/clinicalHistory/fullClinicalHistoryJSON";
import { useSectionStore } from "@/store/useSectionStore";
import { usePatientStore } from "@/store";
import PatientDebugPanel from "@/components/devtools/PatientDebugPanel";

export default function StartPage() {
  const patient = usePatientStore();
  const isVisible = useSectionStore((state) => state.isVisible);

  const editor = useEditor({
    extensions: extensionsConfig,
    content: clinicalHistoryJSON(patient),
  });

  // Atualiza conteúdo do editor sempre que paciente mudar
  useEffect(() => {
    if (editor && !editor.isDestroyed) {
      editor.commands.setContent(clinicalHistoryJSON(patient));
    }
  }, [patient, editor]);

  return (
    <SectionProvider>
      <div className="h-screen grid grid-cols-[auto_1fr] overflow-hidden">
        {/* Barra lateral de seções minimizadas */}
        <MinimizedSectionBar />

        {/* Conteúdo principal */}
        <div className="grid grid-rows-1 grid-cols-2 p-2">
          <div className="grid grid-cols-[30%_70%]">
            {/* Coluna Esquerda: Formulários de entrada */}
            <aside className="space-y-2 overflow-y-auto">
              {isVisible("identification") && (
                <IdentificationForm editor={editor} />
              )}
              {isVisible("problemList") && <ProblemListForm />}
              {isVisible("physicalExam") && <PhysicalExamForm />}
            </aside>
            {/* Coluna Direita (maior): ExamsForm */}
            <div>
              <ExamsForm />
            </div>
          </div>

          {/* Coluna Direita: Visualizações e editor */}
          <section className="flex flex-col space-y-4 overflow-y-auto">
            <div className="grid grid-cols-[30%_70%]">
              <div className="space-y-2">
                <PreventionsView />
                <ProblemsView />
              </div>

              {editor && <EditorView editor={editor} />}
            </div>

            {/* Painel de debug opcional */}
            <div className="mt-auto">
              {/* Movido para dentro de SectionProvider */}
            </div>
          </section>
        </div>

        {/* Painel de depuração flutuante */}
        <div className="absolute bottom-4 right-4">
          <React.Suspense fallback={null}>
            <PatientDebugPanel />
          </React.Suspense>
        </div>
      </div>
    </SectionProvider>
  );
}
