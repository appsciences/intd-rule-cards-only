import React, {
  Component
} from 'react';
import PropTypes from 'prop-types'
import {Text, View} from 'react-native';

import styles from '../styles/styles'

export default class Rule extends Component {

  render() {
    let {
      children,
      heder,
    } = this.props;
    return (
      <View
        style={styles.container}>
        <Text style={styles.heading}>{heder}</Text>
        <View style={styles.card}>
          {children}
        </View>
      </View>
    )
  }
}

Rule.propTypes = {
  children: PropTypes.object,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  heder: PropTypes.string,
}

Rule.defaultProps = {}