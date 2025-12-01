
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trash2 } from "lucide-react"
import { deleteUser, getAllUsers } from "@/actions"

export async function UserList() {
  const users = await getAllUsers()
  console.log(users)

  if (!Array.isArray(users) || users.length === 0) {
    return (
      <Card>
        <CardContent className="p-6">
          <p className="text-center text-muted-foreground">
            {!Array.isArray(users) ? "Database not connected" : "No users found"}
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {users.map((user) => (
        <Card key={user.id}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{user.name}</h3>
                  <Badge variant={user.isActive ? "default" : "secondary"}>
                    {user.isActive ? "Active" : "Inactive"}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{user.email}</p>
                <p className="text-xs text-muted-foreground">Created: {user.createdAt?.toLocaleDateString()}</p>
              </div>
              <div className="flex gap-2">
                <form action={deleteUser.bind(null, user.id)}>
                  <Button variant="destructive" size="sm" type="submit">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
