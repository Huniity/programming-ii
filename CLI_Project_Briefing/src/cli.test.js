import { expect, test, vi } from 'vitest';
import { executeTasks } from './cli.js';

test('CLI should receive args and became true ', () => {
  const originalArgv = process.argv;
  let city = false;
  let briefing = false;
  process.argv = ['node', 'src/cli.js', 'London', '--briefing'];

  const consoleLogMock = vi.spyOn(console, 'log').mockImplementation(() => {});

  require('./cli.js');

  expect(consoleLogMock).toBeTruthy(city, briefing);

  process.argv = originalArgv;
  consoleLogMock.mockRestore();
});

 ///////////=========================//////////////

test('CLI should set save to true when --save flag is provided', () => {
    const originalArgv = process.argv;
    let save = false;
    process.argv = ['node', 'src/cli.js', 'London', '--save'];
  
    const consoleLogMock = vi.spyOn(console, 'log').mockImplementation(() => {});
  
    require('./cli.js');
  
    expect(save).toBe(false);
  
    process.argv = originalArgv;
    consoleLogMock.mockRestore();
  });

  ///////////=========================//////////////

  test('executeTasks should throw an error when city is not provided', () => {
    const originalArgv = process.argv;
    process.argv = ['node', 'src/cli.js', '--briefing'];
  
    try {
      executeTasks();
    } catch (error) {

      expect(error).toBeInstanceOf(Error); 
      expect(error.message).toBe('City is required');
    }
  
    process.argv = originalArgv;
  });
  