##  Documentação referente à funcionalidade "Match" correspondente a primeira etapa do processo de seleção para programas de treinamento

### Objetivo:
O objetivo da ferramenta match é auxiliar o recrutador a encontrar perfis que se adequem a exigências específicas para programas de treinamento na área de desenvolvimento.

### Descrição:

#### Tela inicial
A aplicação é apresentada ao usuário com a opção de escolha “Área do candidato” ou “Área do recrutador”.
![Tela inicial](https://github.com/Paula-Adriana/devselect/blob/main/Documentacao/Prototipos/Tela%20de%20inicio.png)

#### Área do recrutador
Ao escolher a opção “Área do recrutador”, duas opções aparecem em uma nova tela: “Ver matches” e “Criar Curso”. 

![inicio-recrutador](https://github.com/Paula-Adriana/devselect/blob/main/Documentacao/Prototipos/Tela%20de%20inicio%20do%20Recrutador.png)


Ao clicar em “Criar curso”, o recrutador inicia o cadastro de um curso para treinamento. Serão adicionadas as informações do nome do curso, duração, local, quantidade de vagas, turno e a descrição do curso que será oferecido. Ainda nesta tela o recrutador selecionará as habilidades que são esperadas dos candidatos para que haja identificação entre o perfil do candidato e o perfil esperado como pré-requisito estabelecido para o curso. Haverá um botão “Criar curso” para salvar as informações fornecidas. Ao salvar, o sucesso da operação é indicado através de uma pop-up.  


![Tela recrutador](https://github.com/Paula-Adriana/devselect/blob/main/Documentacao/Prototipos/tela-recrutador.png)

#### Área do candidato
Nesta tela, o candidato preenche o formulário para se cadastrar em uma turma de treinamento. Devem ser informados os dados pessoais e de endereço assim como selecionar as habilidades e conhecimentos com as quais o candidato se identifica. A quantidade de habilidades a serem selecionadas não deve ser maior que o número de habilidades selecionadas pelo recrutador. Haverá um botão “Candidatar-se” para salvar as informações fornecidas. Ao clicar no botão, o sucesso da operação é indicado através de uma pop-up.  

![tela-candidadto](https://github.com/Paula-Adriana/devselect/blob/main/Documentacao/Prototipos/tela-candidato.png)

#### Tela de matches
A tela de matches pertence a área do recrutador e consiste no resultado da rotina de código que trará os resultados dos candidatos contendo as habilidades e conhecimentos selecionados que coincidem com aquelas que o recrutador selecionou. 

![tela-matches](https://github.com/Paula-Adriana/devselect/blob/main/Documentacao/Prototipos/Tela%20dos%20matches.png)

 

### Detalhes técnicos
Para saber quais são as características selecionadas pelo candidato e pelo recrutador, foi construído um método que compara as listas que contém as características selecionadas por ambas as partes. Para isso, foi utilizado o método iterador forEach de forma aninhada, onde o laço externo que possui a lista das características desejáveis para o curso, percorre o laço interno contendo a lista das características que o candidato escolheu.

Para comparar efetivamente se as strings de características das listas citadas acima são idênticas, foi utilizado o método equals atrelado a uma variável booleana e através da estrutura condicional If/else, se a condição for verdadeira, o cômputo das características iguais é somado em uma variável para controle.

![metodo-save](https://github.com/Paula-Adriana/devselect/blob/main/Documentacao/Prototipos/metodo-save.png) 


