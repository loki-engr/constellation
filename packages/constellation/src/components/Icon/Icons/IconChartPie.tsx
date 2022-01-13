import React from 'react'

import { colors } from '../../../colors'
import type { RawIconProps } from '../types'

const IconChartPie = ({
  color = 'currentColor',
  height = 24,
  width = 24,
  ...props
}: RawIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        d='M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10Zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99Zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97Z'
        fill={color === 'currentColor' ? 'currentColor' : colors[color]}
      />
    </svg>
  )
}

export default IconChartPie
