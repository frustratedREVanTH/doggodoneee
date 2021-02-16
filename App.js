import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from "./screens/loginscreen";
import  RegisterPage from "./screens/registerpage";
import RegisterQuestion from "./screens/REGISTERquestion"
import {createSwitchNavigator,createAppContainer} from "react-navigation"

export default function App() {
  return (
    <View style={styles.container}>
     <AppContainer/>
    

    </View>
  );
}
var AppNavigator  = createSwitchNavigator({
  RegisterQuestion:RegisterQuestion,
  loginScreen:LoginScreen,
  registerPage:RegisterPage,
  
 
})
const AppContainer = createAppContainer(AppNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
