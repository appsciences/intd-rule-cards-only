import {Font} from "expo";
import React from "react";
import Swiper from "react-native-swiper";
import {AsyncStorage, Image, Text, View, ScrollView, StyleSheet, Platform} from "react-native";
import RuleContainer from "./ruleContainer";
import styles from "./../styles/styles";

const _ = require('lodash');
const background = require('../../assets/images/background.png')

export default class App extends React.Component {

  state={fontLoaded:false}

  componentDidMount() {

    Font.loadAsync({
      'OpenSans-Light': require('../../assets/fonts/OpenSans-Light.ttf'),
      'OpenSans': require('../../assets/fonts/OpenSans-Regular.ttf'),
      'OpenSans-Bold': require('../../assets/fonts/OpenSans-Semibold.ttf'),
      'Quicksand-Bold': require('../../assets/fonts/Quicksand-Bold.ttf'),
      'Quicksand-Light': require('../../assets/fonts/Quicksand-Light.ttf'),
      'Quicksand-Medium': require('../../assets/fonts/Quicksand-Medium.ttf'),
      'Quicksand-Regular': require('../../assets/fonts/Quicksand-Regular.ttf'),
    }).then(value => {
      this.setState({fontLoaded: true})
    })

  }

    render = () =>
        this.state.fontLoaded &&
        <Image
            source={background}
            style={[styles.backgroundImage]}
        >
                <Swiper
                    ref='swiper'
                    showsPagination={false}
                    scrollEnabled={false}
                    index={this.state.swipeIndex}>

                    <RuleContainer
                        index={this.state.rulesIndex}
                        onScroll={this.gotoCats}
                        onShowTC={this.showTC}
                        showTC={this.state.showTC}
                        category={this.state.category}
                        backToGame={this.backToGame}
                    />


                </Swiper>

        </Image>

}

const localStyles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});