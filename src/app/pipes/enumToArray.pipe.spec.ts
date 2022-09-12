import { EnumToArrayPipe } from './enumToArray.pipe';

describe('EnumPipe', () => {
  it('create an instance', () => {
    const pipe = new EnumToArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
