import React from 'react'

import './styles.css'

export default function Card({ children }) {
  return <div className="card">
    {
      children
    }
  </div>
}