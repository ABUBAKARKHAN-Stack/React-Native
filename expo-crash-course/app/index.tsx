import { FlatList, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Colors from '@/constants/colors'
import { StatusBar } from 'expo-status-bar'
import { FilterOptionsType, TASKS } from '@/constants/tasks'
import Header from '@/components/Header'
import DateSelector from '@/components/DateSelector'
import FilterTabs from '@/components/FilterTabs'
import TaskCard from '@/components/TaskCard'
import TaskEmpty from '@/components/TaskEmpty'

const Index = () => {
    const safeAreaInsets = useSafeAreaInsets()
    const [activeFilter, setActiveFilter] = useState<FilterOptionsType>("All")

    return (
        <View
            style={[
                { paddingTop: safeAreaInsets.top },
                styles.container
            ]}
        >
            <StatusBar style='light' />
            <FlatList
                data={
                    TASKS
                        .filter((task) => activeFilter === "All" ? task : task.status === activeFilter)
                }
                keyExtractor={task => task.id}
                ListHeaderComponent={<>
                    {/* Header  */}
                    <Header />

                    {/* Date Selector  */}
                    <DateSelector />

                    {/* Filter Tabs  */}
                    <FilterTabs
                        selected={activeFilter}
                        onSelect={(selectedFilter) => setActiveFilter(selectedFilter)}
                    />

                </>}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <TaskCard task={item} />}
                ListEmptyComponent={<TaskEmpty
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                />}
            />
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background
    },
    list: {
        paddingBottom: 24
    }
})