# 💰 Money — App de Gerenciamento Financeiro

Aplicativo mobile de controle financeiro pessoal, construído com React Native utilizando Expo Router. Permite ao usuário registrar receitas e despesas, visualizar seu saldo, organizar suas finanças de forma prática e moderna.

## ✅ Funcionalidades

Cadastro de entradas (receitas)

Cadastro de saídas (despesas)

Exibição do saldo total

Armazenamento offline com AsyncStorage

Navegação com abas

Interface intuitiva com animações

Seleção de datas e categorias

## 🛠 Tecnologias

- React Native 0.79.5

- Expo SDK 53

- Expo Router ~5.1.3

- TypeScript ~5.8.3

- React Navigation (com tabs e elementos nativos)

- AsyncStorage para armazenamento local

- DateTimePicker, Picker, WebView

- Haptics, Blur, Fontes personalizadas

- Reanimated e Gesture Handler para interações fluídas

- Eslint para padronização do código

### Principais

- React Native
- Expo
- React Navigation

## 🚀 Como Executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/DevGabrielrr/MoneyReactNative.git
   ```

2. Atualize o projeto, Em seu terminal e na pasta do projeto

   ```bash
   npm install
   ```

3. Rodar o projeto

   ```bash
    npx expo start
   ```

4. Rodar em dispositivos específicos

   ```bash
   npm run android   # Dispositivo Android
   npm run ios       # Dispositivo iOS
   npm run web       # Navegador
   ```

5. Resetar o projeto (limpar cache etc.)

   ```bash
   Copiar
   Editar
   ```

   🧩 Estrutura de Pastas

   ```bash
   copiar
   Editar
   src/
   ├── app/ # Rotas usando expo-router
   │ ├── index.tsx # Tela inicial
   │ └── ... # Demais rotas/telas
   ├── components/ # Componentes reutilizáveis
   ├── contexts/ # Contextos globais (ex: Auth, Theme)
   ├── services/ # APIs ou serviços externos
   ├── storage/ # Funções de leitura/escrita em AsyncStorage
   ├── styles/ # Temas e estilos globais
   └── utils/ # Funções utilitárias
   ```

   🔒 Dependências importantes
Pacote Finalidade
@react-native-async-storage Armazenamento local
@react-navigation/native Navegação no app
expo-blur, expo-haptics Efeitos visuais e feedback tátil
react-native-reanimated Animações complexas
react-native-gesture-handler Interações por gesto
expo-font, expo-constants Fontes e variáveis do sistema
@react-native-community/datetimepicker Seletor de data

   🛠️ Desenvolvedor
Gabriel Rodrigues

   💼 Projeto pessoal para estudo e prática com Expo Router + React Native
