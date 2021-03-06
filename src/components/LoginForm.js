import React, { Component } from 'react';
import { Text } from 'react-native';

import firebase from 'firebase';

import { Button, Card, CardSection, Input, Spinner } from './common';
import { AppState } from '../models';

const styles = {
  errorTextStye: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

class LoginForm extends Component {
  constructor() {
    super();
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginError.bind(this));
      });
  }

  onLoginSuccess(user) {
    this.setState({ email: '', password: '', error: '', loading: false });
    AppState.setCurrentUser(user);
  }

  onLoginError() {
    this.setState({ error: 'Authentication Failed.', loading: false });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress}>
        Log in
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input label="Email" placeholder="someone@example.com" value={this.state.email} onChangeText={email => this.setState({ email })} />
        </CardSection>

        <CardSection>
          <Input label="Password" placeholder="c0mp[ik8e|)!" value={this.state.password} onChangeText={password => this.setState({ password })} secureTextEntry />
        </CardSection>

        <Text style={styles.errorTextStye}>{this.state.error}</Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
