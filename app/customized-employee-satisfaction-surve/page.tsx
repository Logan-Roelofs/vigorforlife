import React from "react";
import Link from "next/link";

export default function CustomizedEmployeeSatisfactionSurveyPage() {
  return (
    <div className="flex flex-col">
      {/* Page Title */}
      <section className="max-w-3xl mx-auto py-6 px-2 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-800">
          Customized Employee Satisfaction Survey
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
          Listen. Learn. Thrive.
        </h2>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto py-6 px-2">
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Employee satisfaction surveys are more than just feedback forms—they’re
          strategic tools that can transform workplace culture, boost performance,
          and guide leadership decisions. An Employee Satisfaction Survey can 
          actively enhance employee wellbeing when used thoughtfully. 
        </p>
      </section>

      {/* Benefits */}
      <section className="max-w-3xl mx-auto py-6 px-2">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Top Benefits of Employee Satisfaction Surveys
        </h2>
        <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-1 mb-4">
          <li>
            <span className="font-semibold">Improved Retention &amp; Loyalty:</span>
            When employees feel heard and valued, they’re more likely to stay.
            Surveys help uncover pain points before they lead to turnover.
          </li>
          <li>
            <span className="font-semibold">Enhanced Productivity:</span> Happy,
            engaged employees are more productive. Surveys identify what drives
            satisfaction so leaders can amplify those factors.
          </li>
          <li>
            <span className="font-semibold">Better Customer Experience:</span>
            Satisfied employees tend to deliver better service, which directly
            impacts customer satisfaction and brand reputation.
          </li>
          <li>
            <span className="font-semibold">Increased Psychological Safety:</span>
            Anonymous surveys give employees a safe space to share concerns,
            fostering openness and trust.
          </li>
          <li>
            <span className="font-semibold">Actionable Insights for Leadership:</span>
            Surveys reveal what’s working and what’s not—whether it’s
            communication, management style, or career development opportunities.
          </li>
          <li>
            <span className="font-semibold">Culture &amp; Communication Improvements:</span>
            They open dialogue between staff and leadership, helping to align
            values and improve internal communication.
          </li>
          <li>
            <span className="font-semibold">Benchmarking &amp; Tracking Progress:</span>
            Regular surveys allow organizations to track satisfaction trends over
            time and compare results across departments or industries.
          </li>
          <li>
            <span className="font-semibold">Boosted Engagement &amp; Morale:</span>
            When employees see their feedback leads to change, it builds trust and
            strengthens their connection to the company mission.
          </li>
        </ul>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Customized Employee Satisfaction Surveys create a culture of listening.
          When employees feel heard, it reduces stress and fosters trust. Surveys
          can uncover workload imbalances, unclear expectations, or lack of
          support—giving leaders a chance to intervene before burnout sets in.
          When employees reflect on what fulfills them at work, it reinforces
          their sense of meaning and belonging—key drivers of wellbeing.
        </p>
      </section>

      {/* Call to Action */}
      <section className="max-w-3xl mx-auto py-6 px-2 text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Interested in a customized survey for your organization?
        </h2>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
