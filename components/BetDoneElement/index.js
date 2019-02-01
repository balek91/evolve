import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledImage = styled.Image`
alignSelf : flex-end;
marginRight : 20px;`

const StyledViewArray = styled.View`
alignItems: center;
backgroundColor: #F5FCFF;
border-radius:10;
border-width:0.5;
margin:10px 20px 10px 20px;
`

const ViewLeft = styled.View`
flex : 2;
justifyContent : center;
`

const ViewRight = styled.View`
flex : 1;
justifyContent : center;
`

const TextRight = styled.Text`
textAlign : right;
fontSize: 16;
margin:10px 20px 10px 20px;
`
const TextLeft = styled.Text`
textAlign : left;
fontSize: 16;
margin:10px 20px 10px 20px;
`

const TextLeftBold = styled.Text`
textAlign : left;
fontSize: 18;
fontWeight : bold;
margin:10px 20px 10px 20px;
`

const ViewRow = styled.View`
flex-direction : row;
`

export default class BetDoneElement extends React.Component {

    static propTypes = {
        homeTeam: PropTypes.string,
        awayTeam: PropTypes.string,
        myCote : PropTypes.string,
        betTeam : PropTypes.string,
        status : PropTypes.string,
    }


    render() {
        const { homeTeam, awayTeam, betTeam, myCote, status } = this.props;
        if(status == "sucess"){
            return (
                
                <StyledViewArray>
                <ViewRow>
                    <ViewLeft>
                        <TextLeftBold>{`${homeTeam} - ${awayTeam}`}</TextLeftBold>
                    </ViewLeft>
                    <ViewRight>
                    <StyledImage
                                source={
                                    require('../../assets/icons/sucess.png')
                                }
                            />
                    </ViewRight>
                </ViewRow>
                <ViewRow>
                    <ViewLeft>
                        <TextLeft>{`My Bet : ${betTeam}`}</TextLeft>
                    </ViewLeft>
                    <ViewRight>
                        <TextRight>{`${myCote}`}</TextRight>
                    </ViewRight>
                </ViewRow>  
                </StyledViewArray>
            )
        }else if(status=="fail"){
            return (
                
                <StyledViewArray>
                <ViewRow>
                    <ViewLeft>
                        <TextLeftBold>{`${homeTeam} - ${awayTeam}`}</TextLeftBold>
                    </ViewLeft>
                    <ViewRight>
                            <StyledImage
                                source={
                                    require('../../assets/icons/fail.png')
                                }
                            />
                    </ViewRight>
                </ViewRow>
                <ViewRow>
                    <ViewLeft>
                        <TextLeft>{`My Bet : ${betTeam}`}</TextLeft>
                    </ViewLeft>
                    <ViewRight>
                        <TextRight>{`${myCote}`}</TextRight>
                    </ViewRight>
                </ViewRow>  
                </StyledViewArray>
            )
        }else{
            return (
                
                <StyledViewArray>
                <ViewRow>
                    <ViewLeft>
                        <TextLeftBold>{`${homeTeam} - ${awayTeam}`}</TextLeftBold>
                    </ViewLeft>
                    <ViewRight>
                    <StyledImage
                                source={
                                    require('../../assets/icons/pending.png')
                                }
                            />
                    </ViewRight>
                </ViewRow>
                <ViewRow>
                    <ViewLeft>
                        <TextLeft>{`My Bet : ${betTeam}`}</TextLeft>
                    </ViewLeft>
                    <ViewRight>
                        <TextRight>{`${myCote}`}</TextRight>
                    </ViewRight>
                </ViewRow>  
                </StyledViewArray>
            )
        }
        }
}
