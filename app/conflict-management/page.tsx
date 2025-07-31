import React from "react";
import Link from "next/link";

export default function ConflictManagementPage() {
  return (
    <div className="flex flex-col">
      {/* Page Title */}
      <section className="max-w-3xl mx-auto py-6 px-2 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-800">
          Coaching: Conflict Management
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
          Transforming Workplace Conflicts into Opportunities for Growth
        </h2>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto py-6 px-2">
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Workplace conflicts are inevitable, but they don’t have to disrupt your team’s harmony or productivity. At People Smart Tools, we specialize in Conflict Management Coaching, helping managers and supervisors turn conflicts into opportunities for growth and improvement.
        </p>
      </section>

      {/* Why Conflict Management Matters */}
      <section className="max-w-3xl mx-auto py-6 px-2">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Conflict Management Matters</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Unresolved conflicts can lead to decreased morale, reduced productivity, and increased employee turnover. By addressing conflicts proactively, you can foster a more positive work environment where employees feel valued and heard. Effective conflict management leads to:
        </p>
        <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-1 mb-4">
          <li>Enhanced teamwork and collaboration</li>
          <li>Improved communication skills</li>
          <li>Increased employee satisfaction and retention</li>
          <li>A healthier, more productive workplace culture</li>
        </ul>
      </section>

      {/* Our Approach */}
      <section className="max-w-3xl mx-auto py-6 px-2">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Approach to Conflict Management Coaching</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Assessment and Understanding</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            We begin with a thorough assessment of the current conflict situation. Using state-of-the-art tools and techniques, we identify the root causes of conflicts and understand the perspectives of all parties involved.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Customized Coaching Plans</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Based on the assessment, we create a tailored coaching plan that addresses the specific needs of your team. Our plans include practical strategies and tools for managing and resolving conflicts effectively.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Skill Development</h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-2">
            We focus on developing key conflict management skills, including:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-1">
            <li>Active listening</li>
            <li>Empathy and emotional intelligence</li>
            <li>Effective communication</li>
            <li>Negotiation and mediation</li>
            <li>Problem-solving and decision-making</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Ongoing Support</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our coaching doesn’t end with the initial sessions. We provide ongoing support to ensure that the strategies and skills learned are effectively implemented and sustained in the workplace. We offer follow-up sessions, check-ins, and additional resources as needed.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-3xl mx-auto py-6 px-2">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Benefits of Conflict Management Coaching</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">For Managers and Supervisors</h3>
          <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-1">
            <li>Reduced time spent managing conflicts</li>
            <li>Improved leadership skills</li>
            <li>Enhanced ability to create a positive team environment</li>
            <li>Increased influence and respect from employees</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">For Employees</h3>
          <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-1">
            <li>Increased job satisfaction</li>
            <li>Better relationships with colleagues</li>
            <li>Greater sense of belonging and value</li>
            <li>Enhanced professional development</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-3xl mx-auto py-6 px-2 text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Get Started with Conflict Management Coaching
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Ready to transform conflicts into opportunities for growth? Contact People Smart Tools today to learn more about our Conflict Management Coaching services and how we can help you create a harmonious and productive workplace.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
