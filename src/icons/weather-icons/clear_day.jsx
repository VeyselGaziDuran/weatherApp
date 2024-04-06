const ClearDay = ({ className }) => {
  return (
    <svg className={className} width="62" height="64" viewBox="0 0 62 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_i_303_56)">
        <path
          d="M61.9999 32C61.9999 49.2577 48.1405 63.2478 31.0441 63.2478C13.9477 63.2478 0.0883789 49.2577 0.0883789 32C0.0883789 14.7423 13.9477 0.752197 31.0441 0.752197C48.1405 0.752197 61.9999 14.7423 61.9999 32Z"
          fill="url(#paint0_linear_303_56)"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_303_56"
          x="0.0883789"
          y="0.752197"
          width="61.9115"
          height="67.4956"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="9" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.81 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_56" />
        </filter>
        <linearGradient id="paint0_linear_303_56" x1="26.342" y1="49.0083" x2="52.1746" y2="4.12528" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FF9900" />
          <stop offset="1" stop-color="#FFEE94" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default ClearDay
