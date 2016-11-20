import React from 'react';
import { View, TextInput, Text } from 'react-native';

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput secureTextEntry={secureTextEntry} autoCorrect={false} placeholder={placeholder} value={value} onChangeText={onChangeText} style={inputStyle} />
    </View>
  );
};

Input.propTypes = {
  label: React.PropTypes.string,
  value: React.PropTypes.string,
  onChangeText: React.PropTypes.func,
  placeholder: React.PropTypes.string,
  secureTextEntry: React.PropTypes.bool,
};

export default Input;
