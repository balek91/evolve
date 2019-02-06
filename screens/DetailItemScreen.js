import React from 'react'
import ViewBackgroundImage from '../components/View/ViewBackgroundImage'
import styled from 'styled-components'
import ItemDetail from '../components/ItemDetail'

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

const Touchable = styled.TouchableOpacity`
`
export default class DetailItemScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    article: '',
    prix: '',
    vetement:'',
    item : ''
  } 
  
  render() {
    return (
      <ViewBackgroundImage namePage={''} goBack={this.goBack}>
        <ItemDetail nameArticle={this.state.article} prix={this.state.prix} vetement={this.state.vetement} item={this.state.item}/>
      </ViewBackgroundImage>
    )
  }

  goBack =() => {
    this.props.navigation.goBack(null)
}

componentDidMount() {
  const { navigation } = this.props;
  this.setState({
    article: navigation.getParam('article', ''),
    prix: navigation.getParam('prix', ''),
    vetement: navigation.getParam('vetement', ''),
    item : navigation.getParam('item', ''),
  });
}

}