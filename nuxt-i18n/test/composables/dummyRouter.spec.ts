import {describe, it, expect} from "vitest";
import {useCurrentRoute} from "../../app/composables/dummyRouter";


describe('Router', () => {
  it('should ', () => {
    expect(useCurrentRoute()).toBe('/');
  });
})
