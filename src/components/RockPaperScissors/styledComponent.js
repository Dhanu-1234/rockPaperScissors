import styled from 'styled-components'

export const GameContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  max-height: auto;
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const HeadingContainer = styled.div`
  background-color: transparent;
  width: 50%;
  padding: 15px;
  margin-bottom: 50px;
  border-style: solid;
  border-width: 2px;
  border-color: #ffffff;
  border-radius: 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

export const HeadingSubContainer = styled.div`
  margin: 2px;
`

export const Heading = styled.h1`
  color: ${props => (props.score === 'true' ? '#223a5f' : '#ffffff')};
  font-weight: ${props =>
    props.score === 'true' && props.fontFamily === 'true' ? 'bold' : '500'};
  font-family: ${props =>
    props.score === 'true' && props.fontFamily === 'true'
      ? 'Roboto'
      : 'Bree Serif'};
  font-size: ${props =>
    props.score === 'true' && props.fontFamily === 'true' ? '25px' : '18px'};
  margin: 5px;
`
export const Paragraph = styled.p`
  color: ${props => (props.score === 'true' ? '#223a5f' : '#ffffff')};
  font-weight: ${props =>
    props.score === 'true' && props.fontFamily === 'true' ? 'bold' : '500'};
  font-family: ${props =>
    props.score === 'true' && props.fontFamily === 'true'
      ? 'Roboto'
      : 'Bree Serif'};
  font-size: ${props =>
    props.score === 'true' && props.fontFamily === 'true' ? '25px' : '18px'};
  margin: 5px;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  width: 120px;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ButtonsContainer = styled.ul`
  background-color: transparent;
  width: 50%;
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

export const ResultViewContainer = styled.div`
  background-color: transparent;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 70%;
  }
`

export const ResultStatsContainer = styled.div`
  background-color: transparent;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ResultPlayerChoiceContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ResultHeading = styled.h2`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  margin-bottom: 5px;
`

export const Result = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  margin-bottom: 5px;
`

export const ResultImage = styled.img`
  height: 220px;
  width: 220px;
  @media screen and (max-width: 768px) {
    height: 120px;
    width: 120px;
  }
`

export const ResultContainer = styled.div`
  margin-top: 10px
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 16px;
  padding: 12px 30px 12px;
  border-width: 0px;
  border-radius: 5px;
  cursor: pointer;
`

export const PopupContainer = styled.div`
  width: 90%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TriggerButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  padding: 10px 20px 10px;
  border-width: 0px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  align-self: flex-end;
`

export const PopupContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const PopupCloseButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  font-size: 28px;
  align-self: flex-end;
`

export const RulesImage = styled.img`
  height: 500px;
  width: 600px;
  @media screen and (max-width: 768px) {
    height: 200px;
    width: 200px;
  }
`
