import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import {SafeAreaView as RNSafeAreaView} from 'react-native-safe-area-context'
import { styled } from 'nativewind'

const SafeAreaView = styled(RNSafeAreaView)

const SignIn = () => {
    return (
        <SafeAreaView>
            <Text>SignIn</Text>
            <Link href='/(auth)/sign-up'>
                Create Account
            </Link>
        </SafeAreaView>
    )
}

export default SignIn

