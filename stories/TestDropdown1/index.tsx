import React from 'react';
import { mergeClasses } from '../helpers';
import ArrowSvg from './ArrowSvg';
import './TestDropdown1.css';

const TestDropdown1Trigger: React.FC = () => (
  <button className="arrow">
    <ArrowSvg />
  </button>
);

const TestDropdown1Body: React.FC = () => (
  <ul
    className={mergeClasses(
      'NavDropDown background-keysign-light keysign-default-border',
      !open && 'NavDropDown__close'
    )}
  >
    <div className="NavDropDown__title">Account</div>
    <li>
      <a
        href="/settings"
        className="border-keysign-offwhite-i text-keysign-grey"
      >
        Settings
      </a>
    </li>
    <li>
      <a
        href="/security"
        className="border-keysign-offwhite-i text-keysign-grey"
      >
        Security
      </a>
    </li>
    <li>
      <a
        href="/settings"
        className="border-keysign-offwhite-i text-keysign-grey"
      >
        Delete Account
      </a>
    </li>
  </ul>
);

export { TestDropdown1Trigger, TestDropdown1Body };
