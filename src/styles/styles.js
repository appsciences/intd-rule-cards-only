/**
 * Created by idiot on 5/8/17.
 */

import {StyleSheet} from 'react-native';


export default StyleSheet.create({
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
    fontSize: 18,
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
    height: 300,
    paddingTop: 25,
    paddingBottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 6,
    shadowOffset: {width: -0.5, height: 0.5},
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
  }

})
