/*
 *
 * handles outside click events
 * e.g. we create custom Dropdown for select
 * we wrap the list with this component and add onOutsideClick
 * passing a close function
 *
 */

// @ts-nocheck

import React, { ReactNode, ElementType, Component } from 'react';

// @flow
type OutsideClickHandlerProps = {
  children?: ReactNode;
  onOutsideClick?: Function | null;
  onOutsideScroll?: boolean;
  onWindowResize?: boolean;
  Component: ElementType;
};

export default class OutsideClickHandler extends Component<OutsideClickHandlerProps> {
  static defaultProps = {
    children: null,
    onOutsideClick: null,
    onOutsideScroll: true,
    onWindowResize: true,
    Component: 'div'
  };

  componentDidMount() {
    const { onOutsideClick } = this.props;
    if (onOutsideClick) {
      this.bindListeners();
    }
  }

  componentDidUpdate() {
    const { onOutsideClick } = this.props;
    if (typeof onOutsideClick === 'function') {
      this.bindListeners();
    } else {
      this.removeListeners();
    }
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  setRef = name => component => {
    this[name] = component; //
  };

  handleOuterActions = (e: any) => {
    const { onOutsideClick } = this.props;
    if (typeof onOutsideClick === 'function') {
      onOutsideClick(e);
    }
  };

  handleOutsideClick = (e: any) => {
    const { onOutsideClick } = this.props;
    if (typeof onOutsideClick !== 'function') {
      return;
    }
    const isDescendantOfRoot = !!e.target && this.childNode && this.childNode.contains(e.target);
    if (!isDescendantOfRoot) {
      onOutsideClick(e);
    }
  };

  bindListeners = () => {
    const { onOutsideScroll, onWindowResize } = this.props;
    if (typeof document !== 'undefined' && document.addEventListener) {
      // `useCapture` flag is set to true so
      // that a `stopPropagation` in the children will
      // not prevent all outside click handlers from firing
      document.addEventListener('click', this.handleOutsideClick, true);
      if (onOutsideScroll) {
        window.addEventListener('scroll', this.handleOuterActions, true);
      }
      if (onWindowResize) {
        window.addEventListener('resize', this.handleOuterActions, true);
      }
    } else if (typeof document !== 'undefined') {
      document.attachEvent('onclick', this.handleOutsideClick);
      if (onOutsideScroll) {
        document.attachEvent('onclick', this.handleOutsideClick);
      }
    }
  };

  removeListeners = () => {
    const { onOutsideScroll, onWindowResize } = this.props;
    if (typeof document !== 'undefined' && document.removeEventListener) {
      document.removeEventListener('click', this.handleOutsideClick);
      if (onOutsideScroll) {
        window.removeEventListener('scroll', this.handleOuterActions);
      }
      if (onWindowResize) {
        window.removeEventListener('resize', this.handleOuterActions);
      }
    } else if (typeof document !== 'undefined') {
      document.detachEvent('onclick', this.handleOutsideClick);
      if (onOutsideScroll) {
        document.detachEvent('onclick', this.handleOutsideClick);
      }
    }
  };

  render() {
    const { children, onOutsideClick, onOutsideScroll, onWindowResize, Component, ...rest } = this.props;

    return (
      <Component ref={this.setRef('childNode')} {...rest}>
        {children}
      </Component>
    );
  }
}
