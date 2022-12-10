import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider,FacebookAuthProvider  } from "firebase/auth";
import { auth, provider, provider1 } from './FireBase/FirebaseConfig';
const App = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.warn(uid)
      } else {
        console.warn("UserSignOut")
      }
    })
  }, [])
  const CreateUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.warn(user)
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.warn(errorMessage)
      });
  }
  const SignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.warn(user.uid)
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.warn(errorMessage)
      });
  }
  const SignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.warn(credential)
      }).catch((error) => {
        const errorMessage = error.message;
        console.warn(errorMessage)
      });
  }
  const SignInWithfb = () => {
    signInWithPopup(auth, provider1)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        console.warn(credential)
      }).catch((error) => {
        const errorMessage = error.message;
        console.warn(errorMessage)
      });
  }
  return (
    <View style={{ marginTop: 20, padding: 20 }}>
      <Text>App</Text>
      <TextInput placeholder='Email' onChangeText={(e) => setemail(e)} />
      <TextInput placeholder='Password' onChangeText={(e) => setpassword(e)} />
      <Button title='Create User' onPress={() => CreateUser()} />
      <Button title='Sign In' onPress={() => SignIn()} />
      <Button title='Google Sign In' onPress={() => SignInWithGoogle()} />
      <Button title='Facebook Sign In' onPress={() => SignInWithfb()} />
      <Button title='Log Out' onPress={() => {
        auth.signOut().then((resp) => {
          console.warn("User Sign Out Successfully")
        }).catch((err) => console.warn("Error Occur"))
      }} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})