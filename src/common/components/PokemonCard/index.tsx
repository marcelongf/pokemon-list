import { Pokemon } from "../../types/pokemon"

export default ({name}: Pokemon) => {
  return (
    <div className="bg-gray-600 rounded-lg p-2 text-white">
      <span>{name}</span>
    </div>
  )
}