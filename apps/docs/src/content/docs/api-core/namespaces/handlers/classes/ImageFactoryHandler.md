---
editUrl: false
next: false
prev: false
title: "ImageFactoryHandler"
---

Image Factory Handler

## Extends

- [`Handler`](/api-core/classes/handler/)

## Constructors

### new ImageFactoryHandler()

> **new ImageFactoryHandler**(`id`, `options`?): [`ImageFactoryHandler`](/api-core/namespaces/handlers/classes/imagefactoryhandler/)

#### Parameters

• **id**: `string`

• **options?**: `Partial`\<[`HandlerOptions`](/api-core/interfaces/handleroptions/)\>

#### Returns

[`ImageFactoryHandler`](/api-core/namespaces/handlers/classes/imagefactoryhandler/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`constructor`](/api-core/classes/handler/#constructors)

#### Source

[editor.ts:1338](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1338)

## Properties

### id

> **id**: `string`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`id`](/api-core/classes/handler/#id)

#### Source

[editor.ts:1335](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1335)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`options`](/api-core/classes/handler/#options)

#### Source

[editor.ts:1336](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1336)

## Methods

### activate()

> **activate**(`editor`): `void`

Activate the handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`activate`](/api-core/classes/handler/#activate)

#### Source

[editor.ts:1364](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1364)

***

### complete()

> **complete**(`editor`): `void`

Trigger when the handler action is complete

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`complete`](/api-core/classes/handler/#complete)

#### Source

[editor.ts:1355](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1355)

***

### deactivate()

> **deactivate**(`editor`): `void`

Deactivate the handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`deactivate`](/api-core/classes/handler/#deactivate)

#### Source

[editor.ts:1372](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1372)

***

### drawSelection()

> **drawSelection**(`editor`): `void`

Draw ghost for the selected shape

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`drawSelection`](/api-core/classes/handler/#drawselection)

#### Source

[editor.ts:1417](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1417)

***

### keyDown()

> **keyDown**(`editor`, `e`): `void`

keyDown

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: `KeyboardEvent`

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`keyDown`](/api-core/classes/handler/#keydown)

#### Source

[editor.ts:1407](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1407)

***

### keyUp()

> **keyUp**(`editor`, `e`): `void`

keyUp

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: `KeyboardEvent`

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`keyUp`](/api-core/classes/handler/#keyup)

#### Source

[editor.ts:1412](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1412)

***

### onActivate()

> **onActivate**(`editor`): `void`

Triggered when activated

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`onActivate`](/api-core/classes/handler/#onactivate)

#### Source

[handlers/image-handler.ts:22](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/handlers/image-handler.ts#L22)

***

### onDeactivate()

> **onDeactivate**(`editor`): `void`

Triggered when deactivate

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`onDeactivate`](/api-core/classes/handler/#ondeactivate)

#### Source

[editor.ts:1384](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1384)

***

### pointerDown()

> **pointerDown**(`editor`, `e`): `void`

pointerDown

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`pointerDown`](/api-core/classes/handler/#pointerdown)

#### Abstract

#### Source

[editor.ts:1390](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1390)

***

### pointerMove()

> **pointerMove**(`editor`, `e`): `void`

pointerMove

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`pointerMove`](/api-core/classes/handler/#pointermove)

#### Abstract

#### Source

[editor.ts:1402](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1402)

***

### pointerUp()

> **pointerUp**(`editor`, `e`): `void`

pointerUp

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`pointerUp`](/api-core/classes/handler/#pointerup)

#### Abstract

#### Source

[editor.ts:1396](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1396)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`reset`](/api-core/classes/handler/#reset)

#### Source

[editor.ts:1350](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1350)
