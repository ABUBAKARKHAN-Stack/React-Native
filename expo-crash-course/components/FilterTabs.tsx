import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FILTER_OPTIONS, FilterOptionsType } from '@/constants/tasks';
import Colors from '@/constants/colors';

type FilterTabsProps = {
  selected: FilterOptionsType;
  onSelect: (filter: FilterOptionsType) => void;
}

const FilterTabs = ({
  onSelect,
  selected
}: FilterTabsProps) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >

      {FILTER_OPTIONS.map((filter, i) => {
        const activeFilter = filter === selected;
        return (
          <TouchableOpacity
            key={i}
            style={[
              styles.tab,
              activeFilter && styles.tabSelected
            ]}
            onPress={() => onSelect(filter)}
          >
            <Text style={[
              styles.tabText,
              activeFilter && styles.tabTextSelected
            ]}>
              {filter}
            </Text>
          </TouchableOpacity>
        )
      })}

    </ScrollView>
  )
}

export default FilterTabs

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    gap: 10,
    paddingVertical: 12,
  },
  tab: {
    alignSelf: "flex-start",
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 22,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  tabSelected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.textSecondary,
  },
  tabTextSelected: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});