"use client";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

async function fetchUsers() {
    const response = await fetch("/api/users");

    return response.json()
}

async function deleteUser(id) {
  const response = await fetch(`/api/users?id=${id}`, {
    method: "DELETE",
  })

  return response.json()
}

const UsersList = () => {

  const queryClient = useQueryClient()

    const {data:users , isLoading , error , isError} = useQuery({
        queryKey:["users"],
        queryFn:fetchUsers
    })

    const deleteMutation = useMutation({
      mutationFn:deleteUser,
      onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:['users']})
        console.log("Method called")
      }
    })

    
  if (isLoading) return <div className="p-4">Loading users...</div>
  if (isError) return <div className="p-4 text-red-500">Error: {error.message}</div>

  console.log(users)
  
  return (
     <Card>
      <CardHeader>
        <CardTitle>Users List (useQuery Example)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {users?.map((user) => (
            <div key={user.id} className="flex items-center justify-between p-2 border rounded">
              <div>
                <div className="font-medium">{user.name}</div>
                <div className="text-sm text-muted-foreground">{user.email}</div>
              </div>
              <Button
                variant="destructive"
                size="sm"
                className={"cursor-pointer"}
                onClick={() => deleteMutation.mutate(user.id)}
                disabled={deleteMutation.isPending}
              >
                {deleteMutation.isPending ? "Deleting..." : "Delete"}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default UsersList