"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes"

// Définition des attributs spécifiques au thème underground
const UNDERGROUND_ATTRIBUTES = {
  // Effets visuels pour le thème underground
  'data-underground': 'true',
  'data-vinyl-texture': 'enabled',
  'data-studio-mode': 'enabled',
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Référence pour accéder au document
  const documentRef = React.useRef<Document | null>(null)
  
  // État pour suivre si l'audio est en lecture (simulation)
  const [isPlaying, setIsPlaying] = React.useState(false)
  
  // Effet pour appliquer les attributs underground au body
  React.useEffect(() => {
    // Accéder au document seulement côté client
    documentRef.current = window.document
    
    // Appliquer les attributs underground au body
    if (documentRef.current) {
      Object.entries(UNDERGROUND_ATTRIBUTES).forEach(([key, value]) => {
        documentRef.current!.body.setAttribute(key, value)
      })
      
      // Ajouter une classe pour le fond sombre par défaut
      documentRef.current.body.classList.add('dark')
      
      // Simuler un état de lecture audio après un délai
      const timer = setTimeout(() => {
        setIsPlaying(true)
        documentRef.current!.body.setAttribute('data-audio-playing', 'true')
      }, 2000)
      
      return () => {
        clearTimeout(timer)
        if (documentRef.current) {
          Object.keys(UNDERGROUND_ATTRIBUTES).forEach((key) => {
            documentRef.current!.body.removeAttribute(key)
          })
          documentRef.current.body.removeAttribute('data-audio-playing')
        }
      }
    }
  }, [])
  
  // Effet pour simuler des changements de VU-mètre
  React.useEffect(() => {
    if (!isPlaying || !documentRef.current) return
    
    // Simuler des changements de niveau audio pour les VU-mètres
    const vuMeterInterval = setInterval(() => {
      const level = Math.floor(30 + Math.random() * 60) // Niveau entre 30% et 90%
      documentRef.current!.body.style.setProperty('--audio-level', `${level}%`)
    }, 100)
    
    return () => {
      clearInterval(vuMeterInterval)
    }
  }, [isPlaying])
  
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="dark" 
      enableSystem={false}
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}