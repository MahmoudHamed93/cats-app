import React from 'react';
import { StyleSheet, Image, Text, View} from 'react-native';
import 'react-native-gesture-handler';

const InfoComponent = props => {
  return (
    <View style={styles.contStyles}>
      <Text style={styles.titleStyles}>{props.title}</Text>
      <Text style={styles.dataStyles}>{props.data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contStyles: {
    width: '100%',
    backgroundColor: '#fff',
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop: 4,
    borderRadius: 5,
    padding: 12,
  },
  titleStyles: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#c8c8c8',
    width:'25%'
  },
  dataStyles: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#24539D',
  },
});

export default InfoComponent;
