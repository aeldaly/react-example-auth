import React from 'react';
import { View, Text } from 'react-native';

import firebase from 'firebase';
import { UserModel, currentUser } from './models/';

import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm'

class App extends React.Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDYCUFG6po6fLVBJx79KGaxJXchLgVZKM8',
      authDomain: 'react-test-auth.firebaseapp.com',
      databaseURL: 'https://react-test-auth.firebaseio.com',
      storageBucket: 'react-test-auth.appspot.com',
      messagingSenderId: '933427258757'
    });

    firebase.auth().onAuthStateChanged((remoteUser) => {
      console.count('onAuthStateChanged');

      // if (!currentUser) {
      //   debugger;
      // }

      if (currentUser || remoteUser) {
        if (!currentUser) {
          UserModel.createFromRemoteUser(remoteUser);
        }

        this.setState({ loggedIn: true });
      } else {
        if (currentUser) {
          UserModel.destroy(currentUser);
        }

        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    if (this.state.loggedIn) {
      return (
        <Button>
          Log Out
        </Button>
      );
    }

    return <LoginForm />;
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
