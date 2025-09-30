import { Menu, User } from "lucide-react"

export default function ProfileHeader() {
  return (
    <header className="bg-orange-400 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button className="text-gray-800 hover:text-gray-900">
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold text-gray-800">Perfil</h1>
      </div>
      <button className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
        <User className="w-6 h-6 text-gray-800" />
      </button>
    </header>
  )
}
