import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { Gap, Button2 } from '../../components';
import {PageHeader1} from '../../components/molecul';

const SeatMap = ({ navigation }) => {
    return (
          <View style={styles.container}>
            <PageHeader1
              label="Seating Map"
              back={true}
              onPress={() => navigation.goBack()}
              type="default" // Add the 'type' prop with a default value
            />
            <Gap height={20} />
             <Text style={styles.subtitle}>Map Seat This Semester </Text>
             <Gap height ={20} />
             <Button2
            label=" Open PDF "
            backgroundColor="#796890"
            textColor="#FFFFFF"
            onPress={() => navigation.navigate('Survey')}
          />
        <View style={styles.imageContainer}>
           <Image
            source={require('../../assets/images/UKK1.png')}
            style={styles.image}
            resizeMode='contain'
            />
        </View>
        </View>
    );
};

    const styles = StyleSheet.create({
          subtitle: {
            fontSize: 30,
            fontWeight: 'bold',
            alignSelf: 'center',
            fontFamily: 'Poppins-Medium',
            color: '#333',
            marginTop: 10,
        },
        imageContainer: {
          alignItems: 'center', // Memastikan gambar berada di tengah
        },
          
          image: {
            width: 200,
            height: 150,
            resizeMode: 'cover',
            marginTop: 100,
            alignItems: 'center',
          },
        });
export default SeatMap;
