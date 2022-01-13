import React from 'react'

import { colors } from '../../../colors'
import type { RawIconProps } from '../types'

const IconIdentification = ({
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
        d='m19.966 4.2-8.77-3.193a2.67 2.67 0 0 0-3.418 1.594L2.762 16.383A2.67 2.67 0 0 0 4.355 19.8l8.77 3.192a2.67 2.67 0 0 0 3.419-1.594L21.56 7.617A2.67 2.67 0 0 0 19.966 4.2Zm-5.178 10.02c.18.428.168.911-.034 1.36-.402.894-1.374 1.386-2.167 1.098-.793-.289-1.223-1.292-.955-2.235.135-.478.436-.857.846-1.066.41-.21.88-.232 1.334-.067a1.652 1.652 0 0 1 .976.91ZM12.163 4.197a.667.667 0 0 1 .855-.399l3.758 1.369a.667.667 0 0 1-.456 1.252l-3.758-1.368a.666.666 0 0 1-.399-.854Zm2.215 16.939a.502.502 0 0 1-.424.03l-5.3-1.929a.504.504 0 0 1-.335-.535.542.542 0 0 1 .077-.228c.378-.641.984-1.074 1.755-1.253.685-.158 1.459-.1 2.18.162.72.262 1.35.715 1.772 1.277.476.632.662 1.354.539 2.087a.542.542 0 0 1-.264.389Z'
        fill={color === 'currentColor' ? 'currentColor' : colors[color]}
      />
    </svg>
  )
}

export default IconIdentification
