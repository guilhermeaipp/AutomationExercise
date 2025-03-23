
# Especificação de Testes BDD - Automation Exercise

### **Funcionalidade:** Acesso à Aplicação
**Cenário:** TC001 - Carregamento da página

**Dado** que o usuário acessa https://www.automationexercise.com

**Quando** a página carrega

**Então** ela deve ser exibida corretamente sem erros.

### **Funcionalidade:** Verificação do Título
**Cenário:** TC002 - Título da página

**Dado** que o usuário acessa https://www.automationexercise.com

**Quando** captura o título da página

**Então** o título deve ser "Automation Exercise".

### **Funcionalidade:** Cadastro e Exclusão de Conta
**Cenário:** TC003.01 - Cadastro de conta

**Dado** que o usuário acessa https://www.automationexercise.com e navega até a tela de cadastro

**Quando** preenche os dados obrigatórios e clica em "Create Account"

**Então** a mensagem "ACCOUNT CREATED!" deve ser exibida.

**Cenário:** TC003.02 - Exclusão de conta

**Dado** que o usuário está logado

**Quando** clica em "Delete Account"

**Então** a mensagem "ACCOUNT DELETED!" deve ser exibida.

### **Funcionalidade:** Registro com E-mail Já Cadastrado
**Cenário:** TC004 - Tentativa de cadastro com e-mail existente

**Dado** que o usuário tenta se registrar com um e-mail já cadastrado

**Quando** clica em "Signup"

**Então** o sistema deve exibir a mensagem "Email Address already exist!".

**Funcionalidade:** Login com Senha Inválida
**Cenário:** TC005 - Tentativa de login com senha incorreta

**Dado** que o usuário tenta fazer login com um e-mail válido e senha incorreta

**Quando** clica em "Login"

**Então** o sistema deve exibir a mensagem "Your email or password is incorrect!".



