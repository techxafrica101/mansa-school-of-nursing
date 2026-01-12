import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* 1. Hero Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <h1 className="text-4xl lg:text-5xl font-bold text-blue-700 mb-6 leading-tight">
                Training Compassionate, Competent Nurses for Zambia's Healthcare Future
              </h1>
              <h2 className="text-xl text-gray-700 mb-8 leading-relaxed">
                Accredited nursing education combining academic excellence, hands-on clinical training, and community service.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/admissions"
                  className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
                >
                  Apply Now
                </Link>
                <Link
                  to="/programs"
                  className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
                >
                  Download Prospectus
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <i className="fas fa-certificate text-blue-700 mr-2"></i>
                  <span>NMCZ Accredited</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-heart text-blue-700 mr-2"></i>
                  <span>Serving Zambia's Healthcare</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-hands-helping text-blue-700 mr-2"></i>
                  <span>Hands-on Clinical Training</span>
                </div>
              </div>
            </div>
            <div className="fade-in-up-delay-1">
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <i className="fas fa-user-nurse text-6xl text-blue-700 mb-4"></i>
                <p className="text-gray-600">Professional nursing education in a supportive learning environment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick Value Proposition Strip */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center fade-in-up">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-stethoscope text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Clinical Excellence</h3>
              <p className="text-gray-600 text-sm">Hands-on practical training in real healthcare settings</p>
            </div>
            <div className="text-center fade-in-up-delay-1">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-graduation-cap text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Accredited Programs</h3>
              <p className="text-gray-600 text-sm">Programs aligned with national nursing standards</p>
            </div>
            <div className="text-center fade-in-up-delay-2">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chalkboard-teacher text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Experienced Tutors</h3>
              <p className="text-gray-600 text-sm">Qualified professionals with real-world experience</p>
            </div>
            <div className="text-center fade-in-up-delay-3">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-globe-africa text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Community Impact</h3>
              <p className="text-gray-600 text-sm">Training nurses who serve and uplift communities</p>
            </div>
          </div>
        </div>
      </section>

export default Home;
      {/* 3. About the School */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <h2 className="text-3xl font-bold text-blue-700 mb-6">About Mansa School of Nursing</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Mansa College of Nursing and Midwifery is a distinguished government-run nursing training 
                institution in Zambia, officially approved by the Nursing and Midwifery Council of Zambia (NMCZ).
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We combine rigorous academic instruction with extensive clinical training, ensuring our graduates 
                are well-prepared to meet healthcare challenges facing Zambia and the broader region.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                As a government institution, we provide accessible, high-quality nursing education that serves 
                the public interest, preparing nurses who demonstrate both technical competence and professional values.
              </p>
              <Link
                to="/about"
                className="text-blue-700 hover:text-blue-800 font-semibold inline-flex items-center"
              >
                Read More About Us
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
            <div className="fade-in-up-delay-1">
              <div className="bg-gray-50 rounded-lg p-8">
                <i className="fas fa-hospital text-4xl text-blue-700 mb-4"></i>
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Clinical Training Excellence</h3>
                <p className="text-gray-600">
                  Our students receive hands-on training at Mansa General Hospital and other healthcare facilities, 
                  gaining real-world experience in patient care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Programs Offered */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-700 mb-4 fade-in-up">Programs Offered</h2>
            <p className="text-gray-600 max-w-2xl mx-auto fade-in-up-delay-1">
              Choose from our comprehensive nursing and midwifery programs designed to prepare you for a rewarding healthcare career.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 fade-in-up">
              <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-user-nurse text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Diploma in Nursing</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Comprehensive nursing program covering medical, surgical, pediatric, and community health nursing.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <p><strong>Duration:</strong> 3 years</p>
                <p><strong>Entry:</strong> Grade 12 Certificate</p>
              </div>
              <Link
                to="/programs"
                className="text-blue-700 hover:text-blue-800 font-semibold text-sm inline-flex items-center"
              >
                View Program
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 fade-in-up-delay-1">
              <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-baby text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Diploma in Midwifery</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Specialized program focusing on maternal and child health, family planning, and reproductive health.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <p><strong>Duration:</strong> 18 months</p>
                <p><strong>Entry:</strong> Registered Nurse</p>
              </div>
              <Link
                to="/programs"
                className="text-blue-700 hover:text-blue-800 font-semibold text-sm inline-flex items-center"
              >
                View Program
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 fade-in-up-delay-2">
              <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-heartbeat text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Continuing Education</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Professional development courses and workshops for practicing nurses and midwives.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <p><strong>Duration:</strong> Varies</p>
                <p><strong>Entry:</strong> Healthcare Professional</p>
              </div>
              <Link
                to="/programs"
                className="text-blue-700 hover:text-blue-800 font-semibold text-sm inline-flex items-center"
              >
                View Program
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Admissions & Application Process */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-700 mb-4 fade-in-up">Admissions & Application Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto fade-in-up-delay-1">
              Follow these simple steps to begin your journey toward a rewarding nursing career.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
              <div className="text-center fade-in-up">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold text-blue-700 mb-2">Check Requirements</h3>
                <p className="text-gray-600 text-sm">Review entry requirements for your chosen program</p>
              </div>
              <div className="text-center fade-in-up-delay-1">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold text-blue-700 mb-2">Complete Application</h3>
                <p className="text-gray-600 text-sm">Fill out the online application form accurately</p>
              </div>
              <div className="text-center fade-in-up-delay-2">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold text-blue-700 mb-2">Submit Documents</h3>
                <p className="text-gray-600 text-sm">Provide all required academic and personal documents</p>
              </div>
              <div className="text-center fade-in-up-delay-3">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="font-semibold text-blue-700 mb-2">Interview & Selection</h3>
                <p className="text-gray-600 text-sm">Attend interview and await selection results</p>
              </div>
              <div className="text-center fade-in-up-delay-4">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">5</span>
                </div>
                <h3 className="font-semibold text-blue-700 mb-2">Enrollment</h3>
                <p className="text-gray-600 text-sm">Complete enrollment and begin your studies</p>
              </div>
            </div>
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/admissions"
                  className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
                >
                  Apply Now
                </Link>
                <Link
                  to="/admissions"
                  className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
                >
                  View Entry Requirements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 6. Campus Life & Facilities */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-700 mb-4 fade-in-up">Campus Life & Facilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto fade-in-up-delay-1">
              A supportive learning environment designed to prepare you for real healthcare challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center fade-in-up">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <i className="fas fa-microscope text-4xl text-blue-700 mb-4"></i>
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Skills Laboratory</h3>
                <p className="text-gray-600 text-sm">Modern simulation lab for practicing clinical procedures</p>
              </div>
            </div>
            <div className="text-center fade-in-up-delay-1">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <i className="fas fa-chalkboard text-4xl text-blue-700 mb-4"></i>
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Lecture Rooms</h3>
                <p className="text-gray-600 text-sm">Well-equipped classrooms with modern teaching aids</p>
              </div>
            </div>
            <div className="text-center fade-in-up-delay-2">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <i className="fas fa-users text-4xl text-blue-700 mb-4"></i>
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Student Activities</h3>
                <p className="text-gray-600 text-sm">Clubs, societies, and extracurricular programs</p>
              </div>
            </div>
            <div className="text-center fade-in-up-delay-3">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <i className="fas fa-graduation-cap text-4xl text-blue-700 mb-4"></i>
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Graduation Events</h3>
                <p className="text-gray-600 text-sm">Celebrating achievements and professional milestones</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Student Testimonials */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-700 mb-4 fade-in-up">Student Voices</h2>
            <p className="text-gray-600 max-w-2xl mx-auto fade-in-up-delay-1">
              Hear from our students and graduates about their experience at Mansa College of Nursing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 fade-in-up">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-user text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700">Sarah Mwanza</h4>
                  <p className="text-gray-600 text-sm">Diploma in Nursing, Class of 2023</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic">
                "The clinical training at Mansa General Hospital gave me the confidence and skills I needed to excel in my nursing career. The tutors were supportive and knowledgeable."
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 fade-in-up-delay-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-user text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700">James Banda</h4>
                  <p className="text-gray-600 text-sm">Diploma in Midwifery, Class of 2022</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic">
                "The midwifery program prepared me well for my role in maternal health. I now serve my community with pride and competence."
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 fade-in-up-delay-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-user text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700">Grace Musonda</h4>
                  <p className="text-gray-600 text-sm">Current Student, Year 2</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic">
                "The learning environment is supportive and challenging. I feel well-prepared for my future career in healthcare."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. News & Announcements */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-700 mb-4 fade-in-up">News & Announcements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto fade-in-up-delay-1">
              Stay updated with the latest news, admissions, and events at our institution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden fade-in-up">
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <i className="fas fa-calendar-alt text-blue-700 mr-2"></i>
                  <span className="text-gray-500 text-sm">January 15, 2026</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-700 mb-3">2026 Admissions Now Open</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Applications for the 2026 academic year are now being accepted. Apply early to secure your place.
                </p>
                <Link
                  to="/news"
                  className="text-blue-700 hover:text-blue-800 font-semibold text-sm inline-flex items-center"
                >
                  Read More
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden fade-in-up-delay-1">
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <i className="fas fa-calendar-alt text-blue-700 mr-2"></i>
                  <span className="text-gray-500 text-sm">December 10, 2025</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-700 mb-3">Graduation Ceremony 2025</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Congratulations to our 2025 graduates who are now ready to serve in Zambia's healthcare system.
                </p>
                <Link
                  to="/news"
                  className="text-blue-700 hover:text-blue-800 font-semibold text-sm inline-flex items-center"
                >
                  Read More
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden fade-in-up-delay-2">
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <i className="fas fa-calendar-alt text-blue-700 mr-2"></i>
                  <span className="text-gray-500 text-sm">November 20, 2025</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-700 mb-3">Community Health Outreach</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our students participated in a community health screening program in rural Luapula Province.
                </p>
                <Link
                  to="/news"
                  className="text-blue-700 hover:text-blue-800 font-semibold text-sm inline-flex items-center"
                >
                  Read More
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/news"
              className="text-blue-700 hover:text-blue-800 font-semibold inline-flex items-center"
            >
              View All News
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Call to Action Banner */}
      <section className="bg-blue-700 text-white section-padding">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 fade-in-up">Start Your Nursing Journey Today</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed fade-in-up-delay-1">
              Join Zambia's premier nursing institution and become part of a profession that makes a real difference in people's lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up-delay-2">
              <Link
                to="/admissions"
                className="bg-white text-blue-700 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
              >
                Apply Now
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
              >
                Contact Admissions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;