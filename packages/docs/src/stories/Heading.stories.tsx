import { Heading, HeadingProps } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda excepturi, laboriosam quas omnis explicabo ipsa provident, rem sint eaque enim nisi cum autem illo quia eum aspernatur blanditiis a adipisci?',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão um heading será sempre um `h2`, mas pode ser alterado com a propriedade `as`',
      },
    },
  },
}
