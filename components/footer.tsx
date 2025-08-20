import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-100 pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Jim */}
        <div>
          <h3 className="text-lg font-semibold mb-2">
            About Jim
          </h3>
          <p className="text-sm text-gray-400">
            Jim Rooney is a certified health coach dedicated to helping others live with more energy, purpose, and connection.
          </p>
        </div>
        {/* Quick Links 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 mb-4">
            <li>
              <a href="#" className="hover:underline text-sm">Individual Wellness Coaching</a>
            </li>
            <li>
              <a href="#" className="hover:underline text-sm">Transforming Workplace Culture</a>
            </li>
          </ul>
        </div>
        {/* Quick Links 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 mb-4">
            <li>
              <a href="#" className="hover:underline text-sm">Relationship Wellness</a>
            </li>
            <li>
              <a href="#" className="hover:underline text-sm">Customized Employee Satisfaction Survey</a>
            </li>
          </ul>
        </div>
        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <div className="mb-2 text-sm">
            <div>
              <span className="font-medium">Phone:</span> <a href="tel:3256421116" className="hover:underline">325-642-1116</a>
            </div>
            <div>
              <span className="font-medium">Address:</span>
              <div>
                <a
                  href="https://maps.app.goo.gl/u9du3bsnCjfSzkSVA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  P.O. Box 342
                  <br />
                  Brownwood, TX 76804
                </a>
              </div>
            </div>
            <div>
              <span className="font-medium">Email:</span> <a href="mailto:peoplesmarttools@gmail.com" className="hover:underline">peoplesmarttools@gmail.com</a>
            </div>
          </div>
          <div className="mt-3">
            <div className="font-medium mb-1">Social Profiles</div>
            <div className="flex space-x-3">
              {/* Example social icons */}
              <a href="https://www.linkedin.com/in/jim-rooney-42b40310/" aria-label="LinkedIn" className="hover:text-primary">
                <svg
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-primary transition-colors"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-800 pt-4 text-center text-xs text-gray-500">
        © 2025 | Vigor For Life | All Rights Reserved.
      </div>
    </footer>
  );
}
