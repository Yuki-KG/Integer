import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet, Text, TextInput, View, TouchableOpacity, Alert,
} from 'react-native';

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
              if (number > 0) {
                navigation.navigate('Result', {
                  num: number,
                  process: 1,
                });
              } else {
                Alert.alert('Zero is neither prime nor non-prime', 'Input a positive integer.');
              }
            }}
          >
            <Text style={styles.buttonText}>Check if it is prime or not</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (number > 0) {
                navigation.navigate('Result', {
                  num: number,
                  process: 2,
                });
              } else {
                Alert.alert('Divisors of Zero', 'Input a positive integer.');
              }
            }}
          >
            <Text style={styles.buttonText}>Get its divisors</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (number > 1) {
                navigation.navigate('Result', {
                  num: number,
                  process: 3,
                });
              } else {
                Alert.alert('Prime Factorization Unavailable', 'Input an integer of 2 or larger.');
              }
            }}
          >
            <Text style={styles.buttonText}>Prime Factorize it</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (number <= 170) {
                navigation.navigate('Result', {
                  num: number,
                  process: 4,
                });
              } else {
                Alert.alert('Number too large', 'Integer must be 170 or less.');
              }
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
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});
