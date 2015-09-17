---
id: reactcss-support
title: ReactCSS Support

---
`ReactCSS@0.4.1` introduces support for `react-bounds`. It will now automatically activate and deactivate classes depending on the active bounds:

```
import React from 'react';
import ReactCSS from 'reactcss';
import bounds from 'react-bounds';

class SomePage extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        page: {
          width: '960px',
          margin: '0 auto',
        },
      },
      'no-sidebar': {
        sidebar: {
          display: 'none',
        },
      },
      'bigger-content': {
        page: {
          width: '1150px',
        },
      },
    };
  }

  static bounds() {
    return {
      'no-sidebar': { maxWidth: 520 },
      'bigger-content': { minWidth: 1200 },
    };
  }

  render() {
    return (
      <div is="page">
        <div is="content"></div>
        <div is="sidebar"></div>
      </div>
    );
  }
}

export default bounds.wrap(SomePage);
```
