import React from 'react';
import PageHeader from '../components/PageHeader';

const Programs = () => {
  const programs = [
    {
      title: "Diploma in Nursing",
      duration: "3 years",
      eligibility: "Grade 12 (School Certificate) with passes in English, Biology, and other relevant subjects",
      description: "A comprehensive three-year diploma program that provides fundamental knowledge and skills in nursing. Students learn essential patient care techniques, medical procedures, and nursing practices through theoretical instruction and extensive clinical training at Mansa General Hospital.",
      highlights: [
        "Comprehensive nursing fundamentals",
        "Clinical rotations at Mansa General Hospital",
        "Community health nursing",
        "Medical-surgical nursing",
        "Pediatric and maternal nursing",
        "Mental health nursing"
      ]
    },
    {
      title: "Diploma in Midwifery",
      duration: "3 years",
      eligibility: "Grade 12 (School Certificate) with passes in English, Biology, and other relevant subjects",
      description: "A specialized three-year program focusing on midwifery care, maternal health, and childbirth assistance. Students gain expertise in prenatal care, delivery assistance, postnatal care, and family planning services.",
      highlights: [
        "Comprehensive midwifery theory and practice",
        "Antenatal and postnatal care",
        "Normal and complicated deliveries",
        "Family planning and reproductive health",
        "Newborn care and assessment",
        "Community midwifery services"
      ]
    },
    {
      title: "Advanced Diploma in Midwifery",
      duration: "1 year",
      eligibility: "Diploma in Nursing or Midwifery with professional registration",
      description: "An advanced one-year program for qualified nurses seeking specialization in midwifery. This program builds upon existing nursing knowledge while introducing advanced concepts in maternal and child health care.",
      highlights: [
        "Advanced midwifery practice",
        "High-risk pregnancy management",
        "Advanced delivery techniques",
        "Midwifery leadership and management",
        "Research in midwifery practice",
        "Quality improvement in maternal care"
      ]
    },
    {
      title: "Advanced Diploma – HIV/AIDS Nurse Practitioner (HNP)",
      duration: "1 year",
      eligibility: "Diploma in Nursing with professional registration and clinical experience",
      description: "A specialized one-year program focusing on HIV/AIDS care, treatment, and prevention. Students develop expertise in managing HIV-positive patients, antiretroviral therapy, and community-based HIV prevention programs.",
      highlights: [
        "HIV/AIDS pathophysiology and treatment",
        "Antiretroviral therapy management",
        "HIV testing and counseling",
        "Prevention of mother-to-child transmission",
        "Community-based HIV care",
        "Palliative and supportive care"
      ]
    },
    {
      title: "Advanced Diploma in Operating Theatre Nursing",
      duration: "1 year",
      eligibility: "Diploma in Nursing with professional registration and clinical experience",
      description: "A specialized one-year program for nurses seeking expertise in perioperative care. Students learn advanced surgical nursing techniques, sterile procedures, and operating room management.",
      highlights: [
        "Perioperative nursing care",
        "Surgical instrumentation and techniques",
        "Sterile technique and infection control",
        "Anesthesia assistance and monitoring",
        "Emergency surgical procedures",
        "Operating room management and leadership"
      ]
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <PageHeader
        title="Academic Programs"
        subtitle="Comprehensive Nursing Education Programs"
        description="Explore our range of nursing programs designed to prepare competent healthcare professionals through rigorous academic training, extensive clinical experience, and adherence to professional standards."
        showBreadcrumb={true}
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Academic Programs' }
        ]}
      />

      {/* Programs Overview */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-800 mb-8 fade-in-up">Academic Programs</h2>
            <p className="text-xl text-neutral-800 leading-relaxed fade-in-up-delay-1 max-w-4xl mx-auto">
              Our nursing and midwifery programs are designed to meet the diverse educational needs of students 
              while maintaining the highest standards of academic excellence. Each program follows the curriculum 
              guidelines established by the Nursing and Midwifery Council of Zambia (NMCZ) and incorporates 
              extensive clinical training opportunities.
            </p>
          </div>

          {/* Programs List */}
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div key={index} className={`bg-white rounded-xl p-10 shadow-lg border border-neutral-200 hover:shadow-xl transition-all duration-300 fade-in-up stagger-${(index % 4) + 1}`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-2 content-readable">
                    <h3 className="text-3xl font-bold text-primary-800 mb-6">{program.title}</h3>
                    <p className="text-lg text-neutral-800 mb-8 leading-relaxed">{program.description}</p>
                    
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-primary-800 mb-4">Program Highlights:</h4>
                      <ul className="space-y-3">
                        {program.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-6 h-6 text-accent-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-lg text-neutral-800 leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="bg-primary-50 p-8 rounded-xl border border-primary-200">
                      <h4 className="text-xl font-semibold text-primary-800 mb-6">Program Details</h4>
                      <div className="space-y-4">
                        <div>
                          <span className="text-sm font-semibold text-primary-700 uppercase tracking-wide">Duration:</span>
                          <p className="text-lg font-medium text-neutral-900 mt-1">{program.duration}</p>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-primary-700 uppercase tracking-wide">Eligibility:</span>
                          <p className="text-base text-neutral-800 mt-1 leading-relaxed">{program.eligibility}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Compliance Section */}
      <section className="bg-primary-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-900 mb-6 fade-in-up">Regulatory Compliance</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed fade-in-up-delay-1">
              All our programs are designed in accordance with the guidelines established by 
              relevant regulatory bodies and professional nursing councils. We ensure that 
              our curriculum meets or exceeds the standards required for nursing education.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md card-surface fade-in-up-delay-1">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Curriculum Standards</h3>
                <p className="text-gray-700">
                  Our curriculum is regularly updated to align with national nursing education 
                  standards and incorporates current best practices in healthcare and nursing education.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md card-surface fade-in-up-delay-2">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Clinical Training</h3>
                <p className="text-gray-700">
                  Clinical rotations are conducted in approved healthcare facilities under the 
                  supervision of qualified nursing professionals and clinical instructors.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md card-surface fade-in-up-delay-3">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Faculty Qualifications</h3>
                <p className="text-gray-700">
                  Our faculty members meet the required qualifications and maintain current 
                  professional registrations as mandated by nursing regulatory bodies.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md card-surface fade-in-up-delay-3">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Assessment Methods</h3>
                <p className="text-gray-700">
                  Student assessment follows standardized methods including theoretical examinations, 
                  practical evaluations, and clinical competency assessments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="info-state border-l-4 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-primary-800">Important Notice</h3>
                <p className="text-primary-700 mt-2">
                  All programs are subject to regulatory approval and may be modified based on 
                  guidelines from relevant nursing councils and educational authorities. Students 
                  are advised to verify current program requirements and availability before applying.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-700 text-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4 fade-in-up">Ready to Start Your Nursing Education?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto fade-in-up-delay-1">
            Explore our admission requirements and begin your application process today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up-delay-2">
            <a href="/admissions" className="btn-secondary">
              View Admission Requirements
            </a>
            <a href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
              Contact Admissions Office
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;