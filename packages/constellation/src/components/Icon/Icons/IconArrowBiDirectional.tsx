import React from 'react'

import { colors } from '../../../colors'
import type { RawIconProps } from '../types'

const IconArrowBiDirectional = ({
  bgColor = 'transparent',
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
      <circle cx='12' cy='12' r='12' fill={bgColor} />
      <path
        d='M9.70373 6.87165C9.41084 6.57875 8.93596 6.57875 8.64307 6.87165L4.04511 11.4696C3.75222 11.7625 3.75222 12.2374 4.04511 12.5303L8.64307 17.1282C8.93596 17.4211 9.41084 17.4211 9.70373 17.1282L10.0591 16.7729C10.3519 16.48 10.3519 16.0051 10.0591 15.7123L7.34653 12.9997H16.6534L13.9409 15.7123C13.648 16.0051 13.648 16.48 13.9409 16.7729L14.2963 17.1283C14.5892 17.4212 15.064 17.4212 15.3569 17.1283L19.9549 12.5303C20.2478 12.2374 20.2478 11.7626 19.9549 11.4697L15.3569 6.87169C15.064 6.5788 14.5892 6.5788 14.2963 6.87169L13.9409 7.22702C13.6481 7.51991 13.6481 7.99478 13.9409 8.28768L16.6505 10.9972H7.34953L10.0591 8.28767C10.352 7.99478 10.352 7.5199 10.0591 7.22701L9.70373 6.87165Z'
        fill={color === 'currentColor' ? 'currentColor' : colors[color]}
      />
    </svg>
  )
}

export default IconArrowBiDirectional
