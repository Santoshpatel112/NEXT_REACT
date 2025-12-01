"use client";

import { useState } from "react";
import { Send, Paperclip, Mic, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { cn } from "@/lib/utils";
import { useAIModels } from "@/modules/ai-agent/hook/ai-agent";
import { ModelSelector } from "./model-selector";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { useCreateMessageInChat } from "../hooks/chat";


export default function MessageForm({model , chatId}) {
  const { data: models, isPending, error } = useAIModels();

  const [message, setMessage] = useState("");

  const [useWebSearch, setUseWebSearch] = useState(false);
  const [useMicrophone, setUseMicrophone] = useState(false);
  const [selectedModel, setSelectedModel] = useState(model);
  const { mutateAsync, isPending: isChatPending } = useCreateMessageInChat(chatId);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    try {
     
      await mutateAsync({ content: message, model: selectedModel });
      toast.success("Message sent successfully");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message");
    } finally {
      
      setMessage("");
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 pb-6">
      <form onSubmit={handleSubmit} className="relative">
        {/* Main Input Container */}
        <div className="relative rounded-2xl border border-border shadow-sm   transition-all">
          {/* Textarea */}
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className="min-h-[60px] max-h-[200px] resize-none border-0 bg-transparent px-4 py-3 text-base focus-visible:ring-0 focus-visible:ring-offset-0 "
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />

          {/* Toolbar */}
          <div className="flex items-center justify-between gap-2 px-3 py-2 border-t ">
            {/* Left side tools */}
            <div className="flex items-center gap-1">
              <Button
                disabled={isChatPending}
                type="button"
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 "
                aria-label="Attach file"
                title="Attach file"
              >
                <Paperclip className="h-4 w-4" />
                <span className="sr-only">Attach file</span>
              </Button>

              <Button
                type="button"
                variant={useWebSearch ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setUseWebSearch(!useWebSearch)}
                aria-pressed={useWebSearch}
                aria-label="Toggle web search"
                title="Toggle web search"
                className={cn(
                  "h-8 px-2 gap-1",
                  useWebSearch && "ring-2 ring-ring/40"
                )}
              >
                <Globe className="h-4 w-4" />
                <span className="text-xs">Search</span>
              </Button>

              {isPending ? (
                <>
                  <Spinner />
                </>
              ) : (
                <ModelSelector
                  models={models?.models}
                  selectedModelId={selectedModel}
                  onModelSelect={setSelectedModel}
                  className="ml-1"
                />
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={!message.trim()}
              size="sm"
              variant={message.trim() ? "default" : "ghost"}
              className="h-8 w-8 p-0 rounded-full "
              aria-label="Send message"
              title={
                message.trim() ? "Send message" : "Enter a message to enable"
              }
            >
            {isChatPending ? <>
            <Spinner /></>: <><Send className="h-4 w-4" />
              <span className="sr-only">Send message</span></> }
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}