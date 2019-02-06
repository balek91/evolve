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
maxWidth :  ${widthWindows};
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
        const { nameArticle, prix, vetement, item } = this.props;
        if (item == 'popCorn') {
            return (
                <StyledViewArray>
                    <Swiper height={250} >
                        <StyledViewImage>
                            <StyledImage
                                source={
                                    require('../../assets/images/item/popcorn.jpg')
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
                        <Item nameArticle={'Pop Corn'} prix={'4'} photo={'https://target.scene7.com/is/image/Target/GUEST_2233bb5e-de0e-4669-a05e-455421d9ac47?wid=488&hei=488&fmt=pjpeg'} ></Item>
                        <Item nameArticle={'Coca-Cola'} prix={'5'} photo={'http://www.nikkisushi.com/aix-centre/208-thickbox_default/coca-cola.jpg'} ></Item>
                    </StyledRowView>
                    <StyledRowView>
                        <Item nameArticle={'Location Casque VR'} prix={'60'} photo={'https://dyw7ncnq1en5l.cloudfront.net/optim/produits/36/28793/samsung-gear-vr-2015-sm-322_1bb427813ffd2a02__450_400.jpg'} ></Item>
                        <Item nameArticle={'Pull'} prix={'37'} photo={'https://cdn.shopify.com/s/files/1/2125/7599/products/pull-a-capuche-counter-strike-cs-go-marine-s-gamer-jeux-video-sweat-last-up-forever-hotte-chandail-capuchon-shirt-vetements-plein-air-chemise-active-manchon_707_1024x1024.jpg?v=1524831013'} ></Item>
                    </StyledRowView>
                    <StyledRowView>
                        <Item nameArticle={'Maillot'} prix={'19'} photo={'https://i1.wp.com/www.my-esport.fr/wp-content/uploads/2017/08/maillot-Fnatic-face.jpg'} ></Item>
                    </StyledRowView>
                </StyledViewArray>
            )
        }
        else if (item == 'coca') {
            return (
                <StyledViewArray>
                    <Swiper height={250} >
                        <StyledViewImage>
                            <StyledImage
                                source={
                                    require('../../assets/images/item/coca.jpg')
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
                        <Item nameArticle={'Maillot'} prix={'19'} photo={'https://i1.wp.com/www.my-esport.fr/wp-content/uploads/2017/08/maillot-Fnatic-face.jpg'} ></Item>
                        <Item nameArticle={'Coca-Cola'} prix={'5'} photo={'http://www.nikkisushi.com/aix-centre/208-thickbox_default/coca-cola.jpg'} ></Item>
                    </StyledRowView>
                    <StyledRowView>
                        <Item nameArticle={'Location Casque VR'} prix={'60'} photo={'https://dyw7ncnq1en5l.cloudfront.net/optim/produits/36/28793/samsung-gear-vr-2015-sm-322_1bb427813ffd2a02__450_400.jpg'} ></Item>
                        <Item nameArticle={'Pull'} prix={'37'} photo={'https://cdn.shopify.com/s/files/1/2125/7599/products/pull-a-capuche-counter-strike-cs-go-marine-s-gamer-jeux-video-sweat-last-up-forever-hotte-chandail-capuchon-shirt-vetements-plein-air-chemise-active-manchon_707_1024x1024.jpg?v=1524831013'} ></Item>
                    </StyledRowView>
                </StyledViewArray>
            )
        }
        else if (item == 'vr') {
            return (
                <StyledViewArray>
                    <Swiper height={250} >
                        <StyledViewImage>
                            <StyledImage
                                source={
                                    require('../../assets/images/item/vr.jpg')
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
                        <Item nameArticle={'Pop Corn'} prix={'4'} photo={'https://target.scene7.com/is/image/Target/GUEST_2233bb5e-de0e-4669-a05e-455421d9ac47?wid=488&hei=488&fmt=pjpeg'} ></Item>
                        <Item nameArticle={'Maillot'} prix={'19'} photo={'https://i1.wp.com/www.my-esport.fr/wp-content/uploads/2017/08/maillot-Fnatic-face.jpg'} ></Item>
                    </StyledRowView>
                    <StyledRowView>
                        <Item nameArticle={'Location Casque VR'} prix={'60'} photo={'https://dyw7ncnq1en5l.cloudfront.net/optim/produits/36/28793/samsung-gear-vr-2015-sm-322_1bb427813ffd2a02__450_400.jpg'} ></Item>
                        <Item nameArticle={'Pull'} prix={'37'} photo={'https://cdn.shopify.com/s/files/1/2125/7599/products/pull-a-capuche-counter-strike-cs-go-marine-s-gamer-jeux-video-sweat-last-up-forever-hotte-chandail-capuchon-shirt-vetements-plein-air-chemise-active-manchon_707_1024x1024.jpg?v=1524831013'} ></Item>
                    </StyledRowView>

                </StyledViewArray>
            )
        }
        else if (item == 'pull') {
            return (
                <StyledViewArray>
                    <Swiper height={250} >
                        <StyledViewImage>
                            <StyledImage
                                source={
                                    require('../../assets/images/item/pull.jpg')
                                }
                                resizeMode="stretch"
                            />
                        </StyledViewImage>
                        <StyledViewImage>
                            <StyledImage
                                source={
                                    require('../../assets/images/item/pull2.jpg')
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
                        <Item nameArticle={'Pop Corn'} prix={'4'} photo={'https://target.scene7.com/is/image/Target/GUEST_2233bb5e-de0e-4669-a05e-455421d9ac47?wid=488&hei=488&fmt=pjpeg'} ></Item>
                        <Item nameArticle={'Coca-Cola'} prix={'5'} photo={'http://www.nikkisushi.com/aix-centre/208-thickbox_default/coca-cola.jpg'} ></Item>
                    </StyledRowView>
                    <StyledRowView>
                        <Item nameArticle={'Pull'} prix={'37'} photo={'https://cdn.shopify.com/s/files/1/2125/7599/products/pull-a-capuche-counter-strike-cs-go-marine-s-gamer-jeux-video-sweat-last-up-forever-hotte-chandail-capuchon-shirt-vetements-plein-air-chemise-active-manchon_707_1024x1024.jpg?v=1524831013'} ></Item>
                        <Item nameArticle={'Maillot'} prix={'19'} photo={'https://i1.wp.com/www.my-esport.fr/wp-content/uploads/2017/08/maillot-Fnatic-face.jpg'} ></Item>
                    </StyledRowView>
                </StyledViewArray>
            )
        }
        else if (item == 'maillot') {
            return (
                <StyledViewArray>
                    <Swiper height={250} >
                        <StyledViewImage>
                            <StyledImage
                                source={
                                    require('../../assets/images/item/maillot.jpg')
                                }
                                resizeMode="stretch"
                            />
                        </StyledViewImage>
                        <StyledViewImage>
                            <StyledImage
                                source={
                                    require('../../assets/images/item/maillot2.jpg')
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
                        <Item nameArticle={'Pop Corn'} prix={'4'} photo={'https://target.scene7.com/is/image/Target/GUEST_2233bb5e-de0e-4669-a05e-455421d9ac47?wid=488&hei=488&fmt=pjpeg'} ></Item>
                        <Item nameArticle={'Coca-Cola'} prix={'5'} photo={'http://www.nikkisushi.com/aix-centre/208-thickbox_default/coca-cola.jpg'} ></Item>
                    </StyledRowView>
                    <StyledRowView>
                        <Item nameArticle={'Location Casque VR'} prix={'60'} photo={'https://dyw7ncnq1en5l.cloudfront.net/optim/produits/36/28793/samsung-gear-vr-2015-sm-322_1bb427813ffd2a02__450_400.jpg'} ></Item>
                        <Item nameArticle={'Maillot'} prix={'19'} photo={'https://i1.wp.com/www.my-esport.fr/wp-content/uploads/2017/08/maillot-Fnatic-face.jpg'} ></Item>
                    </StyledRowView>
                </StyledViewArray>
            )
        }
        else {
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
                        <Item nameArticle={'Pop Corn'} prix={'4'} photo={'https://target.scene7.com/is/image/Target/GUEST_2233bb5e-de0e-4669-a05e-455421d9ac47?wid=488&hei=488&fmt=pjpeg'} ></Item>
                        <Item nameArticle={'Coca-Cola'} prix={'5'} photo={'http://www.nikkisushi.com/aix-centre/208-thickbox_default/coca-cola.jpg'} ></Item>
                    </StyledRowView>
                    <StyledRowView>
                        <Item nameArticle={'Location Casque VR'} prix={'60'} photo={'https://dyw7ncnq1en5l.cloudfront.net/optim/produits/36/28793/samsung-gear-vr-2015-sm-322_1bb427813ffd2a02__450_400.jpg'} ></Item>
                        <Item nameArticle={'Pull'} prix={'37'} photo={'https://cdn.shopify.com/s/files/1/2125/7599/products/pull-a-capuche-counter-strike-cs-go-marine-s-gamer-jeux-video-sweat-last-up-forever-hotte-chandail-capuchon-shirt-vetements-plein-air-chemise-active-manchon_707_1024x1024.jpg?v=1524831013'} ></Item>
                    </StyledRowView>

                </StyledViewArray>
            )
        }

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
            items: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
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
