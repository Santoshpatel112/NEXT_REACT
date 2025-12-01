export function PostList({ posts }) {
  if (!posts?.length) {
    return <p className="text-sm text-gray-500">No posts yet.</p>
  }
  return (
    <ul className="space-y-2">
      {posts.map((p) => (
        <li key={p.id} className="border rounded px-3 py-2 flex items-center justify-between">
          <span className="text-pretty">{p.title}</span>
          <time className="text-xs text-gray-500">{new Date(p.createdAt).toLocaleString()}</time>
        </li>
      ))}
    </ul>
  )
}
