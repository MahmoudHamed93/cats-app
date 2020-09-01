import React from 'react';
import {TouchableOpacity, StyleSheet, Image, Text, View} from 'react-native';
import 'react-native-gesture-handler';

const ListItem = props => {
  return (
    <TouchableOpacity
      testID={`Cat-Button-${props.index}`}
      onPress={() => props.handleOnClick(props.item)}
      style={styles.buttonStyles}>
      <View style={styles.innerView}>
        <Text style={styles.textStyles}>Name : {props.item?.name}</Text>
        <Text style={styles.textStyles}>Origin : {props.item?.origin}</Text>
      </View>

      <View style={styles.innerView}>
        <Text style={styles.textStyles}>
          Life Span : {props.item?.life_span}
        </Text>
        <Text style={styles.textStyles}>
          Weight : {props.item?.weight?.metric}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyles: {
    width: '100%',
    backgroundColor: '#fff',
    height: 80,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 4,
    borderRadius: 5,
    padding: 12,
  },
  innerView: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexDirection: 'column',
    width: '45%',
  },
  textStyles: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#24539D',
  },
  descriptionText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#24539D',
  },
});

export default ListItem;
