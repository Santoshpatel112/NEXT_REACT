const getUserData = async () => {
  const response = await fetch("https://68a80736bb882f2aa6dd2a10.mockapi.io/api/users/username" , {
    next:{tags: ['users']}
  })
  return response.json()
}

const Users = async () => {
  const data = await getUserData()

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Users</h1>
        <button className="px-6 py-2 bg-white border border-gray-200 rounded-lg text-gray-900 font-medium hover:bg-gray-50 transition-colors shadow-sm">
          Revalidate
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">{user.name}</h3>
                <span className="text-xs text-gray-500">ID: {user.id}</span>
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users
