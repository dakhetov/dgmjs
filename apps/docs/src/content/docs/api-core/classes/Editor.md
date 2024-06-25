---
editUrl: false
next: false
prev: false
title: "Editor"
---

The editor

## Constructors

### new Editor()

> **new Editor**(`editorHolder`, `options`, `plugins`): [`Editor`](/api-core/classes/editor/)

constructor

#### Parameters

• **editorHolder**: `HTMLElement`

• **options**: `Partial`\<[`EditorOptions`](/api-core/interfaces/editoroptions/)\>

• **plugins**: [`Plugin`](/api-core/classes/plugin/)[]= `[]`

#### Returns

[`Editor`](/api-core/classes/editor/)

#### Source

[editor.ts:329](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L329)

## Properties

### actions

> **actions**: [`Actions`](/api-core/classes/actions/)

The actions

#### Source

[editor.ts:238](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L238)

***

### canvas

> **canvas**: [`Canvas`](/api-core/classes/canvas/)

The canvas object

#### Source

[editor.ts:263](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L263)

***

### canvasElement

> **canvasElement**: `HTMLCanvasElement`

The canvas element

#### Source

[editor.ts:258](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L258)

***

### clipboard

> **clipboard**: `Clipboard`

The clipboard object

#### Source

[editor.ts:223](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L223)

***

### factory

> **factory**: [`ShapeFactory`](/api-core/classes/shapefactory/)

The shape factory

#### Source

[editor.ts:233](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L233)

***

### keymap

> **keymap**: [`KeymapManager`](/api-core/classes/keymapmanager/)

The keymap manager

#### Source

[editor.ts:243](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L243)

***

### onActiveHandlerChange

> **onActiveHandlerChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<`string`\>

The event emitter for active handler change

#### Source

[editor.ts:143](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L143)

***

### onActiveHandlerLockChange

> **onActiveHandlerLockChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<`boolean`\>

The event emitter for active handler lock change

#### Source

[editor.ts:148](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L148)

***

### onCurrentPageChange

> **onCurrentPageChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Page`](/api-core/classes/page/)\>

The event emitter for current page change

#### Source

[editor.ts:138](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L138)

***

### onDblClick

> **onDblClick**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DblClickEvent`](/api-core/interfaces/dblclickevent/)\>

The event emitter for double click

#### Source

[editor.ts:178](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L178)

***

### onDrag

> **onDrag**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

The event emitter for drag

#### Source

[editor.ts:193](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L193)

***

### onDragEnd

> **onDragEnd**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

The event emitter for drag end

#### Source

[editor.ts:198](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L198)

***

### onDragStart

> **onDragStart**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

The event emitter for drag start

#### Source

[editor.ts:188](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L188)

***

### onFileDrop

> **onFileDrop**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`FileDropEvent`](/api-core/interfaces/filedropevent/)\>

The event emitter for file drop

#### Source

[editor.ts:203](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L203)

***

### onKeyDown

> **onKeyDown**: [`TypedEvent`](/api-core/classes/typedevent/)\<`KeyboardEvent`\>

The event emitter for key down

#### Source

[editor.ts:183](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L183)

***

### onPointerDown

> **onPointerDown**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

The event emitter for pointer down

#### Source

[editor.ts:163](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L163)

***

### onPointerMove

> **onPointerMove**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

The event emitter for pointer move

#### Source

[editor.ts:168](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L168)

***

### onPointerUp

> **onPointerUp**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

The event emitter for pointer up

#### Source

[editor.ts:173](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L173)

***

### onRepaint

> **onRepaint**: [`TypedEvent`](/api-core/classes/typedevent/)\<`void`\>

The event emitter for repaint

#### Source

[editor.ts:208](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L208)

***

### onScroll

> **onScroll**: [`TypedEvent`](/api-core/classes/typedevent/)\<`number`[]\>

The event emitter for scroll

#### Source

[editor.ts:158](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L158)

***

### onZoom

> **onZoom**: [`TypedEvent`](/api-core/classes/typedevent/)\<`number`\>

The event emitter for zoom

#### Source

[editor.ts:153](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L153)

***

### options

> **options**: [`EditorOptions`](/api-core/interfaces/editoroptions/)

The editor options

#### Source

[editor.ts:123](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L123)

***

### parent

> **parent**: `HTMLElement`

The parent element

#### Source

[editor.ts:253](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L253)

***

### platform

> **platform**: `string`

The platform

#### Source

[editor.ts:133](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L133)

***

### plugins

> **plugins**: `Record`\<`string`, [`Plugin`](/api-core/classes/plugin/)\>

The plugins

#### Source

[editor.ts:128](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L128)

***

### selection

> **selection**: [`SelectionManager`](/api-core/classes/selectionmanager/)

The selection manager

#### Source

[editor.ts:228](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L228)

***

### store

> **store**: [`Store`](/api-core/classes/store/)

The store object

#### Source

[editor.ts:213](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L213)

***

### transform

> **transform**: [`Transform`](/api-core/classes/transform/)

The transform object

#### Source

[editor.ts:218](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L218)

## Methods

### activateDefaultHandler()

> **activateDefaultHandler**(): `void`

Activate the default handler

#### Returns

`void`

#### Source

[editor.ts:1087](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1087)

***

### activateHandler()

> **activateHandler**(`id`): `void`

Activate a handler by id

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Source

[editor.ts:1070](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1070)

***

### drawSelection()

> **drawSelection**(): `void`

Draw selection

#### Returns

`void`

#### Source

[editor.ts:1193](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1193)

***

### fit()

> **fit**(): `void`

Fit the editor size to the holder element

#### Returns

`void`

#### Source

[editor.ts:883](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L883)

***

### fitToScreen()

> **fitToScreen**(`scaleAdjust`, `maxScale`): `void`

Fit doc to screen and move to center

#### Parameters

• **scaleAdjust**: `number`= `1`

• **maxScale**: `number`= `1`

#### Returns

`void`

#### Source

[editor.ts:991](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L991)

***

### focus()

> **focus**(): `void`

Set focus on this editor

#### Returns

`void`

#### Source

[editor.ts:799](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L799)

***

### getActiveHandler()

> **getActiveHandler**(): `null` \| [`Handler`](/api-core/classes/handler/)

Get the active handler

#### Returns

`null` \| [`Handler`](/api-core/classes/handler/)

#### Source

[editor.ts:1063](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1063)

***

### getActiveHandlerLock()

> **getActiveHandlerLock**(): `boolean`

Get active handler lock

#### Returns

`boolean`

#### Source

[editor.ts:1106](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1106)

***

### getBoundingRect()

> **getBoundingRect**(): `number`[][]

Get bounding rect in GCS

#### Returns

`number`[][]

#### Source

[editor.ts:946](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L946)

***

### getCenter()

> **getCenter**(): `number`[]

Get screen center point in GCS

#### Returns

`number`[]

#### Source

[editor.ts:938](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L938)

***

### getCurrentPage()

> **getCurrentPage**(): `null` \| [`Page`](/api-core/classes/page/)

Get current page

#### Returns

`null` \| [`Page`](/api-core/classes/page/)

#### Source

[editor.ts:760](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L760)

***

### getDarkMode()

> **getDarkMode**(): `boolean`

Get dark mode

#### Returns

`boolean`

#### Source

[editor.ts:806](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L806)

***

### getDoc()

> **getDoc**(): [`Doc`](/api-core/classes/doc/)

Get the document

#### Returns

[`Doc`](/api-core/classes/doc/)

#### Source

[editor.ts:1238](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1238)

***

### getEnabled()

> **getEnabled**(): `boolean`

Get enabled state

#### Returns

`boolean`

#### Source

[editor.ts:745](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L745)

***

### getGridSize()

> **getGridSize**(): `number`[]

Get grid size

#### Returns

`number`[]

#### Source

[editor.ts:825](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L825)

***

### getOrigin()

> **getOrigin**(): `number`[]

Get origin point in CCS

#### Returns

`number`[]

#### Source

[editor.ts:891](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L891)

***

### getPages()

> **getPages**(): [`Page`](/api-core/classes/page/)[]

Get pages

#### Returns

[`Page`](/api-core/classes/page/)[]

#### Source

[editor.ts:789](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L789)

***

### getPlugin()

> **getPlugin**(`id`): `null` \| [`Plugin`](/api-core/classes/plugin/)

Get a plugin by id

#### Parameters

• **id**: `string`

#### Returns

`null` \| [`Plugin`](/api-core/classes/plugin/)

#### Source

[editor.ts:738](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L738)

***

### getScale()

> **getScale**(): `number`

Get scale

#### Returns

`number`

#### Source

[editor.ts:954](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L954)

***

### getShowGrid()

> **getShowGrid**(): `boolean`

Get show grid state

#### Returns

`boolean`

#### Source

[editor.ts:840](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L840)

***

### getSize()

> **getSize**(): `number`[]

Return the size of canvas element in CCS

#### Returns

`number`[]

#### Source

[editor.ts:917](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L917)

***

### getSnapToGrid()

> **getSnapToGrid**(): `boolean`

Get snap to grid

#### Returns

`boolean`

#### Source

[editor.ts:855](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L855)

***

### getSnapToObject()

> **getSnapToObject**(): `boolean`

Get snap to object

#### Returns

`boolean`

#### Source

[editor.ts:869](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L869)

***

### loadFromJSON()

> **loadFromJSON**(`json`): `void`

Load from JSON

#### Parameters

• **json**: `any`

#### Returns

`void`

#### Source

[editor.ts:1265](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1265)

***

### moveOrigin()

> **moveOrigin**(`dx`, `dy`): `void`

Move origin point

#### Parameters

• **dx**: `number`

• **dy**: `number`

#### Returns

`void`

#### Source

[editor.ts:910](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L910)

***

### newDoc()

> **newDoc**(): [`Doc`](/api-core/classes/doc/)

Create a new document

#### Returns

[`Doc`](/api-core/classes/doc/)

#### Source

[editor.ts:1252](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1252)

***

### repaint()

> **repaint**(`drawSelection`): `void`

Repaint diagram

#### Parameters

• **drawSelection**: `boolean`= `true`

#### Returns

`void`

#### Source

[editor.ts:1215](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1215)

***

### saveToJSON()

> **saveToJSON**(): `any`

Save to JSON

#### Returns

`any`

#### Source

[editor.ts:1282](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1282)

***

### scroll()

> **scroll**(`dx`, `dy`): `void`

Scroll screen

#### Parameters

• **dx**: `number`

• **dy**: `number`

#### Returns

`void`

#### Source

[editor.ts:1014](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1014)

***

### scrollCenterTo()

> **scrollCenterTo**(`center`?): `void`

Scroll screen center to a point in GCS

#### Parameters

• **center?**: `number`[]

center point in GCS. If not provided, scroll to the center
  of the page size or the center of the shapes

#### Returns

`void`

#### Source

[editor.ts:1023](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1023)

***

### scrollToCenter()

> **scrollToCenter**(): `void`

Scroll to center of the shapes

#### Returns

`void`

#### Source

[editor.ts:1049](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1049)

***

### setActiveHandlerLock()

> **setActiveHandlerLock**(`lock`): `void`

Set active handler lock

#### Parameters

• **lock**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:1096](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1096)

***

### setCurrentPage()

> **setCurrentPage**(`page`): `void`

Set current page

#### Parameters

• **page**: [`Page`](/api-core/classes/page/)

#### Returns

`void`

#### Source

[editor.ts:767](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L767)

***

### setCursor()

> **setCursor**(`cursor`, `angle`): `void`

Set cursor

#### Parameters

• **cursor**: `string`

• **angle**: `number`= `0`

#### Returns

`void`

#### Source

[editor.ts:1230](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1230)

***

### setDarkMode()

> **setDarkMode**(`dark`): `void`

Set dark mode

#### Parameters

• **dark**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:813](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L813)

***

### setDoc()

> **setDoc**(`doc`): `void`

Set the document

#### Parameters

• **doc**: [`Doc`](/api-core/classes/doc/)

#### Returns

`void`

#### Source

[editor.ts:1245](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1245)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

Set enabled state

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:752](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L752)

***

### setGridSize()

> **setGridSize**(`gridSize`): `void`

Set grid size

#### Parameters

• **gridSize**: `number`[]

#### Returns

`void`

#### Source

[editor.ts:832](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L832)

***

### setOrigin()

> **setOrigin**(`x`, `y`): `void`

Set origin point

#### Parameters

• **x**: `number`

• **y**: `number`

#### Returns

`void`

#### Source

[editor.ts:898](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L898)

***

### setScale()

> **setScale**(`scale`): `void`

Set scale

#### Parameters

• **scale**: `number`

#### Returns

`void`

#### Source

[editor.ts:961](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L961)

***

### setShowGrid()

> **setShowGrid**(`show`): `void`

Set show grid or not

#### Parameters

• **show**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:847](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L847)

***

### setSize()

> **setSize**(`width`, `height`): `void`

Set canvas element size

#### Parameters

• **width**: `number`

• **height**: `number`

#### Returns

`void`

#### Source

[editor.ts:924](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L924)

***

### setSnapToGrid()

> **setSnapToGrid**(`value`): `void`

Set snap to grid

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:862](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L862)

***

### setSnapToObject()

> **setSnapToObject**(`value`): `void`

Set snap to object

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:876](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L876)

***

### update()

> **update**(): `void`

Update all shapes

#### Returns

`void`

#### Source

[editor.ts:1202](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1202)

***

### zoom()

> **zoom**(`scale`): `void`

Set zoom scale while keeping the screen center

#### Parameters

• **scale**: `number`= `1`

#### Returns

`void`

#### Source

[editor.ts:981](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L981)
