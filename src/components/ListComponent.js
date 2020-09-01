import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import ListItem from './ListItem';

const ListComponent = props => {
  const renderItem = ({item, index}) => (
    <ListItem item={item} index={index} handleOnClick={props.handleOnClick} />
  );

  return (
    <>
      <FlatList
        data={props.data}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContent}
        style={styles.flatListStyles}
        keyExtractor={item => item.id}
        onEndReached={props.onEndReach}
        onEndReachedThreshold={0.5}
        onRefresh={props.handleOnPageRefresh}
        refreshing={props.refreshing}
      />
    </>
  );
};

const styles = StyleSheet.create({
  flatListStyles: {
    backgroundColor: '#24539D',
    height: '100%',
    padding: 20,
  },
  flatListContent: {
    paddingBottom: 100,
  },
});

export default ListComponent;
