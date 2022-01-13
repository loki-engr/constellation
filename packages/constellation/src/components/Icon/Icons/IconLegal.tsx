import React from 'react'

import { colors } from '../../../colors'
import type { RawIconProps } from '../types'

const IconLegal = ({ color = 'currentColor', height = 24, width = 24, ...props }: RawIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill={color === 'currentColor' ? 'currentColor' : colors[color]}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.19 9.556 18.3 8.45l.205.204a.699.699 0 0 0 .99 0l.7-.698a.696.696 0 0 0 0-.987l-4.9-4.888a.7.7 0 0 0-.99 0l-.7.698a.696.696 0 0 0 0 .987l.205.205L9.2 8.569l-.205-.205a.7.7 0 0 0-.99 0l-.7.698a.696.696 0 0 0 0 .988l4.9 4.888a.699.699 0 0 0 .99 0l.7-.699a.696.696 0 0 0 0-.987l-.205-.205 1.11-1.107 5.105 5.092a.699.699 0 0 0 .99 0l1.4-1.396a.696.696 0 0 0 0-.987l-5.106-5.093ZM14.8 20.03h-.7v-1.396a.7.7 0 0 0-.7-.699H3.6a.7.7 0 0 0-.7.699v1.396h-.7c-.386 0-.7.312-.7.698v.699c0 .386.314.698.7.698h12.6c.386 0 .7-.312.7-.698v-.699a.699.699 0 0 0-.7-.698M2.9 14.444a.699.699 0 1 0 0 1.397H5a.699.699 0 1 0 0-1.397H2.9ZM6.315 13.661a.696.696 0 0 0 0-.987L4.83 11.192a.7.7 0 0 0-.99 0 .696.696 0 0 0 0 .988l1.485 1.481a.699.699 0 0 0 .99 0'
        fill={color === 'currentColor' ? 'currentColor' : colors[color]}
      />
    </svg>
  )
}

export default IconLegal
