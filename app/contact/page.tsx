import React from "react";
import Image from "next/image";

export default function ContactUsPage() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center py-12 px-4 text-gray-700">
      <div className="max-w-3xl w-full mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 uppercase tracking-wide text-center">
          Connect With Vigor for Life
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Jim's Image */}
          <Image
            src="/static/Jim.webp"
            alt="Jim - Wellness Coach"
            width={160}
            height={160}
            className="w-40 h-40 object-cover rounded-lg shadow mb-4 md:mb-0"
          />
          {/* Description and Contact */}
          <div className="flex-1">
            <p className="mb-4 text-lg leading-relaxed">
              Ready to take the next step toward vibrant living? Jim offers
              individual wellness coaching, transforming workplace culture,
              relationship wellness, and customized employee satisfaction surveys.
              With decades of experience and a passion for helping others thrive,
              Jim empowers individuals and organizations to live younger,
              stronger, and more connected.
            </p>
            <p className="mb-4 text-base">
              Whether you’re seeking one-on-one guidance or support for your team,
              Jim is here to help you unlock your full potential. Reach out today
              and start your journey toward vitality!
            </p>
            <a
              href="mailto:peoplesmarttools@gmail.com"
              className="text-blue-600 underline hover:text-blue-800 text-lg font-semibold"
            >
              Email Jim
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
