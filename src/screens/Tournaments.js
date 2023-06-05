import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import dataGiaiDau from '../../api/getGiaiDau'

export default function Tournaments() {
  return (
    <View>
      <Text>Tournaments</Text>
      <StatusBar style="auto" />
    </View>
  );
}