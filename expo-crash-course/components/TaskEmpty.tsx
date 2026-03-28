import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { Dispatch, SetStateAction } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/colors'
import { FilterOptionsType } from '@/constants/tasks'
type TaskEmptyProps = {
    activeFilter: string;
    setActiveFilter: Dispatch<SetStateAction<FilterOptionsType>>
}
const TaskEmpty = ({
    activeFilter,
    setActiveFilter
}: TaskEmptyProps) => {

    const handleClearFilter = () => setActiveFilter("All")
    return (
        <View style={styles.container}>
            <Ionicons name='search-outline' color={Colors.surfaceLight} size={52} />

            <View style={styles.textContainer}>
                <Text style={styles.text}>No Task Available</Text>
                <Text style={styles.suggestion}>
                    No results found for <Text style={styles.filter}>“{activeFilter}”</Text>
                </Text>
            </View>

            <TouchableOpacity
                style={styles.clearBtn}
                onPress={handleClearFilter}
            >
                <Text style={styles.clearText}>Clear Filters</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TaskEmpty

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: 12
    },
    textContainer: {
        alignItems: 'center',
        gap: 4
    },
    text: {
        fontSize: 20,
        color: Colors.surfaceLight,
        fontWeight: '600'
    },
    suggestion: {
        fontSize: 16,
        color: Colors.surfaceLight,
        fontWeight: '400',
        textAlign: 'center'
    },
    filter: {
        color: Colors.primary,
        fontWeight: '600'
    },
    clearBtn: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: Colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 8
    },
    clearText: {
        color: Colors.primary,
        fontWeight: '600'
    }
})