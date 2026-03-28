import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'

const FlatListComponent = () => {
    const people = [
        {
            name: "Ali Khan",
            title: "Frontend Developer",
            age: 24,
            gender: "Male",
            image: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            name: "Sara Ahmed",
            title: "UI/UX Designer",
            age: 22,
            gender: "Female",
            image: "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
            name: "Usman Tariq",
            title: "Backend Engineer",
            age: 27,
            gender: "Male",
            image: "https://randomuser.me/api/portraits/men/3.jpg"
        },
        {
            name: "Ayesha Malik",
            title: "Project Manager",
            age: 25,
            gender: "Female",
            image: "https://randomuser.me/api/portraits/women/4.jpg"
        },
        {
            name: "Hassan Raza",
            title: "DevOps Engineer",
            age: 29,
            gender: "Male",
            image: "https://randomuser.me/api/portraits/men/5.jpg"
        }
    ];
    return (
        <FlatList
            data={people}
            keyExtractor={item => item.name}
            renderItem={({ item }) => {
                return (
                    <View
                        style={{
                            height: 150,
                            width: '100%',
                            borderWidth: 1,
                            borderRadius: 5,
                            marginTop: 12,
                            padding: 10,
                            display: "flex",
                            flexDirection: "row",
                            gap: 10
                        }}
                    >
                        <Image
                            source={{
                                uri: item.image
                            }}
                            style={{
                                height: '100%',
                                width: 150,
                                borderRadius: 10,
                            }}
                        />
                        <View>
                            <Text
                                style={{ fontSize: 24, fontWeight: "600" }}
                            >
                                {item.name}
                            </Text>
                            <View
                                style={{ marginTop: 10 }}
                            >
                                <View
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        flexDirection: "row"
                                    }}
                                >
                                    <Text
                                        style={{ fontSize: 16 }}
                                    >
                                        Age: {item.age}
                                    </Text>
                                    <View
                                        style={{
                                            backgroundColor: item.gender.toLowerCase() === "male" ? "green" : "pink",
                                            paddingVertical: 2,
                                            paddingHorizontal: 10,
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderRadius: 999
                                        }}
                                    >
                                        <Text
                                            style={{

                                                color: "white",
                                                fontWeight: 500,

                                            }}
                                        >
                                            {item.gender}
                                        </Text>
                                    </View>
                                </View>
                                <Text
                                    style={{ fontSize: 16 }}
                                >
                                    Role: {item.title}
                                </Text>
                            </View>
                        </View>
                    </View>
                )
            }}
        />
    )
}

export default FlatListComponent