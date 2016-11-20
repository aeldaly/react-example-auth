import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const styles = {
  textStyle: {
    alignSelf: 'center',

    color: '#007aff',

    fontSize: 16,
    fontWeight: '600',

    paddingTop: 10,
    paddingBottom: 10,
  },
  viewStyle: {
    flexDirection: 'row',
    flex: 1,
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',

    height: 45,

    backgroundColor: '#fff',

    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#007aff',

    marginLeft: 5,
    marginRight: 5,
  },
};

const Button = ({ onPress, children }) => {
  const { textStyle, viewStyle, buttonStyle } = styles;

  return (
    <View style={viewStyle}>
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

Button.propTypes = {
  onPress: React.PropTypes.func,
  children: React.PropTypes.node,
};

export default Button;
