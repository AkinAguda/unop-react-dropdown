import React from 'react';
import ReactDOM from 'react-dom';
import { mount, configure, ReactWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom';
import UnopDropdown from '../src';
import { DropDowndirections } from '../src/types';
import { Utility } from '../src/functions.module';

configure({ adapter: new Adapter() });

describe('UnopDropdown', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <UnopDropdown trigger={<button id="trigger">Click</button>}>
        <ul>
          <li>Hello</li>
        </ul>
      </UnopDropdown>,
      div
    );
  });

  describe('UnopDropdown functionality when clicked', () => {
    let dropdown: ReactWrapper;

    beforeEach(() => {
      dropdown = mount(
        <UnopDropdown trigger={<button id="trigger">Click</button>}>
          <ul>
            <li>Hello</li>
          </ul>
        </UnopDropdown>
      );
    });

    afterEach(() => {
      dropdown.unmount();
    });

    it('hides dropdown by default', () => {
      const dropdownMenu = dropdown.find('.drop-down-menu_EMFQP');
      expect(dropdownMenu.getDOMNode()).not.toBeVisible();
      expect(dropdownMenu.getDOMNode().classList).not.toContain(
        'reveal-drop-down-menu_EMFQP'
      );
    });

    it('shows dropdown on trigger click', () => {
      dropdown.find('#trigger').simulate('click');
      // Modify this later to use "toBeVisible()"
      expect(
        dropdown.find('.drop-down-menu_EMFQP').getDOMNode().classList
      ).toContain('reveal-drop-down-menu_EMFQP');
    });

    it('hides the dropdown when trigger is cliecked twice', () => {
      const trigger = dropdown.find('#trigger');
      const dropdownMenu = dropdown.find('.drop-down-menu_EMFQP');
      trigger.simulate('click');
      trigger.simulate('click');
      setTimeout(() => {
        expect(dropdownMenu.getDOMNode()).not.toBeVisible();
        expect(dropdownMenu.getDOMNode().classList).not.toContain(
          'reveal-drop-down-menu_EMFQP'
        );
      });
    });
  });

  describe('UnopDropdown functions properly when hovered', () => {
    let dropdown: ReactWrapper;

    beforeEach(() => {
      dropdown = mount(
        <UnopDropdown hover trigger={<button id="trigger">Hover</button>}>
          <ul>
            <li>Hello</li>
          </ul>
        </UnopDropdown>
      );
    });

    afterEach(() => {
      dropdown.unmount();
    });

    it('hides dropdown by default', () => {
      const dropdownMenu = dropdown.find('.drop-down-menu_EMFQP');
      expect(dropdownMenu.getDOMNode()).not.toBeVisible();
      expect(dropdownMenu.getDOMNode().classList).not.toContain(
        'reveal-drop-down-menu_EMFQP'
      );
    });

    it('shows dropdown on trigger hover', () => {
      dropdown.find('#trigger').simulate('mouseover');
      // Modify this later to use "toBeVisible()"
      expect(
        dropdown.find('.drop-down-menu_EMFQP').getDOMNode().classList
      ).toContain('reveal-drop-down-menu_EMFQP');
    });

    it('hides the dropdown when mouse leaves trigger', () => {
      const dropdownMenu = dropdown.find('.drop-down-menu_EMFQP');
      dropdown.find('#trigger').simulate('mouseover');
      dropdown.find('#trigger').simulate('mouseleave');
      setTimeout(() => {
        expect(dropdownMenu.getDOMNode()).not.toBeVisible();
        expect(dropdownMenu.getDOMNode().classList).not.toContain(
          'reveal-drop-down-menu_EMFQP'
        );
      });
    });

    it('hides the dropdown when mouse leaves the dropdown', () => {
      const dropdownMenu = dropdown.find('.drop-down-menu_EMFQP');
      dropdown.find('#trigger').simulate('mouseover');
      dropdownMenu.simulate('mouseleave');
      setTimeout(() => {
        expect(dropdownMenu.getDOMNode()).not.toBeVisible();
        expect(dropdownMenu.getDOMNode().classList).not.toContain(
          'reveal-drop-down-menu_EMFQP'
        );
      });
    });

    it('stays open when hovering on the dropdown itself', () => {
      const dropdownMenu = dropdown.find('.drop-down-menu_EMFQP');
      const trigger = dropdown.find('#trigger');
      trigger.simulate('mouseover');
      trigger.simulate('mouseleave');
      dropdownMenu.simulate('mouseover');
      setTimeout(() => {
        expect(dropdownMenu.getDOMNode().classList).toContain(
          'reveal-drop-down-menu_EMFQP'
        );
      });
    });
  });

  describe('Click out an close on click work fine', () => {
    it('closes properly when cliked out', () => {
      const dropdown = mount(
        <div>
          <UnopDropdown
            closeOnClickOut
            trigger={<button id="trigger">Hover</button>}
          >
            <ul>
              <li>Hello</li>
            </ul>
          </UnopDropdown>
          <div id="randomElement"></div>
        </div>
      );
      const dropdownMenu = dropdown.find('.drop-down-menu_EMFQP');
      const trigger = dropdown.find('#trigger');
      const outsideElement = dropdown.find('#randomElement');
      trigger.simulate('click');
      expect(dropdownMenu.getDOMNode().classList).toContain(
        'reveal-drop-down-menu_EMFQP'
      );
      trigger.simulate('click');
      setTimeout(() => {
        expect(dropdownMenu.getDOMNode().classList).toContain(
          'reveal-drop-down-menu_EMFQP'
        );
      }, 0);
      outsideElement.simulate('click');
      setTimeout(() => {
        expect(dropdownMenu.getDOMNode().classList).not.toContain(
          'reveal-drop-down-menu_EMFQP'
        );
      }, 0);
    });
    it('closes properly when item inside is clicked', () => {
      const dropdown = mount(
        <div>
          <UnopDropdown
            closeOnDropdownClicked
            trigger={<button id="trigger">Hover</button>}
          >
            <ul>
              <li id="item">Hello</li>
            </ul>
          </UnopDropdown>
          <div id="randomElement"></div>
        </div>
      );
      const dropdownMenu = dropdown.find('.drop-down-menu_EMFQP');
      const trigger = dropdown.find('#trigger');
      const item = dropdown.find('#item');
      const outsideElement = dropdown.find('#randomElement');

      trigger.simulate('click');
      setTimeout(() => {
        expect(dropdownMenu.getDOMNode().classList).toContain(
          'reveal-drop-down-menu_EMFQP'
        );
      }, 0);

      outsideElement.simulate('click');
      setTimeout(() => {
        expect(dropdownMenu.getDOMNode().classList).toContain(
          'reveal-drop-down-menu_EMFQP'
        );
      }, 0);

      item.simulate('click');
      setTimeout(() => {
        expect(dropdownMenu.getDOMNode().classList).not.toContain(
          'reveal-drop-down-menu_EMFQP'
        );
      }, 0);
    });
  });

  describe('Unopdropdown delays properly', () => {
    const timeout = 300;

    it('delays as it should when clicked', () => {
      const dropdown = mount(
        <UnopDropdown
          delay={timeout}
          trigger={<button id="trigger">Hover</button>}
        >
          <ul>
            <li>Hello</li>
          </ul>
        </UnopDropdown>
      );
      const trigger = dropdown.find('#trigger');
      const dropdownMenu = dropdown.find('.drop-down-menu_EMFQP');
      trigger.simulate('click');
      trigger.simulate('click');
      expect(dropdownMenu.getDOMNode().classList).toContain(
        'reveal-drop-down-menu_EMFQP'
      );
      setTimeout(() => {
        expect(dropdownMenu.getDOMNode().classList).toContain(
          'reveal-drop-down-menu_EMFQP'
        );
      }, 200);
      setTimeout(() => {
        expect(dropdownMenu.getDOMNode().classList).not.toContain(
          'reveal-drop-down-menu_EMFQP'
        );
      }, timeout);
      dropdown.unmount();
    });

    it('delays as it should when mouse leaves', () => {
      const dropdown = mount(
        <UnopDropdown
          hover
          delay={timeout}
          trigger={<button id="trigger">Hover</button>}
        >
          <ul>
            <li>Hello</li>
          </ul>
        </UnopDropdown>
      );
      const dropdownMenu = dropdown.find('.drop-down-menu_EMFQP');
      const trigger = dropdown.find('#trigger');
      trigger.simulate('mouseover');
      trigger.simulate('mouseleave');
      expect(dropdownMenu.getDOMNode().classList).toContain(
        'reveal-drop-down-menu_EMFQP'
      );
      setTimeout(() => {
        expect(dropdownMenu.getDOMNode().classList).toContain(
          'reveal-drop-down-menu_EMFQP'
        );
      }, 200);
      setTimeout(() => {
        expect(dropdownMenu.getDOMNode().classList).not.toContain(
          'reveal-drop-down-menu_EMFQP'
        );
      }, timeout);
      dropdown.unmount();
    });
  });

  describe('Unopdropdown Styles', () => {
    it('gets the correct style object per align type', () => {
      expect(Utility.getStyleObject(DropDowndirections.LEFT, 20)).toStrictEqual(
        {
          left: 0,
        }
      );
      expect(
        Utility.getStyleObject(DropDowndirections.RIGHT, 20)
      ).toStrictEqual({
        right: 0,
      });
      expect(
        Utility.getStyleObject(DropDowndirections.CENTER, 20)
      ).toStrictEqual({
        left: '50%',
        marginLeft: '-10px',
      });
    });
  });

  describe('Unopdropdown appearance events', () => {
    let dropdown: ReactWrapper;
    let appeared = false;
    let disappeared = false;
    let disappearStart = false;

    beforeEach(() => {
      dropdown = mount(
        <UnopDropdown
          onAppear={() => {
            appeared = true;
          }}
          onDisappear={() => {
            disappeared = true;
          }}
          onDisappearStart={() => {
            disappearStart = true;
          }}
          trigger={<button id="trigger">Click</button>}
        >
          <ul>
            <li>Hello</li>
          </ul>
        </UnopDropdown>
      );
    });

    afterEach(() => {
      appeared = false;
      disappeared = false;
      disappearStart = false;
      dropdown.unmount();
    });

    it('runs onAppear at the right time', () => {
      const trigger = dropdown.find('#trigger');
      expect(appeared).toStrictEqual(false);
      trigger.simulate('click');
      expect(appeared).toStrictEqual(true);
    });

    it('runs onDisappearStart at the right time', () => {
      const trigger = dropdown.find('#trigger');
      expect(disappearStart).toStrictEqual(false);
      trigger.simulate('click');
      trigger.simulate('click');
      expect(disappearStart).toStrictEqual(true);
    });

    it('runs onDisappear at the right time', () => {
      const trigger = dropdown.find('#trigger');
      expect(disappeared).toStrictEqual(false);
      trigger.simulate('click');
      trigger.simulate('click');
      expect(disappeared).toStrictEqual(false);
      setTimeout(() => {
        expect(disappeared).toStrictEqual(true);
      }, 0);
    });
  });
});
