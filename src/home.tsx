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
        <Button  title="click" onPress={handleChange} />
      </View>
      <View>
        {state?.loading ? (
          <ActivityIndicator size={40} color="blue" />
        ) : (
          <View style={styles.card}>
            <Text>{state?.data.title}</Text>
          </View>
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
    padding:10,
    paddingStart:30,
    width: '90%',
  },
  card: {
    borderRadius: 20,
    backgroundColor: '#dde3ed',
    padding: 20,
    margin: 10,
  },
});

export default Home;
