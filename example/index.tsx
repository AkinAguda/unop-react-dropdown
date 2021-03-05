import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import UnopDropdown from '../src';

const App = () => {
  return (
    <div>
      <UnopDropdown trigger={<div>Hello</div>}>
        <ul>
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
        </ul>
      </UnopDropdown>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
