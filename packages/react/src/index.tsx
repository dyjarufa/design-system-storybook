import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$gray500',
  paddingcd: '$4',
  borderRadius: '$md',
})

export function App() {
  return <h1>Hello world</h1>
}
