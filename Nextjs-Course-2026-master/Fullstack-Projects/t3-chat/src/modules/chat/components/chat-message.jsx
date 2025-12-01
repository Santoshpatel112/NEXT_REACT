import { cn } from "@/lib/utils"

export function ChatMessage({ role, content }) {
  return (
    <div className={cn("mb-6 flex w-full", role === "user" ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-3",
          role === "user"
            ? "bg-purple-100 text-purple-900 dark:bg-purple-900/20 dark:text-purple-100"
            : "bg-muted text-foreground",
        )}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{content}</p>
      </div>
    </div>
  )
}
