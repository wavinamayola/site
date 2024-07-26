'use client'

import React, { useState, useEffect, useRef } from 'react'

interface TypewriterProps {
  words?: string[]
  minTypeSpeed?: number
  maxTypeSpeed?: number
  initDelay?: number
}

const Typewriter: React.FC<TypewriterProps> = ({
  words = ["Bonjour!", "Hello!", "Hola!", "Ciao!", "こんにちは!", "안녕하세요!"],
  minTypeSpeed = 50,
  maxTypeSpeed = 90,
  initDelay = 700,
}) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const typewriterRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {

    const handleTyping = () => {
      const i = loopNum % words.length
      const fullText = words[i]

      if (isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length - 1))
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length + 1))
      }

      setTypingSpeed(isDeleting ? minTypeSpeed : maxTypeSpeed)

      if (!isDeleting && displayedText === fullText) {
        setIsDeleting(true)
        setTypingSpeed(1500)
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setTypingSpeed(500)
      }
    }

    const timeoutId = setTimeout(() => {
      handleTyping()
    }, typingSpeed)

    return () => clearTimeout(timeoutId)
  }, [displayedText, isDeleting, loopNum, typingSpeed, words, minTypeSpeed, maxTypeSpeed])

  useEffect(() => {
    const initialDelayTimeout = setTimeout(() => {
      setTypingSpeed(maxTypeSpeed)
    }, initDelay)

    return () => clearTimeout(initialDelayTimeout)
  }, [initDelay, maxTypeSpeed])

  return (
    <div className="w-full h-full">
      <h1 ref={typewriterRef} className="mb-8 text-3xl font-semibold tracking-tighter text-teal-500 dark:text-white">
        {displayedText}
        <span>&nbsp;</span>
      </h1>
    </div>
  )
}

export default Typewriter
