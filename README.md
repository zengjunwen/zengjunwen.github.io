# Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

Requires Node.js 20 or newer. This project uses Yarn (classic, `yarn.lock`); please don't commit a `package-lock.json`.

### Installation

```
$ yarn install
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
eg：GIT_USER=zengjunwen GIT_PASS= yarn deploy
```

This command builds the website and pushes it to the `delpoy` branch (see `deploymentBranch` in `docusaurus.config.js`), which GitHub Pages serves.
