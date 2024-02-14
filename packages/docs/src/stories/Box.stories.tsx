import type { StoryObj, Meta } from '@storybook/react' // ? importar tipagem do storybook
import { Box, BoxProps, Text } from '@ignite-ui-jd/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>testing element box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null, // ocultar propriedades para não ser administrado pelo usuário no canvas
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}