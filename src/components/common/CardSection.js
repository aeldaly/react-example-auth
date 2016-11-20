import React from 'react';
import { View } from 'react-native';

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    borderColor: '#ddd',

    padding: 5,
    position: 'relative',

    backgroundColor: '#fff',

    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
};

const CardSection = props => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
);

CardSection.propTypes = {
  children: React.PropTypes.node,
};

export default CardSection;
