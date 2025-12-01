import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { SearchIcon, PaperclipIcon, ChevronDownIcon } from "lucide-react"

export function ChatInput() {
  return (
    <div className="border-t border-border bg-background p-4">
      <div className="mx-auto max-w-3xl">
        <Textarea
          placeholder="Type your message here..."
          className="min-h-[100px] resize-none border-border bg-background"
        />
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-purple-600">
              Gemini 2.5 Flash
              <ChevronDownIcon className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <SearchIcon className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <PaperclipIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
