import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/native'
import Swiper from 'react-native-swiper'
import { Dimensions } from "react-native"
import QuickPicker from 'quick-picker'
import { Alert } from 'react-native'
import Item from '../ItemShop'

const widthWindows = Dimensions.get("window").width

const NameArticle = styled.Text`
fontSize: 25;
marginTop : 5px;
marginBottom : 5px;
color : black;
marginLeft : 10px;
`
const StyledRowView = styled.View`
flex-direction : row;`

const Prix = styled.Text`
fontSize: 25;
marginTop : 5px;
marginBottom : 5px;
color : black;
textAlign : right;
marginRight : 10px;
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

const ViewRowArticlePrix = styled.View`
flexDirection : row;
backgroundColor : white;

`

const ViewFlex = styled.View`
flex : 1;
borderTopWidth : 1px;
`
const ViewRowColorSize = styled.View`
marginTop : 15px;
flex-direction : row;
width : 90%;
marginLeft : 5%;
justifyContent : center;


`

const ViewRowQuantity = styled.View`
marginTop : 15px;
width : 60%;
marginLeft : 20%;
justifyContent : center;


`

const TouchableColor = styled.TouchableOpacity`
flex-direction : row;
flex : 1;
backgroundColor : white;
borderRightWidth : 1px;
justifyContent : center;
borderBottomLeftRadius:100;
borderTopLeftRadius:100;
`


const TouchableSize = styled.TouchableOpacity`
flex-direction : row;
flex : 1;
backgroundColor : white;
borderRightWidth : 1px;
justifyContent : center;
borderBottomRightRadius:100;
borderTopRightRadius:100;
`


const TouchableQuantity = styled.TouchableOpacity`
flex-direction : row;
flex : 1;
backgroundColor : white;
borderRightWidth : 1px;
justifyContent : center;
borderRadius:100;

`



const TextPicker = styled.Text`
fontSize : 25;
textAlign : center;
justifyContent : center;
marginTop : 2px;
flex : 2;`

const ViewDownArrow = styled.View`
flex : 1;
justifyContent : center;`


const StyledDownArrow = styled.Image`
 align-self: center;
 width : 22;

`

const TouchablePanier = styled.TouchableOpacity`
width : 50%;
marginLeft : 25%;
backgroundColor  : #013A4D
marginTop : 15px;
borderRadius : 50;`

const TextPanier = styled.Text`
color : white;
fontSize : 25;
textAlign : center;`

const ViewOtherProduct = styled.View`
margin : 15px 0px 15px 10px;
`

const TextOtherProduct = styled.Text`
color : white;
fontSize : 25;
fontWeight : bold;`


export default class ItemDetail extends React.Component {

    static propTypes = {
        nameArticle: PropTypes.string,
        prix: PropTypes.string,
        functionPress: PropTypes.func,
        vetement: PropTypes.any
    }

    state = {
        color: 'Color ?',
        size: 'Size ?',
        quantity: 'Quantity ?'
    }


    render() {
        const { nameArticle, prix , vetement} = this.props;

        return (
            <StyledViewArray>
                <Swiper height={250} >
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

                <ViewRowArticlePrix>
                    <ViewFlex>
                        <NameArticle>{`${nameArticle}`}</NameArticle>
                    </ViewFlex>
                    <ViewFlex>
                        <Prix>{`${prix} €`}</Prix>
                    </ViewFlex>
                </ViewRowArticlePrix>
                {
                    vetement ?
                        (
                            <ViewRowColorSize>
                                <TouchableColor onPress={this.selectColor}>

                                    <TextPicker>{this.state.color}</TextPicker>

                                    <ViewDownArrow>
                                        <StyledDownArrow
                                            source={
                                                require('../../assets/icons/down-arrow.png')
                                            } />
                                    </ViewDownArrow>
                                </TouchableColor>
                                <TouchableSize onPress={this.selectSize}>
                                    <TextPicker>{this.state.size}</TextPicker>
                                    <ViewDownArrow>
                                        <StyledDownArrow
                                            source={
                                                require('../../assets/icons/down-arrow.png')
                                            } />
                                    </ViewDownArrow>
                                </TouchableSize>
                            </ViewRowColorSize>

                        )
                        : (
                            <ViewRowQuantity>
                                <TouchableQuantity onPress={this.selectQuantity}>
                                    <TextPicker>{this.state.quantity}</TextPicker>
                                    <ViewDownArrow>
                                        <StyledDownArrow
                                            source={
                                                require('../../assets/icons/down-arrow.png')
                                            } />
                                    </ViewDownArrow>
                                </TouchableQuantity>
                            </ViewRowQuantity>
                        )
                }

                <TouchablePanier onPress={this.addToCart}>
                    <TextPanier>Add to cart</TextPanier>
                </TouchablePanier>

                <ViewOtherProduct>
                    <TextOtherProduct>
                        Other Products
                    </TextOtherProduct>
                </ViewOtherProduct>

                <StyledRowView>
                    <Item nameArticle={'Chips'} prix={'4'} functionPress={this.goToDetail}></Item>
                    <Item nameArticle={'Coca-Cola'} prix={'5'}></Item>
                </StyledRowView>
                <StyledRowView>
                    <Item nameArticle={'Location Casque VR'} prix={'60'}></Item>
                    <Item nameArticle={'Pull'} prix={'37'}></Item>
                </StyledRowView>
                <StyledRowView>
                    <Item nameArticle={'Maillot'} prix={'19'}></Item>
                </StyledRowView>
            </StyledViewArray>
        )
    }

    selectColor = () => {
        console.log('ok')
        QuickPicker.open({
            items: ['Green', 'Blue', 'White', 'Black'],
            selectedValue: 'Green',
            onPressDone: (selectedValueFromPicker) => {
                this.setState({ color: selectedValueFromPicker })
                QuickPicker.close()
            }
        })
    }

    selectSize = () => {
        QuickPicker.open({
            items: ['XS - 36', 'S - 38', 'M - 40', 'L - 42', 'XL - 44', 'XXL - 46'],
            selectedValue: 'XS - 36',
            onPressDone: (selectedValueFromPicker) => {
                this.setState({ size: selectedValueFromPicker })
                QuickPicker.close()
            }
        })
    }

    selectQuantity = () => {
        QuickPicker.open({
            items: ['1','2','3','4','5','6', '7','8','9'],
            selectedValue: '1',
            onPressDone: (selectedValueFromPicker) => {
                this.setState({ quantity: selectedValueFromPicker })
                QuickPicker.close()
            }
        })
    }

    addToCart = () => {
        Alert.alert('Sucess !', 'Item has add to cart')
    }



}
