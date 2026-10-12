import FormularioCredito from "@/components/FormularioCredito";
import ResultadoCredito from "@/components/ResultadoCredito";
import { useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

interface TipoResultado {
  aprovado: boolean;
  mensagem: string;
}

export default function Index() {
  const [renda, setRenda] = useState("");
  const [idade, setIdade] = useState("");
  const [clt, setClt] = useState(false);
  const [divida, setDivida] = useState(false);
  const [resultado, setResultado] = useState<TipoResultado | null>(null);

  const calcularCredito = () => {
    const rendaNum = parseFloat(renda) || 0;
    const idadeNum = parseInt(idade) || 0;

    if (divida) {
      setResultado({ aprovado: false, mensagem: "SEM DIREITO A CRÉDITO (Possui dívida)" });
      return;
    }

    let percentual = 0;
    if (idadeNum <= 24) percentual = 0.25;
    else if (idadeNum <= 49) percentual = 0.40;
    else if (idadeNum <= 64) percentual = 0.30;
    else percentual = 0.15;

    if (!clt) {
      percentual = percentual / 2;
    }

    const valorCredito = rendaNum * percentual;

    setResultado({
      aprovado: true,
      mensagem: `CRÉDITO APROVADO\nR$ ${rendaNum.toFixed(2)} x ${(percentual * 100).toFixed(0)}% = R$ ${valorCredito.toFixed(2)}`
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Análise de Crédito - Caixa</Text>
      
      <FormularioCredito
        renda={renda} setRenda={setRenda}
        idade={idade} setIdade={setIdade}
        clt={clt} setClt={setClt}
        divida={divida} setDivida={setDivida}
        onCalcular={calcularCredito}
      />

      <ResultadoCredito resultado={resultado} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: "center", backgroundColor: "#fff" },
  titulo: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 10, color: "#003366" }
});