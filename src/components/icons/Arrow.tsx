import React, { SVGProps } from 'react'

const Arrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={512}
    height={463.95}
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 512 463.95"
    {...props}
  >
    <path
      fillRule="nonzero"
      d="M512 332.66H268.5v92.31c-.68 15.47-5.77 26.46-15.43 32.82-25.79 17.2-52.31-5.26-69.24-22.6L14.33 261.6c-19.11-17.28-19.11-41.93 0-59.21L188.71 24.42c16.06-16.39 40.56-34.09 64.36-18.21 9.66 6.35 14.75 17.34 15.43 32.81v92.31H512v201.33z"
      fill={props.fill}
    />
  </svg>
)

export default Arrow
