import { useQuery } from '@tanstack/react-query'

interface Todo {
  id: number
  title: string
  isComplete: boolean
}

export default function TodosPage() {
  const { data, isLoading, error } = useQuery<Todo[]>({
    queryKey: ['todos'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5028/api/todos')
      if (!res.ok) throw new Error('Failed to fetch todos')
      return res.json()
    },
  })

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Failed to load todos</p>

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Todos</h1>
      <ul className="space-y-2">
        {data?.map(todo => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-4 border rounded shadow"
          >
            <span className={todo.isComplete ? 'line-through text-gray-500' : ''}>
              {todo.title}
            </span>
            <span
              className={`text-sm px-2 py-1 rounded ${
                todo.isComplete ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}
            >
              {todo.isComplete ? 'Done' : 'Pending'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
