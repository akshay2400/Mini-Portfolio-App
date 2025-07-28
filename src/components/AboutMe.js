import React from 'react';

/**
 * About Me section styled with Bootstrap 5.
 */
function AboutMe() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Profile Image */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.1Dkax0FLl9EdAkAcJmxA4QHaHu?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Profile"
              className="rounded-circle img-fluid shadow"
              style={{ width: '180px', height: '180px', objectFit: 'cover' }}
            />
          </div>
          {/* Intro and Description */}
          <div className="col-md-8">
            <h2 className="fw-bold mb-3">About Me</h2>
            <p className="lead mb-2">Hi, I'm Akshay A S!</p>
            <p>
              {/* Replace with your description */}
              Hi, I’m Akshay A S — a QA engineer at UST with hands-on experience in automation testing using Java, Selenium, and API tools like Postman and Rest Assured. I’m also a certified Google Cloud Associate Cloud Engineer, passionate about quality, cloud, and continuous learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;