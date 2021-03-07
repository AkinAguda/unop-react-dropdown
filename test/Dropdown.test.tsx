import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as UnopDropdown } from '../stories/Dropdown.stories';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UnopDropdown trigger={<button>Click</button>} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
