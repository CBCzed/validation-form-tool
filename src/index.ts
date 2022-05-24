import validateTool from './validate';
import replaceTool from './replace';

export { validateTool, replaceTool };

export default {
  ...validateTool,
  ...replaceTool,
};
