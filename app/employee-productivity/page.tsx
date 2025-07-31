import React from "react";
import Link from "next/link";

export default function EmployeeProductivityPage() {
  return (
    <div className="flex flex-col">
      {/* Page Title */}
      <section className="max-w-3xl mx-auto py-6 px-2 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-800">
          Coaching: Employee Productivity
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
          Unlocking Your Team’s Full Potential
        </h2>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto py-6 px-2">
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Employee productivity is crucial for the success of any organization. At People Smart Tools, our Employee Productivity Coaching is designed to help you unlock your team’s full potential, enhancing efficiency, engagement, and overall workplace performance.
        </p>
      </section>

      {/* Why Focus on Employee Productivity */}
      <section className="max-w-3xl mx-auto py-6 px-2">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Why Focus on Employee Productivity?
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Focusing on productivity not only benefits the organization but also helps employees achieve their personal and professional goals. Key benefits include:
        </p>
        <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-1 mb-4">
          <li>Increased organizational efficiency</li>
          <li>Higher quality of work</li>
          <li>Greater employee satisfaction and retention</li>
          <li>Improved bottom line</li>
        </ul>
      </section>

      {/* Our Approach */}
      <section className="max-w-3xl mx-auto py-6 px-2">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Our Approach to Employee Productivity Coaching
        </h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Initial Assessment</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            We start with a comprehensive assessment of your current productivity levels. This involves understanding your team’s workflow, identifying bottlenecks, and evaluating individual performance metrics.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Customized Coaching Plans</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Based on the assessment, we develop a tailored coaching plan that targets specific productivity challenges within your team. Our plans are designed to address unique organizational needs and goals.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Skill Development and Training</h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-2">
            We provide training and development in key areas that impact productivity, such as:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-1">
            <li>Time management and prioritization</li>
            <li>Goal setting and achievement</li>
            <li>Effective communication and collaboration</li>
            <li>Stress management and work-life balance</li>
            <li>Motivation and engagement strategies</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Continuous Improvement</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our coaching includes ongoing support and follow-up sessions to ensure sustained productivity improvements. We offer regular check-ins, progress reviews, and additional resources to help your team maintain high levels of performance.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-3xl mx-auto py-6 px-2">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Benefits of Employee Productivity Coaching
        </h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">For Employees</h3>
          <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-1">
            <li>Clearer understanding of job expectations</li>
            <li>Enhanced skills for managing workload and time</li>
            <li>Greater job satisfaction and motivation</li>
            <li>Improved career development opportunities</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">For Managers and Supervisors</h3>
          <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-1">
            <li>Enhanced ability to drive team performance</li>
            <li>Improved leadership and management skills</li>
            <li>Increased team cohesion and collaboration</li>
            <li>Better alignment of team goals with organizational objectives</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-3xl mx-auto py-6 px-2 text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Get Started with Employee Productivity Coaching
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Ready to enhance your team’s productivity and achieve greater organizational success? Contact People Smart Tools today to learn more about our Employee Productivity Coaching services and how we can help you achieve your goals.
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
