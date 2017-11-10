import React, {
  Component
} from 'react';

import PropTypes from 'prop-types';

import Swiper from "react-native-swiper";

import {Alert, StyleSheet, Text, View, Image, TouchableHighlight, TouchableWithoutFeedback, Platform} from 'react-native';

import styles from '../styles/styles'

import Rule from './ruleView'

import {Ionicons} from '@expo/vector-icons';

import ViewPager from 'react-native-viewpager'
//var ViewPager = require('./ViewPager');

const PAGES = [
  1,
  2,
  3,
  4,
  5,
];

export default class RuleContainer extends React.Component {

  constructor (props) {
    super(props)
    const dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });
    this.state = {
      index: 0,
      dataSource: dataSource.cloneWithPages(PAGES),
    }
  }

  state = {
    index: 0,
  };

  _renderPage = (data) => {
    switch (data) {
      case 1: return this.renderRulesHi()
      case 2: return this.renderRulesHow()
      case 3: return this.renderRulesExplore()
      case 4: return this.renderRulesHowToPlay()
      default: return this.renderRulesPlay()
    }
  }

  _onChangePage = (page) => {
  }

  renderRulesHi = () => (
    <Rule key="rule-1" header="How to play">
      
    </Rule>
  )

  renderRulesHow = () => (
    <Rule key="rule-2" header="qqq qq qqq">

    </Rule>
  )

  renderRulesPlay = () => (
    <Rule key="rule-3" header="qqq qq qqqq">

    </Rule>
  )
  renderRulesExplore = () => (
    <Rule key="rule-4" header="">
    </Rule>
  )
  renderRulesHowToPlay = () => (
    <Rule key="rule-5" header="how to play">
    </Rule>
  )

  action = () => {
    if (this.props.category) {
      this.props.backToGame()
    } else {
      this.props.onShowTC(true)
    }
  }
  render() {
    return (
      <ViewPager
        style={this.props.style}
        dataSource={this.state.dataSource}
        renderPage={this._renderPage}
        onChangePage={this._onChangePage}
        isLoop={false}
        autoPlay={false}/>
    )
  }
}

Rule.propTypes = {
  index: PropTypes.number,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  onShowTC: PropTypes.func,
  showTC: PropTypes.func,
  backToGame: PropTypes.func,
  category: PropTypes.string,
}

Rule.defaultProps = {
  index: 0,
  title: '',
}

const localStyles = StyleSheet.create({
  tncText: {
    color: "black",
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Quicksand-Bold',
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000"
  },
  viewPager: {
    flex: 1,
    flexDirection: 'row',
  },

  pageStyle: {
    flex: 1
  },

  smallFont: {
    fontSize: 15,
  }


})