import type { StoryObj, Meta } from '@storybook/react' // ? importar tipagem do storybook
import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'SurfaceBox',
  component: Box,
  args: {
    children: (
      <>
        <Text>testing element box</Text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
