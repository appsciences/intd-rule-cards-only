/**
 * Created by idiot on 5/8/17.
 */

import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  howView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconView: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heartView: {
    flexDirection: 'row'
  },
  unHearView: {
    flexDirection: 'row'
  },
  shuffleView: {
    flexDirection: 'row'
  },
  warningView: {
    flexDirection: 'row'
  },
  allImageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  directionIconView: {
    flex: 3,
    flexDirection: 'row',
  },
  twoIconView: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  twoTextView: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  backgroundImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontFamily: 'Quicksand-Bold',
    textAlign: 'center'
  },
  cardText: {
    color: "black",
    fontSize: 20,
    fontFamily: 'Quicksand-Regular',
    textAlign: 'center'
  },
  rulesText: {
    color: "black",
    fontSize: 16,
    marginBottom: 16,
    fontFamily: 'Quicksand-Regular',
    textAlign: 'center'
  },
  emptyView: {
    flex: 1
  },
  orTextView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  topTextView: {
    flex: 4
  },
  colorTextView: {
    flexDirection: 'row',
    width: '90%'
  },
  realColorTextView: {
    flexDirection: 'row',
    marginLeft: 10
  },
  nonColorText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%'
  },
  rulesTextNoMargin: {
    color: "black",
    fontSize: 16,
    fontFamily: 'Quicksand-Regular',
    textAlign: 'center'
  },

  heading: {
    color: "white",
    fontSize: 45,
    marginBottom: 25,
    fontFamily: 'Quicksand-Bold'
  },
  card: {
    backgroundColor: 'white',
    width: 280,
    height: 400,
    paddingTop: 25,
    paddingBottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 6,
    shadowOffset: { width: -0.5, height: 0.5 },
    shadowColor: 'black',
    shadowOpacity: 0.85,
    shadowRadius: 1
  },
  dialogContainer: {
    paddingHorizontal: 16,
    height: 300
  },
  border: {
    borderColor: 'red',
    borderWidth: 2,
  },
  textDisabled: {
    color: "#b3bac6",
  },
  exploreView: {
    flex: 1,
    justifyContent: 'space-between',
    width: '100%'
  },
  bottomIonsView: {
    width: '100%',
    flexDirection: 'row',
  },
  expTxtView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  expTextView: {
    fontSize: 30,
    fontFamily: 'Quicksand-Bold',
    textAlign: 'center'
  }

})
