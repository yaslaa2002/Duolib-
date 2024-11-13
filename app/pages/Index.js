import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Conteneur pour le logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('./app/assets/images/logo.png')}
          style={styles.logoImage}
          resizeMode="contain" // Ajuste l'image pour qu'elle soit entièrement visible
        />
      </View>
      
      {/* Image sous le logo */}
      <Image
        source={require('./assets/images/logo.png')}
        style={styles.photoImage}
        resizeMode="contain" // Ajuste l'image pour qu'elle soit entièrement visible
      />

      <Text style={styles.logo}>Duolib</Text>
      <Text style={styles.title}>Help us to maintain Duolib free</Text>

      <View style={styles.linksContainer}>
        <Text style={styles.link}>Our philosophy</Text>
        <Text style={styles.link}>Transparency</Text>
        <Text style={styles.link}>Support Duolib</Text>
        <Text style={styles.link}>About us</Text>
        <Text style={styles.link}>Contact us</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Go !</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.donateButton}>
        <Text style={styles.donateText}>Donate</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>Have an account? Log in</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  logoContainer: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoImage: {
    width: '100%',  // L'image s'ajuste à la largeur du conteneur
    height: '100%', // L'image s'ajuste à la hauteur du conteneur
  },
  photoImage: {
    width: 250,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',  // Ajuste l'image pour qu'elle soit entièrement visible
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FF6F61',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 40,
  },
  linksContainer: {
    marginBottom: 20,
  },
  link: {
    fontSize: 16,
    color: '#4CAF50',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  donateButton: {
    backgroundColor: '#FF4081',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  donateText: {
    color: '#ffffff',
    fontSize: 18,
  },
  footerText: {
    marginTop: 20,
    color: '#757575',
  },
});

export default App;
