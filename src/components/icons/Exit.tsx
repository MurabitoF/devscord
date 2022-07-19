import React, { SVGProps } from 'react'

const Exit = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={256}
      height={256}
      xmlSpace="preserve"
      viewBox='0 0 256 256'
      {...props}
    >
      <g>
        <g
          style={{
            stroke: 'none',
            strokeWidth: 0,
            strokeDasharray: 'none',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 10,
            fill: `${props.fill}`,
            fillRule: 'nonzero',
            opacity: 1
          }}
        >
          <path
            d="M86.356 46.27a2.703 2.703 0 0 0 .189-.535c.016-.062.034-.123.046-.186.034-.181.055-.364.055-.548 0-.184-.022-.367-.055-.548-.012-.064-.03-.124-.046-.186a2.711 2.711 0 0 0-.19-.535 2.969 2.969 0 0 0-.156-.288c-.039-.063-.077-.126-.12-.186-.02-.027-.033-.057-.054-.084L74.316 27.93a3 3 0 0 0-4.758 3.656L77.56 42H30.903a3 3 0 1 0 0 6h46.656l-8.001 10.414a3 3 0 1 0 4.758 3.656l11.71-15.242c.021-.027.035-.057.055-.085.043-.06.08-.122.119-.184.057-.095.11-.19.156-.289z"
            style={{
              stroke: 'none',
              strokeWidth: 1,
              strokeDasharray: 'none',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeMiterlimit: 10,
              fill: `${props.fill}`,
              fillRule: 'nonzero',
              opacity: 1
            }}
            transform="translate(1.964 1.964) scale(2.8008)"
          />
          <path
            d="M60.442 90H9.353a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h51.089a3 3 0 0 1 3 3v30.054a3 3 0 1 1-6 0V6H12.353v78h45.089V55.61a3 3 0 1 1 6 0V87a3 3 0 0 1-3 3z"
            style={{
              stroke: 'none',
              strokeWidth: 1,
              strokeDasharray: 'none',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeMiterlimit: 10,
              fill: `${props.fill}`,
              fillRule: 'nonzero',
              opacity: 1
            }}
            transform="translate(1.964 1.964) scale(2.8008)"
          />
        </g>
      </g>
    </svg>
)

export default Exit
