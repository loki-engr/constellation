import React from 'react'

import { colors } from '../../../colors'
import type { RawIconProps } from '../types'

const IconVisibilityOff = ({
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
        d='M12.005 5.996a5.459 5.459 0 0 1 5.457 5.457c0 .71-.141 1.375-.392 1.997l3.186 3.187A12.897 12.897 0 0 0 24 11.453c-1.888-4.792-6.548-8.186-12.005-8.186-1.528 0-2.99.273-4.344.764l2.357 2.358a5.297 5.297 0 0 1 1.998-.393ZM1.091 3.016 3.58 5.504l.502.503A12.883 12.883 0 0 0 0 11.453c1.888 4.79 6.548 8.185 12.005 8.185 1.692 0 3.307-.327 4.78-.917l.46.459 3.197 3.187 1.386-1.386L2.478 1.63 1.09 3.016Zm6.036 6.036 1.692 1.691a3.08 3.08 0 0 0-.088.71 3.27 3.27 0 0 0 3.274 3.274c.24 0 .48-.033.71-.087l1.691 1.691a5.409 5.409 0 0 1-2.4.579 5.46 5.46 0 0 1-5.458-5.457c0-.863.219-1.67.579-2.401ZM11.83 8.2l3.438 3.438.022-.174a3.27 3.27 0 0 0-3.275-3.275l-.185.011Z'
        fill={color === 'currentColor' ? 'currentColor' : colors[color]}
      />
    </svg>
  )
}

export default IconVisibilityOff
