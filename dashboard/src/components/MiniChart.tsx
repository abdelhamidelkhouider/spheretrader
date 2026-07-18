import React, { useMemo } from 'react';

interface Props {
  data?: number[];
  color?: string;
  width?: number;
  height?: number;
}

const MiniChart: React.FC<Props> = ({ data, color = '#00e5ff', width = 120, height = 40 }) => {
  const chartData = useMemo(() => {
    if (data && data.length > 0) return data;
    // Generate smooth random data
    const pts: number[] = [50];
    for (let i = 1; i < 24; i++) {
      pts.push(Math.max(10, Math.min(90, pts[i - 1] + (Math.random() - 0.45) * 15)));
    }
    return pts;
  }, [data]);

  const points = useMemo(() => {
    const min = Math.min(...chartData);
    const max = Math.max(...chartData);
    const range = max - min || 1;
    return chartData.map((v, i) => ({
      x: (i / (chartData.length - 1)) * width,
      y: height - ((v - min) / range) * (height - 4) - 2,
    }));
  }, [chartData, width, height]);

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');
  const areaPath = `${linePath} L${width},${height} L0,${height} Z`;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ display: 'block' }}>
      <defs>
        <linearGradient id={`grad-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path d={areaPath} fill={`url(#grad-${color.replace('#', '')})`} />
      <path d={linePath} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)" />
      {/* End dot */}
      <circle cx={points[points.length - 1].x} cy={points[points.length - 1].y} r="2.5" fill={color} />
      <circle cx={points[points.length - 1].x} cy={points[points.length - 1].y} r="5" fill={color} opacity="0.2">
        <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.05;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
};

export default MiniChart;
