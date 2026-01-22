'use client';

import {
  Button,
  Card,
  createTheme,
  Input,
  List,
  rem,
  Switch,
  Tabs,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import classes from '@/styles/theme.module.scss';
import { Poppins } from 'next/font/google';

export const font = Poppins({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const theme = createTheme({
  fontFamily: font.style.fontFamily,
  primaryColor: 'yellow',
  primaryShade: 5,
  autoContrast: false,
  defaultRadius: 'sm',
  cursorType: 'default',
  activeClassName: 'active',
  // focusClassName: string;

  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
  },

  white: '#FFFFFF',
  black: '#000000',

  colors: {
    yellow: [
      '#FFF8E1',
      '#FFF3C4',
      '#FFE082',
      '#FFD54F',
      '#FFCA28',
      '#F2AE1C',
      '#F2AE1C',
      '#F2AE1C',
      '#F2AE1C',
      '#F2AE1C',
      '#F2AE1C99',
    ],
    blue: [
      '#F1F2F3',
      '#DCE5F1',
      '#CAD8EB',
      '#B4C9E4',
      '#A0BADC',
      '#5E85BC',
      '#5E85BC',
      '#5E85BC',
      '#05046A',
      '#141040',
      '#5E85BC26',
      '#5E85BC14',
    ],
    red: [
      '#FDE6E7',
      '#FACDD0',
      '#F6A3A9',
      '#F27A81',
      '#EF5058',
      '#F27781',
      '#F27781',
      '#F27781',
      '#F27781',
      '#CE0F0F',
    ],
    green: [
      '#EDF6F0',
      '#DAECDC',
      '#B6D9BA',
      '#91C7A0',
      '#6DB485',
      '#97C99C',
      '#25D536',
      '#97C99C',
      '#97C99C',
      '#97C99C',
      '#97C99C1A',
      '#97C99C4D',
    ],
    gray: [
      '#FFFFFF',
      '#F1F2F3',
      '#F1F2F3',
      '#DDDDDD',
      '#B6B6B6',
      '#646466',
      '#6E6E6E',
      '#545454',
      '#3A3A3A',
      '#000000',
      '#00000066',
      '#FBFBFB',
      '#E7E7E7',
    ],
    // Semantic aliases
    success: [
      '#97C99C',
      '#97C99C',
      '#97C99C',
      '#97C99C',
      '#97C99C',
      '#97C99C',
      '#97C99C',
      '#97C99C',
      '#97C99C',
      '#97C99C',
    ],
    warning: [
      '#F27781',
      '#F27781',
      '#F27781',
      '#F27781',
      '#F27781',
      '#F27781',
      '#F27781',
      '#F27781',
      '#F27781',
      '#F2778133',
    ],
    info: [
      '#5E85BC',
      '#5E85BC',
      '#5E85BC',
      '#5E85BC',
      '#5E85BC',
      '#5E85BC',
      '#5E85BC',
      '#5E85BC',
      '#5E85BC',
      '#5E85BC',
    ],
    danger: [
      '#F27781',
      '#F27781',
      '#F27781',
      '#F27781',
      '#F27781',
      '#F27781',
      '#F27781',
      '#F27781',
      '#F27781',
      '#F27781',
    ],
    // External Brand Colours
    'whatsapp-green': [
      '#25D366',
      '#25D366',
      '#25D366',
      '#25D366',
      '#25D366',
      '#25D366',
      '#25D366',
      '#25D366',
      '#25D366',
      '#25D366',
      '#25D366',
    ],
    // legacy colors
    brown: [
      '#FFF5F5',
      '#CD7F32',
      '#CD7F32',
      '#CD7F32',
      '#CD7F32',
      '#CD7F32',
      '#CD7F32',
      '#CD7F32',
      '#380103',
      '#3E00011A',
    ],
    violet: [
      '#8787AF',
      '#9DB5FF80',
      '#8787AF',
      '#8787AF',
      '#8787AF',
      '#8787AF',
      '#8787AF',
      '#8787AF',
      '#8787AF',
      '#5D5D9F',
    ],
  },

  headings: {
    fontFamily: font.style.fontFamily,
    fontWeight: '600',
    textWrap: 'wrap',
    sizes: {
      h1: { fontWeight: '600', fontSize: rem(32) },
      h2: { fontWeight: '600', fontSize: rem(24) },
      h3: { fontWeight: '500', fontSize: rem(20) },
      h4: { fontWeight: '500', fontSize: rem(16) },
      h5: { fontWeight: '500', fontSize: rem(14) },
      h6: { fontWeight: '500', fontSize: rem(12) },
    },
  },

  radius: {
    xs: rem(4),
    sm: rem(8),
    md: rem(12),
    lg: rem(16),
    xl: rem(20),
    xxl: rem(24),
    '3xl': rem(32),
    '4xl': rem(64),
  },

  spacing: {
    xs: rem(4),
    sm: rem(8),
    md: rem(12),
    lg: rem(16),
    xl: rem(24),
    xxl: rem(32),
    '3xl': rem(58),
    '4xl': rem(64),
  },

  fontSizes: {
    xs: rem(10),
    sm: rem(12),
    md: rem(14),
    lg: rem(18),
    xl: rem(26),
    xxl: rem(36),
    '3xl': rem(48),
    '4xl': rem(64),
  },

  shadows: {
    sm: `0 ${rem(4)} ${rem(44)} 0 rgba(0, 0, 0, 0.05)`,
    md: `0 ${rem(8)} ${rem(40)} 0 rgba(0, 0, 0, 0.15)`,
    lg: `0 ${rem(12)} ${rem(40)} 0 rgba(0, 0, 0, 0.20)`,
  },

  components: {
    Title: Title.extend({
      defaultProps: {
        c: 'blue.8',
        lts: '-0.05em',
      },
    }),
    Text: Text.extend({
      defaultProps: {
        c: 'gray.5',
        fw: 400,
        lts: '-0.025em',
      },
    }),
    Button: Button.extend({
      classNames: {
        root: classes.button,
      },
      defaultProps: {
        color: 'yellow.5',
        c: 'white',
        fw: 500,
        radius: 'sm',
      },
    }),
    Card: Card.extend({
      defaultProps: {
        bg: 'white',
        radius: 'md',
        shadow: 'sm',
      },
    }),
    List: List.extend({
      defaultProps: {
        c: 'gray.5',
      },
    }),
    Tabs: Tabs.extend({
      defaultProps: {
        color: 'blue.5',
        radius: 'md',
      },
    }),
    Input: Input.extend({
      defaultProps: {
        radius: 'md',
      },
    }),
    Switch: Switch.extend({
      defaultProps: {
        color: 'yellow.5',
        radius: 'md',
      },
    }),
    Tooltip: Tooltip.extend({
      defaultProps: {
        color: 'blue.8',
        fz: 'sm',
        c: 'white',
      },
    }),
  },
});
