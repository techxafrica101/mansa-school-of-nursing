import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={process.env.PUBLIC_URL + "/logo.png"} 
                alt="Mansa School of Nursing Logo" 
                className="w-10 h-10 object-contain filter brightness-0 invert"
              />
              <span className="text-xl font-bold">Mansa College of Nursing & Midwifery</span>
            </div>
            <p className="text-neutral-300 mb-4 max-w-md">
              A government-run nursing training institution approved by NMCZ, preparing competent healthcare professionals for Zambia's healthcare system.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Academics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/student-portal" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  News & Announcements
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Accessibility Statement
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-neutral-300">
              <p>Cathedral Road</p>
              <p>Mansa, Luapula Province</p>
              <p>P.O. Box 710392, Mansa, Zambia</p>
              <p>Phone: +260 977 533121</p>
              <p>Email: caciusmulenga@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-8">
          <div className="text-center mb-4">
            <p className="text-neutral-400 text-sm">
              The College operates in accordance with nursing and midwifery training regulations 
              as prescribed by the Nursing and Midwifery Council of Zambia (NMCZ) and the Ministry of Health.
            </p>
          </div>
          <div className="text-center">
            <p className="text-neutral-300">
              © 2025 Mansa College of Nursing & Midwifery. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;