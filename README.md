# use-permit2 Not ready!

[![NPM](https://img.shields.io/npm/v/use-permit2.svg)](https://www.npmjs.com/package/use-permit2) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Currently under development! Please, do not use it

React [`Permit2`](https://docs.uniswap.org/contracts/permit2/overview) hook for [`Wagmi`](https://wagmi.sh/) and [`ConnectKit`](https://docs.family.co/connectkit) (optional)

## Roadmap

- [x] React Hook Boilerplate (Typescript)
- [x] Example page (livereload)
- [x] Install [`Wagmi`](https://wagmi.sh/)
- [x] Setup Providers
- [x] Add Connect Button
- [ ] Setup [`Permit2 SDK`](https://www.npmjs.com/package/@uniswap/permit2-sdk)
- [ ] Create hook mock
- [ ] Generate transfer Flow
- [ ] Design **modal** compatible with [`ConnectKit`](https://docs.family.co/connectkit)

## Under the Hood

- [`Wagmi`](https://wagmi.sh/)
- [`ConnectKit`](https://docs.family.co/connectkit)
- [`Uniswap Permit2 SDK`](https://www.npmjs.com/package/@uniswap/permit2-sdk)

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

Open another temrinal and install example packages and run example page

```bash
cd example
yarn
yarn dev
```

## License

MIT © [lacrypta](https://github.com/lacrypta) [`La Crypta`](https://lacrypta.com.ar)
