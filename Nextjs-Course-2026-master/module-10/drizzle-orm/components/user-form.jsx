
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { createUser } from "@/actions"

const UserForm = () => {
  return (
    <Card>
        <CardHeader>
            <CardTitle>
                Add New User
            </CardTitle>
        </CardHeader>
         <CardContent>
        <form action={createUser} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" type="text"  required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email"  required />
          </div>
          
          <div className="flex gap-2">
            <Button type="submit" className="flex-1">
               "Create"
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default UserForm