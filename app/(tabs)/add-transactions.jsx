import { SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";

export default function AddTransactions() {
  return (
    <SafeAreaView>
      <ScrollView>
        
        <View>
          <Text>Descrição</Text>
          <TextInput />
        </View>

        <View>
          <Text>Valor</Text>
          <TextInput />
        </View>

        <View>
          <Text>Data</Text>
          <TextInput />
        </View>

        <View>
          <Text>Categoria</Text>
          <TextInput />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
