import React from "react";

import { View, Text, StyleSheet } from "react-native";

const Carrinho = ({ quantidade, total }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textos}>
        <Text style={styles.titulo}>Meu Carrinho</Text>

        <Text style={styles.subtitulo}>{quantidade} itens</Text>
      </View>

      <Text style={styles.total}>
        R$ {total.toFixed(2).replace(".", ",")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111827",
    borderRadius: 16,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  textos: {
    justifyContent: "center",
  },

  titulo: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },

  subtitulo: {
    color: "#9CA3AF",
    fontSize: 13,
    marginTop: 2,
  },

  total: {
    color: "#4ADE80",
    fontWeight: "900",
    fontSize: 20,
  },
});

export default Carrinho;