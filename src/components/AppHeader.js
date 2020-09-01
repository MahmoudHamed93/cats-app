import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';

const AppHeader = props => {
  return (
    <View style={styles.contStyles}>
      <TouchableWithoutFeedback
        disabled={props.hideArrow}
        onPress={props.onArrowClick}>
        <Image
          style={props.hideArrow ? styles.hiddenStyles : styles.arrowStyles}
          source={require('../../assets/left-arrow.png')}
        />
      </TouchableWithoutFeedback>
      <Text style={styles.textStyles}>{props.pageName}</Text>
      <TouchableWithoutFeedback
        testID={'back-Button'}
        onPress={() => props.navigation.navigate('Profile')}>
        <Image
          style={styles.imageStyles}
          source={require('../../assets/placeholder-image.png')}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  contStyles: {
    height: 80,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#24539D',
    borderBottomColor: '#fff',
    borderBottomWidth: 0.5,
  },
  imageStyles: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  arrowStyles: {
    width: 26,
    height: 26,
    borderRadius: 13,
    tintColor: '#fff',
    marginLeft: 12,
  },
  hiddenStyles: {
    width: 26,
    height: 26,
    borderRadius: 13,
    tintColor: '#24539D',
    marginLeft: 12,
  },
  textStyles: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default AppHeader;
