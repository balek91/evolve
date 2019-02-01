import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledTextArray = styled.Text
    `
fontWeight: 300;
fontSize: 16;
margin:20px 10px 10px 25px;

`

const StyledViewArray = styled.View`
alignItems: center;
backgroundColor: #F5FCFF;
border-radius:10;
border-width:0.5;
margin:10px 20px 10px 20px;
`
const ViewRow = styled.View`
flex-direction : row;
`
const BetButton = styled.TouchableOpacity`
border-radius : 30;
width : 60;
margin-bottom : 5;
`

const BetText = styled.Text`
text-align:center;
`

const BetTextNameView = styled.View`
background-color : green;
padding : 2px 5px 2px 5px;
`

const BetTextValueView = styled.View`
background-color : red;
padding : 2px 5px 2px 5px;
`

const RigthText = styled.View`
flex : 1;
align-items : center;
`

const LeftText = styled.View`
flex : 1;
align-items: center;
`

export default class BetElement extends React.Component {

    static propTypes = {
        homeTeam: PropTypes.string,
        awayTeam: PropTypes.string,
        awayTeamCote : PropTypes.string,
        homeTeamCote : PropTypes.string,
        functionPress : PropTypes.func,
    }


    render() {
        const { homeTeam, homeTeamCote, awayTeam, awayTeamCote, functionPress } = this.props;
        return (

            <StyledViewArray>
                <StyledTextArray>{`${homeTeam} - ${awayTeam}`}</StyledTextArray>
                <ViewRow>
                    <RigthText>
                        <BetButton onPress= {functionPress}>
                            <ViewRow>
                            <BetTextNameView>
                                <BetText>
                                    1
                                </BetText>
                            </BetTextNameView>
                                <BetTextValueView>
                                <BetText>
                                    {homeTeamCote}
                                </BetText>
                                </BetTextValueView>
                            </ViewRow>
                        </BetButton>
                    </RigthText>
                    <LeftText>
                    <BetButton onPress= {functionPress}>
                            <ViewRow>
                            <BetTextNameView>
                                <BetText>
                                    2
                                </BetText>
                            </BetTextNameView>
                                <BetTextValueView>
                                <BetText>
                                    {awayTeamCote}
                                </BetText>
                                </BetTextValueView>
                            </ViewRow>
                        </BetButton>
                    </LeftText>
                </ViewRow>
            </StyledViewArray>

        )
    }

}
