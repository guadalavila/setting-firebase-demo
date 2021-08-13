# @guadalavila/configuration

## Instalación

```shell
npm install --save @guadalavila/configuration
```

```shell
yarn add @guadalavila/configuration
```

## Uso

---

Se debe inicializar enviando la configuración de Firebase.

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

| Method                                            | Return Type        |
| ------------------------------------------------- | ------------------ |
| [getUpdateExploreB2C()](#getupdateexploreb2c)     | `Promise<string>`  |
| [getUpdateExploreB2B()](#getupdateexploreb2b)     | `Promise<string>`  |
| [getUpdateAccount()](#getupdateaccount)           | `Promise<string>`  |
| [getUpdateProfile()](#getupdateprofile)           | `Promise<string>`  |
| [getUpdateSupport()](#getupdatesupport)           | `Promise<string>`  |
| [getTextSupport()](#gettextsupport)               | `Promise<string>`  |
| [getPortabilityEnabled()](#getportabilityenabled) | `Promise<boolean>` |

---

### getUpdateExploreB2C()

Devuelve el valor de `UPDATE_DESCUBRI_B2C`

#### Ejemplo

```js
const value: string = await configuration.getUpdateExploreB2C(); // "20210813"
```

### getUpdateExploreB2B()

Devuelve el valor de `UPDATE_DESCUBRI_B2B`

#### Ejemplo

```js
const value: string = await configuration.getUpdateExploreB2B(); // "20210813"
```

### getUpdateAccount()

Devuelve el valor de `UPDATE_CUENTA`

#### Ejemplo

```js
const value: string = await configuration.getUpdateAccount(); // "20210810"
```

### getUpdateProfile()

Devuelve el valor de `UPDATE_PERFIL`

#### Ejemplo

```js
const value: string = await configuration.getUpdateProfile(); // "20210811"
```

### getUpdateSupport()

Devuelve el valor de `UPDATE_SOPORTE`

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
