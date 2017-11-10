import React, {
    Component
} from 'react';
import PropTypes from 'prop-types'
import { Text, View, Image } from 'react-native';

import styles from '../../styles/styles'

export default class HowToPlayView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
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
                        <Text style={styles.cardText}> to love.</Text>
                    </View>
                    <View style={styles.unHearView}>
                        <Text style={styles.cardText}>Tap </Text>
                        <Image source={require('../../../assets/icons/thumbsdown-howtoplay.png')} />
                        <Text style={styles.cardText}> to loathe.</Text>
                    </View>
                    <View style={styles.shuffleView}>
                        <Text style={styles.cardText}>Tap </Text>
                        <Image source={require('../../../assets/icons/skip-howtoplay.png')} />
                        <Text style={styles.cardText}> to skip.</Text>
                        <Text style={styles.smallText}>(up to 3x).</Text>
                    </View>
                    <View style={styles.warningView}>
                        <Text style={styles.cardText}>Tap </Text>
                        <Image source={require('../../../assets/icons/info-howtoplay.png')} />
                        <Text style={styles.cardText}> for more info.</Text>
                    </View>
                </View>
            </View>
        )
    }
}
HowToPlayView.propTypes = {
    style: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]),
}

HowToPlayView.defaultProps = {}