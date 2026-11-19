# gamebook

Uma plataforma de gamificação de leitura

Banco de dados mysql:

```
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

```
CREATE TABLE livros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    isbn VARCHAR(20) NOT NULL UNIQUE,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255),
    capa VARCHAR(500),
    total_paginas INT
);
```

```
CREATE TABLE leituras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    livro_id INT NOT NULL,
    pagina_atual INT DEFAULT 0,
    status ENUM('QUERO_LER', 'LENDO', 'CONCLUIDO') DEFAULT 'QUERO_LER',
    data_inicio DATE,
    data_conclusao DATE,

    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (livro_id) REFERENCES livros(id)
);
```
