import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/native'

const StyledTextArray = styled.Text
    `
fontWeight: 300;
fontSize: 16;
margin:20px 10px 10px 25px;

`

const StyledViewArray = styled.View`
justifyContent: center;
alignItems: flex-start;
backgroundColor: #F5FCFF;
border-radius:10;
border-width:0.5;
margin: 0px 5px 10px 20px
width:40%;
`

const StyledImage = styled.Image`
 align-self: center;
 height: 100;
 width: 100;

`

const StyledViewImage = styled.View`
width : 100%;
`

const Touchable = styled.TouchableOpacity`
justifyContent: center;
alignItems: flex-start;
backgroundColor: #F5FCFF;
border-radius:10;
border-width:0.5;
margin: 0px 5px 10px 20px
width:40%;
`
const EmptyView = styled.View``




export default class ItemShop extends React.Component {

    static propTypes = {
        nameArticle: PropTypes.string,
        prix: PropTypes.string,
        functionPress : PropTypes.func
    }


    render() {
        const { nameArticle, prix, functionPress } = this.props;

        return (
            <Touchable onPress={functionPress}>
                    <StyledViewImage>
                        <StyledImage
                            source={
                                require('../../assets/images/robot-dev.png')
                            }
                            resizeMode="stretch"
                        />
                    </StyledViewImage>
                    <StyledTextArray>{`${nameArticle}`}</StyledTextArray>
                    <StyledTextArray>{`${prix} €`}</StyledTextArray>
            </Touchable>
        )
    }


    
}