import { Pressable, StyleSheet, Switch, Text, TextInput, View } from "react-native";

interface FormularioCreditoProps {
  renda: string;
  setRenda: (text: string) => void;
  idade: string;
  setIdade: (text: string) => void;
  clt: boolean;
  setClt: (value: boolean) => void;
  divida: boolean;
  setDivida: (value: boolean) => void;
  onCalcular: () => void;
}

export default function FormularioCredito({
  renda, setRenda,
  idade, setIdade,
  clt, setClt,
  divida, setDivida,
  onCalcular
}: FormularioCreditoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Renda Anual (R$):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ex: 20000"
        value={renda}
        onChangeText={setRenda}
      />

      <Text style={styles.label}>Idade:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ex: 23"
        value={idade}
        onChangeText={setIdade}
      />

      <View style={styles.linha}>
        <Text style={styles.label}>Possui vínculo CLT?</Text>
        <Switch value={clt} onValueChange={setClt} />
      </View>

      <View style={styles.linha}>
        <Text style={styles.label}>Possui dívida?</Text>
        <Switch value={divida} onValueChange={setDivida} />
      </View>

      <Pressable style={styles.botao} onPress={onCalcular}>
        <Text style={styles.textoBotao}>Consultar Crédito</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%", padding: 20 },
  label: { fontSize: 16, marginBottom: 5, fontWeight: "500" },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 5, padding: 10, marginBottom: 15 },
  linha: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 15 },
  botao: { backgroundColor: "#003366", padding: 15, borderRadius: 5, alignItems: "center", marginTop: 10 },
  textoBotao: { color: "#fff", fontSize: 16, fontWeight: "bold" }
});