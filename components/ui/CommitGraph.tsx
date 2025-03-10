"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

type Commit = {
  date: string;
  count: number;
  message?: string;
};

type CommitGraphProps = {
  className?: string;
  title?: string;
  subtitle?: string;
};

export function CommitGraph({
  className = "",
  title = "Activité GitHub",
  subtitle = "Contributions et commits sur les projets open source",
}: CommitGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Fonction pour générer des données de commit qui forment un texte
  const generateTextCommits = (text: string): Commit[] => {
    // Créer une grille de 7x52 (jours de la semaine x semaines)
    const grid: number[][] = Array(7).fill(0).map(() => Array(52).fill(0));
    
    // Définir le texte dans la grille avec des patterns pour chaque caractère
    const letters: Record<string, number[][]> = {
      'T': [
        [1,1,1,1,1],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0]
      ],
      'H': [
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,1,1,1,1],
        [1,0,0,0,1],
        [1,0,0,0,1]
      ],
      '1': [
        [0,0,1,0,0],
        [0,1,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,1,1,1,0]
      ],
      'B': [
        [1,1,1,0,0],
        [1,0,0,1,0],
        [1,1,1,0,0],
        [1,0,0,1,0],
        [1,1,1,0,0]
      ],
      '4': [
        [1,0,0,1,0],
        [1,0,0,1,0],
        [1,1,1,1,0],
        [0,0,0,1,0],
        [0,0,0,1,0]
      ],
      'U': [
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [0,1,1,1,0]
      ],
      'D': [
        [1,1,1,0,0],
        [1,0,0,1,0],
        [1,0,0,1,0],
        [1,0,0,1,0],
        [1,1,1,0,0]
      ],
      'E': [
        [1,1,1,1,0],
        [1,0,0,0,0],
        [1,1,1,0,0],
        [1,0,0,0,0],
        [1,1,1,1,0]
      ],
      'V': [
        [1,0,0,0,1],
        [1,0,0,0,1],
        [0,1,0,1,0],
        [0,1,0,1,0],
        [0,0,1,0,0]
      ]
    };
    
    // Calculer l'espacement pour répartir le texte sur toute la largeur
    const totalCharWidth = text.split('').reduce((sum, char) => {
      return sum + (letters[char] ? letters[char][0].length : 0);
    }, 0);
    
    const availableWidth = 52; // Largeur totale de la grille
    const totalGaps = text.length - 1;
    
    // Calculer l'espacement entre les caractères
    let spacing = 1; // Espacement minimum
    if (totalCharWidth + totalGaps < availableWidth) {
      // Si on a de la place, on répartit les caractères
      spacing = Math.floor((availableWidth - totalCharWidth) / totalGaps);
    }
    
    // Positionner les lettres dans la grille avec l'espacement calculé
    let offsetX = 1; // Commencer avec un petit décalage
    
    for (const char of text) {
      if (letters[char]) {
        const letterPattern = letters[char];
        for (let y = 0; y < letterPattern.length; y++) {
          for (let x = 0; x < letterPattern[0].length; x++) {
            if (y < 7 && offsetX + x < 52 && letterPattern[y][x] === 1) {
              // Varier l'intensité des commits pour un effet plus naturel
              grid[y][offsetX + x] = Math.floor(Math.random() * 4) + 1;
            }
          }
        }
        offsetX += letterPattern[0].length + spacing;
      }
    }
    
    // Convertir la grille en données de commit
    const commits: Commit[] = [];
    const today = new Date();
    
    for (let week = 0; week < 52; week++) {
      for (let day = 0; day < 7; day++) {
        const date = new Date(today);
        date.setDate(today.getDate() - ((51 - week) * 7 + (6 - day)));
        
        commits.push({
          date: date.toISOString().split('T')[0],
          count: grid[day][week],
          message: grid[day][week] > 0 ? "Commit #" + Math.floor(Math.random() * 1000) : undefined
        });
      }
    }
    
    return commits;
  };

  // Générer des données de commit qui forment "TH1B4UT"
  const textCommits = generateTextCommits("TH1B4UT");

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Effacer le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Définir les dimensions
    const cellSize = 12;
    const cellGap = 4;
    const totalSize = cellSize + cellGap;
    
    // Dessiner la grille de commits
    textCommits.forEach((commit, index) => {
      const week = Math.floor(index / 7);
      const day = index % 7;
      
      const x = week * totalSize;
      const y = day * totalSize;
      
      // Définir la couleur en fonction du nombre de commits
      let color = '#ebedf0';
      if (commit.count === 1) color = '#9be9a8';
      else if (commit.count === 2) color = '#40c463';
      else if (commit.count === 3) color = '#30a14e';
      else if (commit.count >= 4) color = '#216e39';
      
      // Dessiner le carré
      ctx.fillStyle = color;
      ctx.fillRect(x, y, cellSize, cellSize);
      
      // Ajouter un effet de bordure
      ctx.strokeStyle = 'rgba(27, 31, 35, 0.06)';
      ctx.strokeRect(x, y, cellSize, cellSize);
    });
  }, [textCommits]);

  return (
    <div className={`rounded-xl border bg-background p-6 ${className}`}>
      <div className="flex flex-col space-y-2 mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">
          {subtitle}
        </p>
      </div>
      
      <motion.div 
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <canvas 
          ref={canvasRef}
          width={52 * 16}
          height={7 * 16}
          className="w-full h-auto"
        />
        
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>1 an d&apos;activité</span>
          <div className="flex items-center gap-1">
            <span>Moins</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <span 
                key={level}
                className={`inline-block w-3 h-3 ${
                  level === 0 ? 'bg-[#ebedf0]' :
                  level === 1 ? 'bg-[#9be9a8]' :
                  level === 2 ? 'bg-[#40c463]' :
                  level === 3 ? 'bg-[#30a14e]' : 'bg-[#216e39]'
                } border border-[rgba(27,31,35,0.06)]`}
              />
            ))}
            <span>Plus</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 