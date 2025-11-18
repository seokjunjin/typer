import { useState } from 'react'
import TypingArea from './components/TypingArea'
import Stats from './components/Stats'

function App() {
  const [wpm, setWpm] = useState(0)
  const [accuracy, setAccuracy] = useState(100)
  const [timeElapsed, setTimeElapsed] = useState(0)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            Typer
          </h1>
          <p className="text-gray-400">타이핑 실력을 향상시켜보세요</p>
        </header>

        <Stats 
          wpm={wpm} 
          accuracy={accuracy} 
          timeElapsed={timeElapsed} 
        />
        
        <TypingArea 
          onStatsUpdate={(newWpm, newAccuracy, newTime) => {
            setWpm(newWpm)
            setAccuracy(newAccuracy)
            setTimeElapsed(newTime)
          }}
        />
      </div>
    </div>
  )
}

export default App
