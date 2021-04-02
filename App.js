//Eimar Michelle Quinn - EMQ 
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//root component of app
export default function App() {
  //state function & button function further down
  const [name, setName] = useState('Great Atlantic Way');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text stlye={styles.boldText}>Welcome to the {name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Interactive Map'/><br/>
        <Button title='Checklist'/><br/>
        <Button title='Pedometer'/><br/>
        <Button title='Reviews'/>
      </View>
    </View>
  );
}
//stylesheet 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'blue',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 10,
  }
});