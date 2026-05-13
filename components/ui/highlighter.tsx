"use client"

import { useLayoutEffect, useRef, useState, useEffect } from "react"
import type React from "react"
import { useInView } from "motion/react"
import { annotate } from "rough-notation"
import { type RoughAnnotation } from "rough-notation/lib/model"

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket"

interface HighlighterProps {
  children: React.ReactNode
  action?: AnnotationAction
  color?: string
  strokeWidth?: number
  animationDuration?: number
  iterations?: number
  padding?: number
  multiline?: boolean
  isView?: boolean
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = false,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null)
  const [isReady, setIsReady] = useState(false)

  const isInView = useInView(elementRef, {
    once: true,
    margin: "0px",
  })

  const shouldShow = !isView || isInView

  // Wait for fonts to load to ensure correct dimensions
  useEffect(() => {
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => setIsReady(true))
    } else {
      // Fallback: small delay if FontFaceSet API not supported
      const timer = setTimeout(() => setIsReady(true), 100)
      return () => clearTimeout(timer)
    }
  }, [])

  useLayoutEffect(() => {
    const element = elementRef.current
    let annotation: RoughAnnotation | null = null
    let resizeObserver: ResizeObserver | null = null
    let animationFrame: number

    if (shouldShow && isReady && element) {
      // Use requestAnimationFrame to ensure paint has occurred
      animationFrame = requestAnimationFrame(() => {
        const annotationConfig = {
          type: action,
          color,
          strokeWidth,
          animationDuration,
          iterations,
          padding,
          multiline,
        }

        const currentAnnotation = annotate(element, annotationConfig)
        annotation = currentAnnotation
        currentAnnotation.show()

        // Debounced resize handler - only observe the element itself
        let resizeTimeout: NodeJS.Timeout
        const handleResize = () => {
          clearTimeout(resizeTimeout)
          resizeTimeout = setTimeout(() => {
            currentAnnotation.hide()
            currentAnnotation.show()
          }, 100)
        }

        resizeObserver = new ResizeObserver(handleResize)
        resizeObserver.observe(element)
      })
    }

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
      annotation?.remove()
      resizeObserver?.disconnect()
    }
  }, [
    shouldShow,
    isReady,
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
  ])

  return (
    <span
      ref={elementRef}
      className="relative inline-block bg-transparent isolation-isolate"
      style={{ position: 'relative', isolation: 'isolate' }}
    >
      {children}
    </span>
  )
}