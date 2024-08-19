import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import { useColorScheme } from '@/hooks/useColorScheme';
import { TouchableOpacity, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: true, header: () => <CustomHeader /> }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}

const CustomHeader = () => {
  const router = useRouter(); // Hook para la navegación

  const handleProfilePress = () => {
    router.push('/(tabs)/profile'); // Navega a la pantalla de login
  };

  const handleLogoPress = () => {
    router.push('/(tabs)/'); // Navega a la pantalla de login
  };
  const colorScheme = useColorScheme();
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 60,
      paddingHorizontal: 20,
      backgroundColor: '#333',
    }}>
      <View style={styles.rightSpace} />
      <TouchableOpacity style={styles.menuButton} onPress={handleLogoPress}>
      <Image
        source={require('../assets/images/Logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuButton} onPress={handleProfilePress}>
        <FontAwesome5 name="user-circle" size={30} color={colorScheme === 'dark' ? 'white' : 'black'}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 15,
    backgroundColor: '#333',
  },
  menuButton: {
    padding: 10,
  },
  menuText: {
    color: 'white',
    fontSize: 24,
  },
  logo: {
    height: 30,
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  rightSpace: {
    width: 30, // Este espacio reserva lugar para balancear el menú
  },
};