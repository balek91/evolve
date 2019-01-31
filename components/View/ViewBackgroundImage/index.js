import PropTypes from 'prop-types'
import React from 'react'
import {
    View,
    ImageBackground, ScrollView
} from 'react-native'
import Header from '../HeaderContainer'

export default class ViewBackgroundImage extends React.Component {

    static propTypes = {
        namePage: PropTypes.string,
        }
    render() {
        const {namePage} = this.props
        return (
            <View>
                <ImageBackground source={require('../../../assets/images/background2.jpeg')} style={{ width: '100%', height: '100%' }}>
                
                <ScrollView>
                <Header titleText={namePage}></Header>
                    {this.props.children}
                </ScrollView>
                </ImageBackground>
            </View>

        )
    }
}
