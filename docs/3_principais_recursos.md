# Principais Recursos e Funcionalidades

## Catalogação de Livros

- **Registro de Informações**: O sistema permite o registro detalhado de informações sobre um determinado livro, como título, autor, editora, gênero e data de publicação.
- **Edição e Exclusão**: É possível editar ou excluir os dados de um livro previamente cadastrado.

## Consulta

- **Pesquisa por Livros**: Permite a consulta de livros por título, editora, autor e gênero.
- **Pesquisa por Usuário**: Permite a consulta por nome de usuário, CPF ou telefone.
- **Histórico de Empréstimos e Reservas**: O sistema permite a consulta dos empréstimos e reservas dos livros.

## Reserva

- **Agendamento de Empréstimo**: O bibliotecário pode realizar a reserva de um livro para um usuário, agendando a data para o empréstimo.
- **Gerenciamento de Reservas**: O bibliotecário pode cancelar ou renovar a reserva feita pelo usuário.
- **Informação de Data**: O sistema permite informar a data de reserva do livro.

## Devolução

- **Cadastro de Devolução**: O sistema permite o cadastro da devolução do empréstimo realizado.
- **Informação de Data**: É possível registrar a data de devolução do livro emprestado.

## Multas

- **Cálculo de Multas**: O sistema calcula automaticamente a multa com base nas datas de reserva e devolução do livro.
- **Edição e Exclusão de Multas**: O sistema permite que a multa seja excluída ou editada conforme necessário.

## Empréstimo

- **Registro de Empréstimos**: O sistema permite registrar o empréstimo de livros, controlando quando um livro é retirado do acervo.

## Gerenciamento de Conta

- **Manutenção de Contas de Usuários**: O sistema permite adicionar, alterar ou excluir dados dos usuários, mantendo as informações atualizadas.

## Requisitos Funcionais e Não Funcionais

### RF.001 - O sistema deve permitir a criação de logins de acesso ao sistema
- **RN.001** - O login será destinado aos funcionários e usuários.
- **RN.002** - O login será destinado a pessoas físicas para usuários e funcionários.
- **RN.003** - O login ‘Usuário’ se destinará exclusivamente aos usuários do sistema.
- **RN.004** - O login 'Funcionário' se destinará exclusivamente ao funcionário da biblioteca.
- **RN.005** - Para realizar o acesso, o sistema irá pedir login e senha.

### RNF.001 - Segurança: O sistema deve ser protegido contra acesso não autorizado.
- O sistema deve implementar criptografia para armazenar senhas de usuários e funcionários.


### RF.002 - O sistema deve permitir ao funcionário o registro do cadastro de um usuário
- **RN.006** – Para a inclusão de uma pessoa física são necessários os seguintes dados:
  - Nome Completo;
  - CPF;
  - E-mail;
  - Telefone;
  - Endereço;
  - Login;
  - Senha.

### RNF.002 - Legalidade: O sistema deve estar em conformidade com as leis de proteção de dados, como a LGPD (Lei Geral de Proteção de Dados) no Brasil, garantindo a privacidade dos dados dos usuários.

### RF.003 - O sistema deve permitir o registro da entrada de novos livros
- **RN.007** - Para a entrada do livro, deverá ser cadastrado:
  - Nome;
  - Autor;
  - Editora;
  - Gênero;
  - Data de publicação.

### RF.004 - O sistema deve permitir o registro da reserva
- **RN.008** - Para o registro da reserva do livro, deverá ser cadastrado:
  - Nome do usuário;
  - Nome do livro;
  - Data de retirada;
  - Data de devolução.

### RNF.003 - O sistema deve exigir autenticação de usuário para o registro da reserva e permitir acesso apenas a usuários autorizados.

### RF.005 - O sistema deve permitir o registro do controle de empréstimos, devoluções e renovações
- **RN.009** - O controle será feito com base na disponibilidade das datas.

### RF.006 - O sistema deve permitir o registro do controle de multas
- **RN.010** - O controle será feito com base nas datas de devolução e retirada dos livros.

### RNF.004 - Portabilidade: O sistema deve ser capaz de rodar em diferentes navegadores.