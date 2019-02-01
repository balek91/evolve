import PropTypes from 'prop-types'
import React from 'react'
import {
    View,
    ImageBackground, ScrollView
} from 'react-native'
import HeaderBack from '../HeaderBackContainer'
import Header from '../HeaderContainer'

export default class ViewBackgroundImage extends React.Component {

    static propTypes = {
        namePage: PropTypes.string,
        goBack : PropTypes.func
        }
    render() {
        const {namePage, goBack} = this.props
        return (
            <View>
                <ImageBackground source={require('../../../assets/images/background2.jpeg')} style={{ width: '100%', height: '100%' }}>
                
                <ScrollView>
                    {
                        goBack ? (<HeaderBack titleText={namePage} goBack= {goBack}></HeaderBack>) : (<Header titleText={namePage}></Header>)
                    }
                
                    {this.props.children}
                </ScrollView>
                </ImageBackground>
            </View>

        )
    }
}
