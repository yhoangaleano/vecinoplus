import { create } from 'zustand'
import { conversations as seedConversations, type Conversation, type ChatMessage } from '../data/mock'

interface ChatState {
  conversations: Conversation[]
  getConversation: (id: string) => Conversation | undefined
  sendMessage: (conversationId: string, message: Omit<ChatMessage, 'id'>) => void
}

export const useChatStore = create<ChatState>()((set, get) => ({
  conversations: seedConversations,

  getConversation: (id) => get().conversations.find((c) => c.id === id),

  sendMessage: (conversationId, message) =>
    set((state) => ({
      conversations: state.conversations.map((conv) => {
        if (conv.id !== conversationId) return conv
        const newMsg: ChatMessage = { ...message, id: `msg-${Date.now()}` }
        return {
          ...conv,
          messages: [...conv.messages, newMsg],
          lastMessage: message.text,
          lastTime: new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' }),
        }
      }),
    })),
}))
