import {
  Book,
  Flame,
  GraduationCap,
  Infinity,
  Lightbulb,
  Mountain,
  Eye,
  Code,
  Scale,
  Award,
  Cpu,
  Headphones
} from "lucide-react";

export const Icons = {
  "book": Book,
  "flame": Flame,
  "graduation-cap": GraduationCap,
  "infinity": Infinity,
  "lightbulb": Lightbulb,
  "mountain": Mountain,
  "eye": Eye,
  "code": Code,
  "balance": Scale,
  "award": Award,
  "cpu": Cpu,
  "headphones": Headphones
} as const;

export type Icon = keyof typeof Icons; 