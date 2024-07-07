import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: ' Empower Your Web Development Workflow',
    text: 'Discover how WebDev Bot streamlines web development tasks, from code generation to deployment, enhancing productivity and project efficiency',
  },
  {
    title: 'Unlock the Power of Automation ',
    text: 'Explore how WebDev Bot automates repetitive tasks like code formatting, testing, and deployment, freeing developers to focus on creativity and innovation.',
  },
  {
    title: 'Elevate Your Coding Experience',
    text: 'Dive into the world of enhanced coding experiences enabled by WebDev Bot, offering intelligent suggestions, code snippets, and performance optimizations for seamless development.',
  },
  {
    title: 'Simplify Complex Web Projects',
    text: 'Learn how WebDev Bot simplifies the development process by providing frameworks, libraries, and best practices tailored to your project needs, accelerating development cycles and reducing errors.',
  },
];

const Features = () => (
  <div className="bot_features section_padding" id="features">
    <div className="bot_features-heading">
      <h1 className="gradient_text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="bot_features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;