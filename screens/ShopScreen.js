import React from 'react'
import ViewBackgroundImage from '../components/View/ViewBackgroundImage'
import Item from '../components/ItemShop'
import styled from 'styled-components'

const StyledRowView = styled.View`
flex-direction : row;`

export default class ShopScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ViewBackgroundImage namePage={'SHOP'}>
        <StyledRowView>
          <Item nameArticle={'Pop Corn'} prix={'4'}></Item>
          <Item nameArticle={'Coca-Cola'} prix={'5'}></Item>
        </StyledRowView>
        <StyledRowView>
          <Item nameArticle={'Location Casque VR'} prix={'60'}></Item>
          <Item nameArticle={'Pull'} prix={'37'}></Item>
        </StyledRowView>
        <StyledRowView>
          <Item nameArticle={'Maillot'} prix={'19'}></Item>
        </StyledRowView>
      </ViewBackgroundImage>
    )
  }
}