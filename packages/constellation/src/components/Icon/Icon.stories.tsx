import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { colors } from '../../colors'
import Text from '../Text'
import Icon, { iconComponentMap } from '.'
import { IconComponentProps, IconNameType } from './types'

export default {
  argTypes: {
    color: {
      description: 'The rendering color of the icon.',
      options: Object.keys(colors),
      type: 'select',
    },
    name: {
      description: 'The name of the icon to render.',
      options: Object.keys(iconComponentMap),
      type: 'select',
    },
    size: {
      description: 'The size of the rendered the icon.',
      options: ['sm', 'md', 'lg'],
      type: 'select',
    },
  },
  component: Icon,
  title: 'Components/Icon',
} as unknown as ComponentMeta<typeof Icon>

export const Default: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

Default.args = { color: 'grey800', name: 'blockchainCircle', size: 'lg' }

export const AllVariants: ComponentStory<typeof Icon> = (args: IconComponentProps) => {
  const icons = Object.keys(iconComponentMap)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '16px',
        width: '100%',
      }}
    >
      {icons.map((name) => (
        <div
          key={name}
          style={{
            alignItems: 'center',
            border: '1px solid #dcdcdc',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            padding: '16px 8px',
            width: '125px',
          }}
        >
          <Icon name={name as IconNameType} color='blue500' size='lg' />
          <Text color='grey700' variant='paragraph-2' css={{ marginTop: '16px' }}>
            {name}
          </Text>
        </div>
      ))}
    </div>
  )
}

AllVariants.parameters = {
  controls: { exclude: 'variant' },
}