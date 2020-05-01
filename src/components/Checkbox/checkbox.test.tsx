import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '.';
import { Description } from './style';
import Check from './check';

describe('<Checkbox />', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Checkbox name="test" />);
  });

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('Visuals', () => {
    it('should display a label if one is passed', () => {
      wrapper.setProps({ label: 'This is a label', toggle: false, radio: false });
      const actual = wrapper.find('[data-testId="Checkbox-label"]').text();
      const expected = 'This is a label';
      expect(actual).toEqual(expected);
    });

    it('should display a description if one is passed', () => {
      wrapper.setProps({ description: 'This is a description' });
      const actual = wrapper.find(Description).text();
      const expected = 'This is a description';
      expect(actual).toEqual(expected);
    });

    it('should display a check by default', () => {
      expect(wrapper.find(Check).length).toEqual(1);
    });

    it('should not display a check if toggle is passed', () => {
      wrapper.setProps({ toggle: true });
      expect(wrapper.find(Check).length).toEqual(0);
    });

    it('should not display a check if radio is passed', () => {
      wrapper.setProps({ radio: true });
      expect(wrapper.find(Check).length).toEqual(0);
    });
  });

  describe('Class Overrides', () => {
    it('should have the correct classNames for Wrapper when an overide is passed', () => {
      wrapper.setProps({
        classOverrides: { wrapper: 'override' },
      });
      expect(wrapper.find('[data-testId="Checkbox-wrapper"]').hasClass('override')).toEqual(true);
    });

    it('should have the correct classNames for CheckboxStyle when an overide is passed', () => {
      wrapper.setProps({
        classOverrides: { checkbox: 'override' },
      });
      expect(wrapper.find('[data-testId="Checkbox-checkbox"]').hasClass('override')).toEqual(true);
    });

    it('should have the correct classNames for labelWrapper when an overide is passed', () => {
      wrapper.setProps({
        classOverrides: { labelWrapper: 'override' },
      });
      expect(wrapper.find('[data-testId="Checkbox-labelWrapper"]').hasClass('override')).toEqual(true);
    });

    it('should have the correct classNames for Label when an overide is passed', () => {
      wrapper.setProps({
        classOverrides: { label: 'override' },
        label: 'Label',
      });
      expect(wrapper.find('[data-testId="Checkbox-label"]').hasClass('override')).toEqual(true);
    });

    it('should have the correct classNames for Description when an overide is passed', () => {
      wrapper.setProps({
        classOverrides: { description: 'override' },
        description: 'description',
      });
      expect(wrapper.find('[data-testId="Checkbox-description"]').hasClass('override')).toEqual(true);
    });
  });

  describe('Test Ids', () => {
    it('should set a custom testId for wrapper', () => {
      wrapper.setProps({ testIds: { wrapper: 'customWrapper' } });
      const actual = wrapper.find('[data-testId="Checkbox-customWrapper"]').length;
      const expected = 1;
      expect(actual).toEqual(expected);
    });

    it('should set a custom testId for checkbox', () => {
      wrapper.setProps({ testIds: { checkbox: 'customCheckbox' } });
      const actual = wrapper.find('[data-testId="Checkbox-customCheckbox"]').length;
      const expected = 1;
      expect(actual).toEqual(expected);
    });

    it('should set a custom testId for labelWrapper', () => {
      wrapper.setProps({ testIds: { labelWrapper: 'customLabelWrapper' } });
      const actual = wrapper.find('[data-testId="Checkbox-customLabelWrapper"]').length;
      const expected = 1;
      expect(actual).toEqual(expected);
    });

    it('should set a custom testId for label', () => {
      wrapper.setProps({ testIds: { label: 'customLabel' }, label: 'Label' });
      const actual = wrapper.find('[data-testId="Checkbox-customLabel"]').length;
      const expected = 1;
      expect(actual).toEqual(expected);
    });

    it('should set a custom testId for description', () => {
      wrapper.setProps({ testIds: { description: 'customDescription' }, description: 'Description' });
      const actual = wrapper.find('[data-testId="Checkbox-customDescription"]').length;
      const expected = 1;
      expect(actual).toEqual(expected);
    });
  });
});
