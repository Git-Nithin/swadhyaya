import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
        <div className="container">
          <a className="navbar-brand text-success fw-bold" href="#">Swadhyaya Yoga</a>
          <ul className="navbar-nav ms-auto d-flex flex-row gap-4">
            <li className="nav-item"><a className="nav-link text-dark" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link text-dark" href="#about">About Us</a></li>
            <li className="nav-item"><a className="nav-link text-dark" href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="vh-100 d-flex flex-column justify-content-center align-items-center text-center bg-light">
        <h1 className="display-4 text-success fw-bold">Welcome to Swadhyaya Yoga</h1>
        <p className="lead text-muted mt-3">Discover the ancient practice of yoga for a healthier mind and body.</p>
        <img src="https://via.placeholder.com/500x300" alt="Yoga Gif" className="mt-4 w-50 rounded shadow-lg" />
      </section>

      {/* Yoga Sections */}
      <div className="container my-5">
        <div className="row text-center">
          {/* Prenatal Yoga Section */}
          <div className="col-md-6 mb-4">
            <div className="card shadow border-0">
              <img src="https://images.pexels.com/photos/3961334/pexels-photo-3961334.jpeg" className="card-img-top" alt="Prenatal Yoga" />
              <div className="card-body">
                <h2 className="card-title text-success">Prenatal Yoga</h2>
                <p className="card-text text-muted">
                  A gentle and supportive practice designed to help expecting mothers stay active, reduce stress, and prepare for childbirth.
                </p>
                <ul className="list-group list-group-flush text-start">
                  <li className="list-group-item">&#10004; Improves flexibility & strength for pregnancy.</li>
                  <li className="list-group-item">&#10004; Eases common discomforts like back pain & swelling.</li>
                  <li className="list-group-item">&#10004; Enhances breathing techniques for labor.</li>
                  <li className="list-group-item">&#10004; Encourages mindfulness & deeper connection with the baby.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ashtanga Yoga Section */}
          <div className="col-md-6 mb-4">
            <div className="card shadow border-0">
              <img src="" className="card-img-top" alt="Ashtanga Yoga" />
              <div className="card-body">
                <h2 className="card-title text-success">Ashtanga Yoga</h2>
                <p className="card-text text-muted">
                  A dynamic and disciplined practice that follows a set sequence of postures, promoting strength, flexibility, and mental clarity.
                </p>
                <ul className="list-group list-group-flush text-start">
                  <li className="list-group-item">&#10004; Builds endurance through structured sequences.</li>
                  <li className="list-group-item">&#10004; Enhances flexibility & mobility with deep stretching.</li>
                  <li className="list-group-item">&#10004; Detoxifies the body by generating internal heat.</li>
                  <li className="list-group-item">&#10004; Improves focus through breath control (Ujjayi Pranayama).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* About Us Section */}
      <section id="about" className="py-5 bg-dark text-white text-center">
        <div className="container">
          <h2 className="display-5 fw-bold">About Us</h2>
          <p className="mt-3">
            At Swadhyaya Yoga, we embrace yoga's **transformative power** for all. Whether you're an expecting mother or a dedicated yogi, our expert instructors provide traditional and modern techniques to help you **achieve balance, peace, and strength**.
          </p>
          <div className="row mt-4">
            <div className="col-md-4">
              <h4 className="fw-bold">✅ Expert Instructors</h4>
              <p>Guided sessions by certified professionals.</p>
            </div>
            <div className="col-md-4">
              <h4 className="fw-bold">🧘‍♂️ Beginner & Advanced Classes</h4>
              <p>Programs suited for all levels of yoga practitioners.</p>
            </div>
            <div className="col-md-4">
              <h4 className="fw-bold">🌿 Holistic Approach</h4>
              <p>Focus on **breathwork, meditation, and mindfulness**.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-5 bg-success text-white text-center">
        <div className="container">
          <h2 className="display-5 fw-bold">Contact Us</h2>
          <p className="mt-3"><i className="bi bi-geo-alt-fill"></i> 📍 Location: [Your Address]</p>
          <p><i className="bi bi-telephone-fill"></i> 📞 Call Us: [Your Phone Number]</p>
          <p><i className="bi bi-envelope-fill"></i> ✉ Email: [Your Email]</p>
        </div>
      </section>
    </div>
  );
}

export default App;
