import * as fs from 'fs';
import { execa } from 'execa';
import path from 'path';

/**
 * The directory where the components are located.
 * @type {string}
 */
const componentsDir = 'components/packages';

/**
 * The output directory for compiled CSS.
 * @type {string}
 */
const outputDir = 'dist/packages';

/**
 * Get the list of component names from the components directory.
 * @type {string[]}
 */
const componentNames = fs.readdirSync(componentsDir);

/**
 * Compile Sass to CSS using the `sass` command.
 * @param {string} sassFilePath - The path to the Sass file.
 * @param {string} cssFilePath - The path to the output CSS file.
 * @returns {Promise<void>} A promise that resolves when Sass compilation is complete.
 */
const compileSass = async (sassFilePath, cssFilePath) => {
  try {
    await execa('sass', [sassFilePath, cssFilePath, '--no-source-map'], { stdio: 'inherit' });
    console.log(`Successfully compiled Sass: ${sassFilePath}`);
  } catch (err) {
    console.error(`Error compiling Sass: ${sassFilePath}`);
    console.error(err);
  }
};

/**
 * Compile Sass for all components.
 * @returns {Promise<void>} A promise that resolves when all components are compiled.
 */
const compileComponents = async () => {
  const compileTasks = componentNames.map(async (componentName) => {
    const componentDir = path.join(componentsDir, componentName);
    const sassFilePath = path.join(componentDir, 'styles', '_index.scss');
    const outputStyleDir = path.join(outputDir, componentName, 'style');
    const cssFilePath = path.join(outputStyleDir, 'index.css');

    if (fs.existsSync(sassFilePath)) {
      // Create the output directory
      fs.mkdirSync(outputStyleDir, { recursive: true });

      await compileSass(sassFilePath, cssFilePath);
    } else {
      console.warn(`Sass file not found: ${sassFilePath}`);
    }
  });

  try {
    await Promise.all(compileTasks);
    console.log('All components compiled successfully.');
  } catch (err) {
    console.error('Error compiling components:');
    console.error(err);
  }
};

compileComponents();