### React Vite Microfrontend Monorepo Proof of Concept

#### How to start:

Install [pnpm](https://pnpm.io/installation). Easiest way:
```sh
npm install -g pnpm
```

#### How to dev:

##### Both apps (cold reload)

Cold reload means that you will see changes only after page reload

Run each command in separate tabs
```sh
pnpm run build:dev
pnpm run serve
```

##### Host app

```sh
pnpm run dev:host
```

##### Remote app

```sh
pnpm run dev:remote
```

#### How to build

```sh
pnpm run build
```
