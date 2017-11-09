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
          <Text style={styles.cardText}>You also have the</Text>
          <Text style={styles.cardText}>option to:</Text>
        </View>
        <View style={styles.iconView}>
          <View style={styles.heartView}>
            <Text style={styles.cardText}>Tap  </Text>
            <Image source={require('../../../assets/icons/HEART_STROKE.png')} />
            <Text style={styles.cardText}> to like.</Text>
          </View>
          <View style={styles.unHearView}>
            <Text style={styles.cardText}>Tap</Text>
            <Image source={require('../../../assets/icons/UNHEAR.png')} />
            <Text style={styles.cardText}>to dislike.</Text>
          </View>
          <View style={styles.shuffleView}>
            <Text style={styles.cardText}>Tap</Text>
            <Image source={require('../../../assets/icons/SHUFFLE.png')} />
            <Text style={styles.cardText}> to shuffle.</Text>
          </View>
          <View style={styles.warningView}>
            <Text style={styles.cardText}>Tap</Text>
            <Image source={require('../../../assets/icons/HEART_STROKE.png')} />
            <Text style={styles.cardText}> for more inofo.</Text>
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