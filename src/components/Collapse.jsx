import { useState } from 'react'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`collapse ${isOpen ? 'collapse--open' : ''}`}>
      <button className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <span className="collapse__title">{title}</span>
        <span className="collapse__arrow">&#8964;</span>
      </button>

      <div className="collapse__body">
        {content}
      </div>
    </div>
  )
}

export default Collapse