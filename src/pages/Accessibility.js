import React from 'react';
import PageHeader from '../components/PageHeader';

const Accessibility = () => {
  return (
    <div>
      {/* Header Section */}
      <PageHeader
        title="Accessibility Statement"
        subtitle="Commitment to Digital Inclusion"
        description="Our dedication to ensuring equal access to information and services for all users, regardless of their abilities or the technologies they use to access our digital resources."
        backgroundVariant="neutral"
        showBreadcrumb={true}
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Accessibility Statement' }
        ]}
      />

      {/* Commitment Statement */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-6 text-center">Our Commitment to Accessibility</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Mansa School of Nursing is committed to ensuring digital accessibility for people with disabilities. 
                We are continually improving the user experience for everyone and applying the relevant accessibility 
                standards to ensure we provide equal access to all users.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                We believe that everyone should have access to information and services, regardless of their abilities 
                or the technologies they use. This commitment extends to our website, digital resources, and all 
                online services provided by the institution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Standards */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">Accessibility Standards</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">WCAG 2.1 Compliance</h3>
                <p className="text-gray-700 mb-4">
                  Our website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 
                  at the AA level. These guidelines explain how to make web content accessible to 
                  people with a wide array of disabilities.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Perceivable information and user interface</li>
                  <li>• Operable user interface and navigation</li>
                  <li>• Understandable information and UI operation</li>
                  <li>• Robust content interpretation</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Technical Standards</h3>
                <p className="text-gray-700 mb-4">
                  We follow established technical standards to ensure compatibility with assistive 
                  technologies and accessibility tools.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Semantic HTML markup</li>
                  <li>• ARIA labels and descriptions</li>
                  <li>• Keyboard navigation support</li>
                  <li>• Screen reader compatibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Technologies */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">Supported Assistive Technologies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Screen Readers</h3>
                <p className="text-gray-700 text-sm">
                  Compatible with JAWS, NVDA, VoiceOver, and other screen reading software
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Keyboard Navigation</h3>
                <p className="text-gray-700 text-sm">
                  Full keyboard accessibility for users who cannot use a mouse or pointing device
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Magnification Tools</h3>
                <p className="text-gray-700 text-sm">
                  Support for browser zoom and screen magnification software up to 200%
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="bg-primary-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">Accessibility Features</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Visual Accessibility</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                  <li>• High contrast color schemes</li>
                  <li>• Scalable text up to 200% without loss of functionality</li>
                  <li>• Clear visual focus indicators</li>
                  <li>• Alternative text for images</li>
                  <li>• Consistent navigation and layout</li>
                  <li>• Readable fonts and appropriate font sizes</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Navigation Accessibility</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                  <li>• Logical tab order throughout the site</li>
                  <li>• Skip navigation links</li>
                  <li>• Descriptive page titles and headings</li>
                  <li>• Breadcrumb navigation where applicable</li>
                  <li>• Clear link descriptions</li>
                  <li>• Consistent navigation structure</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Content Accessibility</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                  <li>• Plain language and clear writing</li>
                  <li>• Structured content with proper headings</li>
                  <li>• Form labels and error messages</li>
                  <li>• Captions for video content</li>
                  <li>• Transcripts for audio content</li>
                  <li>• Accessible document formats</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback and Contact */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">Accessibility Feedback</h2>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-700 mb-6 leading-relaxed">
                We welcome your feedback on the accessibility of our website. If you encounter 
                accessibility barriers or have suggestions for improvement, please let us know.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-4">Contact Information</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> accessibility@mansanursing.edu</p>
                    <p><strong>Phone:</strong> +260 1652 234567</p>
                    <p><strong>Address:</strong> Mansa School of Nursing<br />
                    123 Healthcare Avenue<br />
                    Mansa, Punjab 151505</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-4">Response Timeline</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>We aim to respond to accessibility feedback within:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Email inquiries: 2 business days</li>
                      <li>Phone calls: Same business day</li>
                      <li>Complex issues: 5 business days</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Efforts */}
      <section className="bg-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ongoing Accessibility Efforts</h2>
            <p className="text-lg text-primary-100 mb-8">
              Accessibility is an ongoing effort. We continuously work to improve the accessibility 
              of our website and digital services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="text-lg font-semibold mb-3">Regular Audits</h3>
                <p className="text-primary-100 text-sm">
                  We conduct regular accessibility audits and testing with assistive technologies 
                  to identify and address barriers.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Staff Training</h3>
                <p className="text-primary-100 text-sm">
                  Our web development and content teams receive ongoing training on accessibility 
                  best practices and standards.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">User Testing</h3>
                <p className="text-primary-100 text-sm">
                  We engage users with disabilities in testing our website to ensure real-world 
                  accessibility and usability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="bg-gray-100 py-8">
        <div className="container-max">
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              This accessibility statement was last updated on December 28, 2024.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accessibility;