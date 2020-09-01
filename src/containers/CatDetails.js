import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  Text,
  View,
  Linking,
  ActivityIndicator,
} from 'react-native';
import 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {resetSelectedCat} from '../../store/actions';
import AppHeader from '../components/AppHeader';
import InfoComponent from '../components/InfoComponent';

const CatDetails = props => {
  const handleHeaderArrowClick = () => {
    props.resetSelectedCat();
    props.navigation.navigate('MainPage');
  };

  const handleOpeningUrl = () => {
    Linking.openURL(props.selectedCatDetails.wikipedia_url);
  };

  const [loading, setLoading] = useState(true);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeViewStyles}>
        <AppHeader
          pageName={'Cat Details'}
          navigation={props.navigation}
          onArrowClick={handleHeaderArrowClick}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {loading && <ActivityIndicator size="small" />}

          <Image
            source={{uri: props.selectedCat?.url}}
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
            style={styles.imageStyles}
          />

          <Text style={styles.titleStyles}>
            {props.selectedCatDetails?.name}
          </Text>

          <InfoComponent
            title="Origin"
            data={props.selectedCatDetails?.origin}
          />
          <InfoComponent
            title="Social Needs"
            data={`${props.selectedCatDetails?.social_needs}/5`}
          />
          <InfoComponent
            title="Life Span"
            data={props.selectedCatDetails?.life_span}
          />
          <InfoComponent
            title="Intelligence"
            data={`${props.selectedCatDetails?.intelligence}/5`}
          />
          <InfoComponent
            title="Child Friendly"
            data={`${props.selectedCatDetails?.child_friendly}/5`}
          />

          <View style={styles.linkingView}>
            <Text style={styles.textStyles}>Read More</Text>
            <Text
              testID={'wiki-Url'}
              onPress={handleOpeningUrl}
              style={styles.urlStyles}>
              {props.selectedCatDetails?.wikipedia_url}
            </Text>
          </View>
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
  },
  titleStyles: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  linkingView: {
    width: '100%',
    backgroundColor: '#fff',
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
    borderRadius: 5,
    padding: 12,
  },
  textStyles: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#c8c8c8',
    width: '25%',
  },
  urlStyles: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#24539D',
  },
});

const mapStateToProps = ({CatsReducer}) => {
  return {
    selectedCat: CatsReducer.selectedCat,
    selectedCatDetails: CatsReducer.selectedCatDetails,
  };
};

export default connect(
  mapStateToProps,
  {resetSelectedCat},
)(CatDetails);
