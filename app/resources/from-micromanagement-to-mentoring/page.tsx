import React from "react";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function FromMicromanagementToMentoringPage() {
  return (
    <div className="flex flex-col">
      {/* Title */}
      <section className="max-w-3xl mx-auto py-20 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-800">
          From Micromanagement to Mentoring
        </h1>
      </section>

      {/* Topics List */}
      <section className="max-w-3xl mx-auto py-8 px-4 text-gray-700 text-lg leading-relaxed border-b border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Topics Discussed</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>The Cost of Employee Disengagement</li>
          <li>The Difference between Mentoring and Coaching</li>
          <li>The 5 Attributes of Great Mentors/Coaches</li>
          <li>Determine Who Needs a Coach</li>
          <li>Where to Find a Coach Free of Charge</li>
        </ul>
      </section>

      {/* Q&A Content */}
      <section className="max-w-3xl mx-auto py-8 px-4 text-gray-800 text-lg leading-relaxed space-y-8 border-b border-gray-200">
        <div>
          <h3 className="font-bold text-xl mb-2">Q. What is micromanagement?</h3>
          <p>
            <span className="font-semibold">A.</span> Micromanagement occurs when a manager excessively involves themselves in an employee’s performance. In short, it is imposing work standards and behavior expectations that meet the personal needs of the manager, not the employee. It is to control a person or a situation by paying extreme attention to small details.
          </p>
          <p>
            The manager has good intentions to assist the employee fulfill their duties, but the employee feels disempowered and not trusted to complete work properly. Productivity falls drastically. If processes aren’t well defined, managers feel the need to micromanage.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-2">Q. What is the root problem when a manager feels the need to micromanage an employee?</h3>
          <p>
            <span className="font-semibold">A.</span> Many times the person selected for the job is not a good fit. At the time of the appointment to the job, little or no research was done to determine employee suitability for the demands of the position. Often the top candidate chosen for a job is determined only by their hard skills, education and experience. Using only subjective means (resumes, interviews, and background checks) provides a mere, 17% success rate in most industries.
          </p>
          <p>
            While education, experience and intelligence are important, you simply cannot uncover the true picture of human talent without a total person analysis that includes an assessment of behaviors and motivation. The success rate is high when subjective AND objective means are used to hire a person for an opening.
          </p>
          <p>
            Another cause of micromanagement by a manager is the employee has a bigger vision than the manager. Collaboration will tend to empower the employee. The best outcome happens when work activities are planned together.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-2">Q. What are the predictable results and costs of employees that are micromanaged?</h3>
          <p>
            <span className="font-semibold">A.</span> Micromanaged employees become disengaged, contributing very little to the success of their assignments. Disengaged employees tend to drag down other employees and customers. According to the book, <span className="italic">“I Quit but Forgot to Tell You” By Terri Kabachnick</span>, the annual cost of disengaged employees to employers in the U.S. is a staggering 250 billion dollars annually! How much is disengagement costing your organization?
          </p>
          <p>
            If an employee is disengaged, they need to be trained appropriately, reassigned, or let go. It is hard to win back the heart and attitude of a disengaged employee. Mentoring/coaching might help. Learn more about mentoring from the questions below.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-2">Q. What is mentoring?</h3>
          <p>
            <span className="font-semibold">A.</span> Mentoring is a relationship in which a more experienced or more knowledgeable person helps a less experienced or less knowledgeable person acquire specific skills, attitudes and techniques that increase their value to their employer. The mentor also shares personal experiences with the mentee. The mentee test drives the techniques and reports how they worked. The mentor helps them refine the concepts, so it works with their personality.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-2">Q. How is mentoring different than coaching?</h3>
          <p>
            <span className="font-semibold">A.</span> Mentoring passes along experience. Coaches ask questions, listen closely and provide information that helps the other person gain a perspective that is beneficial. Coaches are about perspective; mentors are about teaching their experiences.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-2">Q. Which is better, mentoring or coaching?</h3>
          <p>
            <span className="font-semibold">A.</span> Mentoring and coaching are frequently used together. However, without training in the art of questioning and perspective building, a person will not be a very good coach. Effective mentors must consider the learning style of the person they are mentoring.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-2">Q. What are the five attributes of an effective mentor and/or coach?</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              You must believe that you have the skills and attitude to be effective. It is better to mentor in areas where you have strong expertise to offer more valuable insight. Coaches must resist the urge to insert their personal beliefs. It is about the person being coached and their success.
            </li>
            <li>
              Realize that it takes time for people to improve. Repeating the same information in new and innovative ways helps new skills emerge.
            </li>
            <li>
              Confidentiality builds trust. The more vulnerable a person is in explaining their situation, the more they can be helped. They reveal more as trust increases. Trust is linked to confidentiality.
            </li>
            <li>
              Ask the person how they like to receive encouragement. Listen closely and strive to meet their encouragement needs. Everyone needs encouragement. Some need a little, some need a lot. Be genuine in expressing praise as their skill improvement evolves.
            </li>
            <li>
              Take time to get to know the person you are mentoring/coaching, build camaraderie and a relationship. Use the <span className="font-semibold">FORD</span> acronym to be acquainted. The <span className="font-semibold">FORD</span> acronym stands for <span className="underline">Family, Occupation, Recreation and Dreams</span>. By paying attention to and learning about these aspects of a person’s life, managers can build stronger, more meaningful relationships with their team members.
            </li>
          </ol>
          <p className="mt-4">
            It is also valuable to understand the person’s temperament and motivational needs. This is accomplished through personality assessment instruments. When the person feels that they are understood, they become better students and improve quickly.
          </p>
          <p>
            Everyone can benefit from having a mentor/coach. Personally, I have two mentors/coaches. Being coached has allowed me to accelerate my career and gain information and skill that I would never have gotten otherwise. Mentors and coaches are all around you. All you must do is to have a desire to improve and ask someone you admire for help. Offer to take them to lunch and ask about their success strategies. It is very hard for anyone to refuse this invitation. Ask and it shall be given to you.
          </p>
        </div>
      </section>

      {/* Coaching Info & Contact */}
      <section className="max-w-3xl mx-auto py-12 px-4 text-gray-700">
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
              For over 30 years, Jim has provided personal skills management training, coaching, and consulting to a wide variety of businesses and municipalities. People Smart Tools specializes in helping people work well with people. Owners and managers call on us when they know they are not getting the best out of their team.
            </p>
            <Button asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
