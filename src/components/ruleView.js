import React, {
  Component
} from 'react';
import PropTypes from 'prop-types'
import { Text, View } from 'react-native';

import styles from '../styles/styles'
import HiCardView from './CardViews/HiCardView'
import HowCardView from './CardViews/HowCardView'
import PlayCardView from './CardViews/PlayCardView'
import ExploreView from './CardViews/ExploreView'

export default class Rule extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  renderCardView = () => {
    switch (this.props.header) {
      case 'How to play':
        return (
          <HiCardView />
        )
      case 'qqq qq qqq':
        return (
          <HowCardView />
        )
      case 'qqq qq qqqq':
        return (
          <PlayCardView />
        )
      case '':
        return (
          <ExploreView />
        )
      default:
        return (
          null
        )
    }
  }

  render() {
    let { header } = this.props;
    return (
      <View
        style={styles.container}>
        <Text style={styles.heading}>{header}</Text>
        <View style={styles.card}>
          {this.renderCardView()}
        </View>
      </View>
    )
  }
}

Rule.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  header: PropTypes.string,
}

Rule.defaultProps = {}