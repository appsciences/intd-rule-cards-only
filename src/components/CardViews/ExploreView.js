import React, {
  Component
} from 'react';
import PropTypes from 'prop-types'
import { Text, View, Image } from 'react-native';

import styles from '../../styles/styles'

export default class ExploreView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <View style={styles.exploreView}>
        <View styl={styles.topTextView}>
          <View style={styles.txtView}>
            <Text style={[styles.expTextView, { color: '#8CF5E7'}]}>Explore </Text>
            <Text style={[styles.expTextView, { color: '#000000'}]}>or</Text>
          </View>
          <View style={styles.txtView}>
            <Text style={[styles.expTextView, { color: '#90ED9B'}]}>maintain</Text>
            <Text style={[styles.expTextView, { color: '#000000'}]}>?</Text>
          </View>
        </View>
        <View style={styles.bottomIonsView}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
          <Image source={require('../../../assets/icons/skip-on-x3.png')} />
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../../../assets/icons/loathe-off.png')} />
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
          <Image source={require('../../../assets/icons/love-on.png')} />
        </View>
        </View>
      </View>
    )
  }
}
ExploreView.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
}

ExploreView.defaultProps = {}