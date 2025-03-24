# Casos de Teste - Automation Exercise

## 1. Acesso à Aplicação  
**ID:** TC001  
**Descrição:** Verificar se a aplicação carrega corretamente.   

**Passos:**  
1. Acessar `https://www.automationexercise.com`  
2. Verificar se a página carrega com sucesso  

**Resultado Esperado:** O site deve ser carregado sem erros.

---

## 2. Verificação do Título  
**ID:** TC002  
**Descrição:** Validar se o título da página está correto.   

**Passos:**  
1. Acessar `https://www.automationexercise.com`  
2. Capturar o título da página  
3. Comparar com o esperado `"Automation Exercise"`  

**Resultado Esperado:** O título da página deve ser `"Automation Exercise"`.

---

## 3. Cadastro e Exclusão de Conta
**ID:** TC003  
**Descrição:** Validar o processo completo de criação e exclusão de uma conta de usuário, incluindo a navegação, preenchimento de formulários, verificação de mensagens de sucesso e exclusão da conta.  

#### *Cadastro de conta*   
**Passos:**  
1. Acessar `https://www.automationexercise.com`  
2. Verificar se a página inicial é exibida corretamente.
3. Clicar no botão 'Signup / Login'.
4. Verificar se a mensagem 'New User Signup!' está visível.
5. Inserir nome e endereço de e-mail.
6. Clicar no botão 'Signup'.
7. Verificar se a mensagem 'ENTER ACCOUNT INFORMATION' está visível.
8. Preencher os seguintes dados: Título, Nome, E-mail, Senha, Data de Nascimento.
9. Marcar a opção 'Sign up for our newsletter!'.
10. Marcar a opção 'Receive special offers from our partners!'.
11. Preencher os seguintes dados:
Nome
Sobrenome
Empresa
Endereço
Endereço 2
País
Estado
Cidade
CEP 
Número de Celular
12. Clicar no botão 'Create Account'.
13. Verificar se a mensagem 'ACCOUNT CREATED!' está visível.
14. Clicar no botão 'Continue'.

**Resultado Esperado:** O usuário deve ser capaz de criar uma conta com sucesso, visualizar a mensagem "ACCOUNT CREATED!"

### Exclusão da conta
**Passos:**  
1. Acessar `https://www.automationexercise.com`  
2. Clicar no botão 'Signup / Login'.
3. Digitar o e-mail.
4. Digitar senha
5. Clicar em Login
6. Clicar no botão 'Delete Account'
7. Verificar se a mensagem 'ACCOUNT DELETED!' está visível.
8. clicar no botão 'Continue'.
 

 **Resultado Esperado:** O usuário deve ser capaz de excluir uma conta com sucesso, visualizar a mensagem "ACCOUNT DELETED!"

---

## 4. Tentativa de criar conta com email já cadastrado
**ID:** TC004   
**Descrição:** Este teste verifica o comportamento do sistema quando o usuário tenta se registrar com um e-mail que já está associado a uma conta existente. O sistema deve impedir o cadastro e exibir uma mensagem de erro informando que o e-mail já foi utilizado para outra conta.  
**Passos:**
1. Acessar https://www.automationexercise.com.
2. Verificar se a página inicial é exibida corretamente.
3. Clicar no botão 'Signup / Login'.
4. Verificar se a mensagem 'New User Signup!' está visível.
5. Inserir nome e endereço de e-mail (um e-mail que já tenha sido cadastrado anteriormente).
6. Clicar no botão 'Signup'.
7. O sistema deve apresentar a mensagem: "Email Address already exist!", indicando que o e-mail já está registrado.

 
 **Resultado Esperado:** O sistema deve apresentar a mensagem de erro "Email Address already exist!" quando o usuário tentar registrar um e-mail já utilizado. O botão 'Signup' não deve permitir o cadastro e o usuário deve ser notificado de que o e-mail já foi registrado.

 ---

## 5. Acesso com senha inválida
**ID:** TC005   
**Descrição:** Este teste verifica se o sistema exibe corretamente a mensagem de erro ao tentar fazer login com uma senha inválida.  

**Passos:**
1. Acessar https://www.automationexercise.com.
2. Verificar se a página inicial é exibida corretamente.
3. Clicar no botão 'Signup / Login'.
4. Verificar se a mensagem 'Login to your account' está visível.
5. Inserir nome e endereço de e-mail e uma senha incorreta.
6. Clicar no botão 'Login'.
7. O sistema deve exibir a mensagem: "Your email or password is incorrect!", informando que os dados de login estão incorretos.

 
 **Resultado Esperado:** O sistema deve impedir o login e exibir a mensagem "Your email or password is incorrect!", garantindo que apenas usuários com credenciais corretas consigam acessar a conta.

 ---

## 6. Adicionar Produtos ao Carrinho e Verificar Detalhes
**ID:** TC006   
**Descrição:** Validar se o usuário consegue adicionar dois produtos ao carrinho, visualizar o conteúdo corretamente e verificar os preços, quantidades e valores totais. 

**Passos:**
1. Acessar https://www.automationexercise.com.
2. Verificar se a página inicial é exibida corretamente.
3. Clicar no botão 'Products'.
4. Passar o mouse sobre o primeiro produto e clicar em 'Add to cart'.
5. Clicar no botão 'Continue Shopping'.
6. Passar o mouse sobre o primeiro produto e clicar em 'Add to cart'.
7. Clicar no botão 'Continue Shopping'.
8. Passar o mouse sobre o primeiro produto novamente e clicar em 'Add to cart'.
9. Clicar no botão 'Continue Shopping'.
10. Passar o mouse sobre o segundo produto e clicar em 'Add to cart'.
11. Clicar no botão 'View Cart'.
12. Verificar se os dois produtos foram adicionados ao carrinho.
13. Verificar se os preços, quantidades e o valor total estão corretos.

 
 **Resultado Esperado:** Ambos os produtos devem estar no carrinho, com os preços, quantidades e valores totais exibidos corretamente.

 ---




