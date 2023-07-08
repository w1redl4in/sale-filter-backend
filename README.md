### 📝 Cookie - Clean Arquitecture

Uma aplicação responsável por criar, listar, atualizar e apagar cookies utilizando a arquitetura limpa.

### Inspiração

Como inspiração usei a [Umbriel](https://github.dev/diego3g/umbriel) do [Diego da Rocketseat](http://github.com/diego3g).

### Camadas

#### Core

A camada <strong>src/core/\*</strong> é responsável por centralizar todos os protocolos/interfaces/contratos/adapters que se diz direito do núcleo da aplicação.

#### Infra

A camada <strong>src/infra/\*</strong> é responsável por implementar códigos de terceiros(frameworks/libs) através de <strong>adapters</strong>.

#### Modules

A camada <strong>src/modules/\*</strong> é responsável por conter todos os contextos da nossa aplicação, aqui teremos boa parte do código e suas regras de negócio.
