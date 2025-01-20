export function WaveTransition() {
  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
      <svg 
        className="w-full h-24" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        style={{ transform: 'rotate(180deg)' }}
      >
        {/* Base white waves */}
        <path 
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="fill-white animate-wave"
        />
        
        <path 
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="fill-white/20 animate-wave-slow"
        />

        {/* Gradient-width red stroke */}
        <path 
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3"
          fill="none"
          stroke="url(#redStrokeGradient)"
          strokeWidth="5"
          className="animate-wave"
          vectorEffect="non-scaling-stroke"
        />

        {/* Define gradient for stroke width */}
        <defs>
          <linearGradient id="redStrokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E63946" stopOpacity="0" />
            <stop offset="50%" stopColor="#E63946" stopOpacity="1" />
            <stop offset="100%" stopColor="#E63946" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
} 