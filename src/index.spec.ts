import { beforeEach, describe, test, expect, vi } from 'vitest';
import { testFunc } from '.';

describe('testFunc', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  test('should return a promise', async () => {
    const response = { message: 'Hello, world!' };

    fetchMock.mockResponseOnce(JSON.stringify(response));
    const result = await testFunc();
    expect(result).toEqual(response);
  });
});
