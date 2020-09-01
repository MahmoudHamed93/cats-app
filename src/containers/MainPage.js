import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {
  getCatsListAction,
  getCatDetailsAction,
  handleSearchByName,
  handleRefreshSearch,
  handlePageRefreshAction,
} from '../../store/actions';
import AppHeader from '../components/AppHeader';
import ListComponent from '../components/ListComponent';
import SearchComp from '../components/SearchComp';

const MainPage = props => {
  useEffect(() => {
    props.getCatsListAction(0, 15);
  }, []);

  const handleOnClick = item => {
    props.getCatDetailsAction(item.id);
    props.navigation.navigate('CatDetails');
  };

  const handleOnEndReach = () => {
    !props.loading && props.getCatsListAction(props.page + 1, 15);
  };

  const handleSearchClick = text => {
    props.handleSearchByName(0, 15, text);
  };

  const handleOnPageRefresh = () => {
    props.handlePageRefreshAction();
    props.handleRefreshSearch(0, 15);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView testID="welcome" style={styles.safeViewStyles}>
        <AppHeader
          hideArrow
          pageName={'Cats List'}
          navigation={props.navigation}
        />
        <SearchComp onSearchClick={handleSearchClick} />
        <ListComponent
          data={props.cats}
          refreshing={props.refreshing}
          navigation={props.navigation}
          handleOnClick={handleOnClick}
          onEndReach={handleOnEndReach}
          handleOnPageRefresh={handleOnPageRefresh}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeViewStyles: {
    backgroundColor: '#24539D',
  },
});

const mapStateToProps = ({CatsReducer}) => {
  return {
    page: CatsReducer.page,
    limit: CatsReducer.limit,
    loading: CatsReducer.loading,
    cats: CatsReducer.cats || [],
    refreshing: CatsReducer.refreshing,
  };
};

export default connect(
  mapStateToProps,
  {
    getCatsListAction,
    getCatDetailsAction,
    handleSearchByName,
    handleRefreshSearch,
    handlePageRefreshAction,
  },
)(MainPage);
