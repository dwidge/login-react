# login-react

A React hook that redirects to a login portal. The portal redirects back to the app with a token.

# usage

## install

```
npm i github:dwidge/login-react
```

## invoke

```js
import { useState } from "react";
import { useLogin } from "@dwidge/login-react";

const [login, logout, token, tokenSet] = useLogin(url, key, useState());
```

# examples

```js
import { useLogin } from "@dwidge/login-react";

const [login, logout, token] = useLogin(
  `//localhost/login?target=//localhost`,
  "token"
);

console.log(token); // undefined
login();
console.log(token); // 'abc123'
logout();
console.log(token); // undefined
```

# license

Copyright 2022 DWJ

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
