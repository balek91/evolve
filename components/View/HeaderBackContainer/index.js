import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Header = styled.View
`
flex: 1;
justifyContent: center;
alignItems: center;
padding-top : 20px;
padding-bottom : 20px;
`
const StyledTextBold = styled.Text
`
color : white;
fontWeight: bold;
fontSize: 24;
`
const ViewLeft = styled.View`
flex : 1;`
const ViewCenter = styled.View`
alignItems: center;
flex : 1;`
const ViewRight = styled.View`
flex : 1;`
const ViewRow = styled.View`
flex-direction : row;
flex: 1;
justifyContent: center;
alignItems: center;
padding-top : 20px;
padding-bottom : 10px;`
const StyledImage = styled.Image`
margin-left : 8px;
`
const Touchable = styled.TouchableOpacity`
`

export default class HeaderBackContainer extends React.Component {


	static propTypes = {
        titleText: PropTypes.string,
        goBack : PropTypes.func
    }
    
    render(){
        const {titleText, goBack} = this.props
        return(
            
                <ViewRow>
                    <ViewLeft>
                        <Touchable onPress={goBack}>
                            <StyledImage
                                source={
                                    require('../../../assets/icons/back24.png')
                                }
                            />
                        </Touchable>
                    </ViewLeft>
                    <ViewCenter>
                    <StyledTextBold>{titleText}</StyledTextBold>
                    </ViewCenter>
                    <ViewRight>

                    </ViewRight>
                </ViewRow>
        );
    }



}