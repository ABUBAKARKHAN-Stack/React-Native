import { Tabs, } from "expo-router";
import { Ionicons } from '@expo/vector-icons'

function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon(props) {
                        return <Ionicons
                            name="home"
                            className="text-xl"
                        />
                    },
                }}
            />
        </Tabs>
    )
}

export default TabLayout
