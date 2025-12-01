import { getContactStats } from '@/actions'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const ContactStats = async() => {
    const stats = await getContactStats()
  return (
   <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 mt-5">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Total</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.total}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">New</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-600">{stats.newCount}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Read</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-yellow-600">{stats.readCount}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Replied</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">{stats.repliedCount}</div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ContactStats