import React from 'react';
import PageHeader from '../components/PageHeader';

const Academics = () => {
  return (
    <div>
      {/* Header Section */}
      <PageHeader
        title="Academics"
        subtitle="Excellence Through Innovation in Nursing Education"
        description="Discover our comprehensive academic approach combining theoretical knowledge with practical application, supported by experienced faculty and state-of-the-art facilities."
        backgroundVariant="secondary"
        showBreadcrumb={true}
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Academics' }
        ]}
      />

      {/* Teaching and Learning Approach */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center fade-in-up">Teaching and Learning Approach</h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed fade-in-up-delay-1">
              Our academic approach combines traditional nursing education principles with modern 
              pedagogical methods to create an engaging and effective learning environment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg card-surface fade-in-up-delay-1">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Theoretical Foundation</h3>
                <p className="text-gray-700 mb-4">
                  Our curriculum provides a strong theoretical foundation in nursing science, 
                  healthcare principles, and evidence-based practice. Students engage with 
                  current research and best practices in nursing.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Interactive classroom lectures</li>
                  <li>• Case study analysis</li>
                  <li>• Research-based learning</li>
                  <li>• Group discussions and seminars</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg card-surface fade-in-up-delay-2">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Practical Application</h3>
                <p className="text-gray-700 mb-4">
                  Hands-on learning is integral to our programs. Students practice skills in 
                  controlled environments before applying them in real clinical settings.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Laboratory skill sessions</li>
                  <li>• Simulation-based learning</li>
                  <li>• Demonstration and return demonstration</li>
                  <li>• Peer learning activities</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg card-surface fade-in-up-delay-3">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Critical Thinking Development</h3>
                <p className="text-gray-700 mb-4">
                  We emphasize the development of critical thinking skills essential for 
                  clinical decision-making and professional nursing practice.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Problem-based learning</li>
                  <li>• Clinical reasoning exercises</li>
                  <li>• Reflective practice sessions</li>
                  <li>• Evidence-based decision making</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg card-surface fade-in-up-delay-3">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Technology Integration</h3>
                <p className="text-gray-700 mb-4">
                  Modern technology enhances learning experiences and prepares students 
                  for contemporary healthcare environments.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Digital learning resources</li>
                  <li>• Electronic health record training</li>
                  <li>• Virtual simulation experiences</li>
                  <li>• Online learning platforms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Training */}
      <section className="bg-primary-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center fade-in-up">Clinical Training</h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed fade-in-up-delay-1">
              Clinical training is the cornerstone of nursing education, providing students with 
              real-world experience in healthcare settings under expert supervision.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="fade-in-up-delay-1">
                <h3 className="text-2xl font-semibold text-primary-900 mb-4">Clinical Rotations</h3>
                <p className="text-gray-700 mb-4">
                  Students participate in structured clinical rotations across various healthcare 
                  departments to gain comprehensive exposure to different areas of nursing practice.
                </p>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-primary-900">Medical-Surgical Nursing</h4>
                    <p className="text-gray-600 text-sm">General patient care in medical and surgical units</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-primary-900">Pediatric Nursing</h4>
                    <p className="text-gray-600 text-sm">Specialized care for infants, children, and adolescents</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-primary-900">Obstetric and Gynecological Nursing</h4>
                    <p className="text-gray-600 text-sm">Maternal and women's health care</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-primary-900">Community Health Nursing</h4>
                    <p className="text-gray-600 text-sm">Public health and community-based care</p>
                  </div>
                </div>
              </div>

              <div className="fade-in-up-delay-2">
                <h3 className="text-2xl font-semibold text-primary-900 mb-4">Clinical Learning Environment</h3>
                <p className="text-gray-700 mb-4">
                  Our clinical partnerships provide diverse learning opportunities in various 
                  healthcare settings, ensuring comprehensive practical experience.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-2">Hospital Settings</h4>
                    <p className="text-gray-700 text-sm">
                      Acute care hospitals providing exposure to complex patient care scenarios 
                      and advanced medical technologies.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-2">Community Health Centers</h4>
                    <p className="text-gray-700 text-sm">
                      Primary healthcare facilities focusing on preventive care and health promotion 
                      in community settings.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-2">Specialized Units</h4>
                    <p className="text-gray-700 text-sm">
                      Intensive care units, emergency departments, and specialized clinics 
                      providing advanced clinical experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md fade-in-up-delay-3">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Clinical Supervision and Support</h3>
              <p className="text-gray-700 mb-4">
                All clinical experiences are supervised by qualified clinical instructors and 
                experienced nursing professionals who provide guidance, mentorship, and evaluation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-primary-900">Expert Mentorship</h4>
                  <p className="text-gray-600 text-sm">Guidance from experienced nursing professionals</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-primary-900">Competency Assessment</h4>
                  <p className="text-gray-600 text-sm">Regular evaluation of clinical skills and knowledge</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-primary-900">Continuous Support</h4>
                  <p className="text-gray-600 text-sm">Ongoing guidance throughout clinical experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment & Evaluation Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">Assessment & Evaluation Framework</h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Our comprehensive assessment system ensures students meet professional standards 
              through continuous evaluation and structured feedback mechanisms.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Continuous Assessment Structure</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-2">Internal Assessment (40%)</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Monthly unit tests and assignments</li>
                      <li>• Clinical skill demonstrations</li>
                      <li>• Case study presentations</li>
                      <li>• Laboratory practical evaluations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-2">External Examination (60%)</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Semester-end theoretical examinations</li>
                      <li>• Comprehensive practical assessments</li>
                      <li>• Clinical competency evaluations</li>
                      <li>• Viva voce examinations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Clinical Evaluation Methods</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-2">Clinical Performance Assessment</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Daily clinical performance records</li>
                      <li>• Patient care planning and implementation</li>
                      <li>• Professional behavior evaluation</li>
                      <li>• Communication skills assessment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-2">Competency-Based Evaluation</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Skill-specific competency checklists</li>
                      <li>• Objective Structured Clinical Examination (OSCE)</li>
                      <li>• Portfolio-based assessment</li>
                      <li>• Reflective practice evaluations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-primary-700 text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Examination Oversight & Standards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Quality Assurance</h4>
                  <ul className="text-primary-100 text-sm space-y-1">
                    <li>• External examiner participation</li>
                    <li>• Standardized evaluation criteria</li>
                    <li>• Regular assessment calibration</li>
                    <li>• Feedback integration mechanisms</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Professional Conduct Expectations</h4>
                  <ul className="text-primary-100 text-sm space-y-1">
                    <li>• Adherence to nursing code of ethics</li>
                    <li>• Professional communication standards</li>
                    <li>• Patient safety and confidentiality</li>
                    <li>• Continuous learning commitment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Training Partnerships */}
      <section className="bg-primary-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">Clinical Training & Practice Sites</h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Our strategic partnerships with leading healthcare institutions provide students 
              with diverse clinical experiences across multiple specialties and care settings.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Partner Healthcare Institutions</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-primary-900">Government Medical College Hospital, Patiala</h4>
                    <p className="text-gray-600 text-sm">Tertiary care, specialized departments, emergency services</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900">Civil Hospital, Mansa</h4>
                    <p className="text-gray-600 text-sm">General medicine, surgery, obstetrics & gynecology</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900">Community Health Centers</h4>
                    <p className="text-gray-600 text-sm">Primary healthcare, maternal & child health, immunization</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900">Regional Mental Health Institute</h4>
                    <p className="text-gray-600 text-sm">Psychiatric nursing, mental health care, rehabilitation</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Specialized Training Areas</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-primary-900">Critical Care Units</h4>
                    <p className="text-gray-600 text-sm">ICU, CCU, emergency department nursing</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900">Surgical Departments</h4>
                    <p className="text-gray-600 text-sm">Pre-operative, intra-operative, post-operative care</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900">Pediatric Services</h4>
                    <p className="text-gray-600 text-sm">Neonatal care, pediatric medicine, child development</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900">Community Outreach</h4>
                    <p className="text-gray-600 text-sm">Rural health programs, health education, preventive care</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Clinical Supervision & Safety Standards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary-900 mb-2">Supervision Framework</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Qualified clinical instructors at all sites</li>
                    <li>• 1:8 instructor-to-student ratio maximum</li>
                    <li>• Daily supervision and guidance</li>
                    <li>• Regular performance feedback sessions</li>
                    <li>• Mentorship by experienced staff nurses</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-900 mb-2">Safety & Quality Assurance</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Comprehensive orientation programs</li>
                    <li>• Infection control protocol training</li>
                    <li>• Patient safety standard adherence</li>
                    <li>• Emergency response preparedness</li>
                    <li>• Regular safety audit and compliance checks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">Academic Calendar Overview</h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Our academic year is structured to provide comprehensive learning experiences 
              while maintaining appropriate breaks for rest and reflection.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Academic Structure</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary-900">Semester System</h4>
                    <p className="text-gray-700 text-sm">
                      Academic year divided into two main semesters with continuous assessment 
                      and comprehensive examinations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900">Clinical Rotations</h4>
                    <p className="text-gray-700 text-sm">
                      Integrated clinical experiences throughout the academic year with 
                      intensive clinical blocks during designated periods.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900">Assessment Periods</h4>
                    <p className="text-gray-700 text-sm">
                      Regular internal assessments, mid-semester examinations, and 
                      comprehensive final examinations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Key Academic Periods</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Academic Year Begins:</span>
                    <span className="font-medium text-primary-900">August</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">First Semester:</span>
                    <span className="font-medium text-primary-900">August - December</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Winter Break:</span>
                    <span className="font-medium text-primary-900">December - January</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Second Semester:</span>
                    <span className="font-medium text-primary-900">January - May</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Summer Clinical:</span>
                    <span className="font-medium text-primary-900">May - July</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Summer Break:</span>
                    <span className="font-medium text-primary-900">July - August</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Standards */}
      <section className="bg-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Professional Standards</h2>
            <p className="text-lg text-primary-100 mb-8 text-center leading-relaxed">
              We maintain the highest professional standards in nursing education, ensuring our 
              graduates are prepared to meet the ethical and professional requirements of the nursing profession.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Ethical Standards</h3>
                <p className="text-primary-100 mb-4">
                  Our programs emphasize the importance of ethical practice in nursing, 
                  preparing students to navigate complex ethical situations in healthcare.
                </p>
                <ul className="space-y-2 text-primary-100">
                  <li>• Patient rights and dignity</li>
                  <li>• Confidentiality and privacy</li>
                  <li>• Informed consent principles</li>
                  <li>• Professional boundaries</li>
                  <li>• Cultural sensitivity and respect</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Professional Competencies</h3>
                <p className="text-primary-100 mb-4">
                  Students develop essential professional competencies required for 
                  safe and effective nursing practice.
                </p>
                <ul className="space-y-2 text-primary-100">
                  <li>• Clinical reasoning and judgment</li>
                  <li>• Communication and interpersonal skills</li>
                  <li>• Leadership and teamwork</li>
                  <li>• Quality improvement and safety</li>
                  <li>• Lifelong learning commitment</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Regulatory Compliance</h3>
                <p className="text-primary-100 mb-4">
                  All academic programs comply with regulatory standards and professional 
                  nursing council requirements.
                </p>
                <ul className="space-y-2 text-primary-100">
                  <li>• Curriculum standards adherence</li>
                  <li>• Faculty qualification requirements</li>
                  <li>• Clinical training standards</li>
                  <li>• Assessment and evaluation criteria</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
                <p className="text-primary-100 mb-4">
                  Continuous quality improvement ensures our programs meet and exceed 
                  educational standards.
                </p>
                <ul className="space-y-2 text-primary-100">
                  <li>• Regular curriculum review</li>
                  <li>• Student feedback integration</li>
                  <li>• Faculty development programs</li>
                  <li>• Outcome assessment and improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Support & Welfare */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">Student Support & Welfare</h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              We provide comprehensive support services to ensure student success, well-being, 
              and professional development throughout their academic journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Academic Support Services</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-2">Academic Advising</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Personalized guidance on academic planning, course selection, and career pathways.
                    </p>
                    <ul className="text-gray-600 text-xs space-y-1">
                      <li>• Individual academic planning sessions</li>
                      <li>• Progress monitoring and intervention</li>
                      <li>• Career counseling and guidance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-2">Learning Support</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Additional academic assistance for students requiring extra support.
                    </p>
                    <ul className="text-gray-600 text-xs space-y-1">
                      <li>• Peer tutoring programs</li>
                      <li>• Study skills workshops</li>
                      <li>• Remedial classes when needed</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Counseling & Personal Support</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-2">Student Counseling Services</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Professional counseling support for personal and academic challenges.
                    </p>
                    <ul className="text-gray-600 text-xs space-y-1">
                      <li>• Individual counseling sessions</li>
                      <li>• Stress management workshops</li>
                      <li>• Crisis intervention support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-2">Wellness Programs</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Holistic wellness initiatives promoting physical and mental health.
                    </p>
                    <ul className="text-gray-600 text-xs space-y-1">
                      <li>• Health and wellness seminars</li>
                      <li>• Recreational activities</li>
                      <li>• Peer support groups</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Clinical Supervision & Mentorship</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-2">Clinical Mentorship Program</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Experienced nursing professionals provide guidance during clinical rotations.
                    </p>
                    <ul className="text-gray-600 text-xs space-y-1">
                      <li>• One-on-one mentorship assignments</li>
                      <li>• Regular feedback and evaluation</li>
                      <li>• Professional development guidance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-2">Clinical Support</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Comprehensive support during clinical training experiences.
                    </p>
                    <ul className="text-gray-600 text-xs space-y-1">
                      <li>• Pre-clinical preparation sessions</li>
                      <li>• Debriefing and reflection activities</li>
                      <li>• Skills reinforcement workshops</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Disciplinary Framework & Fairness</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-2">Fair Disciplinary Process</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Transparent and equitable procedures for addressing conduct issues.
                    </p>
                    <ul className="text-gray-600 text-xs space-y-1">
                      <li>• Clear conduct expectations and guidelines</li>
                      <li>• Due process in disciplinary proceedings</li>
                      <li>• Appeal mechanisms and review processes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-2">Restorative Approach</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Focus on learning and growth rather than punitive measures.
                    </p>
                    <ul className="text-gray-600 text-xs space-y-1">
                      <li>• Educational interventions</li>
                      <li>• Behavioral improvement plans</li>
                      <li>• Rehabilitation and support services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-primary-700 text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Student Support Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Academic Support</h4>
                  <p className="text-primary-100">academics@mansanursing.edu</p>
                  <p className="text-primary-100">+260 1652 234570</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Student Counseling</h4>
                  <p className="text-primary-100">counseling@mansanursing.edu</p>
                  <p className="text-primary-100">+260 1652 234574</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Student Services</h4>
                  <p className="text-primary-100">students@mansanursing.edu</p>
                  <p className="text-primary-100">+260 1652 234569</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Support Services */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-900 mb-8">Academic Support Services</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We provide comprehensive support services to help students succeed academically 
              and professionally throughout their nursing education journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Academic Advising</h3>
                <p className="text-gray-700">
                  Personalized guidance on course selection, academic planning, and 
                  career pathway development.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Tutoring Services</h3>
                <p className="text-gray-700">
                  Peer tutoring and faculty-led study sessions to support student 
                  learning and academic success.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 6V9a2 2 0 00-2-2H10a2 2 0 00-2 2v3.1M16 20h-4a2 2 0 01-2-2v-1.1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Career Guidance</h3>
                <p className="text-gray-700">
                  Professional development support, resume building, and career 
                  placement assistance for graduates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;