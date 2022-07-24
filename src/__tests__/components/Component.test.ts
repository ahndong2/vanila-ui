import { Component } from '@/core';

describe('Component', () => {
  const target = document.createElement('div');
  const props = { test: 'test' };
  const component = new Component(target, props);
  component.setup = () => {};
  component.template = () => {
    return '<div class="test">test</div>';
  };
  component.setEvent = () => {
    component.addEvent('click', '.test', () => {
      return console.log('test!!');
    });
  };
  test('new Component', async () => {
    expect(component.template()).toBe('<div class="test">test</div>');
  });
});
