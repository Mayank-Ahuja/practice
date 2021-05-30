import { ByPropPipe } from './by-prop.pipe';

describe('ByPropPipe', () => {
  it('create an instance', () => {
    const pipe = new ByPropPipe();
    expect(pipe).toBeTruthy();
  });
});
