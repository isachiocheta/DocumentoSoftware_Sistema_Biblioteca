# Diagrama de Classe

![Diagrama de Classe](/img/DiagramaDeClasse.jpg)

## Descrição de Classe

## Reservar Livro

**Ator Principal:** Usuário

**Descrição:**
- O usuário acessa o sistema de biblioteca online para realizar a reserva de um livro.
- Ele navega pelo catálogo de livros disponíveis para localizar o livro desejado.
- Depois de encontrar o livro desejado, o usuário verifica a disponibilidade do exemplar na biblioteca.
- Caso o livro esteja disponível, o usuário seleciona a opção de reservar o livro.
- O sistema verifica se o usuário possui uma conta válida na biblioteca e se está autorizado a reservar materiais.
- Após confirmar a reserva, o sistema registra a solicitação e envia uma notificação de confirmação ao usuário com a data de devolução.
- Quando o livro reservado estiver disponível para retirada na biblioteca escolhida, o sistema envia uma notificação ao usuário informando que o livro está pronto para ser retirado.
- O usuário vai até a biblioteca, apresenta sua identificação e retira o livro reservado.
- O funcionário da biblioteca registra a retirada do livro no sistema, e o usuário pode levar o livro para casa.

## Cadastrar Livro

**Ator Principal:** Funcionário da Biblioteca

**Descrição:**
- O funcionário da biblioteca acessa o sistema com suas credenciais de login.
- Ele seleciona a opção "Cadastrar Livro" no menu do sistema.
- O funcionário preenche um formulário com os dados do livro, incluindo título, autor, editora, ano de publicação, número de exemplares disponíveis e informações adicionais.
- O sistema verifica se todas as informações obrigatórias foram preenchidas corretamente.
- Se o livro já estiver registrado no sistema, o funcionário tem a opção de adicionar novos exemplares ao registro existente.
- Caso o livro seja novo no sistema, o funcionário confirma o cadastro e o sistema armazena as informações no banco de dados.
- O livro fica disponível no catálogo online da biblioteca para consulta e empréstimo.
