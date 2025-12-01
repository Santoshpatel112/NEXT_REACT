// store/chat-store.ts
import { create } from "zustand";

export const useChatStore = create((set, get) => ({
  chats: [],          // All user's chats
  activeChatId: null, // Currently open chat
  messages: [],        // Messages for the active chat
 triggeredChats: new Set(), // Track which chats have been auto-triggered
  // 🚀 Setters
  setChats: (chats) => set({ chats }),
  setActiveChatId: (chatId) => set({ activeChatId: chatId }),
  setMessages: (messages) => set({ messages }),

  // ➕ Add new chat (on create)
  addChat: (chat) => set({ chats: [chat, ...get().chats] }),

  // 💬 Append a new message (user or assistant)
  addMessage: (message) => set({ messages: [...get().messages, message] }),

  // 🧹 Clear messages when switching chat
  clearMessages: () => set({ messages: [] }),

   markChatAsTriggered: (chatId) => {
    const triggered = new Set(get().triggeredChats);
    triggered.add(chatId);
    set({ triggeredChats: triggered });
  },

  hasChatBeenTriggered: (chatId) => {
    return get().triggeredChats.has(chatId);
  },
}));
