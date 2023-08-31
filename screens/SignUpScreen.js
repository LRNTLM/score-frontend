import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, KeyboardAvoidingView, SafeAreaView, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/user';

export default function SignUpScreen({ navigation }) {

  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

// Fonction signup
	const handleSignUp = async () => {
		if (username !== '' && email !== '' && password !== '') {
			const response = await fetch(`http://192.168.100.16:3000/users/signup`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ username, email, password })
			});

			const hasAccount = await response.json();
			if (hasAccount.result) {
        setUsername('');
				setEmail('');
				setPassword('');
				dispatch(login(hasAccount.token));
        console.log(hasAccount.token)
				navigation.navigate('TabNavigator', { screen: 'Score' });
			} else {
				console.log('Error', hasAccount.error);
			}
		}
	};

 return (
  <View style={styles.container}>
    <View style={styles.logoContent}>
      <FontAwesome name='soccer-ball-o' size={150} color='#ff5757' marginTop={60}/>
      <Text style={styles.score}>SCORE</Text>
      <Text style={styles.gamesAndNews}>GAMES & NEWS</Text>
    </View> 
    <View style={styles.signUpContent}>
      <Text style={styles.shotsOnTarget}>3 shots on target to...</Text>
      <TextInput
          style={styles.input}
          placeholder='Username'
          placeholderTextColor='#ff5757'
          clearButtonMode='while-editing'
          value={username}
          onChangeText={(value) => setUsername(value)}/>
        <TextInput
          style={styles.input}
          placeholder='Email'
          placeholderTextColor='#ff5757'
          autoComplete='email'
          autoCapitalize='none'
          inputMode='email'
          clearButtonMode='while-editing'
          value={email}
          onChangeText={(value) => setEmail(value)}/>
        <TextInput
          style={styles.input}
          placeholder='Password'
          placeholderTextColor='#ff5757'
          secureTextEntry={true}
          clearButtonMode='while-editing'
          value={password}
          onChangeText={(value) => setPassword(value)}/>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.signUpText}>Score !</Text>
        </TouchableOpacity>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#004aad',
},
logoContent: {
  height: '50%',
  alignItems: 'center',
  justifyContent: 'center',
},
score: {
  fontSize: 75,
  fontFamily: 'Futura',
  fontWeight: 'bold',
  color: '#ff5757',
  marginTop: 20,
},
gamesAndNews: {
  fontSize: 20,
  fontFamily: 'Futura',
  fontWeight: 'bold',
  color: '#ff5757',
},
signUpContent: {
  height: '50%',
  alignItems: 'center',
},
shotsOnTarget: {
  fontSize: 20,
  fontFamily: 'Futura',
  fontWeight: 'bold',
  color: '#ff5757',
  marginBottom: 10,
},
input: {
  width: 300,
  height: 40,
  borderColor: '#ff5757',
  borderWidth: 2,
  borderRadius: 10,
  marginBottom: 10,
  fontSize: 20,
  paddingLeft: 15,
  color: '#ff5757',
},
button: {
  alignItems: 'center',
  justifyContent: 'center',
  width: 300,
  height: 40,
  backgroundColor: '#ff5757',
  borderRadius: 10,
},
signUpText: {
  fontSize: 20,
  fontFamily: 'Futura',
  fontWeight: 'bold',
  color: '#004aad',
},
});