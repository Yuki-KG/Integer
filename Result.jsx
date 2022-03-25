import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { shape, integer } from 'prop-types';

export default function Result(props) {
  const { route } = props;
  const { num, process } = route.params;
  let primeOrNot = false;
  let result = 1;
  let divisors = '';
  let primeFactors = '';
  let resultText = '';
  switch (process) {
    case 1:
      primeOrNot = isPrime(num);
      if (primeOrNot) {
        resultText = `${num.toString()} is prime.`;
      } else {
        resultText = `${num.toString()} is not prime.`;
      }
      break;
    case 2:
      divisors = getDivisors(num);
      resultText = `The divisors of ${num.toString()} are: ${divisors}`;
      break;
    case 3:
      primeFactors = primeFactorization(num);
      resultText = `${num} = ${primeFactors}`;
      break;
    case 4:
      result = getFactorial(num);
      resultText = `The factorial of ${num.toString()} is ${result.toString()}`;
      break;
    default:
      resultText = 'error';
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.result}>{`${resultText}`}</Text>
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
  result: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});

function isPrime(n) {
  let count = 0;
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      count += 1;
    }
  }
  if (count === 2) {
    return true;
  }
  return false;
}

function getFactorial(n) {
  let val = 1;
  for (let i = 1; i <= n; i += 1) {
    val *= i;
  }
  return val;
}

function getDivisors(n) {
  let str = '';
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      str = `${str}  ${i.toString()}`;
    }
  }
  return str;
}

function primeFactorization(n) {
  let quotient = n;
  let str = '';
  let i = 2;
  let firstPrimeFactor = true;
  while (i <= quotient) {
    if (quotient % i === 0) {
      quotient /= i;
      if (firstPrimeFactor) {
        str = i.toString();
        firstPrimeFactor = false;
      } else {
        str += ` x ${i.toString()}`;
      }
    } else {
      i += 1;
    }
  }
  return str;
}
