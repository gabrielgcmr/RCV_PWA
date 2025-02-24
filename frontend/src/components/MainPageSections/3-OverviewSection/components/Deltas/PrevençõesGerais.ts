import Delta from 'quill-delta';

export function buildDeltaPrevençõesGerais({ hasChecked, pasValue, dmChecked }: { hasChecked: boolean, pasValue: number, dmChecked: boolean }) {
  const delta = new Delta();

  // Cabeçalho
  delta.insert("PREVENÇÕES E SEGMENTOS\n");

  // Seção HAS
  delta.insert("HAS = ");
  if (hasChecked) {
    delta.insert("Presente");
    if (pasValue > 140) {
      delta.insert(" controlada");
    }
  } else {
    delta.insert("Ausente");
  }
  delta.insert("\n");

  // Seção DM
  delta.insert("DM = ");
  // Exemplo: se o checkbox de DM estiver ativo
  delta.insert(dmChecked ? "Presente" : "NA");
  delta.insert("\n");

  // Outras seções, se necessário
  // delta.insert("RCV = NA\n");

  return delta;
}
console.log (buildDeltaPrevençõesGerais({ hasChecked: true, pasValue: 150, dmChecked: true }).ops);