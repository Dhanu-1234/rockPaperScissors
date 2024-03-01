import {ButtonItem, Button, Image} from './styledComponent'

const ChoiceButton = props => {
  const {buttonDetails, onPlaceChoice} = props
  const {id, imageUrl} = buttonDetails
  let testid
  switch (id) {
    case 'ROCK':
      testid = 'rockButton'
      break
    case 'PAPER':
      testid = 'paperButton'
      break
    case 'SCISSORS':
      testid = 'scissorsButton'
      break
    default:
      testid = null
      break
  }

  const onClicked = () => {
    onPlaceChoice(id)
  }

  return (
    <ButtonItem>
      <Button type="button" onClick={onClicked}>
        <Image src={imageUrl} data-testid={testid} />
      </Button>
    </ButtonItem>
  )
}

export default ChoiceButton
