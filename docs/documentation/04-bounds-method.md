---
id: bounds-method
title: Bounds Method
---

Use the bounds method to set names to different breakpoints. You can then define `minWidth` `minHeight` `maxWidth` and `maxHeight` just like you would with media queries.

```
static bounds() {
  return {
    'tiny': {
      maxWidth: 50,
    },
    'large': {
      minWidth: 400,
    }
  };
}
```
