import React from 'react';

interface CalculatorSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (value: number) => void;
}

export const CalculatorSlider: React.FC<CalculatorSliderProps> = ({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
}) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <label className="text-sm text-zinc-400 uppercase tracking-wider font-medium">
          {label}
        </label>
        <div className="text-2xl font-bold text-white">
          {value.toLocaleString('de-DE')} <span className="text-sm font-normal text-zinc-500">{unit}</span>
        </div>
      </div>
      <div className="relative h-3 w-full">
        {/* Track background */}
        <div className="absolute inset-0 bg-white/10 rounded-full" />
        {/* Filled track */}
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-solar-orange to-solar-yellow rounded-full transition-all duration-150"
          style={{ width: `${percentage}%` }}
        />
        {/* Input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          style={{ margin: 0 }}
        />
        {/* Custom thumb */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-lg shadow-black/30 border-2 border-solar-orange pointer-events-none transition-all duration-150"
          style={{ left: `calc(${percentage}% - 12px)` }}
        />
      </div>
      <div className="flex justify-between text-xs text-zinc-500">
        <span>{min.toLocaleString('de-DE')} {unit}</span>
        <span>{max.toLocaleString('de-DE')} {unit}</span>
      </div>
    </div>
  );
};
