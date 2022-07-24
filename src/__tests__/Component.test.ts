import { Component } from '@/core';

describe('Component', () => {
  const target = document.createElement('div');
  const props = { test: 'test' };

  const component = new Component(target, props);
  component.setup = () => {
    component.$state = component.$props;
  };
  component.template = () => {
    return '<div class="test">test</div>';
  };
  component.setEvent = () => {
    component.addEvent('click', '.test', () => {
      return props;
    });
  };

  test('new Component', async () => {
    expect(component.$props).toEqual(props);
    expect(component.template()).toBe('<div class="test">test</div>');
  });
});
