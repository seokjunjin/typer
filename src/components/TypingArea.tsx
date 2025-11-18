import React, { useState, useEffect, useRef } from 'react'
import { sampleTexts } from '../utils/sampleTexts'

interface TypingAreaProps {
  onStatsUpdate: (wpm: number, accuracy: number, time: number) => void
}

const TypingArea: React.FC<TypingAreaProps> = ({ onStatsUpdate }) => {
  const [targetText, setTargetText] = useState('')
  const [userInput, setUserInput] = useState('')
  const [startTime, setStartTime] = useState<number | null>(null)
  const [isActive, setIsActive] = useState(false)
  const [errors, setErrors] = useState(0)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    // 랜덤 텍스트 선택
    const randomText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)]
    setTargetText(randomText)
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive && startTime) {
      interval = setInterval(() => {
        const timeElapsed = Math.floor((Date.now() - startTime) / 1000)
        const wordsTyped = userInput.trim().split(/\s+/).length
        const wpm = Math.round((wordsTyped / timeElapsed) * 60) || 0
        const accuracy = Math.round(
          ((userInput.length - errors) / userInput.length) * 100
        ) || 100
        
        onStatsUpdate(wpm, accuracy, timeElapsed)
      }, 100)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, startTime, userInput, errors, onStatsUpdate])

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value

    if (!isActive && value.length > 0) {
      setIsActive(true)
      setStartTime(Date.now())
    }

    setUserInput(value)

    // 에러 카운트
    let errorCount = 0
    for (let i = 0; i < value.length; i++) {
      if (value[i] !== targetText[i]) {
        errorCount++
      }
    }
    setErrors(errorCount)

    // 완료 체크
    if (value === targetText) {
      setIsActive(false)
      alert('완료! 잘하셨습니다! 🎉')
    }
  }

  const handleReset = () => {
    setUserInput('')
    setStartTime(null)
    setIsActive(false)
    setErrors(0)
    const randomText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)]
    setTargetText(randomText)
    onStatsUpdate(0, 100, 0)
    inputRef.current?.focus()
  }

  const renderText = () => {
    return targetText.split('').map((char, index) => {
      let className = 'text-gray-500'
      
      if (index < userInput.length) {
        className = userInput[index] === char 
          ? 'text-green-400' 
          : 'text-red-400 bg-red-900/30'
      } else if (index === userInput.length) {
        className = 'text-gray-300 border-b-2 border-blue-400'
      }

      return (
        <span key={index} className={className}>
          {char}
        </span>
      )
    })
  }

  return (
    <div className="bg-gray-800 rounded-lg p-8">
      <div className="mb-6 p-6 bg-gray-900 rounded-lg font-mono text-lg leading-relaxed">
        {renderText()}
      </div>

      <textarea
        ref={inputRef}
        value={userInput}
        onChange={handleInputChange}
        className="w-full h-32 p-4 bg-gray-900 text-white rounded-lg font-mono text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        placeholder="여기에 입력하세요..."
        autoFocus
      />

      <div className="mt-4 flex justify-center">
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
        >
          새로운 텍스트로 다시 시작
        </button>
      </div>
    </div>
  )
}

export default TypingArea
