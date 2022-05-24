# DEV```<select/>```

Projeto desenvolvido para o Hackathon +Devs2Blu. 
A proposta se refere à uma solução para melhorar o processo de seleção de programas de treinamento para a área de desenvolvimento. <br/>

<h3 id="prototipo">Protótipo</h3>
<a href="https://www.figma.com/file/Y71mJGWK9d4ndTmK26mrKw/DevSelect?node-id=0%3A1">Cliquei aqui</a> para acessar o protótipo.


## Preview

Para visualizar a aplicação [clique aqui](http://devselect.tech/). <br/> <br/>

### Indice
- <a href="#desafio">Desafio</a>
- <a href="#solucao">Solução</a>
- <a href="#RF">Requisitos funcionais</a>
- <a href="#NF">Requisitos não funcionais</a>
- <a href="#tecnologias">Tecnologias utilizadas</a>
- <a href="#equipe">Equipe</a> <br/> <br/>

<h3 id="desafio">Desafio</h3>
Para melhorar qualquer processo deve-se saber qual é a parte que está causando o problema. Em conversa com as mentoras no primeiro dia do Hackathon, perguntamos quais eram as maiores dificuldades na contratação de profissionais para a área de tecnologia. <br/> <br/> Após ouvir e discutir sobre a questão, notamos que dois pontos sempre ficavam no centro do debate. A primeira, era a dificuldade de encontrar profissionais que se identificavam com o produto ou a empresa e a segunda questão seria o cansaço que um processo muito longo de seleção causa tanto para o recrutador quanto para o candidato. <br/> <br/> Sobre essa última questão, utilizamos um formulário para perguntar a candidatos de programas de treinamento até quantas fases eles estariam dispostos a fazer para conseguir uma vaga muito desejada, 50% assinalaram até 3 fases, no máximo. 
Com base nessas duas questões principais, pensamos em uma solução que facilitasse e reduzisse o processo de seleção de candidatos em programas de treinamento.<br/> <br/>

<h3 id="solucao">Solução</h3>
O grupo apresenta como solução o DEVSelect. Uma ferramenta que irá facilitar o processo de seleção de candidatos. <br/> <br/>
O processo de seleção ocorrerá em até três fases, sendo a primeira o match, a segunda envolverá testes (técnico/língua estrangeira) e a terceira uma entrevista. 
A funcionalidade match foi pensada com base em aplicativos de relacionamento. Caso as características de procura sejam as mesmas, o perfil dos usuários é conectado. <br/> <br/> Da mesma forma, no DevsSelect, o recrutador decide quais requisitos de soft e hard skills o treinamento necessita e o candidato, ao preencher o formulário de intenção, selecionará as habilidades que ele domina. Se forem as mesmas que o recrutador deseja, o match acontece. <br/> <br/>

<h3 id="RF">Requisitos Funcionais</h3>
A plataforma realizará o processo seletivo em 3 etapas distintas. A primeira etapa será o match. Que procura pelas características igualmente selecionadas pelo recrutador e candidato. Facilitando a escolha dos candidatos com maior compatibilidade com os pré-requisitos do curso. A segunda etapa consiste em testes técnicos/língua estrangeira e a terceira etapa envolve a entrevista entre o recrutador, o candidato e uma pessoa técnica. <br/> <br/>

O match terá três requisitos funcionais: <br/> <br/>
RF1: Na primeira etapa/tela ocorrerá o cadastro do curso pelo recrutador, contendo os dados do curso e a escolha de hard e soft skills. <br/> <br/>
RF2: Na segunda etapa/tela ocorrerá o cadastro do candidato ao curso de treinamento, contendo dados pessoais e a escolha das hard e soft skills com as quais o candidato se identifica. <br/> <br/>
RF3: A terceira e última etapa apresentará a tela de match caso as escolhas de habilidades do recrutador e candidato sejam superiores a 70%. <br/> <br/>

Caso ocorra o match, o candidato passará para a segunda etapa, que consiste em testes técnicos, caso haja esse pré-requisito para o curso de treinamento, assim como um teste em língua estrangeira, se for o caso. A ideia é que o candidato faça presencialmente os testes para melhor acurácia do resultado. Caso seja online, o candidato deve estar ciente que será testado na etapa posterior. Essa etapa visa garantir a homogeneidade de conhecimentos que o curso de treinamento necessita. <br/> <br/>

A ultima etapa consiste na entrevista entre o recrutador, o candidato e uma pessoa técnica para avaliação conjunta dos pré-requisitos a serem atendidos. <br/> <br/>

<h3 id="NF">Requisitos não funcionais</h3>
O sistema será desenvolvido na linguagem Java, utilizando Spring Boot. Para o front end será utilizado Angular e Bootstrap. Com um design responsivo e limpo.
A comunicação com o banco de dados se dará com o MySQL. <br/> <br/>
O recrutador deve ser capaz de usar todas as funções do sistema após um treinamento de duas horas. <br/> <br/>

<h3 id="tecnologias">Tecnologias utilizadas</h3>

| Tecnologia                              | Finalidade                |
| --------------------------------------- | ------------------------- |
| Java e Spring Boot                      | Back-end                  |
| MySQL                                   | Banco de dados            |
| Angular e Bootstrap                     | Front-end                 |
| Figma                                   | Prototipação                 |
<br/> <br/>

 <h3 id="equipe">Equipe</h3>

| Alunos                              | Função                      |  Github                                       | 
| ----------------------------------- | --------------------------- | --------------------------------------------- |
| João                                | Back-end                    | [Github](https://github.com/JoaoRudolf)       |
| Julia                               | Front-end                   | [Github](https://github.com/JuliaJPereira)    |
| Lucas                               | UX/UI e Front-end           | [Github](https://github.com/chavesluucas)     |
| Paula                               | Documentação e back-end    | [Github](https://github.com/Paula-Adriana)    |
| Vinicios                            | Back-end                    | [Github](https://github.com/vinicios-tribess) |
| Yuri                                |  Front-end                  | [Github](https://github.com/yurikb)           |
