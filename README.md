<div align="center">
    <a href="https://npmjs.com/package/ambush"><img src="https://i.ibb.co/QHbxhTC/ambush-high-resolution-logo-1.png" width="512" alt="ambush" /></a>
    <p>
        <a href="https://www.npmjs.com/package/ambush"><img src="https://img.shields.io/npm/v/ambush" alt="NPM Version"></a>
        <a href="https://www.npmjs.com/package/ambush"><img src="https://img.shields.io/npm/dt/ambush" alt="NPM Downloads"></a>
        <a href="https://github.com/ambushjs/ambush/actions/workflows/tests.yml"><img src="https://img.shields.io/github/actions/workflow/status/ambushjs/ambush/tests.yml" alt="GitHub Build"></a>
        <a href="https://www.apache.org/licenses/LICENSE-2.0"><img src="https://raw.githubusercontent.com/ambushjs/ambush/main/assets/license.svg" alt="GitHub License"></a>
        <a href="https://www.bestpractices.dev/projects/8111"><img src="https://www.bestpractices.dev/projects/8111/badge" alt="Best Practices"></a>
    </p>
    <a href="https://github.com/ambushjs/ambush"><img src="https://raw.githubusercontent.com/ambushjs/ambush/main/assets/github.svg" alt="Made in GitHub"></a>
    <a href="https://github.com/ambushjs/ambush"><img src="https://raw.githubusercontent.com/ambushjs/ambush/main/assets/love.svg" alt="Made with Love"></a>
</div>

<h1>
    <a href="https://ambush.js.org/category/getting-started">Overview</a>
</h1>

<h6>
    Links:
    <a href="https://ambush.js.org">Website</a> |
    <a href="https://npmjs.com/package/ambush">Package</a>
</h6>

Ambush is a minimal library that streamlines and brings plenty of handy utility features to simplify your projects. Ambush is an acronym for which provides **A**dvanced **M**ulti-purpose **B**enchmark **U**tility **S**et **H**elpers for your code.

In comparison to alternatives such as Lodash and Underscore.js, Ambush prioritizes performance and is tailored to enhance your development experience while keeping things lean and efficient. Ambush also has miscellaneous functions which supports multiple data types.

<img width="550px" src="https://raw.githubusercontent.com/ambushjs/ambush/main/assets/bar.png"></img>

Get started with Ambush by setting up the environment.

<h2>
    <a href="https://ambush.js.org/docs/getting-started/install">Installation</a>
</h2>

You will need [Node.js](https://nodejs.org) 14.0.0 or newer before installing by your preferred package manager ([npm](https://npmjs.com), [yarn](https://yarnpkg.com), or [pnpm](https://pnpm.io)).

<a href="https://npmjs.com/package/ambush">
    <img src="https://nodei.co/npm/ambush.png?mini=true" alt="npm install ambush" />
</a>

<h2>
    <a href="https://ambush.js.org/docs/getting-started/usage">Usage</a>
</h2>

You can `import` or `require()` this package by the name of your choice (preferably `ab`), or object destructure a specific module:

```js
const ab = require('ambush');
import ab from 'ambush';
```

Now, you can start implementing Ambush in your code! See all the available functions and the full documentation [here](https://ambush.js.org).

---

Here's a quick example merging two arrays together.

```js
const arr1 = [4, 2, 1];
const arr2 = [2, 1, 3];

ab.merge(arr1, arr2);
// => [4, 2, 1, 2, 1, 3]
```

You can see that the `outputArr` array has duplicates in it. Let's try removing duplicates and sorting the array alphabetically:

```js
ab.deduplicate(outputArr);
// => [4, 2, 1, 3]

ab.sort(outputArr);
// => [1, 2, 3, 4]
```

---

Check out <a href="https://npmjs.com/package/@ambush/image">`@ambush/image`</a> for image processing functions.

We welcome contributions from the community to improve and enhance this project. Whether you're a developer, designer, tester, or have ideas to share, your help is valuable. If you're willing to contribute and get involved, please see [the contributing guide](https://github.com/ambushjs/ambush/tree/main/CONTRIBUTING.md) file for more details.

We adhere to the [Code of Conduct](https://github.com/ambushjs/ambush/tree/main/CODE_OF_CONDUCT.md) to ensure a respectful and inclusive community. Please review it and follow the guidelines when participating in this project.

If you have any problems, issues or questions please email us at [ambush.js.org@gmail.com](mailto:ambush.js.org@gmail.com)

## License

[This project](https://github.com/ambushjs/ambush/blob/main/LICENSE) is licensed under the [Apache License 2.0](https://apache.org/licenses/LICENSE-2.0).

Copyright © 2023 Ambush, Inc.
