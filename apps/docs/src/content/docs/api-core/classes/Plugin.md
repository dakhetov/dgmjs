---
editUrl: false
next: false
prev: false
title: "Plugin"
---

Plugin

## Constructors

### new Plugin()

> **new Plugin**(`pluginId`): [`Plugin`](/api-core/classes/plugin/)

#### Parameters

• **pluginId**: `string`

#### Returns

[`Plugin`](/api-core/classes/plugin/)

#### Source

[editor.ts:1883](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1883)

## Properties

### id

> **id**: `string`

#### Source

[editor.ts:1881](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1881)

## Methods

### activate()

> `abstract` **activate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1887](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1887)

***

### deactivate()

> `abstract` **deactivate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1888](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1888)
