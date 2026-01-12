import React from 'react';
import PageHeader from '../components/PageHeader';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "New Clinical Partnership with Regional Medical Center",
      date: "December 15, 2024",
      category: "Partnership",
      excerpt: "Mansa School of Nursing announces a new clinical partnership with Regional Medical Center, expanding clinical training opportunities for our students in specialized care units.",
      content: "We are pleased to announce our new clinical partnership with Regional Medical Center, effective January 2025. This partnership will provide our students with enhanced clinical training opportunities in critical care, emergency medicine, and specialized nursing units. The collaboration includes access to state-of-the-art medical equipment and mentorship from experienced healthcare professionals."
    },
    {
      id: 2,
      title: "Academic Excellence Awards Ceremony 2024",
      date: "December 10, 2024",
      category: "Academic",
      excerpt: "Annual awards ceremony recognizing outstanding academic achievements and contributions of our students and faculty members.",
      content: "The Annual Academic Excellence Awards Ceremony was held on December 10, 2024, celebrating the remarkable achievements of our students and faculty. Awards were presented in various categories including academic excellence, clinical performance, research contributions, and community service. We congratulate all recipients for their dedication and outstanding performance."
    },
    {
      id: 3,
      title: "Admission Process for Academic Year 2025-26 Begins",
      date: "December 5, 2024",
      category: "Admissions",
      excerpt: "Applications are now open for all nursing programs for the academic year 2025-26. Early application is encouraged due to limited seats.",
      content: "The admission process for Academic Year 2025-26 has officially commenced. Prospective students can now apply for all our nursing programs including GNM, B.Sc. Nursing, Post Basic B.Sc. Nursing, and ANM. Application forms are available at the admissions office and on our official website. The deadline for applications is May 31, 2025. We encourage early applications as seats are limited."
    },
    {
      id: 4,
      title: "Faculty Development Workshop on Modern Teaching Methods",
      date: "November 28, 2024",
      category: "Faculty Development",
      excerpt: "Three-day workshop focusing on innovative teaching methodologies and technology integration in nursing education.",
      content: "Our faculty participated in a comprehensive three-day workshop on modern teaching methods in nursing education. The workshop covered innovative pedagogical approaches, technology integration in classroom and clinical settings, and student-centered learning strategies. The program was conducted by renowned nursing education experts and will enhance our teaching quality and student learning outcomes."
    },
    {
      id: 5,
      title: "Community Health Awareness Campaign",
      date: "November 20, 2024",
      category: "Community Service",
      excerpt: "Students and faculty organize health awareness campaign in local communities, focusing on preventive healthcare and health education.",
      content: "Our students and faculty successfully conducted a community health awareness campaign in collaboration with local health authorities. The campaign focused on preventive healthcare, vaccination awareness, maternal and child health, and basic health education. Over 500 community members participated in the program, receiving health screenings and educational materials."
    },
    {
      id: 6,
      title: "Infrastructure Upgrade: New Simulation Laboratory",
      date: "November 15, 2024",
      category: "Infrastructure",
      excerpt: "State-of-the-art simulation laboratory inaugurated to enhance practical training and clinical skill development.",
      content: "We are excited to announce the inauguration of our new state-of-the-art simulation laboratory. The facility features advanced medical simulators, modern equipment, and realistic clinical scenarios to enhance student learning. This addition to our infrastructure will significantly improve the quality of practical training and prepare students for real-world clinical challenges."
    }
  ];

  const announcements = [
    {
      id: 1,
      title: "Winter Break Schedule",
      date: "December 20, 2024",
      type: "Academic",
      content: "Winter break will commence from December 22, 2024, and classes will resume on January 8, 2025. The library will remain open with limited hours during the break period."
    },
    {
      id: 2,
      title: "Clinical Rotation Schedule - Spring Semester",
      date: "December 18, 2024",
      type: "Clinical",
      content: "Clinical rotation schedules for the spring semester are now available. Students are advised to check their portal for detailed schedules and reporting instructions."
    },
    {
      id: 3,
      title: "Fee Payment Deadline Extension",
      date: "December 16, 2024",
      type: "Administrative",
      content: "The fee payment deadline for the current semester has been extended to December 30, 2024. Students can make payments through the online portal or at the accounts office."
    },
    {
      id: 4,
      title: "Guest Lecture Series - January 2025",
      date: "December 14, 2024",
      type: "Academic",
      content: "A series of guest lectures by renowned healthcare professionals will be conducted in January 2025. Topics include advanced nursing practices, healthcare technology, and professional development."
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <PageHeader
        title="News & Announcements"
        subtitle="Stay Connected with Our Community"
        description="Stay informed about the latest developments, achievements, and important announcements from Mansa School of Nursing and our academic community."
        backgroundVariant="secondary"
        showBreadcrumb={true}
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'News & Announcements' }
        ]}
      />

      {/* Latest News Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4 fade-in-up">Latest News</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto fade-in-up-delay-1">
              Discover the latest developments, achievements, and initiatives at our institution.
            </p>
          </div>

          <div className="space-y-8">
            {newsItems.map((item) => (
              <article key={item.id} className={`bg-gray-50 rounded-lg p-8 card-surface fade-in-up stagger-${(item.id % 6) + 1}`}>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-grow">
                    <div className="flex items-center mb-2">
                      <span className="inline-block bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-3">
                        {item.category}
                      </span>
                      <time className="text-gray-500 text-sm">{item.date}</time>
                    </div>
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">{item.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{item.excerpt}</p>
                  </div>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed">{item.content}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="bg-primary-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4 fade-in-up">Important Announcements</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto fade-in-up-delay-1">
              Stay informed about important notices, deadlines, and institutional updates.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {announcements.map((announcement) => (
                <div key={announcement.id} className={`bg-white rounded-lg p-6 shadow-md border-l-4 border-primary-500 fade-in-up stagger-${(announcement.id % 4) + 1}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <span className="inline-block bg-accent-100 text-accent-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-3">
                        {announcement.type}
                      </span>
                      <time className="text-gray-500 text-sm">{announcement.date}</time>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">{announcement.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{announcement.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Categories */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4 fade-in-up">News Categories</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto fade-in-up-delay-1">
              Browse news by category to find information most relevant to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-primary-50 p-6 rounded-lg text-center card-surface cursor-pointer fade-in-up-delay-1">
              <div className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Academic</h3>
              <p className="text-gray-700 text-sm">Academic programs, curriculum updates, and educational initiatives</p>
            </div>

            <div className="bg-accent-50 p-6 rounded-lg text-center card-surface cursor-pointer fade-in-up-delay-2">
              <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Infrastructure</h3>
              <p className="text-gray-700 text-sm">Facility upgrades, new equipment, and campus developments</p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg text-center card-surface cursor-pointer fade-in-up-delay-3">
              <div className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Community</h3>
              <p className="text-gray-700 text-sm">Community outreach, health campaigns, and social initiatives</p>
            </div>

            <div className="bg-accent-50 p-6 rounded-lg text-center card-surface cursor-pointer fade-in-up-delay-3">
              <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 6V9a2 2 0 00-2-2H10a2 2 0 00-2 2v3.1M16 20h-4a2 2 0 01-2-2v-1.1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Achievements</h3>
              <p className="text-gray-700 text-sm">Student achievements, awards, and recognition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-700 mb-8">
              Subscribe to our newsletter to receive the latest news and announcements directly in your inbox.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-gray-600 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for News */}
      <section className="bg-primary-700 text-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">Have News to Share?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            If you have news, achievements, or events to share with our community, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-secondary">
              Contact Us
            </a>
            <a href="mailto:news@mansanursing.edu" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
              Send News Tips
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;