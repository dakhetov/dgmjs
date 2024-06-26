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

import { Editor, Handler } from "../editor";
import { fileOpen } from "browser-fs-access";
import { addShape, resolveAllConstraints } from "../macro";

/**
 * Image Factory Handler
 */
export class ImageFactoryHandler extends Handler {
  onActivate(editor: Editor): void {
    const asyncFn = async () => {
      try {
        const page = editor.getCurrentPage();
        if (page) {
          const file = await fileOpen([
            {
              description: "Image files",
              mimeTypes: [
                "image/png",
                "image/jpeg",
                "image/svg+xml",
                "image/webp",
              ],
              extensions: [".png", ".jpeg", ".jpg", ".svg", ".webp"],
              multiple: false,
            },
          ]);
          const center = editor.getCenter();
          const shape = await editor.factory.createImage(file, center);
          editor.transform.startAction("create");
          editor.transform.transact((tx) => {
            addShape(tx, shape, page);
            resolveAllConstraints(tx, page, editor.canvas);
          });
          editor.transform.endAction();
          editor.factory.triggerCreate(shape);
          this.complete(editor);
        }
      } catch (err) {
        // user cancelled
      }
    };
    asyncFn();
  }
}
