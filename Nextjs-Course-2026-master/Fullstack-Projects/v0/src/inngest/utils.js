import { AgentResult ,TextMessage} from "@inngest/agent-kit";

export function lastAssistantTextMessageContent(result){
    const lastAssistantTextMessageIndex = result.output.findLastIndex(
        (message) => message.role === "assistant"
    )

    const message = result.output[lastAssistantTextMessageIndex] 


    return message?.content ? typeof message.content === "string" ? message.content : message.content.map((c)=>c.text).join("") : undefined
}