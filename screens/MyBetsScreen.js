import React from 'react'
import ViewBackgroundImage from '../components/View/ViewBackgroundImage'
import styled from 'styled-components'
import BetDone from '../components/BetDoneElement'

const TextPoint = styled.Text`
font-size : 25;
text-align : right;
color : #FFA264;
justify-content: center;
align-items: center;
`

const TextRank = styled.Text`
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
export default class MyBetsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <ViewBackgroundImage namePage={'MY BETS'} goBack={this.goBack}>
        <ViewRow>
          <LeftText>
              <TextRank>Points : 112</TextRank>
          </LeftText>
          <RigthText>
            <TextPoint>Rank : 2</TextPoint>
          </RigthText>
        </ViewRow>
        <BetDone homeTeam={'Cloud9'} awayTeam={'Faze Clan'} betTeam={'Cloud9'} myCote={'4.20'} status={'sucess'} />
        <BetDone homeTeam={'Faze Clan'} awayTeam={'BIG Clan'} betTeam={'BIG Clan'} myCote={'3.70'} status={'pending'} />
        <BetDone homeTeam={'Cloud9'} awayTeam={'BIG Clan'} betTeam={'Cloud9'} myCote={'5.40'} status={'fail'} />
      </ViewBackgroundImage>
    )
  }

  goBack =() => {
    this.props.navigation.goBack(null)
}
}