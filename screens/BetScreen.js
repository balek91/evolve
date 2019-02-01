import React from 'react'
import ViewBackgroundImage from '../components/View/ViewBackgroundImage'
import styled from 'styled-components'
import Bet from '../components/BetElement'
import {Alert} from 'react-native'

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

const Touchable = styled.TouchableOpacity``

export default class BetScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    unit : 5
  }

  render() {
    return (
      <ViewBackgroundImage namePage={'BET'}>
        <ViewRow>
          <LeftText>
            <Touchable onPress={this.navigateToMyBets}>
              <TextMyBet>My Bets</TextMyBet>
            </Touchable>
          </LeftText>
          <RigthText>
          <TextUnite>Nb Unité : {this.state.unit}</TextUnite>
          </RigthText>
        </ViewRow>
        <Bet homeTeam={'Cloud9'} homeTeamCote={'4.30'} awayTeam= {'Faze Clan'}  awayTeamCote={'1.70'} functionPress = {this.confirmBet}/>
        <Bet homeTeam={'Faze Clan'} homeTeamCote={'2.30'} awayTeam= {'BIG Clan'}  awayTeamCote={'3.70'} functionPress = {this.confirmBet}/>
        <Bet homeTeam={'Cloud9'} homeTeamCote={'5.40'} awayTeam= {'BIG Clan'}  awayTeamCote={'1.10'} functionPress = {this.confirmBet}/>
        <Bet homeTeam={'Faze Clan'} homeTeamCote={'2.80'} awayTeam= {'compLexity'}  awayTeamCote={'2.00'} functionPress = {this.confirmBet}/>
        <Bet homeTeam={'BIG Clan'} homeTeamCote={'4.30'} awayTeam= {'compLexity'}  awayTeamCote={'1.70'} functionPress = {this.confirmBet}/>
      </ViewBackgroundImage>
    )
  }

  confirmBet = () => {
    Alert.alert(
        'Confirm',
        'Confirm Bet',
        [
            { text: 'No', onPress: () => console.log('NO Pressed'), style: 'cancel' },
            { text: 'Yes', onPress: () => this.decrementUnit()},
        ]
    )
      }

    decrementUnit = () => {
      if(this.state.unit > 0){
        this.setState({
          unit : this.state.unit - 1
        })
        Alert.alert('Bet confirm !','')

      }else{
        Alert.alert(`No Unit available :(`)
      }
    }

    navigateToMyBets = () => {
      this.props.navigation.push('MesParis',{
      })
    }
}