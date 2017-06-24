import Expo, { Svg } from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from "./components/Icon";

const loadFonts = fonts => fonts.map(font => Expo.Font.loadAsync(font));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async loadAssets() {
    await Promise.all(loadFonts([
      {
        ...{
          "icomoon": require("./assets/fonts/icomoon.ttf"),
          "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
          "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf")
        }
      }
    ]));
    this.setState({isReady: true});
  }

  componentWillMount() {
    this.loadAssets();
  }

  render() {
    if (this.state.isReady) {
      return (
        <View style={styles.container}>
          <Icon size={200} name="sun" style={{
            marginBottom: 20,
            color: "#2C4251"
          }} />
        <Text style={{
          color: "#2C4251",
          fontSize: 30,
          textAlign: "center",
          fontFamily: "Poppins-Medium"
        }}>
          Open up main.js to start working on your app!</Text>
        </View>
      );
    }
    return <Expo.AppLoading />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
