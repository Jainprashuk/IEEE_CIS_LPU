import React from 'react';

const ColorToolsComponent = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">
        Color Tools: Enhancing Your Design Palette
      </h1>
      <p className="mb-6">
        As a beginner in the world of web development, understanding and utilizing color
        effectively can significantly impact the visual appeal and user experience of your
        projects. To assist you on this creative journey, we introduce two essential color
        tools that will help you master color selection, harmonization, and gradient
        generation.
      </p>
      <div className="mb-10">
      <h2 className="text-2xl font-bold mb-5" style={{ color: 'rgb(32 163 198)' }}>ColorZilla: Your Color Assistant</h2>
        <p className="mb-4">
          <strong>ColorZilla</strong>  is a powerful browser extension that
          equips you with a suite of color-related tools, making it an indispensable
          companion for any web developer. From selecting colors to generating gradients,
          ColorZilla streamlines various color-centric tasks.
        </p>
        <h4 className="text-lg font-bold mb-2">Key Features:</h4>
        <ul className="list-disc space-y-2 pl-6 mb-4">
          <li>
            Color Picker: Use ColorZilla's eyedropper tool to pick colors from any element
            on a webpage. This helps you match colors accurately for consistent design.
          </li>
          <li>
            Gradient Generator: Easily create gradients with ColorZilla's gradient editor.
            Choose colors, adjust angles, and create stunning gradient effects for
            backgrounds, buttons, and more.
          </li>
          <li>
            Color Palette Viewer: Analyze the color palette of a webpage and gain insights
            into its color scheme. This is valuable for understanding design choices on
            existing websites.
          </li>
          <li>
            Color History: ColorZilla keeps track of recently picked colors, allowing you
            to revisit and reuse them conveniently.
          </li>
        </ul>
        <p className="mb-4">
          <strong>Usage:</strong> To use ColorZilla, simply install the browser extension
          on popular browsers like Chrome or Firefox. Once installed, you'll find the
          ColorZilla icon in your browser's toolbar, giving you quick access to its range
          of color tools.
        </p>
      </div>
      <div className="mb-10">
      <h2 className="text-2xl font-bold mb-5" style={{ color: 'rgb(32 163 198)' }}>Adobe Color Wheel: Your Harmonization Expert</h2>
        <p className="mb-4">
          <strong>Description:</strong> Adobe Color Wheel (formerly Adobe Color CC) is an
          online color tool offered by Adobe, designed to help you create harmonious and
          visually pleasing color schemes.
        </p>
        <h4 className="text-lg font-bold mb-2">Key Features:</h4>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Color Wheel: Experiment with the color wheel to select a base color, and Adobe
            Color Wheel will automatically suggest various color harmonies, such as
            complementary, analogous, and triadic schemes.
          </li>
          <li>
            Explore and Save Schemes: Browse through an array of color schemes created by
            the community. You can also save your own schemes and access them later.
          </li>
          <li>
            Export and Integration: Adobe Color Wheel provides various export options,
            allowing you to download color palettes as ASE (Adobe Swatch Exchange) files,
            CSS code, or shareable links. This facilitates seamless integration of your
            chosen color schemes into your design projects.
          </li>
        </ul>
        <p className="mb-4">
          <strong>Usage:</strong> Adobe Color Wheel is accessible through your web browser,
          eliminating the need for installation. Simply visit the Adobe Color website and
          start experimenting with different color harmonies.
        </p>
        <p className="mt-6">
         Mastering color selection and harmonization is a
        crucial aspect of web development. ColorZilla and Adobe Color Wheel provide you
        with the tools needed to explore, experiment, and refine your color choices. By
        integrating these color tools into your workflow, you'll enhance your design
        capabilities and create visually appealing and harmonious web projects.
      </p>
      </div>
      
    </div>
  );
};

export default ColorToolsComponent;
