
import React, { Component } from 'react';
import { SafeAreaView, Text, View, } from 'react-native';

import { Provider } from "react-redux";
import configureStore from "./src/store";
import DataHandler from "./src/services/DataHandler";
const reducers = require("./src/store/Reducer").default;



class App extends Component {
  constructor(props) {
    console.reportErrorsAsExceptions = false;
    console.error = () => { };
    super(props);
    this.state = {
      isLoading: true,
      network: true,
      store: configureStore(reducers, () => {
        this.setState({ isLoading: false })
        this._loadingCompleted();
      }),
    };

    this.properties = this.props.navigation
  }

  _loadingCompleted() {
    DataHandler.setStore(this.state.store);
  }

  render() {

    if (this.state.isLoading) {
      return null;
    }

    return (
      <View style={{ flex: 1 }}>


        <SafeAreaView style={{ flex: 1, }}>
          <Provider store={this.state.store}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
              <Text>Boiler plate with saga</Text>
            </View>
          </Provider>
        </SafeAreaView>

      </View>
    )
  }
}

export default App;
