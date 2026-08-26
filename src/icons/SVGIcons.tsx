import React from 'react';

// Common icon properties
interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

// Logo SVG component - combining RMC truck logo on the left and text on the right
export const SwastikLogo: React.FC<IconProps> = ({ size = 220, className = "" }) => {
  return (
    <svg
      width={size}
      height={size * 0.35}
      viewBox="0 0 260 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Mini Logo Truck Mark (Left) */}
      <g transform="translate(5, 5)">
        {/* Chassis */}
        <rect x="5" y="48" width="55" height="4" fill="#0b132b" rx="1" />
        <rect x="8" y="52" width="10" height="8" fill="#1e293b" />
        <rect x="42" y="52" width="16" height="8" fill="#1e293b" />
        
        {/* Cabin */}
        <path d="M5 48 L5 34 Q5 26 15 26 L26 26 L26 48 Z" fill="#ffffff" stroke="#0b132b" strokeWidth="1.5" />
        <path d="M9 29 L21 29 L21 38 L7 38 Q7 31 9 29 Z" fill="#0f172a" opacity="0.8" />
        
        {/* Drum */}
        <path d="M28 42 C28 26, 38 20, 52 20 C62 20, 62 30, 62 42 C62 54, 52 54, 52 42 Z" fill="#ffffff" stroke="#0b132b" strokeWidth="1.5" />
        <path d="M29 42 Q39 25 50 25 Q55 25 61 42" stroke="#0056b3" strokeWidth="3" fill="none" />
        <path d="M29 42 Q39 59 50 59 Q55 59 61 42" stroke="#0b132b" strokeWidth="3" fill="none" />
        
        {/* Wheels */}
        <circle cx="15" cy="52" r="6" fill="#1e293b" stroke="#0b132b" strokeWidth="1.5" />
        <circle cx="15" cy="52" r="2" fill="#ffffff" />
        <circle cx="45" cy="52" r="6" fill="#1e293b" stroke="#0b132b" strokeWidth="1.5" />
        <circle cx="45" cy="52" r="2" fill="#ffffff" />
        <circle cx="53" cy="52" r="6" fill="#1e293b" stroke="#0b132b" strokeWidth="1.5" />
        <circle cx="53" cy="52" r="2" fill="#ffffff" />
      </g>

      {/* Brand Text Lockup (Right) */}
      <g transform="translate(75, 12)">
        {/* SWASTIK */}
        <text x="0" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="24" fill="#0b132b" letterSpacing="0.5">SWASTIK</text>
        
        {/* MIXTURES Badge */}
        <rect x="0" y="32" width="105" height="18" fill="#0056b3" rx="2" />
        <text x="52.5" y="45" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="12" fill="#ffffff" textAnchor="middle" letterSpacing="3">MIXTURES</text>
        
        {/* READY MIX CONCRETE tag */}
        <line x1="0" y1="56" x2="170" y2="56" stroke="#0b132b" strokeWidth="1.5" />
        <text x="0" y="68" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="9.5" fill="#64748b" letterSpacing="2">READY MIX CONCRETE</text>
      </g>
    </svg>
  );
};

// Beautiful Construction Site SVG Background
export const SVGHeroBackground: React.FC<IconProps> = ({ className = "" }) => {
  return (
    <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-auto opacity-15 pointer-events-none ${className}`}>
      {/* Ground lines */}
      <line x1="0" y1="450" x2="800" y2="450" stroke="#475569" strokeWidth="2" />
      
      {/* Tower Crane 1 (Left background) */}
      <g transform="translate(100, 80)">
        {/* Mast */}
        <line x1="40" y1="0" x2="40" y2="370" stroke="#475569" strokeWidth="3" strokeDasharray="3 3" />
        <line x1="48" y1="0" x2="48" y2="370" stroke="#475569" strokeWidth="3" strokeDasharray="3 3" />
        <line x1="40" y1="50" x2="48" y2="70" stroke="#475569" strokeWidth="1.5" />
        <line x1="48" y1="90" x2="40" y2="110" stroke="#475569" strokeWidth="1.5" />
        <line x1="40" y1="150" x2="48" y2="170" stroke="#475569" strokeWidth="1.5" />
        <line x1="48" y1="190" x2="40" y2="210" stroke="#475569" strokeWidth="1.5" />
        <line x1="40" y1="250" x2="48" y2="270" stroke="#475569" strokeWidth="1.5" />
        {/* Jib */}
        <line x1="-80" y1="0" x2="220" y2="0" stroke="#475569" strokeWidth="4" />
        {/* Counter Jib */}
        <line x1="-80" y1="20" x2="40" y2="0" stroke="#475569" strokeWidth="2" />
        {/* A-Frame */}
        <polygon points="30,0 44,-30 58,0" stroke="#475569" strokeWidth="2" fill="none" />
        <line x1="44" y1="-30" x2="220" y2="0" stroke="#475569" strokeWidth="1.5" />
        <line x1="44" y1="-30" x2="-80" y2="0" stroke="#475569" strokeWidth="1.5" />
        {/* Hook line */}
        <line x1="160" y1="0" x2="160" y2="120" stroke="#64748b" strokeWidth="1" />
        <rect x="156" y="120" width="8" height="8" fill="#475569" />
      </g>

      {/* Buildings under construction silhouettes */}
      <g transform="translate(380, 150)" stroke="#cbd5e1" strokeWidth="2">
        {/* Structural scaffolding grid */}
        <rect x="0" y="0" width="120" height="300" fill="none" strokeDasharray="5 5" />
        <line x1="0" y1="50" x2="120" y2="50" />
        <line x1="0" y1="100" x2="120" y2="100" />
        <line x1="0" y1="150" x2="120" y2="150" />
        <line x1="0" y1="200" x2="120" y2="200" />
        <line x1="0" y1="250" x2="120" y2="250" />
        <line x1="40" y1="0" x2="40" y2="300" />
        <line x1="80" y1="0" x2="80" y2="300" />
        {/* Diagonals */}
        <line x1="0" y1="0" x2="40" y2="50" opacity="0.4" />
        <line x1="40" y1="50" x2="80" y2="100" opacity="0.4" />
        <line x1="80" y1="100" x2="120" y2="150" opacity="0.4" />
      </g>

      {/* Another distant crane (Right background) */}
      <g transform="translate(620, 180)">
        <line x1="20" y1="0" x2="20" y2="270" stroke="#94a3b8" strokeWidth="2" strokeDasharray="2 2" />
        <line x1="-50" y1="0" x2="120" y2="0" stroke="#94a3b8" strokeWidth="3" />
        <polygon points="12,0 20,-18 28,0" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
      </g>
    </svg>
  );
};

// Premium Detailed SVG RMC Mixer Truck (strictly stationary animation in place)
export const AnimatedSwastikTruck: React.FC<{ isAnimating?: boolean; reducedMotion?: boolean }> = ({
  isAnimating = false,
  reducedMotion = false
}) => {
  const activeAnim = isAnimating && !reducedMotion;

  return (
    <div className={`relative w-full max-w-[550px] mx-auto ${activeAnim ? 'animate-drive' : ''}`}>
      {/* Exhaust smoke simulation */}
      {activeAnim && (
        <>
          <div className="absolute top-[48px] left-[78px] w-4 h-4 bg-gray-400/50 rounded-full opacity-0 animate-smoke" style={{ animationDelay: '0s' }} />
          <div className="absolute top-[48px] left-[78px] w-3 h-3 bg-gray-300/40 rounded-full opacity-0 animate-smoke" style={{ animationDelay: '0.8s' }} />
          <div className="absolute top-[48px] left-[78px] w-5 h-5 bg-gray-400/30 rounded-full opacity-0 animate-smoke" style={{ animationDelay: '1.6s' }} />
        </>
      )}

      <svg
        viewBox="0 0 600 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-xl"
      >
        {/* Subtle shadow ground */}
        <ellipse cx="300" cy="285" rx="250" ry="12" fill="#cbd5e1" opacity="0.6" />
        
        {/* Cabin Assembly (Right side driver cabin like Indian trucks) */}
        {/* Main white cabin body */}
        <path d="M40 240 L40 180 Q40 130 90 130 L160 130 L160 240 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
        <rect x="35" y="230" width="135" height="15" rx="3" fill="#0b132b" />
        
        {/* Windshield & Windows */}
        <path d="M70 142 L130 142 L130 185 L52 185 Q56 155 70 142 Z" fill="#0f172a" opacity="0.9" />
        <rect x="138" y="142" width="18" height="43" fill="#0f172a" opacity="0.9" />
        <path d="M135 138 L135 230" stroke="#e2e8f0" strokeWidth="1.5" />
        <rect x="125" y="195" width="8" height="3" rx="1" fill="#475569" />
        
        {/* Wheel Arches */}
        <path d="M60 240 A 32 32 0 0 1 124 240" fill="#0f172a" />
        <path d="M370 240 A 32 32 0 0 1 434 240" fill="#0f172a" />
        <path d="M445 240 A 32 32 0 0 1 509 240" fill="#0f172a" />

        {/* Headlight & Bumper details */}
        <rect x="35" y="210" width="8" height="14" rx="2" fill="#fbbf24" />
        <rect x="42" y="148" width="5" height="20" rx="1" fill="#475569" />
        <path d="M85 130 L85 60 L92 60 L92 130 Z" fill="#64748b" />
        <path d="M85 60 Q80 50 70 50" stroke="#64748b" strokeWidth="3" fill="none" />

        {/* Heavy chassis support frame */}
        <rect x="160" y="225" width="360" height="20" fill="#0b132b" rx="2" />
        
        {/* Mixer Drum Supports and Chute */}
        <rect x="175" y="190" width="30" height="35" fill="#475569" />
        <polygon points="460,225 490,130 520,225" fill="#475569" />
        <path d="M510 135 L540 155 L535 165 L505 145 Z" fill="#64748b" />
        <path d="M535 160 L570 210 L560 215 L525 165 Z" fill="#334155" />

        {/* Mixer Drum (Rotates around center in place) */}
        <g className={activeAnim ? 'animate-drum' : ''}>
          {/* White Concrete Drum */}
          <path d="M210 145 C210 95, 270 70, 350 70 C430 70, 470 105, 470 145 C470 185, 430 220, 350 220 C270 220, 210 195, 210 145 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="3" />
          
          {/* Swastik Mixtures Ribbon markings */}
          <path d="M220 145 Q290 80 350 80 Q410 80 460 145" stroke="#0056b3" strokeWidth="8" fill="none" opacity="0.8" />
          <path d="M220 145 Q290 210 350 210 Q410 210 460 145" stroke="#0b132b" strokeWidth="8" fill="none" opacity="0.8" />
          
          {/* Brand identifier lettering */}
          <text x="350" y="152" fontFamily="sans-serif" fontWeight="900" fontSize="18" fill="#0b132b" textAnchor="middle" letterSpacing="2">SWASTIK</text>
          <text x="350" y="167" fontFamily="sans-serif" fontWeight="700" fontSize="9" fill="#0056b3" textAnchor="middle" letterSpacing="1">READY MIX CONCRETE</text>
        </g>

        {/* Wheels (Subtle rotation in place) */}
        {/* Front Wheel */}
        <g transform="translate(92, 240)" className={activeAnim ? 'animate-spin-slow' : ''}>
          <circle cx="0" cy="0" r="26" fill="#1e293b" stroke="#0f172a" strokeWidth="4" />
          <circle cx="0" cy="0" r="12" fill="#64748b" />
          <circle cx="0" cy="0" r="5" fill="#e2e8f0" />
          <line x1="-12" y1="0" x2="12" y2="0" stroke="#0f172a" strokeWidth="2.5" />
          <line x1="0" y1="-12" x2="0" y2="12" stroke="#0f172a" strokeWidth="2.5" />
        </g>

        {/* Rear Wheel 1 */}
        <g transform="translate(402, 240)" className={activeAnim ? 'animate-spin-slow' : ''}>
          <circle cx="0" cy="0" r="26" fill="#1e293b" stroke="#0f172a" strokeWidth="4" />
          <circle cx="0" cy="0" r="12" fill="#64748b" />
          <circle cx="0" cy="0" r="5" fill="#e2e8f0" />
          <line x1="-12" y1="0" x2="12" y2="0" stroke="#0f172a" strokeWidth="2.5" />
          <line x1="0" y1="-12" x2="0" y2="12" stroke="#0f172a" strokeWidth="2.5" />
        </g>

        {/* Rear Wheel 2 */}
        <g transform="translate(477, 240)" className={activeAnim ? 'animate-spin-slow' : ''}>
          <circle cx="0" cy="0" r="26" fill="#1e293b" stroke="#0f172a" strokeWidth="4" />
          <circle cx="0" cy="0" r="12" fill="#64748b" />
          <circle cx="0" cy="0" r="5" fill="#e2e8f0" />
          <line x1="-12" y1="0" x2="12" y2="0" stroke="#0f172a" strokeWidth="2.5" />
          <line x1="0" y1="-12" x2="0" y2="12" stroke="#0f172a" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
};

// Silo plant batching setup illustration
export const SVGBatchingPlant: React.FC<IconProps> = ({ className = "" }) => {
  return (
    <svg viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-auto ${className}`}>
      <rect x="20" y="320" width="460" height="15" rx="5" fill="#e2e8f0" />
      {/* Silos */}
      <rect x="70" y="60" width="60" height="140" fill="#0056b3" rx="4" />
      <polygon points="70,200 100,240 130,200" fill="#004085" />
      <line x1="80" y1="230" x2="80" y2="320" stroke="#475569" strokeWidth="4" />
      <line x1="120" y1="230" x2="120" y2="320" stroke="#475569" strokeWidth="4" />
      <path d="M70 60 Q100 30 130 60 Z" fill="#004085" />

      <rect x="150" y="40" width="60" height="160" fill="#cbd5e1" rx="4" />
      <polygon points="150,200 180,240 210,200" fill="#94a3b8" />
      <line x1="160" y1="230" x2="160" y2="320" stroke="#475569" strokeWidth="4" />
      <line x1="200" y1="230" x2="200" y2="320" stroke="#475569" strokeWidth="4" />
      <path d="M150 40 Q180 10 210 40 Z" fill="#94a3b8" />
      
      <rect x="230" y="70" width="60" height="130" fill="#0b132b" rx="4" />
      <polygon points="230,200 260,240 290,200" fill="#070d1e" />
      <line x1="240" y1="230" x2="240" y2="320" stroke="#475569" strokeWidth="4" />
      <line x1="280" y1="230" x2="280" y2="320" stroke="#475569" strokeWidth="4" />
      <path d="M230 70 Q260 45 290 70 Z" fill="#070d1e" />

      {/* Central mixing tower */}
      <rect x="330" y="100" width="100" height="130" fill="#1e293b" rx="5" />
      <rect x="350" y="70" width="60" height="30" fill="#475569" />
      <rect x="345" y="170" width="70" height="60" fill="#0f172a" />
      
      {/* Conveyor truss line */}
      <line x1="210" y1="180" x2="330" y2="120" stroke="#0056b3" strokeWidth="10" />
      <line x1="250" y1="160" x2="250" y2="280" stroke="#475569" strokeWidth="2" />
      <line x1="290" y1="140" x2="290" y2="300" stroke="#475569" strokeWidth="2" />
      
      <text x="180" y="100" fontFamily="sans-serif" fontWeight="900" fontSize="10" fill="#0b132b" textAnchor="middle">SWASTIK</text>
      <text x="180" y="110" fontFamily="sans-serif" fontWeight="700" fontSize="7" fill="#0056b3" textAnchor="middle">READY MIX</text>
    </svg>
  );
};

// Visual representation for safety section
export const SVGSafetyWorker: React.FC<IconProps> = ({ className = "" }) => {
  return (
    <svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-auto ${className}`}>
      <circle cx="150" cy="180" r="100" fill="#f1f5f9" />
      <path d="M70 380 Q70 260 150 260 Q230 260 230 380 Z" fill="#0b132b" />
      <path d="M100 380 Q105 290 150 290 Q195 290 200 380 Z" fill="#fbbf24" />
      <rect x="115" y="320" width="12" height="60" fill="#cbd5e1" />
      <rect x="173" y="320" width="12" height="60" fill="#cbd5e1" />
      <rect x="135" y="215" width="30" height="50" rx="5" fill="#e2e8f0" />
      
      {/* Helmet */}
      <path d="M100 200 C100 140, 200 140, 200 200 Z" fill="#fbbf24" />
      <path d="M90 198 L210 198 L210 206 L90 206 Z" fill="#d97706" rx="3" />
      <rect x="120" y="215" width="60" height="15" rx="7" fill="#0f172a" opacity="0.9" />
    </svg>
  );
};

// Concrete Wave decorative elements
export const ConcreteWaves: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full ${className}`}>
      <path d="M0 50 Q360 80 720 50 T1440 50 L1440 100 L0 100 Z" fill="#0056b3" opacity="0.1" className="animate-wave" />
      <path d="M0 60 Q360 30 720 60 T1440 60 L1440 100 L0 100 Z" fill="#0056b3" opacity="0.15" />
    </svg>
  );
};

// General UI and quality step Icons
export const SVGIcons = {
  ArrowRight: (props: IconProps) => (
    <svg width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  Flask: (props: IconProps) => (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M6 3h12" />
      <path d="M12 3v13" />
      <path d="M9 11h6" />
      <path d="M10 3v3a4 4 0 0 1-4 4v0H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8h-2a4 4 0 0 1-4-4V3" />
    </svg>
  ),
  Calendar: (props: IconProps) => (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  MapPin: (props: IconProps) => (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Award: (props: IconProps) => (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  ),
  ShieldCheck: (props: IconProps) => (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Layers: (props: IconProps) => (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  Filter: (props: IconProps) => (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  ),
  TrendingUp: (props: IconProps) => (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  Settings: (props: IconProps) => (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  Eye: (props: IconProps) => (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Users: (props: IconProps) => (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Phone: (props: IconProps) => (
    <svg width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Mail: (props: IconProps) => (
    <svg width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  Truck: (props: IconProps) => (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  Facebook: (props: IconProps) => (
    <svg width={props.size || 20} height={props.size || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Instagram: (props: IconProps) => (
    <svg width={props.size || 20} height={props.size || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  LinkedIn: (props: IconProps) => (
    <svg width={props.size || 20} height={props.size || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  YouTube: (props: IconProps) => (
    <svg width={props.size || 20} height={props.size || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
    </svg>
  ),
  Hammer: (props: IconProps) => (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7.17a2 2 0 0 0 0 2.83L9.59 11.6 3 18.2V21h2.8l6.6-6.59 1.59 1.59a2 2 0 0 0 2.83 0l1.76-1.77a2 2 0 0 0 0-2.83L14.76 10l4.37-4.37a2.12 2.12 0 0 0-3-3Z" />
    </svg>
  ),
  Clock: (props: IconProps) => (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Globe: (props: IconProps) => (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
};

// Generic RMC Concrete pump illustration SVG
export const SVGConcretePump: React.FC<IconProps> = ({ className = "" }) => {
  return (
    <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-auto ${className}`}>
      <rect x="10" y="180" width="280" height="10" rx="3" fill="#cbd5e1" />
      <rect x="50" y="140" width="160" height="30" fill="#0b132b" rx="2" />
      <rect x="35" y="110" width="60" height="40" fill="#cbd5e1" rx="4" />
      <path d="M45 115 H 75 V 135 H 45 Z" fill="#0f172a" />
      <line x1="60" y1="170" x2="40" y2="185" stroke="#0056b3" strokeWidth="5" />
      <line x1="190" y1="170" x2="210" y2="185" stroke="#0056b3" strokeWidth="5" />
      <path d="M170 140 L 210 70 L 160 40 L 90 60" stroke="#0056b3" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M90 60 L 70 110" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="107" cy="170" r="12" fill="#1e293b" />
      <circle cx="167" cy="170" r="12" fill="#1e293b" />
    </svg>
  );
};

// JCB Loader illustration SVG
export const SVGJcbLoader: React.FC<IconProps> = ({ className = "" }) => {
  return (
    <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-auto ${className}`}>
      <rect x="10" y="180" width="280" height="10" rx="3" fill="#cbd5e1" />
      <rect x="90" y="100" width="100" height="50" fill="#fbbf24" rx="4" stroke="#d97706" strokeWidth="2" />
      <path d="M120 100 L 135 60 L 175 60 L 180 100 Z" fill="#0f172a" stroke="#fbbf24" strokeWidth="3" />
      <path d="M185 130 L 230 140 L 250 160" stroke="#475569" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M245 150 L 270 165 L 260 180 L 235 160 Z" fill="#1e293b" />
      <path d="M95 120 L 50 80 L 30 120" stroke="#fbbf24" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="115" cy="160" r="22" fill="#1e293b" stroke="#0f172a" strokeWidth="3" />
      <circle cx="115" cy="160" r="8" fill="#cbd5e1" />
      <circle cx="185" cy="165" r="16" fill="#1e293b" stroke="#0f172a" strokeWidth="3" />
      <circle cx="185" cy="165" r="6" fill="#cbd5e1" />
    </svg>
  );
};

// Project Illustrations
export const SVGProjects = {
  HighRise: (props: IconProps) => (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
      <rect x="25" y="10" width="30" height="100" fill="#e2e8f0" stroke="#0056b3" strokeWidth="2" />
      <rect x="60" y="30" width="25" height="80" fill="#f1f5f9" stroke="#0b132b" strokeWidth="2" />
      <rect x="30" y="20" width="6" height="8" fill="#0056b3" opacity="0.3" />
      <rect x="42" y="20" width="6" height="8" fill="#0056b3" opacity="0.3" />
      <rect x="30" y="35" width="6" height="8" fill="#0056b3" opacity="0.3" />
      <rect x="42" y="35" width="6" height="8" fill="#0056b3" opacity="0.3" />
      <rect x="30" y="50" width="6" height="8" fill="#0056b3" opacity="0.3" />
      <rect x="42" y="50" width="6" height="8" fill="#0056b3" opacity="0.3" />
      <rect x="65" y="40" width="5" height="7" fill="#0b132b" opacity="0.3" />
      <rect x="75" y="40" width="5" height="7" fill="#0b132b" opacity="0.3" />
      <rect x="65" y="55" width="5" height="7" fill="#0b132b" opacity="0.3" />
      <rect x="75" y="55" width="5" height="7" fill="#0b132b" opacity="0.3" />
    </svg>
  ),
  Roads: (props: IconProps) => (
    <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
      <path d="M10 90 L50 10 L70 10 L110 90 Z" fill="#475569" stroke="#334155" strokeWidth="2" />
      <line x1="60" y1="15" x2="60" y2="25" stroke="#fbbf24" strokeWidth="3" strokeDasharray="2" />
      <line x1="60" y1="35" x2="60" y2="50" stroke="#fbbf24" strokeWidth="4" strokeDasharray="3" />
      <line x1="60" y1="60" x2="60" y2="85" stroke="#fbbf24" strokeWidth="5" />
    </svg>
  ),
  Bridges: (props: IconProps) => (
    <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
      <rect x="25" y="40" width="12" height="50" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
      <rect x="83" y="40" width="12" height="50" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
      <rect x="5" y="30" width="110" height="12" fill="#0056b3" rx="2" />
      <path d="M 5 60 Q 54 20 105 60" stroke="#0b132b" strokeWidth="3" fill="none" />
      <line x1="40" y1="30" x2="40" y2="44" stroke="#0b132b" strokeWidth="1.5" />
      <line x1="60" y1="30" x2="60" y2="41" stroke="#0b132b" strokeWidth="1.5" />
      <line x1="80" y1="30" x2="80" y2="44" stroke="#0b132b" strokeWidth="1.5" />
    </svg>
  ),
  Commercial: (props: IconProps) => (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
      <polygon points="10,110 30,30 90,30 70,110" fill="#cbd5e1" stroke="#0056b3" strokeWidth="2" />
      <line x1="30" y1="50" x2="85" y2="50" stroke="#0056b3" strokeWidth="1" />
      <line x1="25" y1="70" x2="80" y2="70" stroke="#0056b3" strokeWidth="1" />
      <line x1="20" y1="90" x2="75" y2="90" stroke="#0056b3" strokeWidth="1" />
    </svg>
  ),
  Infrastructure: (props: IconProps) => (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
      <circle cx="50" cy="60" r="40" stroke="#0b132b" strokeWidth="4" fill="none" />
      <circle cx="50" cy="60" r="30" stroke="#0056b3" strokeWidth="2" fill="#f1f5f9" />
      <line x1="10" y1="60" x2="90" y2="60" stroke="#0b132b" strokeWidth="3" />
      <line x1="50" y1="20" x2="50" y2="100" stroke="#0b132b" strokeWidth="3" />
    </svg>
  ),
  Industrial: (props: IconProps) => (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
      <polygon points="10,110 10,60 35,80 35,60 60,80 60,60 85,80 85,110" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
      <rect x="70" y="20" width="12" height="50" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
      <path d="M76 15 Q 82 8 80 0" stroke="#64748b" strokeWidth="2" fill="none" />
    </svg>
  )
};
