import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class LongText extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isCollapsed: true
        }
    }

    render() {
        const { label } = this.props
        return (
            <View>
                <TouchableOpacity onPress={() => this.setState({ isCollapsed: !this.state.isCollapsed})}>
                    <Text style={[style.text, this.state.isCollapsed ? style.collapsed : style.expanded]}>{label}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const style = StyleSheet.create({

    text: {
        fontSize: 20,
        color: 'rgba(255,255,255,0.90)',
        textAlign: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10
    },

    collapsed: {
        maxHeight: 70
    },

    expanded: {
        flex: 1
    }

})

