import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  Text,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import {connect} from 'react-redux';
import AppHeader from '../components/AppHeader';
import InfoComponent from '../components/InfoComponent';

const Profile = props => {
  const handleHeaderArrowClick = () => {
    props.navigation.navigate('MainPage');
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeViewStyles}>
        <AppHeader
          pageName={'Profile'}
          onArrowClick={handleHeaderArrowClick}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Image
            source={require('../../assets/placeholder-image.png')}
            style={styles.imageStyles}
          />

          <InfoComponent title="Name" data={'Mahmoud Hamed'} />
          <InfoComponent title="Age" data={`27`} />
          <InfoComponent title="Gender" data={'Male'} />
          <InfoComponent title="Job" data={'SoftWare Eng'} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#24539D',
    height: '100%',
    padding: 20,
  },
  safeViewStyles: {
    backgroundColor: '#24539D',
  },
  imageStyles: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 24,
  },
});

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {},
)(Profile);
