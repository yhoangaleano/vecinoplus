import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { PhoneShellWithNav } from '../components/PhoneShell'
import { BottomNav } from '../components/BottomNav'
import { useChatStore } from '../stores'
import { IconSearch } from '../components/icons'

export function MessagesScreen() {
  const navigate = useNavigate()
  const conversations = useChatStore((s) => s.conversations)
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    if (!search.trim()) return conversations
    const q = search.toLowerCase()
    return conversations.filter((c) =>
      c.participantName.toLowerCase().includes(q) ||
      c.lastMessage.toLowerCase().includes(q),
    )
  }, [conversations, search])

  return (
    <PhoneShellWithNav bottomNav={<BottomNav activeKey="msg" />}>
      <div className="msgs-wrap">
        <div className="msgs-header">
          <h2 className="msgs-title">Mensajes</h2>
          <div className="msgs-search">
            <IconSearch />
            <input
              className="msgs-search-input"
              placeholder="Buscar conversación..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="msgs-list">
          {filtered.map((conv) => (
            <button
              key={conv.id}
              className="msg-card"
              onClick={() => navigate(`/chat/${conv.id}`)}
            >
              <div className={`msg-avatar msg-avatar-${conv.participantVariant}`}>
                {conv.participantInitial}
              </div>
              <div className="msg-info">
                <div className="msg-info-top">
                  <span className="msg-name">{conv.participantName}</span>
                  <span className="msg-time">{conv.lastTime}</span>
                </div>
                <div className="msg-info-bottom">
                  <span className="msg-preview">{conv.lastMessage}</span>
                  {conv.unread > 0 && (
                    <span className="msg-badge">{conv.unread}</span>
                  )}
                </div>
              </div>
            </button>
          ))}
          {filtered.length === 0 && (
            <div className="msgs-empty">
              <p>No se encontraron conversaciones</p>
            </div>
          )}
        </div>
      </div>
    </PhoneShellWithNav>
  )
}
