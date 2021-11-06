# Vue in React - Module Federation Demo

This demo is a simple proof of concept approach for fetching a React component from a *"remote"* Vue  app and mounting it within a React *"host"* app using module federation.

The React app fetches and renders a **Vue button which can be used to increment a counter controlled by Vue**. The button text can be manipulated via a text input and it can also be unmounted/mounted using a checkbox.

This illusatrates that the approach used allows communication to-and-fro Vue and React, as well as correctly handling React lifecycle hooks when the host app unmounts the parent component.

---

## Running

Install dependencies

`yarn`

Then run development servers with

`yarn start`

This will build and serve both `home` and `layout` on ports `3000` and `3001` respectively.

- Host (layout, Vue app): [localhost:3000](http://localhost:3000/)
- Remote (home, React app): [localhost:3001](http://localhost:3001/)
