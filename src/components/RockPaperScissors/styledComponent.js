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
`

export const HeadingSubContainer = styled.div`
  margin: 2px;
`

export const Heading = styled.h3`
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
`

export const ResultViewContainer = styled.div`
  background-color: transparent;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const ResultHeading = styled.div`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  text-align: center;
  margin-bottom: 5px;
`

export const ResultImage = styled.img`
  height: 200px;
  width: 200px;
`

export const ResultContainer = styled.div`
  margin-top: 10px
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PlayAgainButton = styled.div`
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  padding: 12px 30px 12px;
  border-width: 0px;
  border-radius: 5px;
  cursor: pointer;
`
