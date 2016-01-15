## enzyme-context-bug `[fixed]`
This demonstrates the context bug in `enzyme`. Check [enzyme#119](https://github.com/airbnb/enzyme/issues/119).

**Update**: Fixed by [enzyme#121](https://github.com/airbnb/enzyme/pull/121), released in [`v1.3.1`](https://github.com/airbnb/enzyme/commit/c06ac0a6c3c088803ced9728dfa6be215def100c).

## Running
```bash
npm install
npm test
```

## Behavior
`ShallowWrapper.setProps` does not pass the old context to the new shallow-rendered component.

## Reproducing
```js
// 1. Use `shallow` as you would (pass `options.context`)
const wrapper = shallow(<MyComponent />, { context: 'yolo' });
// 2. Run an assertion
expect(wrapper.first('div').text()).to.equal('yolo');
// 3. Run `setProps`
wrapper.setProps(5);
// 4. Run the same assertion
expect(wrapper.first('div').text()).to.equal('yolo');
```
