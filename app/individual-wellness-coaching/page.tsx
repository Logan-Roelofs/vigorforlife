import React from "react";
import Link from "next/link";

export default function IndividualWellnessCoachingPage() {
  return (
    <div className="flex flex-col">
      {/* Page Title */}
      <section className="max-w-3xl mx-auto py-6 px-2 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-800">
          Individual Wellness Coaching
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
          Personalized Support for Your Wellness Journey
        </h2>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto py-6 px-2">
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Health and wellness habits do not come naturally. We aren’t given training on how to live optimally. But thanks to modern science, we have discovered what we can do to sustain optimal wellness and enjoy our life to the fullest. Coaching expands your vision for what is possible and your capacity to make it happen.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Hiring a personal wellness coach is like investing in a strategic partner for your health, longevity, and overall vitality, especially if you are aiming for meaningful and sustainable change. Here are some compelling benefits:
        </p>
      </section>

      {/* Benefits */}
      <section className="max-w-3xl mx-auto py-6 px-2">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Personalized Guidance</h2>
        <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-1 mb-4">
          <li>You get custom support tailored to your body, lifestyle, and goals—no more generic advice.</li>
          <li>A coach can help decipher what works best for you, whether it’s nutrition, fitness, stress management, or sleep habits.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-gray-800">Accountability &amp; Motivation</h2>
        <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-1 mb-4">
          <li>Having someone in your corner helps you stay committed even on low-energy days.</li>
          <li>Coaches offer constructive feedback and encouragement, making it easier to push through challenges and celebrate wins. </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-gray-800">Holistic Support</h2>
        <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-1 mb-4">
          <li>Wellness coaches look at the full picture: mental, emotional, physical, even spiritual aspects.</li>
          <li>They help you build routines that nurture balance, not just quick fixes.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-gray-800">Education &amp; Empowerment</h2>
        <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-1 mb-4">
          <li>You learn to understand your body better, interpret signals, and make informed choices confidently.</li>
          <li>A coach will often teach you how to become self-sufficient in maintaining your health for the long haul.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-gray-800">Habit Transformation</h2>
        <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-1 mb-4">
          <li>Coaches specialize in helping people shift from short-term changes to long-lasting lifestyle upgrades.</li>
          <li>They use proven behavioral techniques to help rewire habits and mindset patterns that might be holding you back.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-gray-800">Safe Space to Explore</h2>
        <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-1 mb-4">
          <li>You get someone to talk through doubts, fears, and frustrations without judgment.</li>
          <li>Many coaches offer insights grounded in empathy and experience, helping you feel heard and supported.</li>
        </ul>
      </section>

      {/* Vigor for Life Statement */}
      <section className="max-w-3xl mx-auto py-6 px-2">
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Vigor for Life isn’t just about wellness—it’s about rediscovering vitality and confidence at every stage of life. Through personalized coaching and science-backed strategies, we help clients break free from energy slumps, confusing health trends, and unsustainable habits. Together, we build a lifestyle rooted in clarity, balance, and long-lasting results—so you can not only live longer, but live better.
        </p>
      </section>

      {/* Call to Action */}
      <section className="max-w-3xl mx-auto py-6 px-2 text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Ready to transform your health?
        </h2>
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
