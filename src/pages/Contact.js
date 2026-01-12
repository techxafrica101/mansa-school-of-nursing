import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div>
      {/* Header Section */}
      <PageHeader
        title="Contact Us"
        subtitle="Connect with Our Institution"
        description="Get in touch with our admissions team, faculty, and support staff. We're here to assist you with information about our nursing and midwifery programs."
        backgroundVariant="primary"
        showBreadcrumb={true}
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' }
        ]}
      />

      {/* Contact Information */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-800 mb-8 fade-in-up">Get in Touch</h2>
            <p className="text-xl text-neutral-800 max-w-3xl mx-auto fade-in-up-delay-1 leading-relaxed">
              We're here to help you with any questions or concerns you may have about our nursing and midwifery programs, 
              admission requirements, or institutional services. Our team is committed to providing you with the information 
              you need to make informed decisions about your healthcare education.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="fade-in-up-delay-1 content-readable">
              <h3 className="text-3xl font-bold text-primary-800 mb-10">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <svg className="w-7 h-7 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary-800 mb-3">Address</h4>
                    <p className="text-lg text-neutral-800 leading-relaxed">
                      Mansa College of Nursing & Midwifery<br />
                      Cathedral Road<br />
                      Mansa, Luapula Province<br />
                      P.O. Box 710392, Mansa<br />
                      Zambia
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-accent-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <svg className="w-7 h-7 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary-800 mb-3">Phone</h4>
                    <p className="text-lg text-neutral-800 leading-relaxed">
                      Principal's Office: <span className="font-semibold">+260 977 533121</span><br />
                      General Inquiries: <span className="font-semibold">+260 97 2658663</span><br />
                      Administrative Office: Available during business hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <svg className="w-7 h-7 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary-800 mb-3">Email</h4>
                    <p className="text-lg text-neutral-800 leading-relaxed">
                      Principal Tutor: <span className="font-semibold">caciusmulenga@gmail.com</span><br />
                      Alternative Contact: <span className="font-semibold">camule2001@yahoo.co.uk</span><br />
                      Official Correspondence: Use postal address
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary-900 mb-1">Office Hours</h4>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-in-up-delay-2">
              <h3 className="text-2xl font-bold text-primary-900 mb-8">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="programs">Program Information</option>
                      <option value="student-services">Student Services</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="general">General Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-vertical"
                    placeholder="Enter your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4 fade-in-up">Department Contacts</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto fade-in-up-delay-1">
              For specific inquiries, you can contact our departments directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md card-surface fade-in-up-delay-1">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Admissions Office</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Phone:</strong> +260 1652 234568</p>
                <p><strong>Email:</strong> admissions@mansanursing.edu</p>
                <p><strong>Hours:</strong> Mon-Fri 9:00 AM - 5:00 PM</p>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                For admission requirements, application process, and enrollment information.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md card-surface fade-in-up-delay-2">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Academic Affairs</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Phone:</strong> +260 1652 234570</p>
                <p><strong>Email:</strong> academics@mansanursing.edu</p>
                <p><strong>Hours:</strong> Mon-Fri 9:00 AM - 5:00 PM</p>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                For curriculum information, academic policies, and course-related queries.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md card-surface fade-in-up-delay-3">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Student Services</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Phone:</strong> +260 1652 234569</p>
                <p><strong>Email:</strong> students@mansanursing.edu</p>
                <p><strong>Hours:</strong> Mon-Fri 9:00 AM - 5:00 PM</p>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                For student support, counseling, and campus life information.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md card-surface fade-in-up-delay-1">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Finance Office</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Phone:</strong> +260 1652 234571</p>
                <p><strong>Email:</strong> finance@mansanursing.edu</p>
                <p><strong>Hours:</strong> Mon-Fri 9:00 AM - 4:00 PM</p>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                For fee payments, financial aid, and billing inquiries.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md card-surface fade-in-up-delay-2">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">IT Support</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Phone:</strong> +260 1652 234572</p>
                <p><strong>Email:</strong> portal@mansanursing.edu</p>
                <p><strong>Hours:</strong> Mon-Fri 8:00 AM - 6:00 PM</p>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                For student portal issues, technical support, and IT services.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md card-surface fade-in-up-delay-3">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Clinical Coordination</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Phone:</strong> +260 1652 234573</p>
                <p><strong>Email:</strong> clinical@mansanursing.edu</p>
                <p><strong>Hours:</strong> Mon-Fri 9:00 AM - 5:00 PM</p>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                For clinical placement, rotation schedules, and clinical training queries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Placeholder */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Find Us</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Visit our campus located in the heart of Mansa, Punjab.
            </p>
          </div>

          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-gray-600">Interactive map will be available here</p>
              <p className="text-gray-500 text-sm mt-2">
                123 Healthcare Avenue, Mansa, Punjab 151505
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="bg-red-50 border-l-4 border-red-400 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-red-800">Emergency Contact</h3>
                <p className="text-red-700 mt-2">
                  For urgent matters outside office hours, please contact our emergency helpline at 
                  <strong> +260 1652 234500</strong> or email <strong>emergency@mansanursing.edu</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;