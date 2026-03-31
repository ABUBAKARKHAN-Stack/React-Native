import { Tabs } from "expo-router"
import { Ionicons } from '@expo/vector-icons'
import { tabItems } from "@/constants/navigation.constants"
import { cn } from "@/lib/utils"
import { View } from "react-native"
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors, components } from "@/constants/theme.constants"

const TabLayout = () => {
    const insets = useSafeAreaInsets()
    const tabBar = components.tabBar

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarLabelPosition: "beside-icon",
                tabBarStyle: {
                    position: "absolute",
                    bottom: Math.max(insets.bottom, tabBar.horizontalInset),
                    height: tabBar.height,
                    marginHorizontal: tabBar.horizontalInset,
                    borderRadius: tabBar.radius,
                    backgroundColor: colors.primary,
                    borderTopWidth: 0,
                },

            }}

        >

            {
                tabItems.map((tab) => (
                    <Tabs.Screen
                        key={tab.fileName}
                        name={tab.fileName}
                        options={{
                            tabBarIcon(props) {
                                return (

                                    <View
                                        className={
                                            cn(
                                                "size-12 rounded-full items-center justify-center ",
                                                props.focused ? "bg-accent" : "bg-transparent"
                                            )
                                        }
                                    >
                                        <Ionicons
                                            name={tab.icon}
                                            size={28}
                                            color="#ffff"
                                        />
                                    </View>
                                )
                            },
                        }}
                    />
                ))
            }
        </Tabs>
    )
}

export default TabLayout