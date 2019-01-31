import React from 'react'
import ViewBackgroundImage from '../components/View/ViewBackgroundImage'
import styled from 'styled-components'

export default class StatsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ViewBackgroundImage namePage={'STATS'}>
      </ViewBackgroundImage>
    )
  }
}