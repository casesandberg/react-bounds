'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

import { Container } from '../../../modules/react-basic-layout';
import Markdown from '../../../modules/react-docs/src/components/Markdown';

export default class Features extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        features: {
          background: '#ddd',
          padding: '70px 0',
        },

        left: {
          float: 'left',
          width: '45%',
        },

        right: {
          width: '50%',
          float: 'right',
        },
        spacer: {
          height: '13px',
        },
        clear: {
          clear: 'both',
        },

        label: {
          color: '#425655',
          fontSize: '18px',
          lineHeight: '26px',
          fontWeight: '300',
          paddingTop: '20px',
          margin: '0',
        },
      },
    };
  }

  render() {

    var setBreakpoints = `
\`\`\`javascript
 static bounds() {
   return {
     'list': {
       minWidth: 0,
       maxWidth: 399,
     },
     'column': {
       minWidth: 400,
     },
   };
 }
 \`\`\`
    `;

    var useBreakpoints = `
 \`\`\`javascript
this.props.isBound('list')
// true

this.props.activeBounds
// [‘list’]
 \`\`\`
    `;

    var useCSS = `
 \`\`\`javascript
.list .schedule { }

.column .schedule { }
 \`\`\`
    `;

    return (
      <div is="features">
        <Container width={ 550 }>

          <div is="pinwheel">
            <div is="left">
              <Markdown condensed>{ setBreakpoints }</Markdown>
              <h3 is="label">Set breakpoints similar to media queries.</h3>
            </div>
            <div is="right">
              <Markdown condensed>{ useBreakpoints }</Markdown>
              <div is="spacer" />
              <Markdown condensed>{ useCSS }</Markdown>
              <h3 is="label">Use breakpoints in the component or with the breakpoint css classes. </h3>
            </div>
            <div is="clear" />
          </div>

        </Container>
      </div>
    );
  }
}
