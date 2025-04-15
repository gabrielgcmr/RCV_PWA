// utils.ts

/**
 * Converte objeto Date para string no formato YYYY-MM-DD.
 */
export const formatDateToInput = (date: Date): string =>{
  if (!date || isNaN(date.getTime())) return "";
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];
}

/**
 * Converte string no formato YYYY-MM-DD para objeto Date.
 */
export const parseInputDate = (input: string): Date =>
  new Date(input + "T00:00:00");


export const formatDateToDisplay = (input: string): string =>
  new Date(input).toLocaleDateString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });
