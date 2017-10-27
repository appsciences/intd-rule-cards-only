import React, {
  Component
} from 'react';
import PropTypes from 'prop-types'
import { Text, View, Image } from 'react-native';

import styles from '../../styles/styles'

export default class HiCardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <View style={styles.viewStyle}>
        <View style={styles.emptyView}></View>
        <View style={styles.topTextView}>
          <View style={styles.colorTextView}>
            <View>
              <Text style={styles.cardText}>Ruuwar</Text>
            </View>
            <View style={styles.realColorTextView}>
              <Text style={[styles.cardText, { color: '#9EEFAC' }]}>Rele</Text>
              <Text style={styles.cardText}>-ae-</Text>
              <Text style={[styles.cardText, { color: '#4E9187' }]}>Rele</Text>
            </View>
          </View>
          <View style={styles.nonColorText}>
            <Text style={styles.cardText}>qqqqqqqq</Text>
            <Text style={styles.cardText}>qq</Text>
            <Text style={styles.cardText}>qqqqqq</Text>
          </View>
        </View>
        <View style={styles.directionIconView}>
          <View style={styles.twoIconView}>
            <Image source={require('../../../assets/icons/up.png')} />
            <Text>or</Text>
            <Image source={require('../../../assets/icons/right.png')} />
          </View>
          <View style={styles.twoTextView}>
            <Text style={styles.cardText}>ioh</Text>
            <Text style={[styles.cardText, { color: '#9EEFAC', marginLeft: 10 }]}>Rele</Text>
          </View>
        </View>
        <View style={styles.orTextView}>
          <Text style={styles.cardText}>or</Text>
        </View>
        <View style={styles.directionIconView}>
          <View style={styles.twoIconView}>
            <Image source={require('../../../assets/icons/down.png')} />
            <Text>or</Text>
            <Image source={require('../../../assets/icons/left.png')} />
          </View>
          <View style={styles.twoTextView}>
            <Text style={styles.cardText}>ioh</Text>
            <Text style={[styles.cardText, { color: '#4E9187', marginLeft: 10 }]}>Rele</Text>
          </View>
        </View>
        <View style={styles.emptyView}></View>
      </View >

    )
  }
}

HiCardView.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
}

HiCardView.defaultProps = {}