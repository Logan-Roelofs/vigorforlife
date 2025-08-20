import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutJimPage() {
  return (
    <div className="flex flex-col">
      {/* Page Title + Photo + Wellness Awakening */}
      <section className="max-w-3xl mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div>
            <Image
              src="static/Jimtree.png"
              alt="Jimtree"
              width={224}
              height={224}
              className="w-77 h-103 md:w-77 md:h-103 object-cover rounded-xl shadow-lg border-2 border-primary"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              From Survival to Vitality: Jim’s Wellness Awakening
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At just 12 years old, Jim endured a life-threatening bout of hepatitis that stretched over a year—marked by physical pain, emotional isolation, and deep uncertainty. But within that challenging chapter, something extraordinary happened: a spark was lit. That experience became the catalyst for Jim’s lifelong dedication to health, healing, and vibrant living.
            </p>
          </div>
        </div>
      </section>

      {/* A Life Fueled by Vitality and Purpose */}
      <section className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">A Life Fueled by Vitality and Purpose</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Jim isn’t just passionate about staying young longer—he lives it. With a background in management consulting, he’s spent decades helping others unlock their potential through healthier choices, deeper relationships, and intentional living. Whether he’s coaching clients one-on-one or speaking to teams in the workplace, Jim’s energy is contagious—and his guidance, life-changing.
        </p>
      </section>

      {/* A Coach, Connector, and Champion for Well-Being */}
      <section className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">A Coach, Connector, and Champion for Well-Being</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          What sets Jim apart isn’t just his knowledge, it’s his heart. His approach blends science-backed strategies with genuine human connection, making wellness feel not only achievable, but enjoyable. As the visionary behind Vigor for Life, Jim empowers people of all ages to rewrite the narrative on aging, one vibrant day at a time.
        </p>
      </section>

      {/* Why You'll Love Getting to Know Him */}
      <section className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Why You’ll Love Getting to Know Him</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Jim believes every person deserves to feel seen, heard, and supported. Through his coaching, workshops, and wellness programs, he builds bridges—between individuals, within organizations, and across communities. His mission? To help people live with more energy, clarity, and meaning—starting now.
        </p>
      </section>

      {/* Jim’s Credentials */}
      <section className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Jim’s Credentials</h2>
        <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed mb-4 space-y-1">
          <li>Certified Health Coach with Dr. Sears Wellness Institute</li>
          <li>MA Science (Biology)</li>
          <li>BA Biology and Psychology</li>
          <li>Graduate—Army School of Preventive Medicine</li>
          <li>10-year Professional Member National Speakers Association</li>
          <li>Certified Professional Behavior &amp; Motivation Analyst</li>
          <li>Previous National Environmental Health Registered Sanitarian</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Journey Toward Vitality Starts Here</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Jim’s not just a coach—he’s a guide, an encourager, and a living example of the energy that comes from intentional wellness. If you’re ready to take the next step toward living younger, stronger, and more connected, Jim is here to walk that path with you. Reach out today and discover how Vigor for Life can help you thrive—one vibrant choice at a time.
        </p>
        <p className="text-xl font-semibold text-primary mb-6">Ready to transform your health?</p>
        <Link href="/contact">
          <span className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-primary-dark transition-colors cursor-pointer">
            Get in Touch
          </span>
        </Link>
      </section>
    </div>
  );
}
