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

import { unique } from "../std/lambda";
import { Connector, Page, type Shape } from "../shapes";
import { Canvas } from "../graphics/graphics";
import * as geometry from "../graphics/geometry";

/**
 * Returns all descendants of the given set of objects including the given
 * set without any duplications.
 */
export function getAllDescendant(objs: Shape[]): Shape[] {
  const set = unique(objs);
  for (let obj of objs) {
    obj.traverse((c) => {
      if (!set.includes(c)) set.push(c);
    });
  }
  return set;
}

/**
 * Returns all connectors connected to the any of the set of objects
 */
export function getAllConnectorsTo(page: Page, objs: Shape[]): Shape[] {
  const edges: Shape[] = [];
  page?.traverse((o) => {
    if (
      o instanceof Connector &&
      (objs.includes(o.head as Shape) || objs.includes(o.tail as Shape))
    )
      edges.push(o);
  });
  return edges;
}

/**
 * Returns all descendants and connected edges of the given set of objects
 * including descendant's edges as well as edge's descendants recursively.
 *
 * The results are the candidates to be changed when the given objects due to
 * the constraints (edge, align children, ...)
 */
export function getAllRelevants(page: Page, objs: Shape[]): Shape[] {
  let size = 0;
  let set = unique(objs);
  while (set.length > size) {
    set = unique([
      ...set,
      ...getAllDescendant(set),
      ...getAllConnectorsTo(page, set),
    ]);
    size = set.length;
  }
  return set;
}

/**
 * Returns the view rect including all shapes
 */
export function getAllViewRect(canvas: Canvas, shapes: Shape[]): number[][] {
  // get view rect including all shapes
  const allShapes = shapes.map((s) => s.traverseSequence() as Shape[]).flat();
  const rects = allShapes.map((s) => (s as Shape).getViewRect(canvas));
  const box =
    rects.length > 0
      ? rects.reduce(geometry.unionRect)
      : [
          [0, 0],
          [0, 0],
        ];
  return box;
}
