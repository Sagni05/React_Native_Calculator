import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const App = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [prevValue, setPrevValue] = useState(null);

  const handleDigitPress = (digit) => {
    if (displayValue === "0") {
      setDisplayValue(digit);
    } else {
      setDisplayValue(displayValue + digit);
    }
  };

  const handleOperatorPress = (operator) => {
    if (prevValue) {
      handleEqualPress();
    }
    setOperator(operator);
    setPrevValue(displayValue);
    setDisplayValue("0");
  };

  const handleEqualPress = () => {
    if (!operator) {
      return;
    }
    let result;
    switch (operator) {
      case "+":
        result = parseFloat(prevValue) + parseFloat(displayValue);
        break;
      case "-":
        result = parseFloat(prevValue) - parseFloat(displayValue);
        break;
      case "*":
        result = parseFloat(prevValue) * parseFloat(displayValue);
        break;
      case "/":
        result = parseFloat(prevValue) / parseFloat(displayValue);
        break;
      default:
        return;
    }
    setDisplayValue(result.toString());
    setOperator(null);
    setPrevValue(null);
  };

  const handleClearPress = () => {
    setDisplayValue("0");
    setOperator(null);
    setPrevValue(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{displayValue}</Text>
      <View style={styles.keypad}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.key}
            onPress={() => handleDigitPress("1")}
          >
            <Text style={styles.keyText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.key}
            onPress={() => handleDigitPress("2")}
          >
            <Text style={styles.keyText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.key}
            onPress={() => handleDigitPress("3")}
          >
            <Text style={styles.keyText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.key}
            onPress={() => handleOperatorPress("+")}
          >
            <Text style={styles.keyText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.key}
            onPress={() => handleDigitPress("4")}
          >
            <Text style={styles.keyText}>4</Text>
                 
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.key}
            onPress={() => handleDigitPress("5")}
          >
            <Text style={styles.keyText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.key}
            onPress={() => handleDigitPress("6")}
          >
            <Text style={styles.keyText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.key}
            onPress={() => handleOperatorPress("-")}
          >
            <Text style={styles.keyText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.key}
            onPress={() => handleDigitPress("7")}
          >
            <Text style={styles.keyText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.key}
            onPress={() => handleDigitPress("8")}
          >
            <Text style={styles.keyText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.key}
            onPress={() => handleDigitPress("9")}
          >
            <Text style={styles.keyText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.key}
            onPress={() => handleOperatorPress("")}
          >
            <Text style={styles.keyText}></Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.key}
            onPress={() => handleClearPress()}
          >
            <Text style={styles.keyText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.key}
            onPress={() => handleDigitPress("0")}
          >
            <Text style={styles.keyText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.key}
            onPress={() => handleEqualPress()}
          >
            <Text style={styles.keyText}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.key}
            onPress={() => handleOperatorPress("/")}
          >
            <Text style={styles.keyText}>/</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  display: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    fontSize: 48,
    textAlign: "right",
    padding: 20,
  },
  keypad: {
    flex: 2,
    backgroundColor: "#F5FCFF",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  key: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#C5C5C5",
  },
  keyText: {
    fontSize: 24,
  },
});

export default App;
