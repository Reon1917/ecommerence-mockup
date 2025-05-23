/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			// Monochromatic Elegance & Metallic Touch Palette
  			'charcoal': {
  				50: '#F5F5F5',   // Soft Off-White
  				100: '#E8E8E8',  // Pale Silver
  				200: '#D1D1D1',  // Light Grey
  				300: '#B8B8B8',  // Medium Light Grey
  				400: '#7A7A7A',  // Medium Grey
  				500: '#5A5A5A',  // Dark Medium Grey
  				600: '#404040',  // Medium Dark Grey
  				700: '#2B2B2B',  // Dark Charcoal
  				800: '#1F1F1F',  // Deep Charcoal
  				900: '#171717',  // Deepest Charcoal
  			},
  			'gold': {
  				50: '#FDF9F0',   // Lightest Gold Tint
  				100: '#F9EFD9',  // Light Gold Tint
  				200: '#E8D4A3',  // Soft Gold
  				300: '#D9C276',  // Medium Light Gold
  				400: '#C9AE5D',  // Warm Bronze
  				500: '#B08D57',  // Brushed Gold
  				600: '#9A7A4A',  // Deep Gold
  				700: '#7D633A',  // Dark Gold
  				800: '#5F4D2D',  // Darker Gold
  				900: '#4A3A22',  // Darkest Gold
  			},
  			'metallic': {
  				silver: '#C0C0C0',
  				chrome: '#E5E5E5',
  				platinum: '#E8E8E8',
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		// Custom gradients for metallic effects
  		backgroundImage: {
  			'gradient-gold': 'linear-gradient(135deg, #B08D57 0%, #C9AE5D 50%, #B08D57 100%)',
  			'gradient-charcoal': 'linear-gradient(135deg, #1F1F1F 0%, #2B2B2B 50%, #1F1F1F 100%)',
  			'gradient-silver': 'linear-gradient(135deg, #D1D1D1 0%, #F5F5F5 50%, #E8E8E8 100%)',
  			'gradient-gold-radial': 'radial-gradient(ellipse at center, #C9AE5D 0%, #B08D57 70%)',
  			'gradient-charcoal-radial': 'radial-gradient(ellipse at center, #2B2B2B 0%, #1F1F1F 70%)',
  		},
  		// Enhanced shadows for premium feel
  		boxShadow: {
  			'gold': '0 4px 14px 0 rgba(176, 141, 87, 0.15)',
  			'gold-lg': '0 10px 30px 0 rgba(176, 141, 87, 0.2)',
  			'charcoal': '0 4px 14px 0 rgba(31, 31, 31, 0.1)',
  			'charcoal-lg': '0 10px 30px 0 rgba(31, 31, 31, 0.15)',
  			'metallic': '0 8px 25px 0 rgba(192, 192, 192, 0.1)',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
