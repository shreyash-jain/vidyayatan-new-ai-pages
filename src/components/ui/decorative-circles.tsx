"use client";

import { useMemo } from 'react';

const pairedCircleGroups = [
  {
    groupPosition: { top: '15%', left: '10%' },
    filledStyle: { size: '100px', backgroundColor: 'rgba(160, 163, 232, 0.15)' },
    outlinedStyle: { size: '40px', border: '2px solid rgba(160, 163, 232, 0.3)' },
    animationDuration: '10s',
  },
  {
    groupPosition: { top: '70%', left: '25%' },
    filledStyle: { size: '60px', backgroundColor: 'rgba(138, 202, 255, 0.15)' },
    outlinedStyle: { size: '120px', border: '2px solid rgba(138, 202, 255, 0.3)' },
    animationDuration: '12s',
  },
  {
    groupPosition: { top: '30%', left: '85%' },
    filledStyle: { size: '40px', backgroundColor: 'rgba(160, 163, 232, 0.15)' },
    outlinedStyle: { size: '80px', border: '2px solid rgba(160, 163, 232, 0.3)' },
    animationDuration: '15s',
  },
   {
    groupPosition: { top: '80%', left: '60%' },
    filledStyle: { size: '110px', backgroundColor: 'rgba(138, 202, 255, 0.15)' },
    outlinedStyle: { size: '50px', border: '2px solid rgba(138, 202, 255, 0.3)' },
    animationDuration: '18s',
  },
];

export const DecorativeCircles = () => {
  const circleGroups = useMemo(() => pairedCircleGroups, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {circleGroups.map((group, index) => (
        <div
          key={index}
          className="absolute"
          style={{ ...group.groupPosition, animation: `float-animation ${group.animationDuration} ease-in-out infinite` }}
        >
          {/* Outlined Circle - Orbiting */}
          <div
            className="decorative-circle"
            style={{
              width: group.outlinedStyle.size,
              height: group.outlinedStyle.size,
              border: group.outlinedStyle.border,
              animation: `orbit-animation ${group.animationDuration} linear infinite`,
            }}
          />
          {/* Filled Circle - Center */}
          <div
            className="decorative-circle"
            style={{
              width: group.filledStyle.size,
              height: group.filledStyle.size,
              backgroundColor: group.filledStyle.backgroundColor,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
      ))}
    </div>
  );
}; 