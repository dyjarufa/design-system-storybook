import type { StoryObj, Meta } from '@storybook/react' // ? importar tipagem do storybook
import { Button, ButtonProps } from '@ignite-ui-jd/react'
import { ArrowRight } from 'phosphor-react'

// * Definição global do componente Button
// * tudo que estiver declarado no bloco global poderá ser usado em qualquer variação
export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary', // valor padrão
    size: 'md', // valor padrão
    disabled: false,
  },
  // * Log de ação do component | sera criado uma aba action no storybook com o log da action que eu executar
  argTypes: {
    // * Quais opções possíveis de variação para cada propriedade do componente
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    // * estado do botão
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

// * Exportar uma variação do componente (todo componente precisa ter pelo menos uma variação)
export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithICon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next step
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
