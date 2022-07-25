import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";
import React, { Component } from "react";

class NumberButtons extends Component {
  //This is for optimization
  //Component should render only once
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  //This will call the bound function from its parent component
  //to handle button press action/event
  _handleOnPress = (value) => {
    requestAnimationFrame(() => {
      this.props.onBtnPress(value);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.buttons.map((row, index) => (
          <View key={index} style={styles.contRow}>
            {row.map((col, index) => (
              <TouchableNativeFeedback
                key={index}
                onPress={() => this._handleOnPress(col)}
                background={TouchableNativeFeedback.SelectableBackground()}
              >
                <View style={styles.contButton}>
                  <Text style={styles.txtDefault}>{col}</Text>
                </View>
              </TouchableNativeFeedback>
            ))}
          </View>
        ))}
      </View>
    );
  }
}

export default NumberButtons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtDefault: {
    color: "#fff",
    fontFamily: "Helvetica-Light",
    fontSize: 20,
  },
  contRow: {
    flex: 1,
    flexDirection: "row",
  },
  contButton: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    borderWidth: 1.5,
    borderColor: "#000",
    borderRadius: 10,
    backgroundColor: "#730B0B",
    alignItems: "center",
    justifyContent: "center",
  },
});
