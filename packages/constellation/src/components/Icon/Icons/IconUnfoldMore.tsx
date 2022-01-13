import React from 'react'

import { colors } from '../../../colors'
import type { RawIconProps } from '../types'

const IconUnfoldMore = ({
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
        d='M12 5.83 15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83Zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17Z'
        fill={color === 'currentColor' ? 'currentColor' : colors[color]}
      />
    </svg>
  )
}

export default IconUnfoldMore
