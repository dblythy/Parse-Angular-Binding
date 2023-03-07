# Parse Angular Binding


## About

The project demos how to use the upcoming Parse JS feature [bind](https://github.com/parse-community/Parse-SDK-JS/pull/1484).

Binding allows all Parse Objects' properties to be accessed via `object.bind.key`, instead of `object.get('key')`.

This allows for convienient two-way binding directly to elements such as inputs with `[(ngModel)]="object.bind.key"`.

Configure Parse applicationId and serverURL in [src/parse.ts](src/parse.ts)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Testing on other projects


To use Bind Notation on your project, install the branch with:

```
npm i dblythy/Parse-SDK-JS#dot-notation
```

