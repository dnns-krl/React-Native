import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.formCard}>
        <View style={styles.row}>
          <Text style={styles.label}>Name:</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Age:</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Contact:</Text>
          <TextInput style={styles.input}/>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Submit" color="#4CAF50" />
          <Button title="Reset" color="#2196F3" />
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
});
