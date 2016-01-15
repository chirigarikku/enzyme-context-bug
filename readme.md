## enzyme-context-bug
This demonstrates the context bug in `enzyme`. [enzyme#119](https://github.com/airbnb/enzyme/issues/119)

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
