import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function ScoreScreen({ navigation }) {


  return (
    <SafeAreaView>

            {/*HEADER*/}
            <View style={styles.header}>
              <View style={styles.logoHeader}>
                <FontAwesome name='soccer-ball-o' size={20} color='#ff5757'/>
                <Text style={styles.title}>SCORE</Text>
              </View>
                <FontAwesome name="power-off" size={20} color='#ff5757' margin={10}/>
            </View>

      <ScrollView>
        <View style={styles.container}>
          <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
      backgroundColor: "#004aad",
    },
    logoHeader: {
      flexDirection: "row",
      alignItems: 'center',
      margin: 10
    },
    title: {
      fontFamily: 'Futura',
      fontSize: 20,
      fontWeight: "bold",
      color: "#ff5757",
      marginLeft: 5
    },
});