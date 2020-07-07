## react-redux-hooks-typescript-material

##### Requirement / Instructions :

Sample boiler-plate of react


## Technology Used

-   [Material-UI](https://github.com/mui-org/material-ui)
-   [Typescript](https://www.typescriptlang.org/)
-   [React](https://facebook.github.io/react/)
-   [Redux](https://github.com/reactjs/redux)
-   [Redux-Thunk](https://github.com/gaearon/redux-thunk)
-   [Redux-Persist](https://github.com/rt2zz/redux-persist)
-   [React Router](https://github.com/ReactTraining/react-router)
-   [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)

Install it and run:

```bash
npm i
npm start
```

## Enable PWA ServiceWorker [OPTIONAL]

Just comment in the following line in the `index.tsx`:

```javascript
// registerServiceWorker();
```

to

```javascript
registerServiceWorker();
```

## Enable Prettier [OPTIONAL]

1.  Step: Install the Prettier plugin (e.g. the one of Esben Petersen)
2.  Add the following snippet to your settings in VSCode:

```json
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
       "source.organizeImports": true // optional
   },
```

## Enable project snippets [OPTIONAL]

Just install following extension:

<img width="70%" src="vscode_snippet0.png" alt="Project Snippet"/>

After that you can start to type `fcomp` (_for function component_) and you get a template for a new component.

<img width="70%" src="vscode_snippet1.png" alt="Project Snippet"/>
<img width="70%" src="vscode_snippet2.png" alt="Project Snippet"/>

## The idea behind the example

This example demonstrate how you can use [Create React App](https://github.com/facebookincubator/create-react-app) with [TypeScript](https://github.com/Microsoft/TypeScript).
