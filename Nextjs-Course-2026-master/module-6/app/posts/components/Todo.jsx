const getTodoData = async () => {
  const response = await fetch("https://68a80736bb882f2aa6dd2a10.mockapi.io/api/users/todos" , {
    next:{tags: ['todos']}
  })
  return response.json()
}

const Todos = async () => {
  const data = await getTodoData()

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Todos</h1>
        <button className="px-6 py-2 bg-white border border-gray-200 rounded-lg text-gray-900 font-medium hover:bg-gray-50 transition-colors shadow-sm">
          Revalidate
        </button>
      </div>

      <div className="grid gap-4">
        {data.map((todo) => (
          <div key={todo.id} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{todo.title}</h3>
                {todo.task && <p className="text-gray-600 text-sm mb-2">{todo.task}</p>}
                {todo.username && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                    @{todo.username}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 ml-4">
                {todo.completed !== undefined && (
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      todo.completed ? "bg-green-50 text-green-700" : "bg-yellow-50 text-yellow-700"
                    }`}
                  >
                    {todo.completed ? "Completed" : "Pending"}
                  </span>
                )}
                <span className="text-xs text-gray-500">#{todo.id}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Todos
