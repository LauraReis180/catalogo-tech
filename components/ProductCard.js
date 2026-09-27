import React from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ProductCard = ({ produto, onAdicionar }) => {

  // Desestruturação das props e das informações do produto.
  const { id, nome, categoria, preco, marca, descricao } = produto;

  return (
    <View style={styles.card}>
      <View style={styles.infoArea}>

        <Text style={styles.nome}>{nome}</Text>

        <Text style={styles.marcaCategoria}>
          ID: {id} • {marca} • {categoria}
        </Text>

        <Text style={styles.descricao} numberOfLines={2}>
          {descricao}
        </Text>

        <Text style={styles.preco}>
          R$ {preco.toFixed(2).replace(".", ",")}
        </Text>

      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => onAdicionar(id)}
      >
        <Text style={styles.textoBotao}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#E5E7EB", 
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  infoArea: {
    flex: 1,
    paddingRight: 10,
  },

  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2937",
  },

  marcaCategoria: {
    fontSize: 12,
    marginTop: 4,
    color: "#4F46E5", 
    fontWeight: "600",
  },

  descricao: {
    fontSize: 13,
    marginTop: 6,
    color: "#6B7280",
    lineHeight: 18,
  },

  preco: {
    fontSize: 18,
    fontWeight: "900",
    marginTop: 10,
    color: "#172554",
  },

  botao: {
    backgroundColor: "#172554", 
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },

  textoBotao: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

});

export default ProductCard;