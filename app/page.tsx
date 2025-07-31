import React from "react";
import { Button } from "../components/ui/button";
import { RiTeamFill } from "react-icons/ri";
import { MdOutlineModelTraining } from "react-icons/md";

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
            Manager Services
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-8 text-center">
            We invite you to browse our site, where you’ll find detailed information about our approach, case studies, client testimonials, the services we offer, and free resources. Discover how we can assist you in achieving your goals.
          </p>
          <div className="grid md:grid-cols-2 gap-10 justify-center">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition group">
              <RiTeamFill className="h-10 w-10 text-primary mb-4 mx-auto group-hover:scale-110 transition" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 text-center">
                Individual Wellness Coaching
              </h3>
              <p className="text-gray-600 text-center">
                Personalized support for your wellness journey. Health and wellness habits do not come naturally, but through science-backed strategies and personalized guidance, we help you build routines that nurture balance and transform your lifestyle for lasting vitality.
              </p>
              <div className="mt-4 flex flex-col items-center gap-2">
                <a href="/transforming-workplace-culture" className="text-primary font-semibold underline hover:text-primary/80 transition">Transforming Workplace Culture</a>
                <a href="/relationship-wellness" className="text-primary font-semibold underline hover:text-primary/80 transition">Relationship Wellness</a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition group">
              <MdOutlineModelTraining className="h-10 w-10 text-primary mb-4 mx-auto group-hover:scale-110 transition" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 text-center">
                Training
              </h3>
              <p className="text-gray-600 text-center">
                Interactive workshops and practical training sessions designed to strengthen your team’s interpersonal skills, boost collaboration, and foster a positive workplace culture. Our programs equip your staff with proven tools to resolve conflict, enhance productivity, and drive organizational success.
              </p>
              <div className="mt-4 flex flex-col items-center gap-2">
                <a href="/unlocking-team-dynamics" className="text-primary font-semibold underline hover:text-primary/80 transition">Unlocking Team Dynamics</a>
                <a href="/personal-influence" className="text-primary font-semibold underline hover:text-primary/80 transition">Personal Influence</a>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-10 justify-center mt-10">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition group">
              <RiTeamFill className="h-10 w-10 text-primary mb-4 mx-auto group-hover:scale-110 transition" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 text-center">
                Coaching
              </h3>
              <p className="text-gray-600 text-center">
                Personalized, one-on-one guidance to help managers and supervisors overcome challenges, build confidence, and unlock their full leadership potential. Our coaching empowers you to navigate complex team dynamics, improve communication, and achieve lasting results for your organization.
              </p>
              <div className="mt-4 flex flex-col items-center gap-2">
                <a href="/conflict-management" className="text-primary font-semibold underline hover:text-primary/80 transition">Conflict Management</a>
                <a href="/employee-productivity" className="text-primary font-semibold underline hover:text-primary/80 transition">Employee Productivity</a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition group">
              <MdOutlineModelTraining className="h-10 w-10 text-primary mb-4 mx-auto group-hover:scale-110 transition" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 text-center">
                Training
              </h3>
              <p className="text-gray-600 text-center">
                Interactive workshops and practical training sessions designed to strengthen your team’s interpersonal skills, boost collaboration, and foster a positive workplace culture. Our programs equip your staff with proven tools to resolve conflict, enhance productivity, and drive organizational success.
              </p>
              <div className="mt-4 flex flex-col items-center gap-2">
                <a href="/unlocking-team-dynamics" className="text-primary font-semibold underline hover:text-primary/80 transition">Unlocking Team Dynamics</a>
                <a href="/personal-influence" className="text-primary font-semibold underline hover:text-primary/80 transition">Personal Influence</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why a Coach for Managers Section */}
      <section className="max-w-3xl mx-auto pt-20 pb-10 px-4" id="why-coach">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Why a Coach for Managers?</h2>
        <h3 className="text-2xl font-semibold mb-2 text-gray-700">What is a Manager’s Coach?</h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          A Manager’s Coach is a professional who helps managers work smart and live fulfilled.
        </p>
        <h3 className="text-2xl font-semibold mb-2 text-gray-700">Is a Manager’s Coach Right for Me?</h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Managers who are highly successful often have a coach. Coaching helps align your goals and emotions, providing benefits that last for many years and aiding in upward mobility. Everyone, even those already successful, benefits from a coach.
        </p>
        <h3 className="text-2xl font-semibold mb-2 text-gray-700">Jim’s Coaching Qualifications</h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Jim earned a Master’s Degree in Science and a Bachelor’s Degree in Biology & Psychology from Western State Colorado University in Gunnison, Colorado. He holds two designations from Target Training International®: Success Insights® DISC Certified and Success Insights® Driving Forces Certified. These certifications require biannual training updates. Additionally, he is a Certified Health Coach with Dr. Sears Wellness Institute.
        </p>
        <h3 className="text-2xl font-semibold mb-2 text-gray-700">Jim’s Coaching Approach</h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Jim’s holistic approach revolves around understanding your natural skills, communication style, and driving forces (values). Using state-of-the-art assessment tools and active listening, Jim gains a comprehensive picture of your strengths and concerns.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Together, you will plan the scope and process of the project. A summary of the plans is crafted into a Letter of Engagement, which aligns your goals and serves as a guide. Regular meetings will help you accomplish your desired outcomes. Jim is available for phone calls, texts, and in-person meetings as needed. Fees are charged by the project, not hourly.
        </p>
      </section>

      {/* About Jim Rooney – The Manager’s Coach Section */}
      <section className="max-w-3xl mx-auto pt-10 pb-10 px-4" id="about-jim">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">About Jim Rooney – The Manager’s Coach</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          For over 30 years, Jim has provided personal skills management training, coaching, and consulting to a wide variety of businesses and municipalities. People Smart Tools specializes in helping people work well with people. Owners and managers call on us when they know they are not getting the best out of their team.
        </p>
        <a href="/about-jim" className="text-primary font-semibold underline hover:text-primary/80 transition mb-8 inline-block">Learn More About Jim</a>
        <p className="text-gray-600 text-lg leading-relaxed mt-6">
          Still not sure? Get in touch to learn more about how Jim and People Smart Tools can help you transform your team dynamics and enhance workplace productivity.
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
