import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet, Text, TextInput, View, TouchableOpacity,
} from 'react-native';
import { string, func } from 'prop-types';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Components
// Button

function Button(props) {
  const { label, onPress } = props;
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  label: string.isRequired,
  onPress: func,
};

Button.defaultProps = {
  onPress: null,
};

//
// Home Screen
//
function HomeScreen(props) {
  const { navigation } = props;
  const { label, onPress } = props;
  const [number, setNumber] = useState('');
  let textInput;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.leadText}>
          <Text>整数をボックス内に入力し、ラジオボタンでやりたいことを選択して「実行」ボタンを押してください。</Text>
        </View>
        <View>
          <TextInput
            ref={(input) => { textInput = input; }}
            style={styles.inputText}
            value={number}
            onChangeText={(text) => { setNumber(text); }}
          />
        </View>
        <View style={styles.choice}>

        </View>
        <View style={styles.buttons}>
          <Button
            label="実行"
            onPress={() => {
              navigation.navigate('Result', {
                num: number,
              });
            }}
          />
          <Button
            label="クリア"
            onPress={() => {
              textInput.clear();
            }}
          />
        </View>
      </View>
      {/* eslint-disable-next-line */}
      <StatusBar style="auto" />
    </View>
  );
}

//
// Main
//
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: { backgroundColor: '#467FD3' },
          headerTitleStyle: { color: '#ffffff' },
          headerTitle: 'Integer',
          headerTintColor: '#ffffff',
          headerBackTitle: 'Back',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
    lineHeight: 32,
    marginTop: 8,
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
  choice: {

  },
  buttons: {
    flexDirection: 'row',
  },
  //
  // Button
  //
  buttonContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginTop: 12,
    marginRight: 4,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: '#ffffff',
  },
});
