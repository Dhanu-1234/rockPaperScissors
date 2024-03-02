import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import 'reactjs-popup/dist/index.css'
import ChoiceButton from '../ChoiceButton'
import {
  GameContainer,
  HeadingContainer,
  HeadingSubContainer,
  Heading,
  Paragraph,
  ScoreContainer,
  ButtonsContainer,
  ResultViewContainer,
  ResultStatsContainer,
  ResultPlayerChoiceContainer,
  ResultHeading,
  Result,
  ResultImage,
  ResultContainer,
  PlayAgainButton,
  PopupContainer,
  PopupContentContainer,
  PopupCloseButton,
  RulesImage,
  TriggerButton,
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
  state = {isGameRunning: true, playerChoice: '', opponentChoice: '', score: 0}

  onPlaceChoice = (playerChoice, opponentChoice, result) => {
    if (result === 'tie') {
      this.setState({playerChoice, opponentChoice, isGameRunning: false})
    } else if (result === 'won') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        playerChoice,
        opponentChoice,
        isGameRunning: false,
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score - 1,
        playerChoice,
        opponentChoice,
        isGameRunning: false,
      }))
    }
  }

  onIncreaseScore = () => {
    this.setState(prevState => ({
      score: prevState.score + 1,
    }))
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
    const {playerChoice, opponentChoice} = this.state
    const {choicesList} = this.props
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
            <ResultImage src={playerChoiceImgUrl} alt="your choice" />
          </ResultPlayerChoiceContainer>
          <ResultPlayerChoiceContainer>
            <ResultHeading>OPPONENT</ResultHeading>
            <ResultImage src={opponentChoiceImgUrl} alt="opponent choice" />
          </ResultPlayerChoiceContainer>
        </ResultStatsContainer>
        <ResultContainer>
          <Result>{result}</Result>
          <PlayAgainButton type="button" onClick={this.onPlayAgain}>
            PLAY AGAIN
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
            choicesList={choicesList}
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
    const {score} = this.state
    console.log('render')
    return (
      <GameContainer>
        <HeadingContainer>
          <HeadingSubContainer>
            <Heading>Rock Paper Scissors</Heading>
          </HeadingSubContainer>
          <ScoreContainer>
            <Paragraph score="true">Score</Paragraph>
            <Paragraph score="true" fontFamily="true">
              {score}
            </Paragraph>
          </ScoreContainer>
        </HeadingContainer>
        {this.renderGame()}
        <PopupContainer>
          <Popup
            modal
            trigger={
              <TriggerButton type="button" className="trigger-button">
                Rules
              </TriggerButton>
            }
          >
            {close => (
              <PopupContentContainer>
                <PopupCloseButton
                  type="button"
                  aria-label="popup close"
                  className="close-button"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </PopupCloseButton>
                <div>
                  <RulesImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </div>
              </PopupContentContainer>
            )}
          </Popup>
        </PopupContainer>
      </GameContainer>
    )
  }
}

export default RockPaperScissors
