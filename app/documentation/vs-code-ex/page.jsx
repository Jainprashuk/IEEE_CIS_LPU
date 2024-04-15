import React from 'react';

const ExtensionsArticle = () => {
  return (
    <div className="mx-auto p-6">
      <h1 className="text-3xl font-bold mb-5">
        Essential Visual Studio Code Extensions for Beginners
      </h1>
      <p className="mb-6">
      As you embark on your coding journey with Visual Studio Code (VS Code),
        there are several extensions available in the{' '}
        <a
          href="https://marketplace.visualstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 font-semibold underline"
        >
          VS Code Marketplace
        </a>{' '}
        that can significantly enhance your development experience. These
        extensions provide additional features, improved code quality, and
        streamlined workflows. Here are some must-have extensions to consider
        installing:
      </p>
   
      <div className="space-y-2">
        <Extension
          name="Bracket Pair Colorizer"
          description="Color-codes matching brackets and parentheses in your code for improved readability and syntax error prevention."
        />
        <Extension
          name="ESLint"
          description="Maintains consistent code style and catches potential errors in JavaScript and TypeScript code."
        />
        <Extension
          name="Prettier"
          description="Automatically formats code to adhere to consistent styling rules for various programming languages."
        />
        <Extension
          name="GitLens"
          description="Enhances Git integration with inline blame annotations, code lens information, and insights into code history."
        />
        <Extension
          name="Live Server"
          description="Provides a local development server that automatically reloads web pages as you make changes."
        />
        <Extension
          name="Auto Rename Tag"
          description="Automatically renames paired HTML/XML tags for consistency when renaming one tag."
        />
        <Extension
          name="Path Intellisense"
          description="Autocompletes file paths as you type, simplifying the process of importing files."
        />
        <Extension
          name="Code Spell Checker"
          description="Checks for spelling mistakes in code comments and strings, enhancing code readability."
        />
        <Extension
          name="Auto Close Tag"
          description="When you're working with HTML and XML, manually closing tags after opening them can be a bit of a chore. But fear not, we've got a simple solution for you: automatic tag closure for HTML and XML."
        />
        <Extension
          name="Debugger for Chrome"
          description="Enables debugging of JavaScript code running in the Google Chrome browser directly from VS Code."
        />
      </div>
      <div className="mt-6">
        <p className="mb-4">
          To install these extensions, follow these steps:
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Open Visual Studio Code.</li>
          <li>
            Click on the square icon in the left sidebar to open the Extensions
            view.
          </li>
          <li>Search for the extension by name in the Extensions Marketplace.</li>
          <li>Click the "Install" button next to the extension you want to install.</li>
          <li>After installation, reload or restart VS Code to activate the extension.</li>
        </ol>
      </div>
      <p className="mt-6">
        These extensions will enhance your coding environment, boost
        productivity, and help you write better code. Experiment with different
        extensions to find the ones that best suit your workflow and preferences.
      </p>
    </div>
  );
};

const Extension = ({ name, description }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
     <h2 className="text-xl font-bold mb-1" style={{ color: 'rgb(32 163 198)' }}>{name}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ExtensionsArticle;
