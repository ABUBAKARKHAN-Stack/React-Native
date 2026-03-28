import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/colors'

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.iconButton}
            >
                <Ionicons
                    name='chevron-back'
                    size={22}
                    color={Colors.textPrimary}
                />
            </TouchableOpacity>

            <Text
                style={styles.title}
            >
                Today's Task
            </Text>

            <TouchableOpacity
                style={styles.iconButton}
            >
                <Ionicons
                    name='notifications-outline'
                    size={22}
                    color={Colors.textPrimary}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 12
    },
    iconButton: {
        width: 40,
        height: 40,
        backgroundColor: Colors.surface,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: Colors.textPrimary,
        fontSize: 24,
        fontWeight: 600
    }
})