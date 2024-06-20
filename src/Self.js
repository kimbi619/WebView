import React from 'react';
import { Button, View, Linking, StyleSheet, Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import WebView from 'react-native-webview';

const AppBrowser = () => {
  const openInDefaultBrowser = (url) => {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.log("Don't know how to open URI: " + url);
        }
      })
      .catch((err) => console.error('An error occurred', err));
  };

  const openInAppBrowser = async (url) => {
    let result = await WebBrowser.openBrowserAsync(url);
    console.log(result);
  };

  return (
    <View style={ styles.wrapper }>
      <Button title="Open in Default Browser" onPress={() => openInDefaultBrowser('https://www.example.com')} />
      <Button title="Open in In-App Browser" onPress={() => openInAppBrowser('https://www.example.com')} />

      {/* BASIC INTERGRATION */}
      <WebView
        style={styles.container}
        source={{ uri: 'https://google.com' }}
      />

      {/* HTML SETUP */}
      {/* <WebView
        style={styles.container}
        originWhitelist={['*']}
        source={{ html: '<h1><center>Hello world</center></h1>' }}
      /> */}


  
    </View>
  );
};

export default AppBrowser;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    marginTop: 50, 
    flex: 1,
    width: '100%',
  }
})