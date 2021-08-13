# @guadalavila/configuration 🛠️

## Instalación

```shell
yarn add @guadalavila/configuration
```

o

```shell
npm install --save @guadalavila/configuration
```

## Uso

---

Se debe inicializar, enviando la configuración de Firebase.

```js
import { configuration } from '@guadalavila/configuration';

const firebaseConfig = {
    apiKey: 'apiKey',
    authDomain: 'authDomain',
    projectId: 'projectID',
    storageBucket: 'storageBucket',
    messagingSenderId: 'messagingSenderId',
    appId: 'appId',
    measurementId: 'measurementId',
};
configuration.initConfig(firebaseConfig);
```

## Funciones

| Method                                            | Return Type        | Key                    |
| ------------------------------------------------- | ------------------ | ---------------------- |
| [getUpdateExploreB2C()](#getupdateexploreb2c)     | `Promise<string>`  | `UPDATE_EXPLORE_B2C`   |
| [getUpdateExploreB2B()](#getupdateexploreb2b)     | `Promise<string>`  | `UPDATE_EXPLORE_B2B`   |
| [getUpdateAccount()](#getupdateaccount)           | `Promise<string>`  | `UPDATE_ACCOUNT`       |
| [getUpdateProfile()](#getupdateprofile)           | `Promise<string>`  | `UPDATE_PROFILE`       |
| [getUpdateSupport()](#getupdatesupport)           | `Promise<string>`  | `UPDATE_SUPPORT`       |
| [getTextSupport()](#gettextsupport)               | `Promise<string>`  | `text_soporte`         |
| [getPortabilityEnabled()](#getportabilityenabled) | `Promise<boolean>` | `portabilidad_enabled` |

---

### getUpdateExploreB2C()

Devuelve el valor de `UPDATE_EXPLORE_B2C`

#### Ejemplo

```js
const value: string = await configuration.getUpdateExploreB2C(); // "20210813"
```

### getUpdateExploreB2B()

Devuelve el valor de `UPDATE_EXPLORE_B2B`

#### Ejemplo

```js
const value: string = await configuration.getUpdateExploreB2B(); // "20210813"
```

### getUpdateAccount()

Devuelve el valor de `UPDATE_ACCOUNT`

#### Ejemplo

```js
const value: string = await configuration.getUpdateAccount(); // "20210810"
```

### getUpdateProfile()

Devuelve el valor de `UPDATE_PROFILE`

#### Ejemplo

```js
const value: string = await configuration.getUpdateProfile(); // "20210811"
```

### getUpdateSupport()

Devuelve el valor de `UPDATE_SUPPORT`

#### Ejemplo

```js
const value: string = await configuration.getUpdateSupport(); // "20210812"
```

### getTextSupport()

Devuelve el valor de `text_soporte`

#### Ejemplo

```js
const value: string = await configuration.getTextSupport(); // "¿En qué te podemos ayudar hoy?"
```

### getPortabilityEnabled()

Devuelve el valor de `portabilidad_enabled`

#### Ejemplo

```js
const value: boolean = await configuration.getUpdateExploreB2C(); // "true"
```
