import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui-jd/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {}, // o que eu colocar aqui será comum a todas as variantes,
  decorators: [
    // É uma forma de customizar a view do componente, sem ser apenas os filhos(ex: Primary, Disabled, WithPrefix)
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add some observation...',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}