# use-permit2 Not ready!

> Currently under development! Please, do not use it

Use Permit2 hook for wagmi

[![NPM](https://img.shields.io/npm/v/use-permit2.svg)](https://www.npmjs.com/package/use-permit2) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Roadmap

- [x] React Hook Boilerplate (Typescript)
- [x] Example page (livereload)
- [ ] Install Wagmi
- [ ] Setup Providers
- [ ] Add Connect Button
- [ ] Add Permit2 ABI
- [ ] Generate Transfer Flow
- [ ] Design Modal compatible with [`ConnectKit`](https://docs.family.co/connectkit)

## Under the Hood

- [`Wagmi`](https://wagmi.sh/)
- [`ConnectKit`](https://docs.family.co/connectkit)

## Install

```bash
yarn add use-permit2
```

## Usage

```tsx
import * as React from "react";

import usePermit2 from "use-permit2";

const Example = () => {
  const example = usePermit2();
  return <div>{JSON.stringify(example)}</div>;
};
```

## Local Development

Install main packages and run development server

```bash
yarn
yarn start
```

Install example packages and run example page

```bash
cd example
yarn
yarn dev
```

## License

MIT © [lacrypta](https://github.com/lacrypta)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
