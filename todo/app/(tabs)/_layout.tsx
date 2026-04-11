import { Tabs } from "expo-router"
import { Ionicons } from '@expo/vector-icons'
import { Colors } from "@/constants/theme"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const TabLayout = () => {

    const insets = useSafeAreaInsets()
    
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: Colors.background,
                    height: 72,
                    width: "90%",
                    marginHorizontal: "auto",
                    borderRadius: 999,
                    bottom: Math.max(20, insets.bottom)

                }
            }}
        >

            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon(props) {
                        return <Ionicons
                            name="home"
                            className="text-foreground size-12"
                        />
                    },

                }}
            />

        </Tabs>
    )
}

export default TabLayout