import { useState, useRef, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PhoneShell } from '../components/PhoneShell'
import { useChatStore } from '../stores'
import { IconBack, IconSend } from '../components/icons'

export function ChatScreen() {
  const navigate = useNavigate()
  const { id } = useParams()
  const conversations = useChatStore((s) => s.conversations)
  const sendMessage = useChatStore((s) => s.sendMessage)

  const conversationId = id ?? conversations[0]?.id ?? ''
  const conversation = useChatStore((s) => s.getConversation(conversationId))

  const [text, setText] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [conversation?.messages.length])

  if (!conversation) {
    return (
      <PhoneShell>
        <div className="chat-empty">
          <p>Conversación no encontrada</p>
          <button className="cta-btn" onClick={() => navigate('/mensajes')}>
            Volver a mensajes
          </button>
        </div>
      </PhoneShell>
    )
  }

  const handleSend = () => {
    if (!text.trim()) return
    sendMessage(conversation.id, {
      senderId: 'me',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' }),
    })
    setText('')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <PhoneShell>
      <div className="chat-wrap">
        <div className="chat-topbar">
          <button className="chat-back" onClick={() => navigate('/mensajes')}>
            <IconBack />
          </button>
          <div className="chat-contact">
            <div className={`chat-contact-avatar chat-contact-avatar-${conversation.participantVariant}`}>
              {conversation.participantInitial}
            </div>
            <div>
              <div className="chat-contact-name">{conversation.participantName}</div>
              <div className="chat-contact-status">En línea</div>
            </div>
          </div>
        </div>
        <div className="chat-messages">
          {conversation.messages.map((msg) => (
            <div
              key={msg.id}
              className={`chat-bubble ${msg.senderId === 'me' ? 'chat-bubble-me' : 'chat-bubble-other'}`}
            >
              <span>{msg.text}</span>
              <span className="chat-bubble-time">{msg.timestamp}</span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="chat-input-bar">
          <input
            className="chat-input"
            placeholder="Escribe un mensaje..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className={`chat-send-btn ${text.trim() ? 'active' : ''}`}
            onClick={handleSend}
            disabled={!text.trim()}
          >
            <IconSend />
          </button>
        </div>
      </div>
    </PhoneShell>
  )
}
