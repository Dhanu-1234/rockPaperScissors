import {ButtonItem, Button, Image} from './styledComponent'

const choices = {
  rock: 'ROCK',
  paper: 'PAPER',
  scissors: 'SCISSORS',
}

const ChoiceButton = props => {
  const {buttonDetails, choicesList, onPlaceChoice} = props
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
    const randomNum = Math.floor(Math.random() * choicesList.length)
    const opponentChoice = choicesList[randomNum].id
    if (id === opponentChoice) {
      onPlaceChoice(id, opponentChoice, 'tie')
    } else if (
      (id === choices.rock && opponentChoice === choices.scissors) ||
      (id === choices.paper && opponentChoice === choices.rock) ||
      (id === choices.scissors && opponentChoice === choices.paper)
    ) {
      onPlaceChoice(id, opponentChoice, 'won')
    } else {
      onPlaceChoice(id, opponentChoice, 'lost')
    }
  }

  return (
    <ButtonItem>
      <Button type="button" onClick={onClicked} data-testid={testid}>
        <Image src={imageUrl} alt={id} />
      </Button>
    </ButtonItem>
  )
}

export default ChoiceButton
