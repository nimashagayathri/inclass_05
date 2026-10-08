import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Expo. For bare RN use: react-native-vector-icons/Ionicons

export default function ProfileScreen({
  user = {
    name: 'Nimasha',
    email: 'nimasha.w@nsbm.ac.lk',
    points: 0,
    avatar: require('./assets/avatar.png'), 
  },
  onAddPress = () => {},
}) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* App bar */}
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>My Profile</Text>
      </View>

      <View style={styles.body}>
        {/* Avatar with green check badge */}
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarCircle}>
            <Image source={user.avatar} style={styles.avatar} />
          </View>
          <Ionicons
            name="checkmark"
            size={56}
            color="#00e000"
            style={styles.check}
          />
        </View>

        <View style={styles.divider} />

        {/* Name */}
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{user.name}</Text>

        {/* Email */}
        <Text style={[styles.label, styles.section]}>Email</Text>
        <View style={styles.row}>
          <Ionicons name="mail" size={22} color="#000" />
          <Text style={[styles.value, styles.rowText]}>{user.email}</Text>
        </View>

        {/* Points */}
        <Text style={[styles.label, styles.section]}>Points</Text>
        <View style={styles.row}>
          <Ionicons name="star" size={22} color="#000" />
          <Text style={[styles.value, styles.rowText]}>{user.points}</Text>
        </View>
      </View>

      {/* Floating action button */}
      <TouchableOpacity style={styles.fab} onPress={onAddPress} activeOpacity={0.8}>
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#000' },
  appBar: {
    height: 56,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appBarTitle: { color: '#fff', fontSize: 18, fontWeight: '500' },
  body: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  avatarWrapper: { alignSelf: 'center', marginBottom: 14 },
  avatarCircle: {
    width: 114,
    height: 114,
    borderRadius: 57,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ff6b81',
  },
  check: { position: 'absolute', right: -4, bottom: -2 },
  divider: { height: 2, backgroundColor: '#000', marginBottom: 18 },
  label: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  value: { fontSize: 18, color: '#000', marginTop: 6 },
  section: { marginTop: 22 },
  row: { flexDirection: 'row', alignItems: 'center', marginTop: 6 },
  rowText: { marginTop: 0, marginLeft: 12 },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 24,
    width: 40 + 12,
    height: 40 + 12,
    borderRadius: 26,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
});