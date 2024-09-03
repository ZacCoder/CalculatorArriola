import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CalculatorApp() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleOperation = (operation) => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if (!isNaN(num1) && !isNaN(num2)) {
      let res = 0;
      switch (operation) {
        case 'add':
          res = num1 + num2;
          break;
        case 'subtract':
          res = num1 - num2;
          break;
        case 'multiply':
          res = num1 * num2;
          break;
        case 'divide':
          res = num1 / num2;
          break;
        default:
          return;
      }
      setResult(res);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calculator App</Text>

      <Text style={styles.label}>Enter First Number</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={firstNumber}
        onChangeText={setFirstNumber}
      />

      <Text style={styles.label}>Enter Second Number</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={secondNumber}
        onChangeText={setSecondNumber}
      />

      <View style={styles.buttonContainer}>
        <Button title="Add" onPress={() => handleOperation('add')} />
        <Button title="Subtract" onPress={() => handleOperation('subtract')} />
        <Button title="Multiply" onPress={() => handleOperation('multiply')} />
        <Button title="Divide" onPress={() => handleOperation('divide')} />
      </View>

      {result !== null && (
        <Text style={styles.result}>Result: {result}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 2,
    borderColor: '#cccccc',
    margin: 20,
    borderRadius: 10,
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  input: {
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  result: {
    fontSize: 20,
 fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});