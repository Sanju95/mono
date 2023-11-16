import { objDestructure } from './playground';

describe('Obj Destructure', () => {
  it('works', () => {
    expect(objDestructure({ key1: 'value1', key2: 'value2', key3: 'value3' })).toEqual({ key1: 'value1', key2: 'value2', key3: 'value3' })
  })
 })