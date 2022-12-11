import { ComponentProps } from 'react' // extrai ou herda quais propriedades um componente pode ter

import { styled } from './styles'

// export type ButtonProps = {
//   size: 'small' | 'big'
// }

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  padding: '$2 $4',
  borderRadius: '$sm',
  border: 0,
  fontWeight: 'bold',
  color: '$white',

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  // valor default do componente caso não seja informado um vairante
  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
