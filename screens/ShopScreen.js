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
          <Item nameArticle={'Pop Corn'} prix={'4'} functionPress={() => this.goToDetail('Pop Corn' , '4' , false)}></Item>
          <Item nameArticle={'Coca-Cola'} prix={'5'} functionPress={() => this.goToDetail('Coca-Cola' , '5' , false)}></Item>
        </StyledRowView>
        <StyledRowView>
          <Item nameArticle={'Location Casque VR'} prix={'60'} functionPress={() => this.goToDetail('Location Casque VR' , '60' , false)}></Item>
          <Item nameArticle={'Pull'} prix={'37'} functionPress={() => this.goToDetail('Pull' , '37' , true)} ></Item>
        </StyledRowView>
        <StyledRowView>
          <Item nameArticle={'Maillot'} prix={'19'} functionPress={() => this.goToDetail('Maillot' , '19' , true)}></Item>
        </StyledRowView>
      </ViewBackgroundImage>
    )
  }

  goToDetail = (article,prix, vetement) => {
    this.props.navigation.push('Detail',{
      article: article,
      prix: prix,
      vetement:vetement
    })
  }
}