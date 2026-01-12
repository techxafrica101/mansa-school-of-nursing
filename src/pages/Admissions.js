import React from 'react';
import PageHeader from '../components/PageHeader';

const Admissions = () => {
  const admissionRequirements = [
    {
      program: "Diploma in Nursing",
      requirements: [
        "Grade 12 (School Certificate) with passes in English, Biology, and other relevant subjects",
        "Minimum requirements as set by NMCZ",
        "Age: 18-35 years at the time of admission",
        "Medical fitness certificate",
        "Character certificate from previous institution",
        "Birth certificate or national registration card"
      ]
    },
    {
      program: "Diploma in Midwifery",
      requirements: [
        "Grade 12 (School Certificate) with passes in English, Biology, and other relevant subjects",
        "Minimum requirements as set by NMCZ",
        "Age: 18-35 years at the time of admission",
        "Medical fitness certificate",
        "Character certificate from previous institution",
        "Birth certificate or national registration card"
      ]
    },
    {
      program: "Advanced Diploma in Midwifery",
      requirements: [
        "Diploma in Nursing or Midwifery from NMCZ-recognized institution",
        "Valid nursing/midwifery registration certificate",
        "Minimum 2 years of clinical experience",
        "Medical fitness certificate",
        "No objection certificate from current employer (if applicable)"
      ]
    },
    {
      program: "Advanced Diploma – HIV/AIDS Nurse Practitioner (HNP)",
      requirements: [
        "Diploma in Nursing from NMCZ-recognized institution",
        "Valid nursing registration certificate",
        "Minimum 2 years of clinical nursing experience",
        "Medical fitness certificate",
        "Recommendation letter from current employer"
      ]
    },
    {
      program: "Advanced Diploma in Operating Theatre Nursing",
      requirements: [
        "Diploma in Nursing from NMCZ-recognized institution",
        "Valid nursing registration certificate",
        "Minimum 2 years of clinical nursing experience",
        "Medical fitness certificate",
        "Experience in surgical/theatre nursing preferred"
      ]
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Obtain Application Form",
      description: "Collect the application form from the admissions office or download from our official website during the application period."
    },
    {
      step: 2,
      title: "Complete Application",
      description: "Fill out the application form completely and accurately. Ensure all required information is provided."
    },
    {
      step: 3,
      title: "Gather Required Documents",
      description: "Collect all necessary documents including academic certificates, medical fitness certificate, and character certificate."
    },
    {
      step: 4,
      title: "Submit Application",
      description: "Submit the completed application form along with required documents and application fee before the deadline."
    },
    {
      step: 5,
      title: "Entrance Examination",
      description: "Appear for the entrance examination (if applicable) on the scheduled date and time."
    },
    {
      step: 6,
      title: "Merit List and Counseling",
      description: "Check the merit list and attend counseling session if selected. Complete the admission formalities."
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <PageHeader
        title="Admissions"
        subtitle="Begin Your Journey in Nursing Education"
        description="Learn about our admission requirements, application process, and important deadlines. We are committed to selecting students who demonstrate academic potential and dedication to healthcare service."
        backgroundVariant="primary"
        showBreadcrumb={true}
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Admissions' }
        ]}
      />

      {/* Admission Requirements Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4 fade-in-up">Admission Requirements</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto fade-in-up-delay-1">
              Each program has specific eligibility criteria that must be met for admission consideration.
            </p>
          </div>

          <div className="space-y-8">
            {admissionRequirements.map((program, index) => (
              <div key={index} className={`bg-gray-50 rounded-lg p-8 card-surface fade-in-up stagger-${(index % 4) + 1}`}>
                <h3 className="text-2xl font-bold text-primary-900 mb-6">{program.program}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-primary-900 mb-4">Eligibility Requirements:</h4>
                    <ul className="space-y-3">
                      {program.requirements.map((requirement, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-accent-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-primary-900 mb-4">Required Documents:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Academic transcripts and certificates</li>
                      <li>• Medical fitness certificate</li>
                      <li>• Character certificate</li>
                      <li>• Age proof document</li>
                      <li>• Passport size photographs</li>
                      <li>• Category certificate (if applicable)</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4 fade-in-up">Application Process</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto fade-in-up-delay-1">
              Follow these steps to complete your application for admission to our nursing programs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {applicationSteps.map((step, index) => (
                <div key={index} className={`flex items-start fade-in-up stagger-${(index % 6) + 1}`}>
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                    {step.step}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates and Deadlines */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4 fade-in-up">Important Dates and Deadlines</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto fade-in-up-delay-1">
              Stay informed about key dates in the admission process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-50 rounded-lg p-8 fade-in-up-delay-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-4">Academic Year 2024-25</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Application Release:</span>
                      <span className="font-medium text-primary-900">March 1, 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Application Deadline:</span>
                      <span className="font-medium text-primary-900">May 31, 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Entrance Exam:</span>
                      <span className="font-medium text-primary-900">June 15, 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Merit List:</span>
                      <span className="font-medium text-primary-900">June 30, 2024</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-4">Counseling and Admission</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Counseling Dates:</span>
                      <span className="font-medium text-primary-900">July 5-10, 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Admission Confirmation:</span>
                      <span className="font-medium text-primary-900">July 15, 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Classes Begin:</span>
                      <span className="font-medium text-primary-900">August 1, 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center fade-in-up">Selection Criteria</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md card-surface fade-in-up-delay-1">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Merit-Based Selection</h3>
                <p className="text-gray-700 mb-4">
                  Selection is primarily based on academic merit in qualifying examinations. 
                  Higher scores in relevant subjects will be given preference.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Academic performance in qualifying examination</li>
                  <li>• Performance in entrance test (if applicable)</li>
                  <li>• Relevant work experience (for Post Basic programs)</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md card-surface fade-in-up-delay-2">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Additional Considerations</h3>
                <p className="text-gray-700 mb-4">
                  Other factors may be considered during the selection process to ensure 
                  a diverse and qualified student body.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Personal interview performance</li>
                  <li>• Extracurricular activities</li>
                  <li>• Community service experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Disclaimer */}
      <section className="bg-red-50 border-l-4 border-red-400 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-red-800">Important Disclaimer</h3>
                <div className="text-red-700 mt-2 space-y-2">
                  <p>
                    Meeting the minimum eligibility requirements does not guarantee admission to any program. 
                    Admission is subject to availability of seats and merit-based selection.
                  </p>
                  <p>
                    All information provided is subject to change based on regulatory guidelines and 
                    institutional policies. Candidates are advised to verify current requirements 
                    before applying.
                  </p>
                  <p>
                    The institution reserves the right to modify admission criteria, deadlines, 
                    and procedures as deemed necessary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Admissions */}
      <section className="bg-primary-700 text-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4 fade-in-up">Need Help with Your Application?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto fade-in-up-delay-1">
            Our admissions team is here to assist you throughout the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up-delay-2">
            <a href="/contact" className="btn-secondary">
              Contact Admissions Office
            </a>
            <a href="/programs" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
              View Programs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;