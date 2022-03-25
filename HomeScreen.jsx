import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet, Text, TextInput, View, Button, TouchableOpacity,
} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import Result from './Result';

//
// Home Screen
//
export default function HomeScreen(props) {
  const { navigation } = props;
  const [number, setNumber] = useState('');
  let textInput;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.leadText}>
            Put an integer in the text box below,
            and press either of the buttons.
          </Text>
        </View>
        <View>
          <TextInput
            ref={(input) => { textInput = input; }}
            style={styles.inputText}
            value={number}
            onChangeText={(text) => { setNumber(text); }}
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Result', {
                num: number,
                process: 1,
              });
            }}
          >
            <Text style={styles.buttonText}>Check if it is prime or not</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Result', {
                num: number,
                process: 2,
              });
            }}
          >
            <Text style={styles.buttonText}>Get its divisors</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Result', {
                num: number,
                process: 3,
              });
            }}
          >
              <Text style={styles.buttonText}>Calculate the factorial of it</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              textInput.clear();
            }}
          >
            <Text style={styles.buttonText}>Clear</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* eslint-disable-next-line */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  content: {
    flex: 1,
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  leadText: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'normal',
    marginTop: 8,
    marginBottom: 8,
  },
  inputText: {
    fontSize: 16,
    height: 32,
    backgroundColor: '#ffffff',
    borderColor: '#dddddd',
    borderWidth: 1,
    width: '49%',
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  buttons: {
    paddingVertical: 8, 
  },
  button: {
    backgroundColor: '#467FD3',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  /*
  // Button
  //
  buttonContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    marginTop: 12,
    marginRight: 4,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 24,
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: '#ffffff',
  }, */
});
