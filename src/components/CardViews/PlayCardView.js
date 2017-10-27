import React, {
  Component
} from 'react';
import PropTypes from 'prop-types'
import { Text, View, Image } from 'react-native';

import styles from '../../styles/styles'

export default class PlayCardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    let header = this.state.header;
    return (
      <View style={styles.viewStyle}>
        <View style={styles.textView}>
          <Text style={styles.cardText}>Qqq qqqq qqqq qq</Text>
          <Text style={styles.cardText}>qqqqq qq:</Text>
        </View>
        <View style={styles.iconView}>
          <View style={styles.heartView}>
            <Text style={styles.cardText}>Qqq  </Text>
            <Image source={require('../../../assets/icons/HEART_STROKE.png')} />
            <Text style={styles.cardText}>qq qqqq.</Text>
          </View>
          <View style={styles.unHearView}>
            <Text style={styles.cardText}>Qqq</Text>
            <Image source={require('../../../assets/icons/UNHEAR.png')} />
            <Text style={styles.cardText}>qq qqqqq.</Text>
          </View>
          <View style={styles.shuffleView}>
            <Text style={styles.cardText}>Qqq</Text>
            <Image source={require('../../../assets/icons/SHUFFLE.png')} />
            <Text style={styles.cardText}>qq qqqqq.</Text>
          </View>
          <View style={styles.warningView}>
            <Text style={styles.cardText}>Qqq</Text>
            <Image source={require('../../../assets/icons/HEART_STROKE.png')} />
            <Text style={styles.cardText}>qqq qqqqq qqq.</Text>
          </View>
        </View>
      </View>
    )
  }
}

PlayCardView.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
}

PlayCardView.defaultProps = {}