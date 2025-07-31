import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutJimPage() {
  return (
    <div className="flex flex-col">
      {/* Page Title + Photo */}
      <section className="max-w-3xl mx-auto py-20 px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-800">
              Hi, I’m Jim Rooney
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">THE MANAGER’S COACH</h2>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="static/Jim.webp"
              alt="Jim Rooney"
              width={224}
              height={224}
              className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-xl shadow-lg border-2 border-primary"
            />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto py-8 px-4">
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          As a former Public Health Sanitarian, I realized that to be more productive in my role as an environmental regulator and consultant I would have to learn to be skilled with people. The switch from regulator began in 1985 with the establishment of People Smart Tools.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          <span className="font-semibold">People Smart Tools</span> is a management consulting company that specializes in helping people work well with people. Owners and managers call on us when they know they are not getting the best out of their team. We can help select, develop, and retain outstanding employees who are fully engaged.
        </p>
      </section>

      {/* My Story */}
      <section className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">My Story</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          On the first day of my first full time job as a Public Health Sanitarian in Durango CO, I unexpectedly found my passion for a new career. I learned the importance of understanding relationship dynamics the hard way!
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          As I was walking across a frozen grass field, hearing crunches beneath my feet, I’m thinking, “I am so well prepared for this job. I have my MA in Biology. I’ve been through the Army School of Preventive Medicine. This feels good!”
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          I was pretty full of myself and my knowledge about science. My job was to design an individual sewage system for a rancher. During the soil percolation test, I told the rancher about the soil, bacteria and disease, and all the sewage system options.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          After about an hour of going on and on, I said to the rancher, “Do you have any comments, you haven’t said anything?” He angrily retorted, “You are the most arrogant person I have ever seen, get off my property! I never want to see you again!”  
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          My heart dropped to my stomach with these words cascading through my mind.  My thoughts were, “Why didn’t somebody tell me I would have to be good with people?”  After my encounter with that angry rancher, I immersed myself in learning. I read every book I could find, listened to customer service audios, attended workshops, and studied communication and relationship dynamics. This journey eventually led me to start People Smart Tools.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          I was thrilled when others noticed my enthusiasm and it was easy to find businesses that wanted personal skills training. My ambition to learn about persuasion, influence, leadership, customer relations, emotional intelligence and other business building topics was insatiable. I devoured audio, written, video and in-person training and coaching materials with great gusto. Still do.
        </p>
      </section>

      {/* Fascination Section */}
      <section className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">What is Fascinating about Teaching People Skills?</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          The way managers and employees communicate and deal with people dramatically affects morale, teamwork, productivity, and employee retention.  Frequent workplace interpersonal communication breakdowns can cause employees to become disengaged.  It takes so little to turn things around.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Often organizations do a good job in training their managers and employees in necessary job duties, but completely overlook interpersonal skills training.  Most managers or supervisors want to improve interpersonal communication with those they manage but have no idea how to do this.  They don’t know where to start, what to do or how to make communication truly effective.   
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Influence is the central key in great careers. I get a lot of pleasure from learning and sharing nuggets with others and seeing them gain lifetime habits that make a difference.  I developed the People Smart Workshop ‘How to Improve Your Personal Influence’ specifically to help managers improve their influence with those they supervise by sharpening their personal skills.
        </p>
        <Link
          href="/personal-influence"
          className="text-primary font-semibold underline hover:text-primary/80 transition"
        >
          Click Here to Jump to Training - Personal Influence
        </Link>
      </section>

      {/* 10 Reasons */}
      <section className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">10 Reasons To Work With Jim</h2>
        <ul className="list-decimal list-inside text-gray-600 text-lg leading-relaxed space-y-2">
          <li><span className="font-semibold">Dedicated to Success:</span> Jim works diligently to meet and exceed contract goals.</li>
          <li><span className="font-semibold">Engaging Sessions:</span> He actively promotes audience participation, making sessions interactive and enjoyable.</li>
          <li><span className="font-semibold">Empowering Insights:</span> Participants gain a newfound appreciation for their own intelligence.</li>
          <li><span className="font-semibold">Practical Solutions:</span> Jim provides actionable ideas that can be implemented the very next day.</li>
          <li><span className="font-semibold">Certified Expertise:</span> He is a Certified Professional Behavior and Motivation Analyst.</li>
          <li><span className="font-semibold">Clarity and Simplicity:</span> Jim simplifies complex concepts, making them easy to understand and apply.</li>
          <li><span className="font-semibold">Commitment:</span> He arrives early and stays late to ensure everything runs smoothly.</li>
          <li><span className="font-semibold">Personalized Approach:</span> Pre-program interviews with attendees are included to tailor the experience.</li>
          <li><span className="font-semibold">Innovative Thinking:</span> Jim’s approach to innovation is truly inspiring.</li>
          <li><span className="font-semibold">Conversational Presentations:</span> His presentations feel like engaging conversations.</li>
        </ul>
      </section>

      {/* Qualifications & Experience */}
      <section className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Qualifications & Experience</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Jim is dedicated to helping organizations and individuals achieve success by understanding relationship dynamics.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          With a passion for fostering productivity and fulfillment, Jim has over 30 years of experience assisting businesses and municipalities in creating high-performance work teams. Through training, coaching, and technology, he focuses on helping people collaborate effectively.
        </p>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Education</h3>
          <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-1">
            <li>Western State Colorado University—MA Science (Biology)</li>
            <li>Western State Colorado University—BA Biology and Psychology</li>
            <li>Graduate—Army School of Preventive Medicine</li>
            <li>10 year Professional Member National Speakers Association</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Certificates</h3>
          <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-1">
            <li>Success Insights® DISC Certified* </li>
            <li>Success Insights® Driving Forces Certified* </li>
            <li>Certified Health Coach with Dr. Sears Wellness Institute</li>
            <li className="text-sm text-gray-500">*Requires training updates every 2 years</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Experience</h3>
          <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-1">
            <li>Selection and Onboarding of New Staff and Internal Promotions</li>
            <li>Conflict Management and Resolution</li>
            <li>Internal and External Customer Relations</li>
            <li>Harassment & Diversity Training</li>
            <li>Senior Executive Coaching</li>
            <li>Business Development Consulting</li>
            <li>Reverse Logic – Creativity & Innovation</li>
            <li>Sales Training</li>
          </ul>
        </div>
      </section>

      {/* More About Jim / Jim's Gems */}
      <section className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">More About Jim</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          We all live by principles we hold dear. <span className="font-semibold">JIM’S GEMS</span> are concise, impactful aphorisms that I’ve distilled into a few powerful words. Applying these principles can bring benefits to both you and those around you.
        </p>
        <h3 className="text-xl font-semibold text-primary mb-2"><span className="font-semibold"><Link href="/resources/jims-gems" className="text-primary underline hover:text-primary/80 transition">JIM’S GEMS</Link></span></h3>
        {/* Placeholder for actual gems if you want to list them */}
      </section>
    </div>
  );
}
