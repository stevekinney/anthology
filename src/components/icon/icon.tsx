import {
  type LucideIcon,
  AlertTriangle,
  Check,
  HelpCircle,
  Info,
  X,
  Zap,
  ChevronDown,
  Skull,
  Star,
  ExternalLink,
  Heart,
} from 'lucide-react';
import { ComponentProps } from 'react';

export type IconProps = ComponentProps<LucideIcon> & {
  type:
    | 'warning'
    | 'check'
    | 'help'
    | 'info'
    | 'x'
    | 'zap'
    | 'chevron'
    | 'skull'
    | 'star'
    | 'external'
    | 'heart';
};

const iconComponents: Record<IconProps['type'], LucideIcon> = {
  warning: AlertTriangle,
  check: Check,
  help: HelpCircle,
  info: Info,
  x: X,
  zap: Zap,
  chevron: ChevronDown,
  skull: Skull,
  star: Star,
  external: ExternalLink,
  heart: Heart,
};

export const Icon = ({ type, ...props }: IconProps) => {
  const IconComponent = iconComponents[type];
  return <IconComponent {...props} />;
};

export const icons = Object.keys(iconComponents) as IconProps['type'][];
