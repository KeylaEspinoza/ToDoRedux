import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {addToDo} from '../actions/ToDo/ToDoActions';

const AllToDo = ({toDo}) => {
  const dispatch = useDispatch();
  const [text, onChangeText] = React.useState('');
  const onPressToDo = () => {
    dispatch(addToDo(text));
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Agregar To Do"
          multiline={true}
          onChangeText={onChangeText}
          value={text}
        />
        <Button
          onPress={() => onPressToDo()}
          title="Agregar"
          color="#1E7F14"
          padding="10"
          borderRadius="10"
          elevation="8"
        />
      </View>
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
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#BBBBBB',
    borderColor: '#BBBBBB',
    width: '50%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});

export default connect(mapStateToProps)(AllToDo);
