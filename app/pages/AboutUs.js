import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

// Importez l'image du logo
import logo from './app/assets/images/logo.png';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Bouton de fermeture */}
      <View style={styles.closeButtonContainer}>
        <TouchableOpacity style={styles.closeButton}>
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>
      </View>

      {/* Logo et titre */}
      <View style={styles.logoContainer}>
        <Image
          source={logo} // Utilisation de l'image locale importée
          style={styles.logo}
        />
        <Text style={styles.logoText}>
          Duo<Text style={{ color: '#FF99A3' }}>lib</Text>
        </Text>
      </View>

      {/* Section About Us */}
      <View style={styles.aboutContainer}>
        <Text style={styles.title}>About us</Text>
        <Text style={styles.description}>
          Cancer.bzh is a non-profit organization
        </Text>
      </View>

      {/* Boutons Go et Donate */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.goButton}>
          <Text style={styles.buttonText}>Go !</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.donateButton}>
          <Text style={styles.buttonText}>Donate</Text>
        </TouchableOpacity>
      </View>

      {/* Lien pour se connecter */}
      <Text style={styles.loginText}>
        Already have an account? <Text style={styles.loginLink}>Log in</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 20,
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  closeButton: {
    backgroundColor: '#FF99A3',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#5D6D7E',
  },
  aboutContainer: {
    alignItems: 'center',
    marginVertical: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#4A4A4A',
  },
  description: {
    fontSize: 16,
    color: '#4A4A4A',
    textAlign: 'center',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  goButton: {
    backgroundColor: '#4EC4F7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  donateButton: {
    backgroundColor: '#FF99A3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
  loginText: {
    fontSize: 14,
    color: '#4A4A4A',
    marginTop: 10,
  },
  loginLink: {
    color: '#FFAA00',
    fontWeight: '600',
  },
});
