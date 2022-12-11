import type { StoryObj, Meta } from '@storybook/react' // ? importar tipagem do storybook
import { Button, ButtonProps } from '@ignite-ui/react'

// * Definição global do componente Button
// * tudo que estiver declarado no bloco global poderá ser usado em qualquer variação
export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

// * Exportar uma variação do componente (todo componente precisa ter pelo menos uma variação)
export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
