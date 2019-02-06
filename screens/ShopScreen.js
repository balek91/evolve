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
          <Item nameArticle={'Pop Corn'} prix={'4'} photo={'https://target.scene7.com/is/image/Target/GUEST_2233bb5e-de0e-4669-a05e-455421d9ac47?wid=488&hei=488&fmt=pjpeg'} functionPress={() => this.goToDetail('Pop Corn' , '4' , false, 'popCorn')}></Item>
          <Item nameArticle={'Coca-Cola'} prix={'5'} photo={'http://www.nikkisushi.com/aix-centre/208-thickbox_default/coca-cola.jpg'} functionPress={() => this.goToDetail('Coca-Cola' , '5' , false, 'coca')}></Item>
        </StyledRowView>
        <StyledRowView>
          <Item nameArticle={'Location Casque VR'} prix={'60'} photo={'https://dyw7ncnq1en5l.cloudfront.net/optim/produits/36/28793/samsung-gear-vr-2015-sm-322_1bb427813ffd2a02__450_400.jpg'} functionPress={() => this.goToDetail('Location Casque VR' , '60' , false, 'vr')}></Item>
          <Item nameArticle={'Pull'} prix={'37'} photo={'https://cdn.shopify.com/s/files/1/2125/7599/products/pull-a-capuche-counter-strike-cs-go-marine-s-gamer-jeux-video-sweat-last-up-forever-hotte-chandail-capuchon-shirt-vetements-plein-air-chemise-active-manchon_707_1024x1024.jpg?v=1524831013'} functionPress={() => this.goToDetail('Pull' , '37' , true, 'pull')} ></Item>
        </StyledRowView>
        <StyledRowView>
          <Item nameArticle={'Maillot'} prix={'19'} photo={'https://i1.wp.com/www.my-esport.fr/wp-content/uploads/2017/08/maillot-Fnatic-face.jpg'} functionPress={() => this.goToDetail('Maillot' , '19' , true, 'maillot')}></Item>
        </StyledRowView>
      </ViewBackgroundImage>
    )
  }

  goToDetail = (article,prix, vetement, item) => {
    this.props.navigation.push('Detail',{
      article: article,
      prix: prix,
      vetement:vetement,
      item : item
    })
  }
}