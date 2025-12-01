import { Response } from '@/components/ai-elements/response';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { MessageRole, MessageType } from '@prisma/client';
import { format } from 'date-fns/format';
import { MessageSquareIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react'


const UserMessage = ({ content }) => {
  return (
    <div className="flex justify-end pb-4 pr-2 pl-10">
      <Card
        className={
          "rounded-lg bg-muted p-2 shadow-none border-none max-w-[80%] break-words"
        }
      >
        {content}
      </Card>
    </div>
  );
};

const AssistantMessage = ({
  content,
  createdAt,
  type,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col group px-2 pb-4",
        type === MessageType.ERROR && "text-red-700 dark:text-red-500"
      )}
    >
      <div className="flex items-center gap-2 pl-2 mb-2">
       <MessageSquareIcon className="h-4 w-4" />
        <span className="text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
          {format(new Date(createdAt), "HH:mm 'on' MMM dd, yyyy")}
        </span>
      </div>

      <div className="pl-8.5 flex flex-col gap-y-4">
       <Response>{content}</Response>
      </div>
    </div>
  );
};

const MessageCard = ({
    content , type , role , createdAt
}) => {

    if(role === MessageRole.ASSISTANT){
        return (
            <AssistantMessage content={content} createdAt={createdAt}/>
        )
    }

  return (
    <div className='mt-5'>
        <UserMessage content={content}/>
    </div>
  )
}

export default MessageCard