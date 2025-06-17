import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // Import ImagePicker from Expo
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [status, setStatus] = useState('');
  const [salesRecords, setSalesRecords] = useState('');
  const [vehicleUsage, setVehicleUsage] = useState('');
  const [province, setProvince] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    // Simulate fetching user data
    // Replace with your actual data fetching logic
    setName('John');
    setSurname('Doe');
    setJobDescription('Software Engineer');
    setStatus('Active');
    setSalesRecords('100');
    setVehicleUsage('Daily');
    setProvince('California');
    setProfileImage('https://via.placeholder.com/150'); // Placeholder image URL
  }, []);

  const selectImage = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.cancelled) {
      setProfileImage(pickerResult.uri);
    }
  };

  const saveProfile = () => {
    // Simulate saving profile data
    // Replace with your actual saving logic (e.g., Firebase Firestore)
    console.log('Profile saved:', {
      name,
      surname,
      jobDescription,
      status,
      salesRecords,
      vehicleUsage,
      province,
      profileImage,
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.profileContainer}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        ) : (
          <Text>No profile picture</Text>
        )}
        <Button title="Upload Picture" onPress={selectImage} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Surname"
        value={surname}
        onChangeText={setSurname}
      />
      <TextInput
        style={styles.input}
        placeholder="Job Description"
        value={jobDescription}
        onChangeText={setJobDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Status"
        value={status}
        onChangeText={setStatus}
      />
      <TextInput
        style={styles.input}
        placeholder="Sales Records"
        value={salesRecords}
        onChangeText={setSalesRecords}
      />
      <TextInput
        style={styles.input}
        placeholder="Vehicle Usage"
        value={vehicleUsage}
        onChangeText={setVehicleUsage}
      />
      <TextInput
        style={styles.input}
        placeholder="Province"
        value={province}
        onChangeText={setProvince}
      />
      <Button title="Save Profile" onPress={saveProfile} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
