import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold mb-5 text-center text-gradient">
          About Me
        </h1>
        <p className="text-lg leading-relaxed mb-6">
          Hi, I'm <span className="font-bold text-blue-800">Manish Raj</span>, a
          highly skilled and versatile Full-Stack Developer. With extensive
          experience in both front-end and back-end development, I specialize in
          building scalable and responsive web applications from concept to
          deployment. I'm proficient in a wide range of technologies and
          frameworks, dedicated to creating efficient and innovative solutions.
        </p>

        <div className="mb-8">
          <h1 className="text-blue-800 font-semibold text-xl">Education</h1>
          <div className="border-l-4 border-blue-800 pl-4 mt-2">
            <span className="block text-lg">
              Bachelor of Computer Application
            </span>
            <span className="block text-sm text-gray-600">Year: 2023</span>
            <span className="block text-sm text-gray-600">CGPA: 8.2</span>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-blue-800 font-semibold text-xl">Course</h1>
          <div className="border-l-4 border-blue-800 pl-4 mt-2">
            <span className="block text-lg">
              The Complete 2024 Web Development Bootcamp, Udemy
            </span>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-blue-800 font-semibold text-xl">Skills</h1>
          <div className="border-l-4 border-blue-800 pl-4 mt-2">
            <span className="block text-lg font-semibold">
              Frontend Skills:
            </span>
            <span className="block text-sm text-gray-600">
              HTML5, CSS3, JavaScript (ES6+), React.js, Responsive Design, UI/UX
              Principles, Version Control
            </span>
            <span className="block text-lg font-semibold mt-4">
              Backend Skills:
            </span>
            <span className="block text-sm text-gray-600">
              Node.js, Express.js, MongoDB, Mongoose, RESTful APIs,
              Authentication & Authorization, Database Management, Deployment &
              DevOps
            </span>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-blue-800 font-semibold text-xl">
            Achievements & Awards
          </h1>
          <div className="border-l-4 border-blue-800 pl-4 mt-2">
            <span className="block text-lg">
              54th rank among 1500+ college-mates on GeeksforGeeks
            </span>
          </div>
        </div>

        <div>
          <h1 className="text-blue-800 font-semibold text-xl">
            Mission Statement
          </h1>
          <div className="border-l-4 border-blue-800 pl-4 mt-2">
            <p className="text-lg leading-relaxed text-gray-700">
              I am dedicated to using my skills as a Full Stack MERN Developer
              to make a positive impact in the digital world. My goal is to
              create user-friendly and innovative web applications that meet the
              needs of businesses and individuals alike. By staying updated with
              the latest technologies and collaborating with others, I aim to
              build reliable and scalable solutions that drive success and
              foster growth. I am passionate about making a difference through
              technology and strive to continuously learn and improve in my
              journey as a developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
