import React, {useReducer, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {
  dispatchGetData,
  dispatchGetDataLoaded,
  dispatchGetDataLoadedError,
  dispatchGetDataLoading,
} from './action';
import {intialState, reducer} from './reducer';
import {getData} from './service';

const Home = () => {
  const [text, setText] = useState<string>();
  const [state, dispatch] = useReducer(reducer, intialState);

  const handleChange = async () => {
    dispatch(dispatchGetDataLoading());
    console.log('clicked..');
    const res = await getData(parseInt(text!));
    if (res != 'error') {
      dispatch(dispatchGetDataLoaded(res));
      console.log(state?.data);
    } else {
      dispatch(dispatchGetDataLoadedError());
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          value={text}
          onChangeText={text => setText(text)}
          style={styles.input}
        />
      </View>
      <View>
        <Button title="click" onPress={handleChange} />
      </View>
      <View>
        {state?.loading ? (
          <ActivityIndicator size={40} color="blue" />
        ) : (
          <Text>{state?.data.title}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 2,
    borderRadius: 40,
    marginVertical: 12,
    width: '90%',
  },
});

export default Home;
