export interface Service {
  id: string
  title: string
  providerName: string
  providerTower: string
  providerApt: string
  initial: string
  variant: 'primary' | 'variant-2' | 'variant-3'
  rating: number
  reviewCount: number
  price: string
  proximity: 'tower' | 'near'
  proximityLabel: string
  category: 'food' | 'pets' | 'home' | 'education'
  description: string
}

export interface Group {
  id: string
  name: string
  members: number
  schedule: string
  iconColor: 'indigo' | 'lime' | 'coral'
  iconType: 'running' | 'cycling' | 'family'
}

export const services: Service[] = [
  {
    id: 'almuerzos-carolina',
    title: 'Almuerzos caseros',
    providerName: 'Carolina',
    providerTower: 'Torre 3',
    providerApt: '502',
    initial: 'A',
    variant: 'primary',
    rating: 4.9,
    reviewCount: 47,
    price: '$18.000',
    proximity: 'tower',
    proximityLabel: 'Tu torre',
    category: 'food',
    description:
      'Almuerzos balanceados de tradición paisa, preparados cada mañana en mi cocina. Entrega entre 12:00 y 1:30 PM.'
  },
  {
    id: 'paseos-andres',
    title: 'Paseos caninos',
    providerName: 'Andrés',
    providerTower: 'Torre 3',
    providerApt: '1004',
    initial: 'P',
    variant: 'variant-3',
    rating: 5.0,
    reviewCount: 23,
    price: '$25.000',
    proximity: 'tower',
    proximityLabel: 'Tu torre',
    category: 'pets',
    description: 'Paseos diarios para tu mejor amigo. Rutas seguras y atención personalizada.'
  },
  {
    id: 'reparacion-mauricio',
    title: 'Reparación de electrodomésticos',
    providerName: 'Mauricio',
    providerTower: 'Torre 5',
    providerApt: '304',
    initial: 'R',
    variant: 'variant-2',
    rating: 4.7,
    reviewCount: 31,
    price: 'desde $40k',
    proximity: 'near',
    proximityLabel: 'A 200m',
    category: 'home',
    description: '15 años reparando neveras, lavadoras y aires acondicionados. Garantía de 30 días.'
  }
]

export const groups: Group[] = [
  {
    id: 'runners',
    name: 'Runners de Sabaneta',
    members: 42,
    schedule: 'Sábados 6 AM',
    iconColor: 'coral',
    iconType: 'running'
  },
  {
    id: 'bicicleteros',
    name: 'Bicicleteros del conjunto',
    members: 28,
    schedule: 'Rodadas dominicales',
    iconColor: 'indigo',
    iconType: 'cycling'
  },
  {
    id: 'padres',
    name: 'Padres y madres',
    members: 67,
    schedule: 'Apoyo y crianza',
    iconColor: 'lime',
    iconType: 'family'
  }
]

export const currentUser = {
  name: 'Carolina González',
  initial: 'C',
  conjunto: 'Reservas de Sabaneta',
  tower: 'Torre 3',
  rating: 4.9,
  orderCount: 47,
  serviceCount: 3
}

export interface ChatMessage {
  id: string
  senderId: string
  text: string
  timestamp: string
}

export interface Conversation {
  id: string
  participantName: string
  participantInitial: string
  participantVariant: 'primary' | 'variant-2' | 'variant-3'
  lastMessage: string
  lastTime: string
  unread: number
  messages: ChatMessage[]
}

export const conversations: Conversation[] = [
  {
    id: 'conv-carolina',
    participantName: 'Carolina',
    participantInitial: 'C',
    participantVariant: 'primary',
    lastMessage: '¿A qué hora puedes entregar?',
    lastTime: '12:30 PM',
    unread: 2,
    messages: [
      { id: 'm1', senderId: 'other', text: '¡Hola! ¿Tienes almuerzo disponible hoy?', timestamp: '12:15 PM' },
      { id: 'm2', senderId: 'me', text: '¡Hola Carolina! Sí, tengo bandeja paisa y pollo guisado', timestamp: '12:18 PM' },
      { id: 'm3', senderId: 'other', text: '¿A qué hora puedes entregar?', timestamp: '12:30 PM' },
    ],
  },
  {
    id: 'conv-andres',
    participantName: 'Andrés',
    participantInitial: 'A',
    participantVariant: 'variant-3',
    lastMessage: 'Perfecto, nos vemos a las 4 🐕',
    lastTime: '10:45 AM',
    unread: 0,
    messages: [
      { id: 'm4', senderId: 'me', text: 'Hola Andrés, ¿puedes pasear a Max hoy?', timestamp: '10:30 AM' },
      { id: 'm5', senderId: 'other', text: '¡Claro! ¿A las 4 PM te queda?', timestamp: '10:35 AM' },
      { id: 'm6', senderId: 'me', text: 'Perfecto, nos vemos a las 4 🐕', timestamp: '10:45 AM' },
    ],
  },
  {
    id: 'conv-mauricio',
    participantName: 'Mauricio',
    participantInitial: 'M',
    participantVariant: 'variant-2',
    lastMessage: 'La nevera hace un ruido raro',
    lastTime: 'Ayer',
    unread: 1,
    messages: [
      { id: 'm7', senderId: 'other', text: 'Hola, vi que reparas electrodomésticos', timestamp: 'Ayer' },
      { id: 'm8', senderId: 'me', text: 'Sí, cuéntame ¿qué necesitas?', timestamp: 'Ayer' },
      { id: 'm9', senderId: 'other', text: 'La nevera hace un ruido raro', timestamp: 'Ayer' },
    ],
  },
]
