import React, { Component } from 'react';
import  {
    AppRegistry,
    TouchableNativeFeedback,
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native';

class FixedDimensionsBasics  extends Component {
    _onPressButton() {
        alert("You tapped the button!");
    }

    render() {
        return (
            <TouchableNativeFeedback onPress={this._onPressButton}>
                <Text>Button</Text>
            </TouchableNativeFeedback>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
AppRegistry.registerComponent('FixedDimensionsBasics', () => FixedDimensionsBasics);