# 📊 Calculadora de IMC (Índice de Massa Corporal)

Este projeto é uma aplicação web simples para calcular o **IMC (Índice de Massa Corporal)** com base no peso e altura informados pelo usuário. Ele classifica o resultado em diferentes categorias de saúde, fornecendo orientações com base nos padrões da Organização Mundial da Saúde (OMS).

## 🚀 Funcionalidades

- Entrada de **peso** e **altura** com validação de dados.
- Cálculo automático do IMC ao submeter o formulário.
- Classificação do IMC em categorias:
  - Abaixo do peso
  - Peso normal
  - Sobrepeso
  - Obesidade grau 1
  - Obesidade grau 2
  - Obesidade grau 3
- Exibição de mensagens personalizadas e estilizadas para cada categoria.
- Tratamento de erros com mensagens de validação.

## 🎨 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript 

## 💡 Como Utilizar

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/remyfonseca/calcimc.git
   ```

2. **Acesse o diretório do projeto:**

   ```bash
   cd nome-do-repositorio
   ```

3. **Abra o arquivo ****`index.html`** em qualquer navegador moderno:

   - Clique duas vezes no arquivo `index.html`
   - Ou execute uma extensão de live server (caso use VSCode).

## 🧩 Como Funciona o Código

- **capturarValores()**: Captura e valida os valores de entrada, ajustando a altura caso seja informada em centímetros.
- **mostrarErro()**: Exibe uma mensagem de erro caso os valores sejam inválidos.
- **calcIMC()**: Realiza o cálculo matemático do IMC.
- **resultadoIMCTexto()**: Exibe o resultado do IMC com o texto e a estilização correspondentes.
- **resultadoIMC()**: Classifica o IMC de acordo com as faixas definidas.
- **Formulário**: Lida com o evento `submit`, prevenindo o recarregamento da página e exibindo o resultado instantaneamente.

## ⚡ Possível Melhoria Futura

- Implementar responsividade avançada para dispositivos móveis.

## 💬 Contato

Feito por [Remy Fonseca ](https://github.com/remyfonseca).