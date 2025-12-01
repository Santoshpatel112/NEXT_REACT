import db from '@/lib/db';
import { getMessages } from '@/modules/messages/actions';
import { getProjectById } from '@/modules/projects/actions';
import ProjectView from '@/modules/projects/components/project-view';
import React, { Suspense } from 'react'

const Page = async({params}) => {
    const {projectId} = await params;


  return (
      <ProjectView projectId={projectId} />
 
  )
}

export default Page