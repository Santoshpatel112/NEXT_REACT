import LoginForm from '@/components/login-form'
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

const LoginPage = async() => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!!session) {
    redirect("/");
  }

  return (
    <div>
      <LoginForm/>
    </div>
  )
}

export default LoginPage