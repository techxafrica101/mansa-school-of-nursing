import React from 'react';
import PageHeader from '../components/PageHeader';

const Leadership = () => {
  const leadership = [
    {
      title: "Principal Tutor",
      name: "Mr. Cacius Mulenga",
      qualifications: "Registered Nurse and Midwife, Educational Leadership Certification",
      bio: "Mr. Mulenga serves as the Principal Tutor of Mansa College of Nursing and Midwifery, bringing extensive experience in nursing education and healthcare administration. He is responsible for the overall leadership and academic direction of the institution.",
      responsibilities: "Overall institutional leadership, academic policy development, regulatory compliance with NMCZ standards, and strategic planning for the college."
    }
  ];

  const governance = [
    {
      body: "Nursing and Midwifery Council of Zambia (NMCZ)",
      composition: "National regulatory body for nursing and midwifery education",
      role: "Regulatory oversight, accreditation, curriculum approval, and professional standards enforcement"
    },
    {
      body: "Ministry of Health - Zambia",
      composition: "Government ministry overseeing healthcare education",
      role: "Policy development, funding allocation, and integration with national healthcare workforce planning"
    },
    {
      body: "College Administration",
      composition: "Principal Tutor, academic staff, and administrative personnel",
      role: "Day-to-day operations, academic delivery, student services, and institutional management"
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <PageHeader
        title="Leadership & Governance"
        subtitle="Government Institution Leadership"
        description="Meet our institutional leadership and learn about our governance structure under the Nursing and Midwifery Council of Zambia (NMCZ) and the Ministry of Health."
        backgroundVariant="secondary"
        showBreadcrumb={true}
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
          { label: 'Leadership & Governance' }
        ]}
      />

      {/* Leadership Team */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4 fade-in-up">Leadership Team</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto fade-in-up-delay-1">
              Our leadership team brings decades of combined experience in nursing education, 
              healthcare administration, and academic excellence.
            </p>
          </div>

          <div className="space-y-8">
            {leadership.map((leader, index) => (
              <div key={index} className={`bg-gray-50 rounded-lg p-8 card-surface fade-in-up stagger-${(index % 4) + 1}`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="text-center lg:text-left">
                      <h3 className="text-2xl font-bold text-primary-900 mb-2">{leader.title}</h3>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">{leader.name}</h4>
                      <p className="text-gray-600 text-sm mb-4">{leader.qualifications}</p>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-lg font-semibold text-primary-900 mb-2">Background</h5>
                        <p className="text-gray-700 leading-relaxed">{leader.bio}</p>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-primary-900 mb-2">Key Responsibilities</h5>
                        <p className="text-gray-700 leading-relaxed">{leader.responsibilities}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="bg-primary-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4 fade-in-up">Governance Structure</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto fade-in-up-delay-1">
              Our institutional governance ensures accountability, transparency, and adherence 
              to the highest standards of educational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {governance.map((body, index) => (
              <div key={index} className={`bg-white p-6 rounded-lg shadow-md card-surface fade-in-up stagger-${(index % 3) + 1}`}>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">{body.body}</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">Composition</h4>
                    <p className="text-gray-700 text-sm">{body.composition}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">Role</h4>
                    <p className="text-gray-700 text-sm">{body.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accountability & Transparency */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center fade-in-up">Accountability & Transparency</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg fade-in-up-delay-1">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Institutional Accountability</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Regular governance board meetings and oversight</li>
                  <li>• Annual institutional performance reviews</li>
                  <li>• Compliance with regulatory requirements and standards</li>
                  <li>• Transparent decision-making processes</li>
                  <li>• Student and faculty feedback integration</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg fade-in-up-delay-2">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Quality Assurance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Continuous curriculum review and improvement</li>
                  <li>• Faculty development and performance monitoring</li>
                  <li>• Student outcome assessment and tracking</li>
                  <li>• Clinical training quality evaluation</li>
                  <li>• External audit and accreditation processes</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-primary-700 text-white p-6 rounded-lg fade-in-up-delay-3">
              <h3 className="text-xl font-semibold mb-4">Contact Leadership</h3>
              <p className="text-primary-100 mb-4">
                For matters requiring leadership attention or governance inquiries, 
                please contact the appropriate office directly.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>Principal's Office:</strong> principal@mansanursing.edu</p>
                  <p><strong>Academic Affairs:</strong> academics@mansanursing.edu</p>
                </div>
                <div>
                  <p><strong>Registrar's Office:</strong> registrar@mansanursing.edu</p>
                  <p><strong>Clinical Coordination:</strong> clinical@mansanursing.edu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;