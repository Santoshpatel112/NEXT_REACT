
import UserForm from "@/components/user-form";
import {UserList} from "@/components/user-list";


export default function HomePage() {
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">User Management</h1>
        <p className="text-muted-foreground">Basic CRUD operations with Drizzle ORM and PostgreSQL</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold mb-4">Users</h2>
          <UserList />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Add User</h2>
          <UserForm />
        </div>
      </div>
    </div>
  )
}
