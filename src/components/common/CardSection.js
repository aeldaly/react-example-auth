import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

const CardSection = ( props ) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    borderColor: '#ddd',

    padding: 5,
    position: 'relative',

    backgroundColor: '#fff',

    justifyContent: 'flex-start',
    flexDirection: 'row'
  }
}

export { CardSection };
