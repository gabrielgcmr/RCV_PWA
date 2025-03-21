import { ProblemData } from "../../../interfaces/Interfaces";

export default function getCKDTextFromProblem(problem: ProblemData) {
  if (!problem.present) return null;
  const { stage } = problem.details ?? {};
  return `<li><strong>DRC</strong> (${stage})</li>`;
}
