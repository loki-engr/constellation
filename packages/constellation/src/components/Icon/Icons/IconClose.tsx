import React from 'react'

import { colors } from '../../../colors'
import type { RawIconProps } from '../types'

const IconClose = ({ color = 'currentColor', height = 24, width = 24, ...props }: RawIconProps) => {
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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.515 1.515a2 2 0 0 0 0 2.828L7.172 10l-5.657 5.657a2 2 0 1 0 2.828 2.828L10 12.828l5.657 5.657a2 2 0 0 0 2.828-2.828L12.828 10l5.657-5.657a2 2 0 0 0-2.828-2.828L10 7.172 4.343 1.515a2 2 0 0 0-2.828 0Z'
        fill={color === 'currentColor' ? 'currentColor' : colors[color]}
      />
    </svg>
  )
}

export default IconClose
