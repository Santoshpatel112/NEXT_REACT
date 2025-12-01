// app/lib/db.ts
let posts = [
  { id: 1, title: "First Post" },
  { id: 2, title: "Second Post" },
];

export function getPosts() {
  return posts;
}

export function addPost(title) {
  const newPost = { id: Date.now(), title };
  posts.push(newPost);
  return newPost;
}
