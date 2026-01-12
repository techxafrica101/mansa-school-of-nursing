import React from 'react';

const PageHeader = ({ 
  title, 
  subtitle, 
  description, 
  backgroundVariant = 'primary',
  showBreadcrumb = false,
  breadcrumbItems = []
}) => {
  const backgroundClasses = {
    primary: 'bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700',
    secondary: 'bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600',
    neutral: 'bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-600'
  };

  return (
    <section className={`${backgroundClasses[backgroundVariant]} text-white relative overflow-hidden`}>
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative container-max section-padding-sm">
        <div className="max-w-4xl">
          {showBreadcrumb && breadcrumbItems.length > 0 && (
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm">
                {breadcrumbItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    {index > 0 && (
                      <svg className="w-4 h-4 mx-2 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                    {item.href ? (
                      <a href={item.href} className="text-white/80 hover:text-white transition-colors duration-200 font-medium">
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-white/70 font-medium">{item.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight text-white drop-shadow-sm">
                {title}
              </h1>
              {subtitle && (
                <p className="text-xl md:text-2xl font-semibold text-white/90 leading-relaxed drop-shadow-sm">
                  {subtitle}
                </p>
              )}
            </div>
            
            {description && (
              <p className="text-lg text-white/85 leading-relaxed max-w-3xl font-medium">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
      
      {/* Subtle accent elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full"></div>
      <div className="absolute bottom-10 right-40 w-20 h-20 bg-accent-400/20 rounded-full"></div>
    </section>
  );
};

export default PageHeader;