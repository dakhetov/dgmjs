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

[editor.ts:1076](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1076)

***

### activateHandler()

> **activateHandler**(`id`): `void`

Activate a handler by id

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Source

[editor.ts:1059](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1059)

***

### drawSelection()

> **drawSelection**(): `void`

Draw selection

#### Returns

`void`

#### Source

[editor.ts:1182](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1182)

***

### fit()

> **fit**(): `void`

Fit the editor size to the holder element

#### Returns

`void`

#### Source

[editor.ts:872](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L872)

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

[editor.ts:980](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L980)

***

### focus()

> **focus**(): `void`

Set focus on this editor

#### Returns

`void`

#### Source

[editor.ts:788](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L788)

***

### getActiveHandler()

> **getActiveHandler**(): `null` \| [`Handler`](/api-core/classes/handler/)

Get the active handler

#### Returns

`null` \| [`Handler`](/api-core/classes/handler/)

#### Source

[editor.ts:1052](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1052)

***

### getActiveHandlerLock()

> **getActiveHandlerLock**(): `boolean`

Get active handler lock

#### Returns

`boolean`

#### Source

[editor.ts:1095](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1095)

***

### getBoundingRect()

> **getBoundingRect**(): `number`[][]

Get bounding rect in GCS

#### Returns

`number`[][]

#### Source

[editor.ts:935](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L935)

***

### getCenter()

> **getCenter**(): `number`[]

Get screen center point in GCS

#### Returns

`number`[]

#### Source

[editor.ts:927](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L927)

***

### getCurrentPage()

> **getCurrentPage**(): `null` \| [`Page`](/api-core/classes/page/)

Get current page

#### Returns

`null` \| [`Page`](/api-core/classes/page/)

#### Source

[editor.ts:749](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L749)

***

### getDarkMode()

> **getDarkMode**(): `boolean`

Get dark mode

#### Returns

`boolean`

#### Source

[editor.ts:795](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L795)

***

### getDoc()

> **getDoc**(): [`Doc`](/api-core/classes/doc/)

Get the document

#### Returns

[`Doc`](/api-core/classes/doc/)

#### Source

[editor.ts:1227](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1227)

***

### getEnabled()

> **getEnabled**(): `boolean`

Get enabled state

#### Returns

`boolean`

#### Source

[editor.ts:734](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L734)

***

### getGridSize()

> **getGridSize**(): `number`[]

Get grid size

#### Returns

`number`[]

#### Source

[editor.ts:814](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L814)

***

### getOrigin()

> **getOrigin**(): `number`[]

Get origin point in CCS

#### Returns

`number`[]

#### Source

[editor.ts:880](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L880)

***

### getPages()

> **getPages**(): [`Page`](/api-core/classes/page/)[]

Get pages

#### Returns

[`Page`](/api-core/classes/page/)[]

#### Source

[editor.ts:778](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L778)

***

### getPlugin()

> **getPlugin**(`id`): `null` \| [`Plugin`](/api-core/classes/plugin/)

Get a plugin by id

#### Parameters

• **id**: `string`

#### Returns

`null` \| [`Plugin`](/api-core/classes/plugin/)

#### Source

[editor.ts:727](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L727)

***

### getScale()

> **getScale**(): `number`

Get scale

#### Returns

`number`

#### Source

[editor.ts:943](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L943)

***

### getShowGrid()

> **getShowGrid**(): `boolean`

Get show grid state

#### Returns

`boolean`

#### Source

[editor.ts:829](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L829)

***

### getSize()

> **getSize**(): `number`[]

Return the size of canvas element in CCS

#### Returns

`number`[]

#### Source

[editor.ts:906](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L906)

***

### getSnapToGrid()

> **getSnapToGrid**(): `boolean`

Get snap to grid

#### Returns

`boolean`

#### Source

[editor.ts:844](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L844)

***

### getSnapToObject()

> **getSnapToObject**(): `boolean`

Get snap to object

#### Returns

`boolean`

#### Source

[editor.ts:858](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L858)

***

### loadFromJSON()

> **loadFromJSON**(`json`): `void`

Load from JSON

#### Parameters

• **json**: `any`

#### Returns

`void`

#### Source

[editor.ts:1254](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1254)

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

[editor.ts:899](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L899)

***

### newDoc()

> **newDoc**(): [`Doc`](/api-core/classes/doc/)

Create a new document

#### Returns

[`Doc`](/api-core/classes/doc/)

#### Source

[editor.ts:1241](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1241)

***

### repaint()

> **repaint**(`drawSelection`): `void`

Repaint diagram

#### Parameters

• **drawSelection**: `boolean`= `true`

#### Returns

`void`

#### Source

[editor.ts:1204](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1204)

***

### saveToJSON()

> **saveToJSON**(): `any`

Save to JSON

#### Returns

`any`

#### Source

[editor.ts:1271](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1271)

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

[editor.ts:1003](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1003)

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

[editor.ts:1012](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1012)

***

### scrollToCenter()

> **scrollToCenter**(): `void`

Scroll to center of the shapes

#### Returns

`void`

#### Source

[editor.ts:1038](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1038)

***

### setActiveHandlerLock()

> **setActiveHandlerLock**(`lock`): `void`

Set active handler lock

#### Parameters

• **lock**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:1085](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1085)

***

### setCurrentPage()

> **setCurrentPage**(`page`): `void`

Set current page

#### Parameters

• **page**: [`Page`](/api-core/classes/page/)

#### Returns

`void`

#### Source

[editor.ts:756](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L756)

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

[editor.ts:1219](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1219)

***

### setDarkMode()

> **setDarkMode**(`dark`): `void`

Set dark mode

#### Parameters

• **dark**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:802](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L802)

***

### setDoc()

> **setDoc**(`doc`): `void`

Set the document

#### Parameters

• **doc**: [`Doc`](/api-core/classes/doc/)

#### Returns

`void`

#### Source

[editor.ts:1234](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1234)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

Set enabled state

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:741](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L741)

***

### setGridSize()

> **setGridSize**(`gridSize`): `void`

Set grid size

#### Parameters

• **gridSize**: `number`[]

#### Returns

`void`

#### Source

[editor.ts:821](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L821)

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

[editor.ts:887](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L887)

***

### setScale()

> **setScale**(`scale`): `void`

Set scale

#### Parameters

• **scale**: `number`

#### Returns

`void`

#### Source

[editor.ts:950](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L950)

***

### setShowGrid()

> **setShowGrid**(`show`): `void`

Set show grid or not

#### Parameters

• **show**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:836](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L836)

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

[editor.ts:913](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L913)

***

### setSnapToGrid()

> **setSnapToGrid**(`value`): `void`

Set snap to grid

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:851](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L851)

***

### setSnapToObject()

> **setSnapToObject**(`value`): `void`

Set snap to object

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:865](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L865)

***

### update()

> **update**(): `void`

Update all shapes

#### Returns

`void`

#### Source

[editor.ts:1191](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L1191)

***

### zoom()

> **zoom**(`scale`): `void`

Set zoom scale while keeping the screen center

#### Parameters

• **scale**: `number`= `1`

#### Returns

`void`

#### Source

[editor.ts:970](https://github.com/dakhetov/dgmjs/blob/main/packages/core/src/editor.ts#L970)
