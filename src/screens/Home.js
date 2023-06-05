import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Screen } from '../../components/Style'

export default function Home() {
  return (
    <View>
      <Screen>
        <Text>Home</Text>
        <StatusBar style="auto" />
      </Screen>
    </View>
  );
}

const styles = StyleSheet.create({
})