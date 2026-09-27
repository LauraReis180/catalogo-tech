import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Carrinho from "./components/Carrinho";
import produtos from "./data/produtos";

const App = () => {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todos");
  const [carrinho, setCarrinho] = useState([]);

  const categorias = [
    "Todos",
    "Computadores",
    "Celulares",
    "Periféricos",
  ];

  // filter() é usado para selecionar os produtos conforme a categoria e a busca.
  const produtosFiltrados = produtos.filter((produto) => {
    const categoriaOk =
      categoria === "Todos" || produto.categoria === categoria;

    const termoBusca = busca.trim().toLowerCase();
    const buscaOk = produto.nome.toLowerCase().includes(termoBusca);

    return categoriaOk && buscaOk;
  });

  // find() localiza o produto pelo ID antes de adicioná-lo ao carrinho.
  const adicionarProduto = (id) => {
    const produto = produtos.find((item) => item.id === id);

    if (produto) {
      setCarrinho([...carrinho, produto]);
    }
  };

  // reduce() é usado para somar os preços dos produtos do carrinho.
  const total = carrinho.reduce(
    (soma, produto) => soma + produto.preco,
    0
  );

  const mensagem = `Produtos encontrados: ${produtosFiltrados.length}`;

  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <Header />

        <ScrollView 
          style={styles.scrollContent} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <TextInput
            style={styles.input}
            placeholder="Buscar produto por nome..."
            value={busca}
            onChangeText={setBusca}
          />

          <Text style={styles.titulo}>Categorias</Text>

          <View style={styles.categorias}>
            {categorias.map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.botaoCategoria,
                  categoria === item && styles.categoriaAtiva,
                ]}
                onPress={() => setCategoria(item)}
              >
                <Text
                  style={
                    categoria === item
                      ? styles.textoAtivo
                      : styles.textoCategoria
                  }
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.mensagem}>{mensagem}</Text>

          {produtosFiltrados.map((produto) => (
            <ProductCard
              key={produto.id}
              produto={produto}
              onAdicionar={adicionarProduto}
            />
          ))}
        </ScrollView>

        <View style={styles.footerArea}>
          <Carrinho
            quantidade={carrinho.length}
            total={total}
          />
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F6F9",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40, 
  },
  scrollContent: {
    flex: 1,
  },
  footerArea: {
    paddingTop: 10,
    paddingBottom: 40,
    backgroundColor: "#F4F6F9",
  },
  input: {
    backgroundColor: "#FFFFFF", 
    borderWidth: 1,
    borderColor: "#D1D5DB", 
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1F2937",
  },
  categorias: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 15,
  },
  botaoCategoria: {
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },
  categoriaAtiva: {
    backgroundColor: "#172554", 
    borderColor: "#172554",
  },
  textoCategoria: {
    fontWeight: "600",
    color: "#4B5563",
  },
  textoAtivo: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  mensagem: {
    marginBottom: 12,
    fontSize: 14,
    color: "#6B7280",
  },
});

export default App;