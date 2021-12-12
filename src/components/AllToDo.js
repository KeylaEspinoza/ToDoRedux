import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {deleteToDo} from '../actions/ToDo/ToDoActions';

const AllToDo = ({toDo}) => {
  const dispatch = useDispatch();

  return (
    <View>
      {toDo.allToDo.map((toDo, index) => (
        <View style={styles.container}>
          <View style={styles.row}>
            <Text
              key={index}
              style={{fontSize: 18, padding: 10, color: '#020202'}}>
              {toDo}{' '}
            </Text>
            <Button
              onPress={() => dispatch(deleteToDo(toDo))}
              title="Eliminar"
              color="#A10F05"
              borderRadius="10"
              elevation="8"
            />
          </View>
        </View>
      ))}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    toDo: state.toDo,
  };
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  row: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#BBBBBB',
    padding: 10,
    borderRadius: 10,
    flex: 10,
  },
});

export default connect(mapStateToProps)(AllToDo);
