import React from "react";
import Link from "next/link";

export default function TransformingWorkplaceCulturePage() {
  return (
    <div className="flex flex-col">
      {/* Page Title */}
      <section className="max-w-3xl mx-auto py-6 px-2 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-800">
          Transforming Workplace Culture
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
          Empower Your Team with Vigor for Life
        </h2>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto py-6 px-2">
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          In today’s fast-paced work environment, employee well-being isn’t a
          luxury, it’s a business strategy. Vigor for Life offers a customizable
          wellness program designed to help your team feel better, work smarter,
          and stay energized—no gym membership required.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          We combine holistic health coaching with practical lifestyle support to
          help employees:
        </p>
        <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-1 mb-4">
          <li>Increase energy and focus during the workday</li>
          <li>Reduce stress and improve emotional resilience</li>
          <li>Build simple habits for lasting vitality</li>
        </ul>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Healthier employees are like rocket fuel for business success. Here’s
          how they make a measurable impact:
        </p>
      </section>

      {/* Benefits */}
      <section className="max-w-3xl mx-auto py-6 px-2">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Boost Productivity &amp; Performance
        </h2>
        <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-1 mb-4">
          <li>
            Employees with better physical and mental health have more energy,
            sharper focus, and fewer distractions.
          </li>
          <li>Studies show that healthier teams can boost productivity by up to 25%.</li>
          <li>
            Programs that support physical and mental wellness reduce burnout and
            presenteeism (being at work but not fully functioning).
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Reduce Costs &amp; Absenteeism
        </h2>
        <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-1 mb-4">
          <li>
            Wellness initiatives can lower healthcare expenses and sick days. Poor
            health costs U.S. businesses $530 billion annually in lost
            productivity.
          </li>
          <li>Companies with strong wellness programs report up to 19% fewer absences.</li>
          <li>Fewer sick days and less “working while unwell” means smoother operations.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Attract &amp; Retain Top Talent
        </h2>
        <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-1 mb-4">
          <li>
            A wellness-focused culture signals that you value your team’s
            well-being.
          </li>
          <li>
            This can improve recruitment and reduce turnover, especially among
            younger workers who prioritize work-life balance.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Strengthen Company Culture
        </h2>
        <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-1 mb-4">
          <li>
            Wellness programs foster connection and boost morale and a sense of
            belonging.
          </li>
          <li>
            Group activities like walking meetings, fitness challenges, or
            mindfulness workshops build camaraderie.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Improve Brand Reputation
        </h2>
        <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-1 mb-4">
          <li>
            Businesses that prioritize employee wellness are seen as progressive
            and people-first.
          </li>
          <li>
            This can enhance your public image and appeal to socially conscious
            clients and partners.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Encourage Innovation &amp; Creativity
        </h2>
        <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-1 mb-4">
          <li>
            A mentally and emotionally supported workforce is more likely to think
            creatively and solve problems effectively.
          </li>
          <li>
            Wellness programs that include stress management and emotional
            resilience training can fuel innovation.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Stronger Client &amp; Customer Relations
        </h2>
        <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-1 mb-4">
          <li>
            Healthier employees create a more positive work environment, which
            improves communication and client interactions, boosting business
            success.
          </li>
        </ul>
      </section>

      {/* Closing Statement */}
      <section className="max-w-3xl mx-auto py-6 px-2">
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Implementing a workplace wellness program isn’t just good for employee
          health, it’s a strategic move that can unlock serious business growth.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Whether you’re a small business or growing enterprise, we make wellness
          accessible, engaging, and results driven. Let’s create a healthier
          workplace that supports your people and your bottom line.
        </p>
      </section>

      {/* Call to Action */}
      <section className="max-w-3xl mx-auto py-6 px-2 text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Ready to transform your workplace culture?
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
