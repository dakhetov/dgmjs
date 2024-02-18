/*
 * Copyright (c) 2022 MKLabs. All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the
 * property of MKLabs. The intellectual and technical concepts
 * contained herein are proprietary to MKLabs and may be covered
 * by Republic of Korea and Foreign Patents, patents in process,
 * and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from MKLabs (niklaus.lee@gmail.com).
 */

import type { CanvasPointerEvent } from "../graphics/graphics";
import * as geometry from "../graphics/geometry";
import { Shape, Diagram } from "../shapes";
import { Controller, Editor, Manipulator, manipulatorManager } from "../editor";
import { Color, Cursor } from "../graphics/const";
import { Snap } from "../manipulators/snap";
import { drawPolylineInLCS } from "../utils/guide";
import { lcs2ccs } from "../graphics/utils";

/**
 * SelectionsMoveController
 */
export class SelectionsMoveController extends Controller {
  /**
   * Snap support for controller
   */
  snap: Snap;

  /**
   * Ghost polygon
   */
  ghost: number[][];

  constructor(manipulator: Manipulator) {
    super(manipulator);
    this.snap = new Snap();
    this.ghost = [];
  }

  /**
   * Indicates the controller is active or not
   */
  active(editor: Editor, shape: Shape): boolean {
    return editor.selections.size() > 1;
  }

  /**
   * Returns true if mouse cursor is inside the controller
   */
  mouseIn(editor: Editor, shape: Shape, e: CanvasPointerEvent): boolean {
    if (this.dragging) return true;
    if (shape instanceof Diagram) {
      const canvas = editor.canvas;
      const p = canvas.globalCoordTransformRev([e.x, e.y]);
      for (let s of editor.selections.getSelections()) {
        if (s.visible && s.enable && s.containsPoint(canvas, p)) return true;
      }
    }
    return false;
  }

  /**
   * Returns mouse cursor for the controller
   * @returns cursor [type, angle]
   */
  mouseCursor(
    editor: Editor,
    shape: Shape,
    e: CanvasPointerEvent
  ): [string, number] {
    return [Cursor.MOVE, 0];
  }

  initialize(editor: Editor, shape: Shape): void {
    this.ghost = editor.selections.getEnclosure(editor.canvas);
  }

  /**
   * Update ghost
   * @param shape (is a diagram in group manipulator)
   */
  update(editor: Editor, shape: Shape) {
    let ghost = editor.selections.getEnclosure(editor.canvas);
    // snap ghost
    let bx = geometry.boundingRect(ghost);
    let xs = [bx[0][0] + this.dx, bx[1][0] + this.dx];
    let ys = [bx[0][1] + this.dy, bx[1][1] + this.dy];
    this.snap.init();
    this.snap.toOutline(editor, shape, xs, ys);
    this.snap.toGrid(editor, [bx[0][0] + this.dx, bx[0][1] + this.dy]);
    this.snap.apply(this);
    // update ghost
    ghost = ghost.map((p) => [p[0] + this.dx, p[1] + this.dy]);
    this.ghost = ghost;
  }

  /**
   * Finalize shape by ghost
   * @param shape (is a diagram in group manipulator)
   */
  finalize(editor: Editor, shape: Shape) {
    const canvas = editor.canvas;
    let dp = shape.localCoordTransform(canvas, this.dragPoint, false);
    const selections = editor.selections.getSelections();
    const diagram = editor.diagram as Diagram;

    // determine container
    // (container shouldn't be itself of a descendant of target)
    let container = editor.diagram?.getShapeAt(canvas, dp, selections);
    const r = selections.find((sh) => sh.find((s) => s.id === container?.id));
    if (r) container = null;
    if (!(container && selections.every((s) => container?.canContain(s))))
      container = editor.diagram;

    const tr = editor.transform;
    tr.startTransaction("move");
    tr.moveShapes(diagram, selections, this.dx, this.dy, container);
    tr.resolveAllConstraints(diagram, canvas);
    tr.endTransaction();
  }

  /**
   * Draw ghost for the selected shapes
   * @param shape (is a diagram in group manipulator)
   */
  draw(editor: Editor, shape: Shape) {
    if (shape instanceof Diagram) {
      const canvas = editor.canvas;
      let ghostCCS = editor.selections
        .getEnclosure(editor.canvas)
        .map((p) => lcs2ccs(canvas, shape, p));
      canvas.storeState();
      canvas.strokeColor = Color.SELECTION;
      canvas.strokeWidth = canvas.px * 1.5;
      canvas.strokePattern = [];
      canvas.roughness = 0;
      canvas.alpha = 1;
      canvas.polyline(ghostCCS);
      editor.selections.getSelections().forEach((s) => {
        const shapeGhostCSS = s
          .getEnclosure()
          .map((p) => lcs2ccs(canvas, s, p));
        canvas.polyline(shapeGhostCSS);
      });
      canvas.restoreState();
    }
  }

  /**
   * Draw controller
   */
  drawDragging(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
    const canvas = editor.canvas;
    // draw ghost
    drawPolylineInLCS(canvas, shape, this.ghost);
    // hovering containable
    const dp = shape.localCoordTransform(canvas, this.dragPoint, true);
    const selections = editor.selections.getSelections();
    const container = editor.diagram?.getShapeAt(canvas, dp, selections);
    if (
      container &&
      container !== shape &&
      container.containable &&
      selections.every((s) => container?.canContain(s))
    ) {
      const manipulator = manipulatorManager.get(container.type);
      if (manipulator) manipulator.drawHovering(editor, container, e);
    }
    // draw snap
    this.snap.draw(editor, shape, this.ghost);
  }
}
