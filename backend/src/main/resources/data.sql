INSERT INTO `devselect`.`categoria` (`id_categoria`, `descricao`) VALUES (1, 'Soft Skills');
INSERT INTO `devselect`.`categoria` (`id_categoria`, `descricao`) VALUES (2, 'Hard Skills');

INSERT INTO `devselect`.`caracteristica` (`id_caracteristica`, `descricao`, `categoria_id`) VALUES (1, 'Comunicativo', 1);
INSERT INTO `devselect`.`caracteristica` (`id_caracteristica`, `descricao`, `categoria_id`) VALUES (2, 'Criativo', 1);
INSERT INTO `devselect`.`caracteristica` (`id_caracteristica`, `descricao`, `categoria_id`) VALUES (3, 'Trabalho em equipe', 1);
INSERT INTO `devselect`.`caracteristica` (`id_caracteristica`, `descricao`, `categoria_id`) VALUES (4, 'Quieto', 1);
INSERT INTO `devselect`.`caracteristica` (`id_caracteristica`, `descricao`, `categoria_id`) VALUES (5, 'Curioso', 1);
INSERT INTO `devselect`.`caracteristica` (`id_caracteristica`, `descricao`, `categoria_id`) VALUES (6, 'HTML', 2);
INSERT INTO `devselect`.`caracteristica` (`id_caracteristica`, `descricao`, `categoria_id`) VALUES (7, 'CSS', 2);
INSERT INTO `devselect`.`caracteristica` (`id_caracteristica`, `descricao`, `categoria_id`) VALUES (8, 'JavaScript', 2);
INSERT INTO `devselect`.`caracteristica` (`id_caracteristica`, `descricao`, `categoria_id`) VALUES (9, 'React', 2);
INSERT INTO `devselect`.`caracteristica` (`id_caracteristica`, `descricao`, `categoria_id`) VALUES (10, 'Angular', 2);
INSERT INTO `devselect`.`caracteristica` (`id_caracteristica`, `descricao`, `categoria_id`) VALUES (11, 'Java', 2);
INSERT INTO `devselect`.`caracteristica` (`id_caracteristica`, `descricao`, `categoria_id`) VALUES (12, 'C#', 2);


INSERT INTO `devselect`.`pessoa` (`id_pessoa`, `cpf`, `email`, `bairro`, `cep`, `cidade`, `complemento`, `estado`, `logradouro`, `numero`, `genero_pessoa`, `idade`, `nome`, `rg`, `telefone`) VALUES (1, '12345678901', 'joao@gmail.com', 'velha', '89036640', 'Blumenau', NULL, 'SC', 'Rua legal', '55', 'M', '33', 'João Gabriel', '46597545', '995564125');
INSERT INTO `devselect`.`pessoa` (`id_pessoa`, `cpf`, `email`, `bairro`, `cep`, `cidade`, `complemento`, `estado`, `logradouro`, `numero`, `genero_pessoa`, `idade`, `nome`, `rg`, `telefone`) VALUES (2, '98745632158', 'magali@gmail.com', 'velha', '89036640', 'Blumenau', NULL, 'SC', 'Rua mais legal', '12', 'F', '3', 'Magali', '6565654', '989898451');

INSERT INTO `devselect`.`pessoa_caracteristicas` (`pessoas_id_pessoa`, `caracteristicas_id_caracteristica`) VALUES (1, 3);
INSERT INTO `devselect`.`pessoa_caracteristicas` (`pessoas_id_pessoa`, `caracteristicas_id_caracteristica`) VALUES (1, 5);
INSERT INTO `devselect`.`pessoa_caracteristicas` (`pessoas_id_pessoa`, `caracteristicas_id_caracteristica`) VALUES (1, 6);
INSERT INTO `devselect`.`pessoa_caracteristicas` (`pessoas_id_pessoa`, `caracteristicas_id_caracteristica`) VALUES (1, 8);
INSERT INTO `devselect`.`pessoa_caracteristicas` (`pessoas_id_pessoa`, `caracteristicas_id_caracteristica`) VALUES (1, 10);
INSERT INTO `devselect`.`pessoa_caracteristicas` (`pessoas_id_pessoa`, `caracteristicas_id_caracteristica`) VALUES (1, 11);
INSERT INTO `devselect`.`pessoa_caracteristicas` (`pessoas_id_pessoa`, `caracteristicas_id_caracteristica`) VALUES (2, 1);
INSERT INTO `devselect`.`pessoa_caracteristicas` (`pessoas_id_pessoa`, `caracteristicas_id_caracteristica`) VALUES (2, 2);
INSERT INTO `devselect`.`pessoa_caracteristicas` (`pessoas_id_pessoa`, `caracteristicas_id_caracteristica`) VALUES (2, 5);
INSERT INTO `devselect`.`pessoa_caracteristicas` (`pessoas_id_pessoa`, `caracteristicas_id_caracteristica`) VALUES (2, 6);
INSERT INTO `devselect`.`pessoa_caracteristicas` (`pessoas_id_pessoa`, `caracteristicas_id_caracteristica`) VALUES (2, 7);
INSERT INTO `devselect`.`pessoa_caracteristicas` (`pessoas_id_pessoa`, `caracteristicas_id_caracteristica`) VALUES (2, 8);