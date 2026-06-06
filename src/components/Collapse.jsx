import { useState } from 'react'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`collapse ${isOpen ? 'collapse--open' : ''}`}>
      <button className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <span className="collapse__title">{title}</span>
        {/* 🎯 TUTEUR : Remplacement du caractère par une vraie icône SVG clean */}
        <svg 
          className="collapse__arrow" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M19 9L12 16L5 9" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="collapse__body">
        {/* 🛡️ Si le contenu est une liste (ex: équipements), elle héritera des styles Sass */}
        <div className="collapse__content">
          {content}
        </div>
      </div>
    </div>
  )
}

export default Collapse