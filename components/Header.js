import React from "react";

import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Catálogo Tech</Text>

      <Text style={styles.subtitulo}>Confira nossos produtos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#E5E7EB",
    alignItems: "flex-start",
  },

  titulo: {
    color: "#172554",
    fontSize: 32, 
    fontWeight: "900",
    letterSpacing: -0.5,
  },

  subtitulo: {
    color: "#6B7280",
    fontSize: 15,
    marginTop: 4,
    fontWeight: "500",
  }
});

export default Header;