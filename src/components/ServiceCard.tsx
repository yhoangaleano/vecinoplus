import { useNavigate } from 'react-router-dom'
import type { Service } from '../data/mock'
import { IconStar } from '../components/icons'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const navigate = useNavigate()
  const variantClass = service.variant === 'primary' ? '' : service.variant

  return (
    <button className="service-card" onClick={() => navigate(`/servicio/${service.id}`)}>
      <div className={`service-img ${variantClass}`}>{service.initial}</div>
      <div className="service-info">
        <div className="service-title">{service.title}</div>
        <div className="service-by">
          por <strong>{service.providerName} · {service.providerTower} · {service.providerApt}</strong>
        </div>
        <div className="service-meta">
          <span className={`service-tag ${service.proximity === 'tower' ? 'tag-tower' : 'tag-near'}`}>
            {service.proximityLabel}
          </span>
          <span className="service-rating">
            <IconStar />
            {service.rating}
          </span>
          <span className="service-price">{service.price}</span>
        </div>
      </div>
    </button>
  )
}
