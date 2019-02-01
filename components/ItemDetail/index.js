import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/native'
import Swiper from 'react-native-swiper'
import { Dimensions } from "react-native";

const widthWindows = Dimensions.get("window").width

const NameArticle = styled.Text`
fontSize: 25;
marginTop : 5px;
marginBottom : 5px;
color : black;
marginLeft : 20px;
`

const Prix = styled.Text`
fontSize: 25;
marginTop : 5px;
marginBottom : 5px;
color : black;
textAlign : right;
marginRight : 20px;
`

const StyledViewArray = styled.View`
justifyContent: center;
`

const StyledImage = styled.Image`
 align-self: center;
 maxHeight: 250;
 maxWidth : ${widthWindows};
`
const StyledViewImage = styled.View`
width : 100%;
backgroundColor :white;
height : 250;
justifyContent : center;
`

const ViewRow = styled.View`
flexDirection : row;
backgroundColor : white;

`

const ViewFlex = styled.View`
flex : 1;
borderTopWidth : 1px;
`

export default class ItemDetail extends React.Component {

    static propTypes = {
        nameArticle: PropTypes.string,
        prix: PropTypes.string,
        functionPress: PropTypes.func
    }


    render() {
        const { nameArticle, prix } = this.props;

        return (
            <StyledViewArray>
            <Swiper  height={250} >
            <StyledViewImage>
                    <StyledImage
                        source={
                            require('../../assets/images/robot-dev.png')
                        }
                        resizeMode="stretch"
                    />
                </StyledViewImage>
                <StyledViewImage>
                    <StyledImage
                        source={
                            require('../../assets/images/robot-prod.png')
                        }
                        resizeMode="stretch"
                    />
                </StyledViewImage>
                <StyledViewImage>
                    <StyledImage
                        source={
                            require('../../assets/images/planSalle.png')
                        }
                        resizeMode="stretch"
                    />
                </StyledViewImage>
            </Swiper>

                <ViewRow>
                    <ViewFlex>
                        <NameArticle>{`${nameArticle}`}</NameArticle>
                    </ViewFlex>
                    <ViewFlex>
                        <Prix>{`${prix} €`}</Prix>
                    </ViewFlex>
                </ViewRow>


            </StyledViewArray>
        )
    }



}
