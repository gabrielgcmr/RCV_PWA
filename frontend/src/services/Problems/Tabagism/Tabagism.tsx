import usePatient from "../../../hooks/usePatient"

function TabagismIndex (){
  const {hasProblem} = usePatient()
  const hasTabagism = hasProblem("Tabagismo")
  if(hasTabagism) return null
  if (!hasTabagism) return <li><strong>Tabagismo:</strong> Presente </li>
}

export default TabagismIndex