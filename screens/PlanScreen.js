import React from 'react'
import ViewBackgroundImage from '../components/View/ViewBackgroundImage'
import styled from 'styled-components'

const StyledImage = styled.Image`
width : 300;
height : 440;
`
const StyledView = styled.View`
align-items : center;
`

export default class PlanScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ViewBackgroundImage namePage={'MAP'}>
        <StyledView>
        <StyledImage
          source={
            require('../assets/images/planSalle.png')
          }
        />
        </StyledView>
      </ViewBackgroundImage>
    )
  }
}