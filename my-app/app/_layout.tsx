import { DownloadPicture } from '@/components/BottomSheet';
import { useWallpapers } from '@/hooks/useWallpapers';
import { Slot, Stack } from 'expo-router';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
   

export default function Layout() {
    const walletpapers = useWallpapers();
    return <GestureHandlerRootView style={{ flex: 1 }}>
         <Stack screenOptions={{
            headerShown: false
        }} >
            {/* <Stack.Screen name="account/index" options={{ headerShown: true, headerTitle: "Account info", headerBackTitle: "Go Back" }} /> */}
        </Stack>
    </GestureHandlerRootView>
}