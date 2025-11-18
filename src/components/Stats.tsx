import React from 'react'

interface StatsProps {
  wpm: number
  accuracy: number
  timeElapsed: number
}

const Stats: React.FC<StatsProps> = ({ wpm, accuracy, timeElapsed }) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-gray-800 rounded-lg p-6 text-center">
        <div className="text-4xl font-bold text-blue-400 mb-2">{wpm}</div>
        <div className="text-gray-400 text-sm">WPM (단어/분)</div>
      </div>
      
      <div className="bg-gray-800 rounded-lg p-6 text-center">
        <div className="text-4xl font-bold text-green-400 mb-2">{accuracy}%</div>
        <div className="text-gray-400 text-sm">정확도</div>
      </div>
      
      <div className="bg-gray-800 rounded-lg p-6 text-center">
        <div className="text-4xl font-bold text-purple-400 mb-2">
          {formatTime(timeElapsed)}
        </div>
        <div className="text-gray-400 text-sm">경과 시간</div>
      </div>
    </div>
  )
}

export default Stats
