import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, Button, Image, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

interface Notifications {
  orderStatus: boolean;
  passwordChanges: boolean;
  specialOffers: boolean;
  newsletter: boolean;
}

export default function ProfileScreen() {
  const [firstName, setFirstName] = useState<string>('Tilly');
  const [lastName, setLastName] = useState<string>('Doe');
  const [email, setEmail] = useState<string>('tillydoe@example.com');
  const [phoneNumber, setPhoneNumber] = useState<string>('(217) 555-0113');
  const [notifications, setNotifications] = useState<Notifications>({
    orderStatus: true,
    passwordChanges: true,
    specialOffers: true,
    newsletter: true,
  });

  const toggleSwitch = (key: keyof Notifications) => {
    setNotifications((prevNotifications) => ({
      ...prevNotifications,
      [key]: !prevNotifications[key],
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>Personal information</Text>

      <View style={styles.avatarSection}>
        <Image source={require('../../assets/images/Profile.png')} style={styles.avatar} />
        <View style={styles.avatarButtons}>
          <Button title="Change" onPress={() => {}} />
          <Button title="Remove" color="gray" onPress={() => {}} />
        </View>
      </View>

      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="First name"
      />
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
        placeholder="Last name"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Phone number"
        keyboardType="phone-pad"
      />

      {/* Email Notifications */}
      <Text style={styles.sectionTitle}>Email notifications</Text>
      <View style={styles.switchRow}>
        <Text>Order statuses</Text>
        <Switch
          value={notifications.orderStatus}
          onValueChange={() => toggleSwitch('orderStatus')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text>Password changes</Text>
        <Switch
          value={notifications.passwordChanges}
          onValueChange={() => toggleSwitch('passwordChanges')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text>Special offers</Text>
        <Switch
          value={notifications.specialOffers}
          onValueChange={() => toggleSwitch('specialOffers')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text>Newsletter</Text>
        <Switch
          value={notifications.newsletter}
          onValueChange={() => toggleSwitch('newsletter')}
        />
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Log out</Text>
      </TouchableOpacity>

      <View style={styles.buttonRow}>
        <Button title="Discard changes" color="gray" onPress={() => {}} />
        <Button title="Save changes" color="green" onPress={() => {}} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    height: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  avatarSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  avatarButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  logoutButton: {
    backgroundColor: '#FFCC00',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  logoutButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
