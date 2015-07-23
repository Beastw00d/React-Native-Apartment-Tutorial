/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var SearchPage = require('./SearchPage');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Component
} = React;

class PropertyFinder extends Component {
  render() {
    return (
       <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    ); 
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
