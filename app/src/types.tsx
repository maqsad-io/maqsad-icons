import { forwardRef, type SVGProps, type Ref } from 'react';

/**
 * Default colors for icons
 */
export const DEFAULT_COLORS = {
  /** Default stroke color for system icons */
  systemStroke: '#646466',
  /** Default fill color for system icons (none = transparent) */
  // systemFill: '#F2AE1C',
  systemFill: 'none',
  /** Default primary color for filled illustration variants */
  illustrationPrimary: '#3B82F6',
  /** Default accent color for filled illustration variants */
  illustrationAccent: '#F59E0B',
} as const;

/**
 * Props for system icons
 */
export interface SystemIconProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
  /**
   * Icon size in pixels
   * @default 24
   */
  size?: number;
  /**
   * Icon color - defaults to currentColor (applies to both stroke and fill)
   * @deprecated Use `stroke` or `fill` props instead for more control
   */
  color?: string;
  /**
   * Stroke color for the icon
   */
  stroke?: string;
  /**
   * Fill color for the icon
   */
  fill?: string;
  /**
   * Stroke width for the icon
   * @default 2
   */
  strokeWidth?: number;
}

/**
 * Available variants for illustration icons
 */
export type IllustrationVariant = 'primary' | 'secondary' | 'filled' | 'dark' | 'light';

/**
 * Props for illustration icons
 */
export interface IllustrationIconProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
  /**
   * Illustration variant style
   * @default 'primary'
   */
  variant?: IllustrationVariant;
  /**
   * Icon size in pixels (width)
   * @default 48
   */
  size?: number;
  /**
   * Primary color for filled variant
   */
  primaryColor?: string;
  /**
   * Accent color for filled variant
   */
  accentColor?: string;
}

/**
 * Color definitions for filled variant
 */
export interface FilledColors {
  primary: string;
  accent: string;
}

/**
 * Creates a system icon component
 */
export function createSystemIcon(
  displayName: string,
  path: React.ReactNode,
  svgStyle: React.CSSProperties | null = null
) {
  const Icon = forwardRef<SVGSVGElement, SystemIconProps>(
    (
      {
        size = 24,
        color,
        stroke,
        fill,
        strokeWidth = 2,
        className,
        style,
        ...props
      },
      ref: Ref<SVGSVGElement>
    ) => {
      // stroke prop takes precedence, then color, then default
      const strokeColor = stroke ?? color ?? DEFAULT_COLORS.systemStroke;
      // fill prop takes precedence, then default
      const fillColor = fill ?? DEFAULT_COLORS.systemFill;

      return (
        <svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          style={{ ...svgStyle, ...style }}
          {...props}
        >
          {path}
        </svg>
      );
    }
  );

  Icon.displayName = displayName;
  return Icon;
}

/**
 * Creates an illustration icon component with variant support
 */
export function createIllustrationIcon(
  displayName: string,
  variants: {
    primary: React.ReactNode;
    secondary: React.ReactNode;
    dark: React.ReactNode;
    light: React.ReactNode;
    filled: (colors: FilledColors) => React.ReactNode;
  },
  viewBox: string = '0 0 48 48',
  svgStyle: React.CSSProperties | null = null
) {
  const Icon = forwardRef<SVGSVGElement, IllustrationIconProps>(
    (
      {
        variant = 'primary',
        size = 48,
        primaryColor = DEFAULT_COLORS.illustrationPrimary,
        accentColor = DEFAULT_COLORS.illustrationAccent,
        className,
        style,
        ...props
      },
      ref: Ref<SVGSVGElement>
    ) => {
      const getContent = () => {
        switch (variant) {
          case 'primary':
            return variants.primary;
          case 'secondary':
            return variants.secondary;
          case 'dark':
            return variants.dark;
          case 'light':
            return variants.light;
          case 'filled':
            return variants.filled({ primary: primaryColor, accent: accentColor });
          default:
            return variants.primary;
        }
      };

      // Parse viewBox to get aspect ratio
      const [, , vbWidth, vbHeight] = viewBox.split(' ').map(Number);
      const aspectRatio = vbWidth / vbHeight;
      const height = size / aspectRatio;

      return (
        <svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={height}
          viewBox={viewBox}
          className={className}
          style={{ ...svgStyle, ...style }}
          {...props}
        >
          {getContent()}
        </svg>
      );
    }
  );

  Icon.displayName = displayName;
  return Icon;
}

/**
 * Default color palettes for illustration variants
 */
export const ILLUSTRATION_COLORS = {
  primary: {
    main: '#4A7FD4',      // Blue
    light: '#7BA3E3',
    dark: '#2D5AA8',
    accent: '#F5D76E',    // Gold/Yellow bookmark
  },
  secondary: {
    main: '#C4846C',      // Brown/Pink
    light: '#E6B5A2',
    dark: '#8B5A47',
    accent: '#F5D76E',    // Gold/Yellow bookmark
  },
  dark: {
    main: '#4A4A4A',      // Dark gray
    light: '#6B6B6B',
    dark: '#2D2D2D',
    accent: '#5A5A5A',
  },
  light: {
    main: '#FFFFFF',      // White
    light: '#F5F5F5',
    dark: '#E0E0E0',
    accent: '#CCCCCC',
  },
} as const;
