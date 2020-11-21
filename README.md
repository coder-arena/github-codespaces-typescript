# Github Codespaces TypeScript

> Vamos aprender mais sobre TypeScript, Domain-Driven Design, Boas práticas, Tecnologia, Qualidade de Código, DevOps, Carreira, Dicas e muitos outros temas no site [Coder Arena](https://coderarena.com.br/).

## Sobre

Este projeto foi criado para demonstrar o uso do novo recurso do Github (ainda em versão beta), o Github Codespaces.

O projeto foi criado com base no [typescript-simple-starter](https://github.com/coder-arena/typescript-simple-starter).

[**VOCÊ PODE CONFERIR O VÍDEO COMPLETO AQUI.**](https://youtube.com/channel/UC9ljALQ1KcfatYfoo_MqSgQ?sub_confirmation=1)

## Scripts

O projeto já começa com os principais scripts necessários.

### Lint

Este script dispara a verificação de estilo de código com ESLint.

```bash
npm run lint
```

### Formatação

Este script aplica as formatações/correções necessárias de acordo com as definições de Lint no projeto.

```bash
npm run format
```

### Build

Este script irá **"transpilar" seu código TypeScript para JavaScript**. Além disso, quando esse script é executado, um anterior `prebuild` é disparado para remover os arquivos anteriores localizados na pasta `dist`.

```bash
npm run build
```

Para atuar no modo `watch`, você pode usar o script abaixo, assim não precisa executar esse comando exaustivamente.

```bash
npm run build:watch
```

### Running

Para executar a aplicação, assim como no comando anterior, você possui duas opções, sendo elas:

```bash
npm run start
```

e

```bash
npm run start:watch
```

A diferença entre os dois comandos, é que no primeiro a aplicação é executada utilizando diretamente o `node`. Já o segundo é executado em modo `watch` com a ferramenta [Nodemon](https://nodemon.io/).

**Nota:**

Esse comando faz um casamento perfeito com o `npm run build:watch` no ambiente de desenvolvimento.

Em uma aba do terminal você executa o `build:watch` e na outra o `start:watch`, assim sempre que fizer uma alteração no código **o servidor será atualizado automaticamente**.

## Tests

Os testes dependem muito das preferências do desenvolvedor, por isso, neste projeto inicial não há uma configuração de testes.

**Fica a sua escolha** 🚀

## Implementação

Existe uma configuração para uso de aliases no projeto, imagine uma importação como mostrado abaixo.

```ts
import { Entity } from '../../../../core/domain';
```

Esse tipo de importação não trás nenhuma semântica e prejudica muito a localização dos arquivos, além de ser esteticamente feia.

Para resolver esse problema podemos usar a configuração de `paths` no TypeScript, para isso basta adicionar a definição no arquivo `tsconfig.json`. Com isso a importação anterior poderia ser algo como:

```ts
import { Entity } from '@app/core/domain';
```

Isso é muito melhor, certo?

O problema dessa abordagem é que isso não funciona com JavaScript, ou seja, assim que o código for "transpilado" essa importação irá quebrar.

Para que isso não aconteça o projeto conta com a configuração do [**Module Alias**](https://github.com/ilearnio/module-alias) que pode ser encontrada no arquivo `package.json`.

Você pode customizar da forma que preferir, o limite é a sua criatividade 😃

## Notas

### Variáveis de Ambiente

Existem diversas formas de usar variáveis de ambiente com Node.JS, mas preferi deixar isso ao seu critério, para que você possa usá-lo com ferramentas como [DotEnv](https://github.com/motdotla/dotenv), [CrossEnv](https://github.com/kentcdodds/cross-env) ou até mesmo na sua configuração de `docker-compose`.

### Docker / Docker-Compose

Esse projeto não está configurado para executar com Docker, mas fazê-lo é incrivelmente simples.

Esse projeto tem como objetivo ser o mais simples possível, por isso não adicionei nenhuma definição de `Dockerfile` ou de ambiente de execução.

### Estrutura de Projeto

A minha recomendação é concentrar todos os arquivos no projeto no diretório `src`, e dentro dele você pode organizar da forma que for mais conveniente.

Um grande abraço 🤗 
