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

[editor.ts:1894](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1894)

## Properties

### id

> **id**: `string`

#### Source

[editor.ts:1892](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1892)

## Methods

### activate()

> `abstract` **activate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1898](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1898)

***

### deactivate()

> `abstract` **deactivate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1899](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1899)
