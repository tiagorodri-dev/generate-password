<h1 align="center" style="font-weight: bold;"> Generate Password 💻</h1>

<p align="center">
    <b>
    Um aplicativo mobile para gerar e gerenciar senhas de forma prática e segura, utilizando o Async Storage para armazenamento local.
    </b>
</p>

## 🎯 Objetivos

- **Gerar senhas** com base na quantidade de caracteres definida pelo usuário.
- **Excluir senhas** para melhor organização.
- **Armazenar senhas** localmente no dispositivo para fácil acesso.

## 🎨 Layout

<p align="center">
    <img src="https://github.com/user-attachments/assets/34f1dedc-8d76-4663-b829-fc7cbd6bc27f" alt="Tela inicial do aplicativo" width="300px">
    <img src="https://github.com/user-attachments/assets/18eb10f2-ecbd-408b-9909-29aad4b11de2" alt="Tela de gerenciamento de senhas" width="300px">
</p>

## ⚡ Funcionalidades

- **Geração de senhas**: Criação de senhas aleatórias com base nos critérios definidos pelo usuário.
- **Exclusão de senhas**: Permite remover senhas armazenadas.
- **Armazenamento seguro**: Utiliza Async Storage para salvar as senhas localmente no dispositivo.
- **Interface intuitiva**: Design pensado para facilitar o uso.

## 💻 Tecnologias

- **React Native**: Base do desenvolvimento do aplicativo.
- **Expo**: Ambiente para acelerar o processo de desenvolvimento.
- **React Clipboard**: Para copiar senhas facilmente.
- **Async Storage**: Solução para armazenamento local.

## 📚 Arquitetura

O projeto segue uma arquitetura modular e bem definida:

- **Componentes funcionais**: Organizados para reutilização e manutenção simples.
- **Estrutura de pastas**:
  - `components/`: Contém os componentes reutilizáveis da interface.
  - `assets/`: Armazena imagens e outros recursos estáticos.
  - `hooks/`: Inclui hooks para o armazenamento dos dados localmente.
  - `app/tabs/`: Contém as abas principais do aplicativo e lógica de funcionamento.

## 🚀 Primeiros passos

### Pré-requisitos

Para executar o projeto, você precisa ter instalado:

- **Node.js** (versão LTS recomendada)

### Clone o repositório

Execute o comando abaixo para clonar o repositório:

```bash
git clone https://github.com/tiagorodri-dev/generate-password.git
```

### Instale as dependências e execute o projeto

1. Acesse a pasta do projeto:

   ```bash
   cd generate-password
   ```

2. Instale as dependências necessárias:

   ```bash
   npm install
   ```

3. Inicie o projeto no ambiente Expo:

   ```bash
   npm start
   ```

4. Siga as instruções do Expo para abrir o aplicativo no dispositivo ou emulador:
- No dispositivo, escaneie o QR code utilizando o app Expo Go.
- Em um emulador, selecione a opção correspondente no terminal.

## 🤝 Contribuições

Contribuições são bem-vindas! Se você tiver sugestões ou encontrar problemas, sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_.