import React from "react";
import { Button } from "../components/ui/button";
import { FaClipboardList } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { LuSpeech } from "react-icons/lu";
import { FaPersonRays } from "react-icons/fa6";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center flex-1 py-12 lg:py-20 text-center shadow-inner bg-transparent relative overflow-hidden" >
        <div className="absolute inset-0 bg-white/50 pointer-events-none" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3">
            <span className="text-gray-800">Vigor For Life</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">Wellness Coaching</p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-3xl mx-auto pb-10 px-4" id="about">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Are chronic health challenges holding you back?</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="flex-1">
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              It is time to reclaim your vitality! Welcome to Vigor for
              Life—where true wellness begins. When you give your
              body the right tools to thrive—energy, creativity, and
              balance naturally follow.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              By addressing the root causes, symptoms fade, opening
              the door to a healthier, more vibrant life. Jim Rooney is
              here to guide you, helping you fine-tune your well-being
              so you can feel your best and fully enjoy life.
            </p>
          </div>
          <Image
            src="static/jim.png"
            alt="Jim Rooney"
            className="w-73 h-82 robject-cover shadow-md md:ml-4 mt-6 md:mt-0"
          />
        </div>
        {/* New informational text */}
        <div className="mt-8 text-gray-700 text-lg leading-relaxed">
          At Vigor for Life, we do not just offer quick fixes—we provide real solutions designed to restore balance, energy, and vitality. Your body has the power to heal, and we are here to help you unlock its full potential.<br /><br />
          Your health coach complements, not replaces, your doctor. Together, we form a powerful team to help you thrive.
        </div>
      </section>

      {/* What Vigor for Life Offers Section */}
      <section className="max-w-3xl mx-auto pt-10 pb-10 px-4" id="what-we-offer">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">What Vigor for Life Offers</h2>
        <ul className="list-disc pl-6 text-gray-700 text-lg mb-6 space-y-2">
          <li>
            <span className="font-semibold">Custom Habit Creation</span>—Develop sustainable wellness routines that fit your lifestyle and goals.
          </li>
          <li>
            <span className="font-semibold">Tailored Communication Support</span>—Coaching is adapted to the best way you process and express information.
          </li>
          <li>
            <span className="font-semibold">Focused, Useful Guidance</span>—Get health insights rooted in science and presented clearly and free of jargon.
          </li>
          <li>
            <span className="font-semibold">Balanced Accountability</span>—Enjoy thoughtful check-ins that keep you on track without pressure or guilt.
          </li>
          <li>
            <span className="font-semibold">Encouraging Environment</span>—Grow in a space that celebrates progress and builds confidence gently.
          </li>
        </ul>
        <p className="text-gray-700 text-lg mb-2">
          Guidance, grit, and lasting gains — your coach keeps you strong as you journey through wellness lanes.
        </p>
        <p className="text-gray-700 text-lg font-semibold">
          Let’s take the first step toward a healthier, more vibrant life today.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-20 px-4" id="services">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 gap-10 justify-center">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition group">
              <FaPersonRays className="h-10 w-10 text-primary mb-4 mx-auto group-hover:scale-110 transition" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 text-center">
                Individual Wellness Coaching
              </h3>
              <p className="text-gray-600 text-center">
                Personalized support for your wellness journey. With science-backed strategies and tailored guidance, we’ll help you create healthy routines that bring balance, energy, and lasting vitality.
              </p>
              <div className="mt-4 flex flex-col items-center gap-2">
                <a href="/individual-wellness-coaching" className="text-primary font-semibold underline hover:text-primary/80 transition">Individual Wellness Coaching</a>

              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition group">
              <HiBuildingOffice2 className="h-10 w-10 text-primary mb-4 mx-auto group-hover:scale-110 transition" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 text-center">
                Transforming Workplace Culture
              </h3>
              <p className="text-gray-600 text-center">
                Employee well-being isn’t just a perk—it’s a strategy for success. Through customizable wellness programs, we help teams boost energy, reduce stress, and build lasting habits that strengthen morale, productivity, and overall workplace culture.
              </p>
              <div className="mt-4 flex flex-col items-center gap-2">
                <a href="/transforming-workplace-culture" className="text-primary font-semibold underline hover:text-primary/80 transition"> Transforming Workplace Culture</a>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-10 justify-center mt-10">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition group">
            <LuSpeech className="h-10 w-10 text-primary mb-4 mx-auto group-hover:scale-110 transition" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 text-center">
                Relationship Wellness
              </h3>
              <p className="text-gray-600 text-center">
                Stronger relationships create stronger workplaces. We help teams improve communication, build trust, and foster connection so collaboration thrives, stress decreases, and employees feel valued and supported.              </p>
              <div className="mt-4 flex flex-col items-center gap-2">
                <a href="/relationship-wellness" className="text-primary font-semibold underline hover:text-primary/80 transition">Relationship Wellness</a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition group">
              <FaClipboardList className="h-10 w-10 text-primary mb-4 mx-auto group-hover:scale-110 transition" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 text-center">
                Customized Employee Satisfaction Survey              </h3>
              <p className="text-gray-600 text-center">
                Give your employees a voice and uncover what truly drives engagement, retention, and performance. Our tailored surveys provide actionable insights that help leaders build trust, improve culture, and create workplaces where people thrive.              </p>
              <div className="mt-4 flex flex-col items-center gap-2">
                <a href="/customized-employee-satisfaction-survey" className="text-primary font-semibold underline hover:text-primary/80 transition">Customized Employee Satisfaction Survey</a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="pt-10 pb-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Ready to transform your health?
        </h2>
        <Button className="px-10 py-5 text-lg font-semibold shadow-lg hover:scale-105 transition" asChild>
          <a href="contact">Get in Touch</a>
        </Button>
      </section>

    </div>
  );
}
