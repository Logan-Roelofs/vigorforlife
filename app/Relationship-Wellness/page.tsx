import React from "react";
import Link from "next/link";

export default function RelationshipWellnessPage() {
  return (
    <div className="flex flex-col">
      {/* Page Title */}
      <section className="max-w-3xl mx-auto py-6 px-2 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-800">
          Relationship Wellness
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
          When Communication Clicks, Collaboration Thrives
        </h2>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto py-6 px-2">
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Relationship wellness in the workplace isn’t just a feel-good concept—it’s
          a strategic advantage. When employees experience healthy, supportive
          relationships at work, the ripple effects touch everything from
          productivity to mental health to retention.
        </p>
      </section>

      {/* Why It Matters */}
      <section className="max-w-3xl mx-auto py-6 px-2">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Why It Matters
        </h2>
        <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-1 mb-4">
          <li>
            <span className="font-semibold">Boosts Engagement &amp; Performance:</span>{" "}
            Employees who feel connected and valued are more likely to be engaged,
            motivated, and productive. In fact, highly engaged teams show 21%
            greater profitability.
          </li>
          <li>
            <span className="font-semibold">Reduces Stress &amp; Burnout:</span>{" "}
            Positive relationships help buffer stress. When coworkers support each
            other, it creates a safety net that reduces anxiety and improves
            resilience.
          </li>
          <li>
            <span className="font-semibold">Improves Communication &amp; Collaboration:</span>{" "}
            Trusting relationships foster open dialogue, better teamwork, and faster
            problem-solving. This leads to more innovative thinking and fewer
            misunderstandings.
          </li>
          <li>
            <span className="font-semibold">Enhances Mental &amp; Physical Health:</span>{" "}
            Social connection at work is linked to stronger immune responses,
            healthier hormonal patterns, and even lower mortality risk. Loneliness,
            on the other hand, can lead to depression and physical ailments.
          </li>
          <li>
            <span className="font-semibold">Strengthens Retention &amp; Culture:</span>{" "}
            Employees who feel a sense of belonging are more likely to stay. A
            culture of empathy and connection makes your organization a place where
            people want to work.
          </li>
        </ul>
      </section>

      {/* Key Ingredients */}
      <section className="max-w-3xl mx-auto py-6 px-2">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Key Ingredients of Relationship Wellness
        </h2>
        <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-1 mb-4">
          <li>
            <span className="font-semibold">Emotional Intelligence &amp; Empathy:</span>{" "}
            Leaders who show empathy and prioritize relationships outperform those
            who don’t.
          </li>
          <li>
            <span className="font-semibold">Psychological Safety:</span>{" "}
            When people feel safe to speak up and be themselves, they’re more
            engaged and less likely to view the workplace as toxic.
          </li>
          <li>
            <span className="font-semibold">Recognition &amp; Feedback:</span>{" "}
            Regular, values-based feedback reinforces connection and purpose.
          </li>
        </ul>
      </section>

      {/* How We Can Help */}
      <section className="max-w-3xl mx-auto py-6 px-2">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          How We Can Help
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Vigor for Life empowers workplace relationships with the Communication
          Comparison Report by Target Training Inc.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          This practical, visually intuitive tool maps two individuals’
          communication styles side by side—uncovering strengths, preferences, and
          areas of potential tension. In just minutes, it delivers the kind of
          insight that might otherwise take years to develop. Whether bridging gaps
          between coworkers or aligning a manager and new hire, it fosters mutual
          respect, emotional well-being, and stronger team dynamics.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Relationship wellness isn’t just a “nice to have”—it’s a cornerstone of
          a thriving, resilient workplace.
        </p>
      </section>

      {/* Call to Action */}
      <section className="max-w-3xl mx-auto py-6 px-2 text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Ready for Empowered Relationships?
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
