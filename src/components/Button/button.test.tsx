import React from 'react';
import { shallow } from 'enzyme';
import Button, { ButtonSize } from '.';

describe('<Button />', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Button>Click Me!</Button>);
  });

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('Visuals', () => {
    it('should display an icon when one is passed', () => {
      wrapper.setProps({ icon: <div></div> });
      const actual = wrapper.find('[data-testId="Button-icon"]').length;
      const expected = 1;
      expect(actual).toEqual(expected);
    });

    it('should display text passed to the button', () => {
      const actual = wrapper.find('[data-testId="Button-content"]').text();
      const expected = 'Click Me!';
      expect(actual).toEqual(expected);
    });

    it('should set iconOnly to true when no text is passed but an icon is', () => {
      const wrapper = shallow(<Button icon={<div></div>}></Button>);
      const actual = wrapper.prop('iconOnly');
      expect(actual).toBeTruthy();
    });

    test.each([
      ['primary', true],
      ['secondary', true],
      ['warning', true],
      ['success', true],
      ['transparent', true],
      ['clear', true],
      ['disabled', true],
      ['iconRight', true],
      ['fullWidth', true],
      ['noBorder', true],
    ])('should pass true to the %s prop', (currentProp, expected) => {
      wrapper.setProps({ [currentProp]: expected });
      const actual = wrapper.prop(currentProp);
      expect(actual).toEqual(expected);
    });
  });

  describe('Test Ids', () => {
    it('should set a custom test id for button', () => {
      wrapper.setProps({ testIds: { button: 'customButton' } });
      const actual = wrapper.find('[data-testId="Button-customButton"]').length;
      const expected = 1;
      expect(actual).toEqual(expected);
    });

    it('should set a custom test id for icon', () => {
      wrapper.setProps({
        testIds: { icon: 'customIcon' },
        icon: <div></div>,
      });
      const actual = wrapper.find('[data-testId="Button-customIcon"]').length;
      const expected = 1;
      expect(actual).toEqual(expected);
    });

    it('should set a custom test id for content', () => {
      wrapper.setProps({ testIds: { content: 'customContent' } });
      const actual = wrapper.find('[data-testId="Button-customContent"]').length;
      const expected = 1;
      expect(actual).toEqual(expected);
    });
  });

  describe('Class Overrides', () => {
    it('should have the correct classNames for ButtonWrapper when an overide is passed', () => {
      wrapper.setProps({
        classOverrides: { buttonWrapper: 'override' },
      });
      expect(wrapper.find('[data-testId="Button-button"]').hasClass('override')).toEqual(true);
    });

    it('should have the correct classNames for Icon when an overide is passed', () => {
      wrapper.setProps({
        classOverrides: { icon: 'override' },
        icon: <div></div>,
      });
      expect(wrapper.find('[data-testId="Button-icon"]').hasClass('override')).toEqual(true);
    });

    it('should have the correct classNames for ContentWrapper when an overide is passed', () => {
      wrapper.setProps({
        classOverrides: { contentWrapper: 'override' },
      });
      expect(wrapper.find('[data-testId="Button-content"]').hasClass('override')).toEqual(true);
    });
  });

  describe('Sizes', () => {
    it('should use medium as the default size', () => {
      const actual = wrapper.prop('buttonSize');
      const expected = ButtonSize.Medium;
      expect(actual).toEqual(expected);
    });

    test.each([
      [ButtonSize.Small, 'small'],
      [ButtonSize.Medium, 'medium'],
      [ButtonSize.Large, 'large'],
    ])('should render the %s button size', (currentSize, expected) => {
      wrapper.setProps({ buttonSize: currentSize });
      const actual = wrapper.prop('buttonSize');
      expect(actual).toEqual(expected);
    });
  });
});
