'use client'
import React, { useRef, useEffect, useState } from 'react'
import Fade from '@mui/material/Fade'

function RevealOnAppear({ children, transitionDelay = '0ms' }) {
  const elementRef = useRef()
  const [reveal, setReveal] = useState(false)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4
    }

    const observer = new IntersectionObserver(handleIntersection, options)

    const currentElement = elementRef.current

    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [])

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setReveal(true)
      }
    })
  }

  return (
    <Fade
      ref={elementRef}
      in={reveal}
      style={{ transitionDelay: reveal ? transitionDelay : '0ms' }}
    >
      {children}
    </Fade>
  )
}

export default RevealOnAppear
