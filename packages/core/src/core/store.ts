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

import { convertToLatestVersion } from "../utils/document-compatibility";
import { Transform } from "./transform";
import { Instantiator } from "./instantiator";
import type { Obj } from "./obj";

type StoreOptions = {
  objInitializer?: (obj: Obj) => void;
  objFinalizer?: (obj: Obj) => void;
  objUpdater?: (obj: Obj) => void;
};

/**
 * Object store
 * - access to all objects
 * - manage index for objects
 */
export class Store {
  /**
   * Store options
   */
  options: StoreOptions;

  /**
   * Shape instantiator
   */
  instantiator: Instantiator;

  /**
   * History
   */
  history: Transform;

  /**
   * Index for object.id
   */
  idIndex: Record<string, Obj>;

  /**
   * the root object
   */
  root: Obj | null;

  /**
   * Constructor
   */
  constructor(instantiator: Instantiator, options?: StoreOptions) {
    this.instantiator = instantiator;
    this.history = new Transform(this);
    this.options = options || {};
    this.idIndex = {};
    this.root = null;
  }

  /**
   * Clear the store
   */
  clear() {
    this.idIndex = {};
    this.root = null;
  }

  /**
   * Add to index for the object (with all descendants)
   */
  addToIndex(obj: Obj) {
    if (obj) {
      obj.traverse((o) => {
        this.idIndex[o.id] = o;
        if (this.options.objInitializer) {
          this.options.objInitializer(o);
        }
      });
    }
  }

  /**
   * Remove from index for the object (with all descendants)
   */
  removeFromIndex(obj: Obj) {
    if (obj) {
      obj.traverse((o) => {
        delete this.idIndex[o.id];
        if (this.options.objFinalizer) {
          this.options.objFinalizer(o);
        }
      });
    }
  }

  /**
   * Update obj
   */
  update(obj: Obj) {
    if (this.options.objUpdater) {
      this.options.objUpdater(obj);
    }
  }

  /**
   * Get an object by id
   */
  getById(id: string): Obj | null {
    return this.idIndex[id];
  }

  /**
   * Test shape is exists in the store or not
   */
  has(obj: Obj): boolean {
    if (this.root?.find((s) => s === obj) && this.getById(obj.id)) return true;
    return false;
  }

  /**
   * Return JSON of the root
   */
  toJSON(): any {
    return this.root ? this.root.toJSON(true) : null;
  }

  /**
   * Set the root from JSON
   */
  fromJSON(json: any) {
    const latestVersionJson = convertToLatestVersion(json);
    this.root = this.instantiator.createFromJson(latestVersionJson);
    if (this.root) {
      this.idIndex = {};
      this.addToIndex(this.root);
    }
  }

  /**
   * Set the root object
   */
  setRoot(doc: Obj) {
    this.root = doc;
    this.addToIndex(doc);
  }
}
