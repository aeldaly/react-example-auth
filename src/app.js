import React from 'react';
import { View } from 'react-native';

import firebase from 'firebase';
import { AppState } from './models/';

import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

class App extends React.Component {
  state = {
    loggedIn: null,
  };

  componentWillMount() {
    firebase.initializeApp({ apiKey: 'AIzaSyDYCUFG6po6fLVBJx79KGaxJXchLgVZKM8', authDomain: 'react-test-auth.firebaseapp.com', databaseURL: 'https://react-test-auth.firebaseio.com', storageBucket: 'react-test-auth.appspot.com', messagingSenderId: '933427258757' });
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((remoteUser) => {
      const currentUser = AppState.get('currentUser');
      if (!currentUser.notFound || remoteUser) {
        if (!currentUser && remoteUser) {
          AppState.set('currentUser', remoteUser);
        }

        this.setState({ loggedIn: true });
      } else {
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
