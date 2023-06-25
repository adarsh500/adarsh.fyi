import React from "react";

const Logo = (props: any) => {
  return (
    <div {...props}>
      {/* <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" fill="#111111" />
        <path
          d="M16 7L24.6603 24.25H7.33975L16 7Z"
          fill="url(#paint0_angular_3_16)"
        />
        <path d="M15.5 12L20.2631 21.75H10.7369L15.5 12Z" fill="#111111" />
        <defs>
          <radialGradient
            id="paint0_angular_3_16"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(16 15.3375) rotate(90) scale(8.3375 7.25)"
          >
            <stop stop-color="#EE7752" />
            <stop offset="0.5" stop-color="#E73C7E" />
            <stop offset="1" stop-color="#237ED5" />
          </radialGradient>
        </defs>
      </svg> */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" fill="black" />
        <path
          d="M16 7L24.6603 24.25H7.33975L16 7Z"
          fill="url(#paint0_angular_3_18)"
        />
        <path d="M15.5 12L20.2631 21.75H10.7369L15.5 12Z" fill="black" />
        <defs>
          <radialGradient
            id="paint0_angular_3_18"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(16 15.3375) rotate(90) scale(8.3375 7.25)"
          >
            <stop stop-color="#EE7752" />
            <stop offset="0.5" stop-color="#E73C7E" />
            <stop offset="1" stop-color="#237ED5" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
