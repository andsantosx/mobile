import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar
} from 'react-native';
import pilots from './pilots';

export default function App() {
  const [currentPilotIndex, setCurrentPilotIndex] = useState(0);
  const pilot = pilots[currentPilotIndex];

  const renderStars = (count) => {
    return '⭐'.repeat(count);
  };

  const nextPilot = () => {
    setCurrentPilotIndex((prev) => (prev + 1) % pilots.length);
  };

  const prevPilot = () => {
    setCurrentPilotIndex((prev) => (prev - 1 + pilots.length) % pilots.length);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>🏎️ Super Trunfo F1</Text>
          <Text style={styles.headerSubtitle}>
            Carta {currentPilotIndex + 1} de {pilots.length}
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.pilotName}>{pilot.name}</Text>
            <Text style={styles.stars}>{renderStars(pilot.stars)}</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={{ uri: pilot.image }}
              style={styles.pilotImage}
              resizeMode="contain"
            />
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Equipe:</Text>
              <Text style={styles.infoValue}>{pilot.team}</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>País:</Text>
              <Text style={styles.infoValue}>{pilot.country}</Text>
            </View>

            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionLabel}>Descrição:</Text>
              <Text style={styles.descriptionText}>{pilot.description}</Text>
            </View>
          </View>

          <View style={styles.navigation}>
            <TouchableOpacity
              style={styles.navButton}
              onPress={prevPilot}
            >
              <Text style={styles.navButtonText}>← Anterior</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.navButton}
              onPress={nextPilot}
            >
              <Text style={styles.navButtonText}>Próximo →</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#999',
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
    borderWidth: 2,
    borderColor: '#e10600',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#333',
  },
  pilotName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
  },
  stars: {
    fontSize: 20,
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    minHeight: 250,
    justifyContent: 'center',
  },
  pilotImage: {
    width: 200,
    height: 200,
  },
  infoContainer: {
    backgroundColor: '#252525',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e10600',
  },
  infoValue: {
    fontSize: 16,
    color: '#fff',
  },
  descriptionContainer: {
    marginTop: 15,
  },
  descriptionLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e10600',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 15,
    color: '#ccc',
    lineHeight: 22,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  navButton: {
    flex: 1,
    backgroundColor: '#e10600',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
