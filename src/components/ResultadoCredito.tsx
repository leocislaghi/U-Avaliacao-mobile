import { StyleSheet, Text, View } from "react-native";

interface Resultado {
  aprovado: boolean;
  mensagem: string;
}

interface ResultadoCreditoProps {
  resultado: Resultado | null;
}

export default function ResultadoCredito({ resultado }: ResultadoCreditoProps) {
  if (!resultado) return null;

  return (
    <View style={[styles.box, resultado.aprovado ? styles.sucesso : styles.erro]}>
      <Text style={styles.texto}>{resultado.mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { margin: 20, padding: 15, borderRadius: 5, alignItems: "center" },
  sucesso: { backgroundColor: "#d4edda", borderWidth: 1, borderColor: "#c3e6cb" },
  erro: { backgroundColor: "#f8d7da", borderWidth: 1, borderColor: "#f5c6cb" },
  texto: { fontSize: 16, textAlign: "center", fontWeight: "bold" }
});