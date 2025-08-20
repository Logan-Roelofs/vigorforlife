import React from "react";
import { Button } from "../components/ui/button";
import { FaClipboardList } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { LuSpeech } from "react-icons/lu";
import { FaPersonRays } from "react-icons/fa6";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center flex-1 py-30 lg:py-50 text-center shadow-inner bg-transparent relative overflow-hidden"
        style={{
          backgroundImage: "url(static/angryboss.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 bg-white/50 pointer-events-none" />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            <span className="text-gray-800">Vigor For Life</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">Wellness Coaching</p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-3xl mx-auto pt-20 pb-10 px-4" id="about">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Are chronic health challenges holding you back?</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          It is time to reclaim your vitality! Welcome to Vigor for
          Life—where true wellness begins. When you give your
          body the right tools to thrive—energy, creativity, and
          balance naturally follow.

          By addressing the root causes, symptoms fade, opening
          the door to a healthier, more vibrant life. Jim Rooney is
          here to guide you, helping you fine-tune your well-being
          so you can feel your best and fully enjoy life.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          By addressing the root causes, symptoms fade, opening
          the door to a healthier, more vibrant life. Jim Rooney is
          here to guide you, helping you fine-tune your well-being
          so you can feel your best and fully enjoy life.
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
                <a href="/Individual-Wellness-Coaching" className="text-primary font-semibold underline hover:text-primary/80 transition">Individual Wellness Coaching</a>

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
                <a href="/Transforming-Workplace-Culture" className="text-primary font-semibold underline hover:text-primary/80 transition"> Transforming Workplace Culture</a>
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
                <a href="/Relationship-Wellness" className="text-primary font-semibold underline hover:text-primary/80 transition">Relationship Wellness</a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition group">
              <FaClipboardList className="h-10 w-10 text-primary mb-4 mx-auto group-hover:scale-110 transition" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 text-center">
                Customized Employee Satisfaction Survey              </h3>
              <p className="text-gray-600 text-center">
                Give your employees a voice and uncover what truly drives engagement, retention, and performance. Our tailored surveys provide actionable insights that help leaders build trust, improve culture, and create workplaces where people thrive.              </p>
              <div className="mt-4 flex flex-col items-center gap-2">
                <a href="/Customized-Employee-Satisfaction-Survey" className="text-primary font-semibold underline hover:text-primary/80 transition">Customized Employee Satisfaction Survey</a>
              </div>
            </div>
          </div>
        </div>
      </section>

 
      {/* About Jim Rooney – The Manager’s Coach Section */}
      <section className="max-w-3xl mx-auto pt-10 pb-10 px-4" id="about-jim">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">About Jim Rooney</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            For over 30 years, Jim has empowered individuals and teams to unlock their full potential through wellness coaching, personal development, and holistic strategies. At Vigor For Life, Jim specializes in guiding people to achieve greater energy, resilience, and balance—helping you and your organization thrive from the inside out.
          </p>        </p>
        <a href="/about-jim" className="text-primary font-semibold underline hover:text-primary/80 transition mb-8 inline-block">Learn More About Jim</a>
        <p className="text-gray-600 text-lg leading-relaxed mt-6">
          Still have questions? Reach out to discover how Jim and Vigor For Life can help you boost your well-being, increase your energy, and create lasting positive change in your life or organization.
        </p>
      </section>

      {/* Call to Action */}
      <section className="pt-10 pb-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Ready to transform your business?
        </h2>
        <Button className="px-10 py-5 text-lg font-semibold shadow-lg hover:scale-105 transition" asChild>
          <a href="contact">Get in Touch</a>
        </Button>
      </section>

    </div>
  );
}
