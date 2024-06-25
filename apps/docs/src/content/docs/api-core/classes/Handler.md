---
editUrl: false
next: false
prev: false
title: "Handler"
---

Handler

## Extended by

- [`HandHandler`](/api-core/namespaces/handlers/classes/handhandler/)
- [`SelectHandler`](/api-core/namespaces/handlers/classes/selecthandler/)
- [`RectangleFactoryHandler`](/api-core/namespaces/handlers/classes/rectanglefactoryhandler/)
- [`EllipseFactoryHandler`](/api-core/namespaces/handlers/classes/ellipsefactoryhandler/)
- [`TextFactoryHandler`](/api-core/namespaces/handlers/classes/textfactoryhandler/)
- [`ConnectorFactoryHandler`](/api-core/namespaces/handlers/classes/connectorfactoryhandler/)
- [`LineFactoryHandler`](/api-core/namespaces/handlers/classes/linefactoryhandler/)
- [`FreehandFactoryHandler`](/api-core/namespaces/handlers/classes/freehandfactoryhandler/)
- [`HighlighterFactoryHandler`](/api-core/namespaces/handlers/classes/highlighterfactoryhandler/)
- [`ImageFactoryHandler`](/api-core/namespaces/handlers/classes/imagefactoryhandler/)
- [`FrameFactoryHandler`](/api-core/namespaces/handlers/classes/framefactoryhandler/)
- [`EmbedFactoryHandler`](/api-core/namespaces/handlers/classes/embedfactoryhandler/)

## Constructors

### new Handler()

> **new Handler**(`id`, `options`?): [`Handler`](/api-core/classes/handler/)

#### Parameters

• **id**: `string`

• **options?**: `Partial`\<[`HandlerOptions`](/api-core/interfaces/handleroptions/)\>

#### Returns

[`Handler`](/api-core/classes/handler/)

#### Source

[editor.ts:1349](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1349)

## Properties

### id

> **id**: `string`

#### Source

[editor.ts:1346](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1346)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Source

[editor.ts:1347](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1347)

## Methods

### activate()

> **activate**(`editor`): `void`

Activate the handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1375](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1375)

***

### complete()

> **complete**(`editor`): `void`

Trigger when the handler action is complete

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1366](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1366)

***

### deactivate()

> **deactivate**(`editor`): `void`

Deactivate the handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1383](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1383)

***

### drawSelection()

> **drawSelection**(`editor`): `void`

Draw ghost for the selected shape

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1428](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1428)

***

### keyDown()

> **keyDown**(`editor`, `e`): `void`

keyDown

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: `KeyboardEvent`

#### Returns

`void`

#### Source

[editor.ts:1418](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1418)

***

### keyUp()

> **keyUp**(`editor`, `e`): `void`

keyUp

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: `KeyboardEvent`

#### Returns

`void`

#### Source

[editor.ts:1423](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1423)

***

### onActivate()

> **onActivate**(`editor`): `void`

Triggered when activated

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1390](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1390)

***

### onDeactivate()

> **onDeactivate**(`editor`): `void`

Triggered when deactivate

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1395](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1395)

***

### pointerDown()

> **pointerDown**(`editor`, `e`): `void`

pointerDown

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Abstract

#### Source

[editor.ts:1401](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1401)

***

### pointerMove()

> **pointerMove**(`editor`, `e`): `void`

pointerMove

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Abstract

#### Source

[editor.ts:1413](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1413)

***

### pointerUp()

> **pointerUp**(`editor`, `e`): `void`

pointerUp

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Abstract

#### Source

[editor.ts:1407](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1407)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Source

[editor.ts:1361](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1361)
