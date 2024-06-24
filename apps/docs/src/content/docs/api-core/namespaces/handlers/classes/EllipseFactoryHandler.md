---
editUrl: false
next: false
prev: false
title: "EllipseFactoryHandler"
---

Ellipse Factory Handler

## Extends

- [`Handler`](/api-core/classes/handler/)

## Constructors

### new EllipseFactoryHandler()

> **new EllipseFactoryHandler**(`id`, `options`?): [`EllipseFactoryHandler`](/api-core/namespaces/handlers/classes/ellipsefactoryhandler/)

#### Parameters

• **id**: `string`

• **options?**: `Partial`\<[`HandlerOptions`](/api-core/interfaces/handleroptions/)\>

#### Returns

[`EllipseFactoryHandler`](/api-core/namespaces/handlers/classes/ellipsefactoryhandler/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`constructor`](/api-core/classes/handler/#constructors)

#### Source

[editor.ts:1337](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1337)

## Properties

### dragPoint

> **dragPoint**: `number`[]

#### Source

[handlers/ellipse-handler.ts:14](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/handlers/ellipse-handler.ts#L14)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

#### Source

[handlers/ellipse-handler.ts:13](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/handlers/ellipse-handler.ts#L13)

***

### dragging

> **dragging**: `boolean` = `false`

#### Source

[handlers/ellipse-handler.ts:12](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/handlers/ellipse-handler.ts#L12)

***

### id

> **id**: `string`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`id`](/api-core/classes/handler/#id)

#### Source

[editor.ts:1334](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1334)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`options`](/api-core/classes/handler/#options)

#### Source

[editor.ts:1335](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1335)

***

### shape

> **shape**: `null` \| [`Ellipse`](/api-core/classes/ellipse/) = `null`

#### Source

[handlers/ellipse-handler.ts:15](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/handlers/ellipse-handler.ts#L15)

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

[editor.ts:1363](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1363)

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

[editor.ts:1354](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1354)

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

[editor.ts:1371](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1371)

***

### drawDragging()

> **drawDragging**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/ellipse-handler.ts:134](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/handlers/ellipse-handler.ts#L134)

***

### drawHovering()

> **drawHovering**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/ellipse-handler.ts:132](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/handlers/ellipse-handler.ts#L132)

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

[editor.ts:1416](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1416)

***

### finalize()

> **finalize**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/ellipse-handler.ts:55](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/handlers/ellipse-handler.ts#L55)

***

### initialize()

> **initialize**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/ellipse-handler.ts:24](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/handlers/ellipse-handler.ts#L24)

***

### keyDown()

> **keyDown**(`editor`, `e`): `boolean`

keyDown

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: `KeyboardEvent`

#### Returns

`boolean`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`keyDown`](/api-core/classes/handler/#keydown)

#### Source

[handlers/ellipse-handler.ts:114](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/handlers/ellipse-handler.ts#L114)

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

[editor.ts:1411](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1411)

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

[handlers/ellipse-handler.ts:124](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/handlers/ellipse-handler.ts#L124)

***

### onDeactivate()

> **onDeactivate**(`editor`): `void`

Triggered when deactivate

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`onDeactivate`](/api-core/classes/handler/#ondeactivate)

#### Source

[handlers/ellipse-handler.ts:128](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/handlers/ellipse-handler.ts#L128)

***

### pointerDown()

> **pointerDown**(`editor`, `e`): `void`

pointerDown

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`pointerDown`](/api-core/classes/handler/#pointerdown)

#### Source

[handlers/ellipse-handler.ts:71](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/handlers/ellipse-handler.ts#L71)

***

### pointerMove()

> **pointerMove**(`editor`, `e`): `void`

pointerMove

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`pointerMove`](/api-core/classes/handler/#pointermove)

#### Source

[handlers/ellipse-handler.ts:87](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/handlers/ellipse-handler.ts#L87)

***

### pointerUp()

> **pointerUp**(`editor`, `e`): `void`

pointerUp

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`pointerUp`](/api-core/classes/handler/#pointerup)

#### Source

[handlers/ellipse-handler.ts:105](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/handlers/ellipse-handler.ts#L105)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`reset`](/api-core/classes/handler/#reset)

#### Source

[handlers/ellipse-handler.ts:17](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/handlers/ellipse-handler.ts#L17)

***

### update()

> **update**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/ellipse-handler.ts:38](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/handlers/ellipse-handler.ts#L38)
