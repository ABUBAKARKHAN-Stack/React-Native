import FlatListComponent from '@/components/FlatList';
import { useState } from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  Switch,
  ScrollView,
  TextInput,
  Pressable,
  Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Index = () => {
  const [show, setShow] = useState(false)

  const handleLongPress = () => {
    Alert.alert('Long Pressed!')
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [username, setUsername] = useState('')

  const [opacity, setOpacity] = useState(1)

  const logo = require('../assets/images/T-Solutionz-OG Linkedin Banner.png')



  return (
    <SafeAreaView
      style={{
        flex: 1
      }}
    >
      {/* {
        Array.from({ length: 100 }).map((_, i) => <Text
          key={i}
          style={{
            fontSize: 24,
          }}
        >
          Hello From Home Screen {i+1}
        </Text>)
      } */}

      {/* <Button
        title='Click Me'
        onPress={handlePress}
      />
      {show && <Text>Kyun Daba Raha Ho?</Text>}

      <Switch
        value={isEnabled}
        onValueChange={toggleSwitch}
      /> */}


      {/* <TextInput
        onChangeText={(val) => setUsername(val)}
        value={username}
        placeholder='Enter your username'
        keyboardType='ascii-capable'
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          borderRadius: 5,
          padding: 10,
        }}
        multiline
        numberOfLines={2}
        placeholderTextColor="black"
      />

      <Text>
        {username}
      </Text> */}

      <Pressable
        style={{
          height: 50,
          backgroundColor: "black",
          marginTop: 20,

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity,
        }}

        onPress={() => setOpacity(.1)}
        onPressIn={() => setOpacity(.5)}
        onLongPress={() => setOpacity(.75)}
        onPressOut={() => setOpacity(1)}

      >
        <Text
          style={{
            color: "#ffff",
            fontWeight: "700"
          }}
        >
          Press Me
        </Text>
      </Pressable>

      <Image
        source={logo}
        style={{
          height: 100,
          width: "100%",
          resizeMode: "contain",
          backgroundColor: "black"
        }}

      />

      <FlatListComponent />

    </SafeAreaView>
  )
}

export default Index