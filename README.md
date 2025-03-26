# 📦 Projeto Academia - Conexão com PostgreSQL (RDS)

Este projeto é uma implementação em Node.js que se conecta ao banco de dados PostgreSQL (RDS AWS) e realiza operações básicas de inserção e consulta na tabela `Pessoa` do schema `academia`.

---

## ✅ Pré-requisitos

Antes de rodar o projeto, é necessário instalar o **Node.js**:

### 🔧 Instalar Node.js:

#### 🐧 Linux (Debian/Ubuntu)

##### WINDOWS -> https://nodejs.org/pt

OBS.: Para inserir uma nova pessoa basta alterar a linha 53: await inserirPessoa(2001, 'Teste Pessoa', '11999990000', 'Rua Teste', '00000-000', 100, 45); por outros valores

-> node primeira_etapa.js

```bash
sudo apt update
sudo apt install nodejs npm -y
