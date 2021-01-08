import React from "react";

function YellowBitTick() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="19.74 4.862 20.519 20.324"
    >
      <g filter="url(#filter0_d)">
        <path
          fill="url(#paint0_linear)"
          d="M30 25c5.523 0 10-4.477 10-10S35.523 5 30 5 20 9.477 20 15s4.477 10 10 10z"
        ></path>
      </g>
      <path fill="#fff" d="M30 23a8 8 0 100-16 8 8 0 000 16z"></path>
      <path
        fill="#FFA123"
        d="M28.122 16.745l-2.2-2.2-.737.732 2.937 2.937 6.293-6.294-.73-.734-5.563 5.559z"
      ></path>
      <defs>
        <filter
          id="filter0_d"
          width="60"
          height="60"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="15"></feOffset>
          <feGaussianBlur stdDeviation="10"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.161 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="37.7"
          x2="23.42"
          y1="21.86"
          y2="7.48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8F00"></stop>
          <stop offset="1" stopColor="#FFECB3"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default YellowBitTick;
