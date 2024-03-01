import {Component} from 'react'
import ChoiceButton from '../ChoiceButton'
import {
  GameContainer,
  HeadingContainer,
  HeadingSubContainer,
  Heading,
  ScoreContainer,
  ButtonsContainer,
  ResultViewContainer,
  ResultStatsContainer,
  ResultPlayerChoiceContainer,
  ResultHeading,
  ResultImage,
  ResultContainer,
  PlayAgainButton,
} from './styledComponent'

const resultStatusConstants = {
  won: 'YOU WON',
  lost: 'YOU LOSE',
  tie: 'IT IS DRAW',
}

const choices = {
  rock: 'ROCK',
  paper: 'PAPER',
  scissors: 'SCISSORS',
}

class RockPaperScissors extends Component {
  state = {isGameRunning: true, playerChoice: 'ROCK', score: 0}

  onPlaceChoice = choice => {
    this.setState({playerChoice: choice, isGameRunning: false})
  }

  onIncreaseScore = () => {
    this.setState(prevState => ({score: prevState.score + 1}))
  }

  onDecreaseScore = () => {
    this.setState(prevState => ({score: prevState.score - 1}))
  }

  onPlayAgain = () => {
    this.setState({isGameRunning: true})
  }

  getResult = opponentChoice => {
    const {playerChoice} = this.state
    let result
    if (playerChoice === opponentChoice) {
      result = resultStatusConstants.tie
    } else if (
      (playerChoice === choices.rock && opponentChoice === choices.scissors) ||
      (playerChoice === choices.paper && opponentChoice === choices.rock) ||
      (playerChoice === choices.scissors && opponentChoice === choices.paper)
    ) {
      result = resultStatusConstants.won
    } else {
      result = resultStatusConstants.lost
    }
    return result
  }

  getResultView = () => {
    const {playerChoice} = this.state
    const {choicesList} = this.props
    const randomNum = Math.floor(Math.random() * choicesList.length)
    const opponentChoice = choicesList[randomNum].id
    console.log(`opp ${opponentChoice}`)
    console.log(`player ${playerChoice}`)
    const playerChoiceList = choicesList.filter(
      eachObj => eachObj.id === playerChoice,
    )
    const opponentChoiceList = choicesList.filter(
      eachObj => eachObj.id === opponentChoice,
    )
    const playerChoiceImgUrl = playerChoiceList[0].imageUrl
    const opponentChoiceImgUrl = opponentChoiceList[0].imageUrl

    const result = this.getResult(opponentChoice)

    return (
      <ResultViewContainer>
        <ResultStatsContainer>
          <ResultPlayerChoiceContainer>
            <ResultHeading>YOU</ResultHeading>
            <ResultImage src={playerChoiceImgUrl} />
          </ResultPlayerChoiceContainer>
          <ResultPlayerChoiceContainer>
            <ResultHeading>OPPONENT</ResultHeading>
            <ResultImage src={opponentChoiceImgUrl} />
          </ResultPlayerChoiceContainer>
        </ResultStatsContainer>
        <ResultContainer>
          <ResultHeading>{result}</ResultHeading>
          <PlayAgainButton type="button" onClick={this.onPlayAgain}>
            Play Again
          </PlayAgainButton>
        </ResultContainer>
      </ResultViewContainer>
    )
  }

  getGameRunningView = () => {
    const {choicesList} = this.props
    return (
      <ButtonsContainer>
        {choicesList.map(eachObj => (
          <ChoiceButton
            key={eachObj.id}
            buttonDetails={eachObj}
            onPlaceChoice={this.onPlaceChoice}
          />
        ))}
      </ButtonsContainer>
    )
  }

  renderGame = () => {
    const {isGameRunning} = this.state
    let gameResult
    switch (isGameRunning) {
      case true:
        gameResult = this.getGameRunningView()
        break
      case false:
        gameResult = this.getResultView()
        break
      default:
        gameResult = null
        break
    }
    return gameResult
  }

  render() {
    console.log('render')
    return (
      <GameContainer>
        <HeadingContainer>
          <HeadingSubContainer>
            <Heading>ROCK</Heading>
            <Heading>PAPER</Heading>
            <Heading>SCISSORS</Heading>
          </HeadingSubContainer>
          <ScoreContainer>
            <Heading score="true">Score</Heading>
            <Heading score="true" fontFamily="true">
              0
            </Heading>
          </ScoreContainer>
        </HeadingContainer>
        {this.renderGame()}
      </GameContainer>
    )
  }
}

export default RockPaperScissors
