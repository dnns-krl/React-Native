import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import React, {useState} from "react";

const SERVER_URL = "https://domanais-class-manager-server.vercel.app/users"

export default function HomeScreen() {
const[lastName, setLastName] = useState(``);
const[firstName, setFirstName] = useState(``);
const[section, setSection] = useState(``);
const[status, setStatus] = useState(``);
const[message, setMessage] = useState( ``);


const handlePresent = async()=> {
  setMessage("Present");

  try{
    const response = await fetch (SERVER_URL,{
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        lastName : lastName,
        firstName : firstName,
        section : section,
        status : "Present",

      }),
    });
    if (!response.ok) {
      throw new Error ("Server not responding");
    }
    const result = await response.json();
    setMessage("Attendance is Submitted")
    setFirstName("");
    setLastName("");
    setSection("");

  

  } 
  catch(error) {
    console.error(error);
    setMessage(`Server Error or Connection Failed.`);

  }

};
const handleAbsent = async()=> {
  setMessage("Absent");

  try{
    const response = await fetch (SERVER_URL,{
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        lastName : lastName,
        firstName : firstName,
        section : section,
        status : "Absent",

      }),
    });
    if (!response.ok) {
      throw new Error ("Server not responding");
    }
    const result = await response.json();
    setMessage("Attendance is Submitted")
    setFirstName("");
    setLastName("");
    setSection("");
    
  

  } 
  catch(error) {
    console.error(error);
    setMessage(`Server Error or Connection Failed.`);

  }

};
 
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.formCard}>
        <View style={styles.row}>
          <Text style={styles.label}>Lastname:</Text>
          <TextInput 
          value={lastName}
          onChangeText={setLastName}
          style={styles.input}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Firstname:</Text>
          <TextInput 
          value={firstName}
          onChangeText={setFirstName}
          style={styles.input} />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Section:</Text>
          <TextInput 
          value={section}
          onChangeText={setSection}
          style={styles.input} />
        </View>

        <Text style={styles.messages}>{message}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handlePresent}>
            <Text style = {styles.present_btn}>Present</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleAbsent}>
            <Text style = {styles.absent_btn}>Absent</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F0F2',
    paddingVertical: 50,
  },
  formCard: {
    width: 320,
    padding: 25,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    width: 80,
    fontSize: 16,
    color: '#555',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 15,
  },
  buttonContainer: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  messages:{
    fontSize:30,
    textAlign:"center",
  },
  absent_btn:{
    backgroundColor: 'red',
    color:'black',
    padding:10,
    borderRadius: 10,
  },
  present_btn:{
    backgroundColor: 'blue',
    color:'white',
    padding:10,
    borderRadius: 10,
  }
});
