
import { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Pen,
  Code,
  FlaskConical,
  Users,
  GraduationCap,
  Hammer,
  Gavel,
  ChartBar,
  ChartLine,
  Book,
  Lightbulb,
  Handshake,
  Heart,
  Hospital,
  Computer,
  Pencil,
  Video,
  Calculator,
  PiggyBank,
  Agriculture
} from "lucide-react";

// Map of interest names to their respective Lucide icons
const iconMap: Record<string, LucideIcon> = {
  "Seni": Pencil,
  "Teknologi": Computer,
  "Sains": FlaskConical,
  "Sosial": Users,
  "Bisnis": Briefcase,
  "Pendidikan": GraduationCap,
  "Olahraga": Heart,
  "Kesehatan": Hospital,
  "Hukum": Gavel,
  "Teknik": Hammer,
  "Kreatif": Lightbulb,
  "Keuangan": PiggyBank,
  "Pertanian": Agriculture,
  // Fallback icon
  "default": Book
};

interface IconComponentProps {
  name: string;
  size?: number;
  className?: string;
}

const IconComponent = ({ name, size = 24, className = "" }: IconComponentProps) => {
  // Get the icon from the map, or use the default if not found
  const IconToRender = iconMap[name] || iconMap.default;
  
  return <IconToRender size={size} className={className} />;
};

export default IconComponent;
