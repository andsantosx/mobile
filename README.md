# 🏎️ Super Trunfo F1 - React Native

Aplicativo de cartas Super Trunfo com pilotos de Fórmula 1, desenvolvido em React Native com Expo.

## 📋 Características

- **6 pilotos de F1** com informações detalhadas
- **Interface moderna** com tema escuro inspirado na F1
- **Navegação entre cartas** com botões anterior/próximo
- **Sistema de estrelas** para classificação dos pilotos
- **Imagens oficiais** dos pilotos
- **Design responsivo** que funciona em iOS, Android e Web

## 🎯 Componentes Utilizados

- `View` - Containers e layout
- `Text` - Textos e labels
- `Image` - Fotos dos pilotos
- `ScrollView` - Rolagem do conteúdo
- `TouchableOpacity` - Botões interativos
- `SafeAreaView` - Área segura para dispositivos
- `StyleSheet` - Estilização CSS-in-JS

## 🚀 Como Executar

### Pré-requisitos
- Node.js instalado
- npm ou yarn

### Instalação

1. Instale as dependências:
```bash
npm install
```

2. Inicie o projeto:
```bash
npm start
```

3. Escolha a plataforma:
   - Pressione `a` para Android
   - Pressione `i` para iOS
   - Pressione `w` para Web

## 📱 Visualizar em Dispositivo Físico

1. Instale o app **Expo Go** no seu smartphone (disponível na Play Store/App Store)
2. Execute `npm start`
3. Escaneie o QR code com o Expo Go (Android) ou câmera (iOS)

## 📁 Estrutura do Projeto

```
mobile/
├── App.js          # Componente principal com a carta
├── pilots.js       # Dados estáticos dos pilotos
├── package.json    # Dependências do projeto
├── app.json        # Configurações do Expo
└── babel.config.js # Configurações do Babel
```

## 🎨 Informações das Cartas

Cada carta exibe:
- ⭐ **Estrelas** (1-5)
- 👤 **Nome do piloto**
- 🏁 **Equipe**
- 🌍 **País de origem**
- 📝 **Descrição/biografia**
- 🖼️ **Foto oficial**

## 🏆 Pilotos Disponíveis

1. Max Verstappen (Red Bull) - 5⭐
2. Lewis Hamilton (Mercedes) - 5⭐
3. Charles Leclerc (Ferrari) - 4⭐
4. Lando Norris (McLaren) - 4⭐
5. Fernando Alonso (Aston Martin) - 5⭐
6. Sergio Pérez (Red Bull) - 3⭐

## 🎓 Conceitos Aplicados

- ✅ Componentes básicos do React Native
- ✅ Estilização com StyleSheet
- ✅ Dados estáticos em JavaScript
- ✅ Estados com useState
- ✅ Renderização condicional
- ✅ Eventos de toque
- ✅ Importação/exportação de módulos

## 🔧 Personalização

Para adicionar mais pilotos, edite o arquivo `pilots.js` seguindo a estrutura:

```javascript
{
  id: 7,
  name: "Nome do Piloto",
  description: "Descrição",
  team: "Nome da Equipe",
  country: "🏴 País",
  stars: 4,
  image: "URL_da_imagem"
}
```

---

Desenvolvido como exercício de React Native 🚀
