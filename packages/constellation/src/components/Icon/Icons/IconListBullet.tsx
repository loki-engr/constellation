import React from 'react'

import { colors } from '../../../colors'
import type { RawIconProps } from '../types'

const IconListBullet = ({
  color = 'currentColor',
  height = 24,
  width = 24,
  ...props
}: RawIconProps) => {
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
        d='M1.5 4.3c0-1.54 1.26-2.8 2.8-2.8 1.54 0 2.8 1.26 2.8 2.8 0 1.54-1.26 2.8-2.8 2.8-1.54 0-2.8-1.26-2.8-2.8ZM1.5 12c0-1.54 1.26-2.8 2.8-2.8 1.54 0 2.8 1.26 2.8 2.8 0 1.54-1.26 2.8-2.8 2.8-1.54 0-2.8-1.26-2.8-2.8ZM4.3 16.9c-1.54 0-2.8 1.26-2.8 2.8 0 1.54 1.26 2.8 2.8 2.8 1.54 0 2.8-1.26 2.8-2.8 0-1.54-1.26-2.8-2.8-2.8ZM9.9 2.9h11.9c.42 0 .7.28.7.7V5c0 .42-.28.7-.7.7H9.9c-.42 0-.7-.28-.7-.7V3.6c0-.42.28-.7.7-.7ZM21.8 10.6H9.9c-.42 0-.7.28-.7.7v1.4c0 .42.28.7.7.7h11.9c.42 0 .7-.28.7-.7v-1.4c0-.42-.28-.7-.7-.7ZM9.9 18.3h11.9c.42 0 .7.28.7.7v1.4c0 .42-.28.7-.7.7H9.9c-.42 0-.7-.28-.7-.7V19c0-.42.28-.7.7-.7Z'
        fill={color === 'currentColor' ? 'currentColor' : colors[color]}
      />
    </svg>
  )
}

export default IconListBullet
