import React, {
  Component
} from 'react';
import PropTypes from 'prop-types'
import { Text, View, Image } from 'react-native';

import styles from '../../styles/styles'

export default class HowCardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <View style={styles.howView}>
        <View>
          <View style={styles.colorTextView}>
            <Text style={styles.cardText}>Qqqqqq </Text>
            <Text style={[styles.cardText, { color: '#9EEFAC' }]}>qqqq-</Text>
            <Text style={[styles.cardText, { color: '#52948B' }]}>qqqqq</Text>
          </View>
          <View>
            <Text style={styles.cardText}>qqqqqiqqq qq</Text>
          </View>
          <View>
            <Text style={styles.cardText}>qqqqqqq qqqqqqq.</Text>
          </View>
        </View>
        <View style={styles.allImageView}>
          <Image source={require('../../../assets/icons/all.png')} />
        </View>
      </View>
    )
  }
}

HowCardView.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
}

HowCardView.defaultProps = {}