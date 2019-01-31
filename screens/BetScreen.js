import React from 'react'
import ViewBackgroundImage from '../components/View/ViewBackgroundImage'
import styled from 'styled-components'
import Bet from '../components/BetElement'

const IconPanier = styled.Image`
`
const TextUnite = styled.Text`
font-size : 25;
text-align : right;
color : #FFA264;
justify-content: center;
align-items: center;
`

const TextMyBet = styled.Text`
font-size : 25;
text-align : left;
color : #FFA264;
justify-content: center;
align-items: center;
`

const ViewRow = styled.View`
flex-direction : row;
flex : 1`

const RigthText = styled.View`
flex : 1;
padding-right : 10;

`

const LeftText = styled.View`
flex : 1;
padding-left : 10;
`
export default class BetScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ViewBackgroundImage namePage={'BET'}>
        <ViewRow>
          <LeftText>
          <TextMyBet>My Bets</TextMyBet>
          </LeftText>
          <RigthText>
          <TextUnite>Nb Unité : 4</TextUnite>
          </RigthText>
        </ViewRow>
        <Bet homeTeam={'Cloud9'} homeTeamCote={'4.30'} awayTeam= {'Faze Clan'}  awayTeamCote={'1.70'}/>
        <Bet homeTeam={'Faze Clan'} homeTeamCote={'2.30'} awayTeam= {'BIG Clan'}  awayTeamCote={'3.70'}/>
        <Bet homeTeam={'Cloud9'} homeTeamCote={'5.40'} awayTeam= {'BIG Clan'}  awayTeamCote={'1.10'}/>
        <Bet homeTeam={'Faze Clan'} homeTeamCote={'2.80'} awayTeam= {'compLexity'}  awayTeamCote={'2.00'}/>
        <Bet homeTeam={'BIG Clan'} homeTeamCote={'4.30'} awayTeam= {'compLexity'}  awayTeamCote={'1.70'}/>
      </ViewBackgroundImage>
    )
  }
}