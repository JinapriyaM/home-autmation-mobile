import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const Home = props => {
  const {navigation} = props;
  const [tripId, setTripId] = useState('');
  const [userId, setUserId] = useState('');
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View
        style={{
          marginTop: 20,
          minHeight: Dimensions.get('window').height,
          marginHorizontal: 10,
          backgroundColor: 'white',
        }}>
        <View style={{marginBottom: 50}}>
          <Image
            style={{width: 150, height: 100}}
            source={require('../assets/images/logo2.jpg')}
          />
        </View>
        <View>
          <Text style={{fontSize: 40}}>Hello There, Welcome Back</Text>
        </View>
        <View>
          <View style={{marginBottom: 10}}>
            <Text>Please enter TRIP No and User-Id</Text>
          </View>
          <View
            style={{
              height: 40,
              elevation: 5,
              borderRadius: 50,
              width: '100%',
              backgroundColor: '#fff',
              marginBottom: 20,
            }}>
            <TextInput
              value={tripId}
              onChangeText={value => setTripId(value)}
              style={{paddingLeft: 20}}
              placeholder={'Enter Trip ID'}
            />
          </View>
          <View
            style={{
              height: 40,
              elevation: 5,
              borderRadius: 50,
              width: '100%',
              backgroundColor: '#fff',
              marginBottom: 50,
            }}>
            <TextInput
              value={userId}
              onChangeText={value => setUserId(value)}
              style={{paddingLeft: 20}}
              secureTextEntry
              placeholder={'Enter User ID'}
            />
          </View>
          <View style={{width: '100%', marginBottom: 20}}>
            <TouchableOpacity
              onPress={() => {
                console.log(tripId, userId);
                // navigation.navigate('Trip', {user: {tripId, userId}});
                navigation.reset({
                  index: 0,
                  routes: [
                    {
                      name: 'Trip',
                      params: {tripId, userId},
                    },
                  ],
                });
              }}
              style={{
                height: 40,
                borderRadius: 50,
                width: '100%',
                backgroundColor: '#dc4d4d',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
              }}>
              <Text style={{fontSize: 20}}>Lets's Start</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 5,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
});

export default Home;
