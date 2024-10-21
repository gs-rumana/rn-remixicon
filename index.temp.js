// index-template.js
const path = require('path');

/**
 * Converts a kebab-case string to PascalCase.
 * @param {string} str - the string to convert
 * @returns {string} the converted string
 * @example
 * kebabToPascalCase('hello-world') // 'HelloWorld'
 */
function kebabToPascalCase(str) {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

function indexTemplate(files) {
  // Generate the import statements
  const importStatements = files
    .map(file => {
      const iconName = path.basename(file.path, path.extname(file.path));
      const pascalCase = kebabToPascalCase(iconName);
      const regex = new RegExp(/^[0-9]/);
      return `export { default as ${regex.test(pascalCase) ? 'Svg' + pascalCase : pascalCase} } from './${iconName}';`;
    })
    .join('\n');

  // Generate the type definition for IconName
  const typeDefinition = `export type IconName = ${files
    .map(file => `'${path.basename(file.path, path.extname(file.path))}'`)
    .join(' | ')};`;

  return `${importStatements}

${typeDefinition}`;
}

module.exports = indexTemplate;
