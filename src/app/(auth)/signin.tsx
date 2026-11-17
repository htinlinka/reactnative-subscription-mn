import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const signin = () => {
  return (
    <View>
      <Text>signin</Text>
      <Link href="/(auth)/signup" >
      <Text className='mt-4 bg-primary rounded p-4 text-white'> Go to Sign In</Text>
      </Link>
    </View>
  )
}

export default signin