# GITS UI

<div align="center">

![GITS.ID](https://gits.id/wp-content/uploads/2022/06/Logo-Main-1.png)

[![Quality Gate Status](https://sonar.gits.id/api/project_badges/measure?project=ui&metric=alert_status&token=47997a4785ff0c755eff7782b1be0676a7d358d3)](https://sonar.gits.id/dashboard?id=ui)
[![Coverage](https://sonar.gits.id/api/project_badges/measure?project=ui&metric=coverage&token=47997a4785ff0c755eff7782b1be0676a7d358d3)](https://sonar.gits.id/dashboard?id=ui)
[![npm version](https://badge.fury.io/js/@gits-id%2Fui.svg)](https://badge.fury.io/js/@gits-id%2Fui)
![npm](https://img.shields.io/npm/dm/@gits-id/ui)

</div>

GITS UI is the official UI Component Library in GITS Indonesia built with Vue 3 and Tailwind CSS.

## Major Dependencies

- [Vue.js](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Iconify Vue](https://icones.js.org/)

## Documentation

Documentation is located [here](https://gitsindonesia.github.io/ui-component/).

## Examples

Checkout [examples](/examples/):

- [Vue 3](/examples/vue/)
- [Nuxt 3 Starter with GITS UI](https://github.com/gitsindonesia/nuxt-starter)

## Development

- Install [lerna](https://lerna.js.org/) and [yarn](https://yarnpkg.com/) globally:
  ```bash
  npm i -g lerna yarn
  ```
- Bootstap all packages:
  ```
  lerna bootstrap
  ```
- Build all packages:
  ```
  lerna run build
  ```
- Run storybook:

  ```bash
  yarn dev
  ```

## Running Documentation

Running docs:

```
yarn docs:dev
```

Build docs:

```
yarn docs:build
```

## License

MIT
