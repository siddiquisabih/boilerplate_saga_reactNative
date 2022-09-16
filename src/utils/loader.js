import React, { Component } from 'react';
import {
    View,
    Image,
    Modal
} from 'react-native';
import loader from "../assets/loader.gif"

export default class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Modal animationType="fade"
                transparent={true}
                visible={this.props.visible}
                onRequestClose={() => {
                    console.log()
                }} >
                <View style={{
                    flex: 1,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}><Image
                        style={{ height: 100, width: 100, }}
                        source={loader}
                    /></View>

                </View>
            </Modal>
           
        );
    }
}
