import React , {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {

  // const [getFirstName , setFirstName] = useState('first name')
  // const [getLastName , setLastName] = useState('last name')

  const[getName , setName] = useState({firstName : 'FirsT Name' , lastName: 'Last Name'})
   
  var firstName = ' Hafsah '

  const UpdateFirstName = (fname) => {
    setName({firstName : fname , lastName : getName.lastName})
  }
  const UpdateLastName = (lname) => {
    setName({firstName : getName.firstName , lastName : lname})
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>{getName.firstName}</Text>
  <Text style={{fontSize: 30}}>{getName.lastName}</Text>
    <View style={{flexDirection: 'row'}}>
    <View style={{padding: 10}}>
      <Button title='Update First Name' onPress={UpdateFirstName.bind(this,'Angelina')}/>
    </View>
    <View style={{padding: 10}}>
      <Button title='Update Last Name' onPress={UpdateLastName.bind(this,'Jolie')}/>
    </View>
    </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: "center",
    flex: 1,
  }
});

export default App;

