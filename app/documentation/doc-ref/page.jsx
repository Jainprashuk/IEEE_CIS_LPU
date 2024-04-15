import React from 'react';

const DocumentationComponent = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Documentation and References</h1>
      <p className="mb-6">
        As a beginner in web development, having access to reliable documentation and references
        is essential for mastering the intricacies of the craft. Here are some valuable resources
        that can serve as your guiding light on your coding journey:
      </p>
      <section className="mb-10">
        <div className="mb-10">
        <h2 className="text-2xl font-bold mb-5" style={{ color: 'rgb(32 163 198)' }}>
            MDN Web Docs:
          </h2>
          <p className="mb-2">
            <span className="font-bold">Resource:</span> MDN Web Docs
          </p>
          <p>
            <span className="font-bold">Description:</span> Developed by Mozilla, the MDN Web Docs
            is an indispensable resource for web developers. It offers a comprehensive and up-to-date
            collection of documentation on HTML, CSS, JavaScript, and various web APIs. Each topic is
            covered in detail, complete with code examples, guides, and tutorials. Whether you're
            looking to understand the fundamentals or delve into advanced techniques, MDN Web Docs
            is your go-to source for accurate and well-structured information.
          </p>
        </div>
        <div className="mb-10">
        <h2 className="text-2xl font-bold mb-5" style={{ color: 'rgb(32 163 198)' }}>
            W3Schools:
          </h2>
          <p className="mb-2">
            <span className="font-bold">Resource:</span> W3Schools
          </p>
          <p>
            <span className="font-bold">Description:</span> W3Schools is a widely recognized online
            learning platform that provides tutorials, references, and interactive coding exercises on
            a multitude of web development technologies. With beginner-friendly content, W3Schools covers
            topics ranging from HTML, CSS, and JavaScript to more advanced concepts like PHP, SQL,
            and responsive design. Its hands-on approach allows you to learn by doing, making it an
            excellent choice for beginners who want to apply what they learn in real-time.
          </p>
        </div>
        <div className="mb-10">
        <h2 className="text-2xl font-bold mb-5" style={{ color: 'rgb(32 163 198)' }}>
            Stack Overflow:
          </h2>
          <p className="mb-2">
            <span className="font-bold">Resource:</span> Stack Overflow
          </p>
          <p>
            <span className="font-bold">Description:</span> Stack Overflow isn't just a platform for
            asking and answering coding questions; it's also a treasure trove of knowledge. As a beginner,
            you'll likely encounter challenges that others have faced before. By searching for solutions
            on Stack Overflow, you can find answers to a wide array of coding issues. It's a community-driven
            platform where developers of all levels come together to help each other out.
          </p>
        </div>
        <div className="mb-10">
        <h2 className="text-2xl font-bold mb-5" style={{ color: 'rgb(32 163 198)' }}>
            GitHub:
          </h2>
          <p className="mb-2">
            <span className="font-bold">Resource:</span> GitHub
          </p>
          <p>
            <span className="font-bold">Description:</span> GitHub is more than just a platform for hosting
            code repositories; it's a hub of collaborative development and learning. By exploring open-source
            projects and repositories, you can see how experienced developers structure their code, manage
            version control, and handle real-world coding scenarios. It's a great way to learn from others' code
            and contribute to projects that align with your interests.
          </p>
        </div>
        <div className="mb-10">
        <h2 className="text-2xl font-bold mb-5" style={{ color: 'rgb(32 163 198)' }}>
            YouTube Tutorials and Channels:
          </h2>
          <p>
            <span className="font-bold">Description:</span> YouTube hosts a plethora of web development tutorials
            and channels created by experienced developers. Video tutorials can provide step-by-step guidance on
            building projects, learning new technologies, and solving coding challenges. Some popular channels
            to explore include Traversy Media, The Net Ninja, and Codecademy.
          </p>
        </div>
        <div>
        <h2 className="text-2xl font-bold mb-5" style={{ color: 'rgb(32 163 198)' }}>
            Online Communities and Forums:
          </h2>
          <p>
            <span className="font-bold">Description:</span> Engaging with online communities and forums can help
            you connect with fellow beginners and experienced developers. Platforms like Reddit's r/learnprogramming
            and Hashnode offer spaces for asking questions, sharing knowledge, and participating in discussions
            about web development trends, tools, and practices.
          </p>
        </div>
      </section>
      <p>
        By leveraging these documentation and reference resources, you'll have a strong foundation for
        continuous learning and growth as you progress in your web development journey. Remember that the
        key to successful learning is practice, patience, and an eagerness to explore new concepts.
        Happy coding!
      </p>
    </div>
  );
};

export default DocumentationComponent;
