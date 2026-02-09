import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/Title'

function App() {
  const titles = ["Kategorier", "Om oss", "Produkter"]

  return (
    <>
      {titles.map((item, i) => <Title key={i} title={item}/>)}
      {/* Title = component */}
      <h2>Jeg vet ikke hva jeg driver med</h2>
    </>
  )
}
export default App
