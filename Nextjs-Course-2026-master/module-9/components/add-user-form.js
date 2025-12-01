"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

async function addUser(userData) {
  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  return response.json();
}

export function AddUserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setName("");
      setEmail("");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      mutation.mutate({ name, email });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add User (useMutation Example)</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? "Adding..." : " Add User"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
