# zoba-ui

- A React component library that abstracts the implementations but at the same time gives you the power of styling the way you want

> :warning: For the standard component styles to work properly, you should use our `reset.scss` file in your project.

Division:

`zoba-ui/components`

`zoba-ui/form-components`

`zoba-ui/typography-components`


## Getting started

- To install all the dependencies with npm, run `npm install`. Be aware that we do not support `yarn` here.

- To have a development environment, run `npm run storybook` .

- To add a new `svg` in the project, add it in the `./assets/svgs` folder and then run `npm run svgr` to generate SVG's React Components.

- To build the library, run `npm run rollup`.

- To publish a new version of the library in the npm, update the project version in the `package.json` and then run `npm publish`.

## Publishing new versions

Currently we don't have a protocol to release a new library version since it's still under development, but in the future we'll create a workflow to do it properly.

We'll need the following tools:

- Unit tests, probably with Jest and Testing Library
- A changelog generator for updating the `CHANGELOG.md` file
- A good knowledge of [Semantic Versioning](https://semver.org/)
