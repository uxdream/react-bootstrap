# React bootstrap

## Instalation

### Install package, change `exclude` rule for webpack `babel-loader` & add webpack alias
```
npm install --save uxdream/react-bootstrap
```

```
exclude: /node_modules\/(?!react\-bootstrap)/
```

```
bootstrap:path.resolve('./node_modules/bootstrap/scss')
```

## Development

```
npm run dev
```

```
npm run lint
```