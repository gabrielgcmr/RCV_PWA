// utils/examUtils.ts
export function getExamValueAsNumber(getExamValue: (name: string) => number | string | undefined, name: string): number {
    const value = getExamValue(name);

    if (typeof value === "number") {
        return value;
    }

    if (typeof value === "string") {
        const parsed = parseFloat(value);
        return isNaN(parsed) ? 0 : parsed;
    }

    return 0; // Valor padrão se for undefined ou inválido
}
