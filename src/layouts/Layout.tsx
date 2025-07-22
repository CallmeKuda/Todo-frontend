import { Outlet, Link } from '@tanstack/react-router'

export default function Layout() {
  return (
    <div className="p-6">
      <nav className="mb-6 flex gap-4 border-b pb-2">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <Link to="/todos" className="text-blue-600 hover:underline">Todos</Link>
        <Link to="/about" className="text-blue-600 hover:underline">About</Link>
      </nav>
      <Outlet />
    </div>
  )
}
