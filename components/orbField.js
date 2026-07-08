"use client"

import styled, { keyframes } from "styled-components"

const drift = keyframes`
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }

  to {
    transform: translate3d(-4%, 5%, 0) scale(1.12);
  }
`

const Field = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`

const Orb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);

  animation: ${drift} ${props => 22 + props.$index * 7}s ease-in-out infinite alternate;
  animation-delay: ${props => props.$index * -9}s;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

// Soft gaussian-blurred gradient orbs, meant to sit behind frosted-glass surfaces.
// orbs: [{ color: "r, g, b", size, top/left/right/bottom, opacity }]
const OrbField = ({ orbs = [] }) => (
  <Field aria-hidden="true">
    {orbs.map((orb, index) => (
      <Orb
        key={index}
        $index={index}
        style={{
          width: orb.size,
          height: orb.size,
          top: orb.top,
          left: orb.left,
          right: orb.right,
          bottom: orb.bottom,
          opacity: orb.opacity ?? 0.4,
          background: `radial-gradient(circle at 35% 35%, rgba(${orb.color}, .85), rgba(${orb.color}, 0) 70%)`,
        }}
      />
    ))}
  </Field>
)

export default OrbField
