import React from 'react';
import PageHeader from '../components/PageHeader';

const AboutUs = () => {
  return (
    <div>
      {/* Header Section */}
      <PageHeader
        title="About Us"
        subtitle="Government-Run Nursing Training Institution"
        description="Learn about our institution's commitment to excellence in nursing and midwifery education, approved by the Nursing and Midwifery Council of Zambia (NMCZ)."
        showBreadcrumb={true}
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'About Us' }
        ]}
      />

      {/* Who We Are Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-primary-800 mb-12 text-center fade-in-up">Who We Are</h2>
            <div className="content-readable">
              <p className="text-xl text-neutral-800 mb-8 leading-relaxed fade-in-up-delay-1 font-medium">
                Mansa College of Nursing and Midwifery stands as a distinguished government-run nursing training 
                institution in Zambia, officially approved by the Nursing and Midwifery Council of Zambia (NMCZ). 
                Located on Cathedral Road in Mansa, Luapula Province, our institution serves as a cornerstone 
                of healthcare education in northern Zambia.
              </p>
              <p className="text-lg text-neutral-800 mb-8 leading-relaxed fade-in-up-delay-2">
                We are an institution that believes in the transformative power of quality nursing and midwifery education. 
                Our comprehensive approach combines rigorous academic instruction with extensive clinical training at 
                Mansa General Hospital, ensuring that our graduates are well-prepared to meet the healthcare challenges 
                facing Zambia and the broader region.
              </p>
              <p className="text-lg text-neutral-800 mb-8 leading-relaxed fade-in-up-delay-3">
                As a government institution, we are committed to providing accessible, high-quality nursing education 
                that serves the public interest. We prepare nurses and midwives who not only possess technical competence 
                but also demonstrate the professional values essential for compassionate patient care in Zambia's 
                healthcare system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Background and Purpose Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-primary-800 mb-12 text-center fade-in-up">Our Background and Purpose</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="fade-in-up-delay-1 content-readable">
                <h3 className="text-2xl font-semibold text-primary-800 mb-6">Our Foundation</h3>
                <p className="text-lg text-neutral-800 mb-6 leading-relaxed">
                  Established in response to the growing need for qualified nursing professionals in Zambia, 
                  Mansa College of Nursing and Midwifery was founded to address critical healthcare workforce 
                  shortages in the Luapula Province and surrounding regions. Our institution represents the 
                  government's commitment to strengthening healthcare delivery through quality education.
                </p>
                <p className="text-lg text-neutral-800 leading-relaxed">
                  From our establishment, we have maintained our focus on providing comprehensive nursing and 
                  midwifery education that meets national standards while addressing local healthcare needs. 
                  Our programs are designed to produce graduates who can serve effectively in both urban and 
                  rural healthcare settings.
                </p>
              </div>
              <div className="fade-in-up-delay-2 content-readable">
                <h3 className="text-2xl font-semibold text-primary-800 mb-6">Our Purpose</h3>
                <p className="text-lg text-neutral-800 mb-6 leading-relaxed">
                  Our primary purpose is to address Zambia's healthcare needs by preparing skilled nursing 
                  and midwifery professionals who can provide safe, effective, and compassionate care. We serve 
                  as a vital link between academic learning and professional healthcare practice in the country.
                </p>
                <p className="text-lg text-neutral-800 leading-relaxed">
                  We are dedicated to advancing the nursing and midwifery professions through education that 
                  emphasizes evidence-based practice, critical thinking, and lifelong learning. Our graduates 
                  contribute significantly to improving healthcare outcomes in hospitals, clinics, and community 
                  health settings across Zambia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Mission */}
              <div className="text-center fade-in-up">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-6">Our Mission</h2>
                <p className="text-lg text-neutral-800 leading-relaxed">
                  To provide excellence in nursing and midwifery education through innovative teaching methods, 
                  comprehensive clinical training, and character development, preparing competent and compassionate 
                  healthcare professionals who will contribute to improving healthcare outcomes in Zambia and beyond.
                </p>
              </div>

              {/* Vision */}
              <div className="text-center fade-in-up-delay-1">
                <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-10 h-10 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-6">Our Vision</h2>
                <p className="text-lg text-neutral-800 leading-relaxed">
                  To be recognized as a premier institution for nursing and midwifery education in Zambia, known for 
                  producing graduates who exemplify professional excellence, ethical practice, and innovative approaches 
                  to healthcare delivery, while contributing to the advancement of the nursing and midwifery professions.
                </p>
              </div>

              {/* Values */}
              <div className="text-center fade-in-up-delay-2">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-10 h-10 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-6">Our Core Values</h2>
                <div className="text-left max-w-md mx-auto">
                  <ul className="space-y-3 text-lg text-neutral-800">
                    <li><strong className="text-primary-800">Excellence:</strong> Pursuing the highest standards in education and practice</li>
                    <li><strong className="text-primary-800">Integrity:</strong> Maintaining honesty and ethical behavior in all endeavors</li>
                    <li><strong className="text-primary-800">Compassion:</strong> Fostering empathy and caring in patient interactions</li>
                    <li><strong className="text-primary-800">Respect:</strong> Valuing diversity and treating all individuals with dignity</li>
                    <li><strong className="text-primary-800">Innovation:</strong> Embracing new approaches to improve healthcare delivery</li>
                    <li><strong className="text-primary-800">Service:</strong> Committing to serve our communities and profession</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="bg-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 fade-in-up">Our Commitment to Nursing Education</h2>
            <p className="text-lg text-primary-100 mb-8 leading-relaxed fade-in-up-delay-1">
              At Mansa School of Nursing, we are committed to maintaining the highest standards of 
              nursing education. Our dedication extends to every aspect of our institution, from 
              curriculum development to student support services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="fade-in-up-delay-2">
                <h3 className="text-xl font-semibold mb-3">Academic Excellence</h3>
                <p className="text-primary-100">
                  We continuously update our curriculum to reflect current healthcare practices and 
                  emerging trends in nursing, ensuring our graduates are prepared for contemporary 
                  healthcare challenges.
                </p>
              </div>
              <div className="fade-in-up-delay-3">
                <h3 className="text-xl font-semibold mb-3">Student Success</h3>
                <p className="text-primary-100">
                  Our comprehensive support system includes academic advising, tutoring services, 
                  and career guidance to help every student achieve their educational and professional goals.
                </p>
              </div>
              <div className="fade-in-up-delay-2">
                <h3 className="text-xl font-semibold mb-3">Community Partnership</h3>
                <p className="text-primary-100">
                  We maintain strong partnerships with healthcare facilities to provide our students 
                  with diverse clinical experiences and to contribute to community health improvement.
                </p>
              </div>
              <div className="fade-in-up-delay-3">
                <h3 className="text-xl font-semibold mb-3">Professional Development</h3>
                <p className="text-primary-100">
                  We support the ongoing professional development of our faculty and staff to ensure 
                  they remain current with best practices in nursing education and healthcare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;