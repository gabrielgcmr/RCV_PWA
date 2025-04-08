export interface Problem {
    name: string;
    abreviation?:string
    bodySystem?:string
    description?: string;
    other?: string
    errors?:string[]
  }
  
  export interface ProblemList {
    problems: Problem[]; // Lista de problemas
  }