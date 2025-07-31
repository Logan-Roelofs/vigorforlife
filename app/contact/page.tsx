import React from "react";
import Image from "next/image";

export default function ContactUsPage() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center py-12 px-4 text-gray-700">
      <div className="max-w-3xl w-full mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 uppercase tracking-wide">
          Learn More About Our Coaching
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Jim's Image */}
          <Image
            src="static/Jim.webp"
            alt="Jim - People Smart Tools"
            width={160}
            height={160}
            className="w-40 h-40 object-cover rounded-lg shadow mb-4 md:mb-0"
          />
          {/* Description and Contact */}
          <div className="flex-1">
            <p className="mb-4 text-lg leading-relaxed">
              For over 30 years, Jim has provided personal skills management
              training, coaching, and consulting to a wide variety of businesses
              and municipalities. People Smart Tools specializes in helping
              people work well with people. Owners and managers call on us when
              they know they are not getting the best out of their team.
            </p>
            <a
              href="mailto:peoplesmarttools@gmail.com"
              className="text-blue-600 underline hover:text-blue-800 text-lg font-semibold"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
