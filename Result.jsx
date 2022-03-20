import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { shape, integer } from 'prop-types';

function isPrime(n) {
  if (n === 1) {
    return false;
  }
  let val = true;
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      val = false;
    }
  }
  return val;
}

function getFactorial(n) {
  let val = 1;
  for (let i = 1; i <= n; i += 1) {
    val *= i;
  }
  return val;
}

function getDivisors(n) {
  return '';
}

export default function Result(props) {
  const { route } = props;
  const { num, process } = route.params;
  let primeOrNot = false;
  let result = 1;
  let divisors = '';
  let resultText = '';
  switch (process) {
    case 1:
      primeOrNot = isPrime(num);
      if (primeOrNot) {
        resultText = num.toString() + ' is prime.';
      } else {
        resultText = num.toString() + ' is not prime.';
      }
      break;
    case 2:
      divisors = getDivisors(num);
      resultText = 'The divisors of ' + num.toString() + ' are ' + div.toString();
      break;
    case 3:
      result = getFactorial(num);
      resultText = 'The factorial of ' + num.toString() + ' is ' + result.toString();
      break;
    default:
      console.log('error');
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Result</Text>
        </View>
        <View>
          <Text>{`${resultText}`}</Text>
        </View>
      </View>
    </View>
  );
}

Result.propTypes = {
  route: shape({
    params: shape({
      num: integer,
      process: integer,
    }),
  }).isRequired,
};

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
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
