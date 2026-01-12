import React from 'react';
import PageHeader from '../components/PageHeader';

const StudentPortal = () => {
  const portalFeatures = [
    {
      title: "Academic Records",
      description: "Access your academic transcripts, grades, and course history",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Course Registration",
      description: "Register for courses, view schedules, and manage your academic plan",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0l-2 2m8-2l2 2m-2-2v6a2 2 0 01-2 2H10a2 2 0 01-2-2v-6" />
        </svg>
      )
    },
    {
      title: "Fee Management",
      description: "View fee structure, payment history, and make online payments",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Clinical Schedules",
      description: "Access clinical rotation schedules, assignments, and evaluations",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0l-2 2m8-2l2 2m-2-2v6a2 2 0 01-2 2H10a2 2 0 01-2-2v-6" />
        </svg>
      )
    },
    {
      title: "Library Resources",
      description: "Access digital library, e-books, journals, and research databases",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Announcements",
      description: "Stay updated with important notices, events, and institutional news",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <PageHeader
        title="Student Portal"
        subtitle="Your Gateway to Academic Resources"
        description="Access comprehensive student services, academic information, and institutional resources through our secure online platform designed to support your educational journey."
        backgroundVariant="neutral"
        showBreadcrumb={true}
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Student Portal' }
        ]}
      />

      {/* Portal Overview */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-6 fade-in-up">What is the Student Portal?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 fade-in-up-delay-1">
              The Student Portal is a comprehensive online platform designed to provide our students 
              with convenient access to essential academic services, resources, and information. 
              This secure, user-friendly system serves as your central hub for managing your 
              educational journey at Mansa School of Nursing.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed fade-in-up-delay-2">
              Through the portal, you can access real-time information about your academic progress, 
              manage course registrations, communicate with faculty and staff, and stay connected 
              with the latest institutional updates and announcements.
            </p>
          </div>
        </div>
      </section>

      {/* Portal Features */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4 fade-in-up">Portal Features</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto fade-in-up-delay-1">
              Explore the comprehensive features available through our Student Portal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portalFeatures.map((feature, index) => (
              <div key={index} className={`bg-white p-6 rounded-lg shadow-md card-surface fade-in-up stagger-${(index % 6) + 1}`}>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-700">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-700 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Access */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center fade-in-up">How to Access the Portal</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-primary-50 p-6 rounded-lg fade-in-up-delay-1">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">For Current Students</h3>
                <p className="text-gray-700 mb-4">
                  Current students can access the portal using their assigned student credentials. 
                  Your login information was provided during the admission process.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Use your student ID as username</li>
                  <li>• Initial password provided during orientation</li>
                  <li>• Change password on first login</li>
                  <li>• Contact IT support for login issues</li>
                </ul>
              </div>

              <div className="bg-accent-50 p-6 rounded-lg fade-in-up-delay-2">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">For New Students</h3>
                <p className="text-gray-700 mb-4">
                  New students will receive portal access credentials after completing 
                  the admission process and enrollment formalities.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Credentials provided after enrollment</li>
                  <li>• Attend orientation session for guidance</li>
                  <li>• Complete profile setup on first login</li>
                  <li>• Verify contact information</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg fade-in-up-delay-3">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-yellow-800">Important Security Notice</h3>
                  <p className="text-yellow-700 mt-2">
                    Keep your login credentials secure and confidential. Do not share your username 
                    and password with others. Log out completely when using shared computers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Requirements */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">Technical Requirements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">System Requirements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Modern web browser (Chrome, Firefox, Safari, Edge)</li>
                  <li>• Stable internet connection</li>
                  <li>• JavaScript enabled</li>
                  <li>• Cookies enabled</li>
                  <li>• Pop-up blocker disabled for portal domain</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Mobile Access</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Responsive design for mobile devices</li>
                  <li>• Compatible with iOS and Android</li>
                  <li>• Mobile browser or dedicated app</li>
                  <li>• Touch-friendly interface</li>
                  <li>• Offline access to downloaded content</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support and Help */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-900 mb-8">Need Help?</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our support team is available to assist you with any portal-related questions or issues.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Phone Support</h3>
                <p className="text-gray-700">+260 1652 234567</p>
                <p className="text-gray-600 text-sm">Mon-Fri: 9:00 AM - 5:00 PM</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Email Support</h3>
                <p className="text-gray-700">portal@mansanursing.edu</p>
                <p className="text-gray-600 text-sm">Response within 24 hours</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">In-Person Support</h3>
                <p className="text-gray-700">IT Help Desk</p>
                <p className="text-gray-600 text-sm">Ground Floor, Admin Building</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section className="bg-primary-700 text-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4 fade-in-up">Ready to Access Your Portal?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto fade-in-up-delay-1">
            Log in to access your academic information, course materials, and student services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up-delay-2">
            <button className="btn-secondary text-lg px-8 py-4">
              Student Portal Login
            </button>
            <a href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100 text-lg px-8 py-4">
              Get Help
            </a>
          </div>
          <p className="text-primary-200 mt-6 text-sm fade-in-up-delay-3">
            Note: This is a secure portal. Please ensure you are on the official website before entering your credentials.
          </p>
        </div>
      </section>
    </div>
  );
};

export default StudentPortal;