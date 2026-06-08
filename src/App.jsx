import { useState } from 'react'
import Header from './components/Header'; // Ajusta la ruta si no usaste la carpeta components
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import FloatingChatButton from './components/FloatingChatButton';
import { LanguageProvider } from './context/LanguageContext';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <LanguageProvider>
      <div id="home" className="min-h-screen bg-brand-dark flex flex-col">
        <Header />
        <main>
          <Hero />
          <Services />
          
        </main>
        <Footer />
        <FloatingChatButton />
      </div>
    </LanguageProvider>
  )
}

export default App
