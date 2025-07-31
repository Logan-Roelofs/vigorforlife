import React from "react";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function BeingLikedPage() {
  return (
    <div className="flex flex-col">
      {/* Title */}
      <section className="max-w-3xl mx-auto py-20 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-800">
          Being Liked is Essential for Being Effective
        </h1>
      </section>

      {/* Intro & Key Statistic */}
      <section className="max-w-3xl mx-auto py-8 px-4 text-gray-700 text-lg leading-relaxed border-b border-gray-200">
        <p className="mb-4">
          A manager or supervisor who maintains a good relationship with their staff will be about <span className="font-semibold">50% more productive</span> than one who has a poor relationship with their team.
        </p>
        <p className="mb-4">
          A Forbes magazine article revealed an interesting survey, which concluded that the most important part of being a manager is being liked. Their research on effective managers revealed that only 1 in 2,000 managers who were disliked were effective.
        </p>
        <p className="mb-4">
          Modeling these values will increase respect and likeability of managers:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Punctuality</span> is often seen as a sign of reliability and respect for others’ time. In professional settings, it demonstrates professionalism and commitment.
          </li>
          <li>
            <span className="font-semibold">Show courtesy</span> by greeting others warmly at the beginning of your shift.
          </li>
          <li>
            <span className="font-semibold">Hearing both sides</span> of a dispute is crucial for achieving clarity and understanding.
          </li>
          <li>
            <span className="font-semibold">Keeping promises</span> is important for building trust and maintaining strong relationships, whether in personal life or professional settings.
          </li>
          <li>
            <span className="font-semibold">Consistently adhering to company policies</span> ensures a compliant and efficient work environment.
          </li>
        </ul>
        <p className="mt-4">
          Ensure feedback on performance is given promptly to support continuous improvement and address issues as they arise.
        </p>
      </section>

      {/* FORD Likeability Acronym */}
      <section className="max-w-3xl mx-auto py-8 px-4 border-b border-gray-200 text-gray-700 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 uppercase tracking-wide">
          The FORD Likeability Acronym
        </h2>
        <p className="mb-4">
          The FORD likeability acronym stands for <span className="font-semibold">Family, Occupation, Recreation, and Dreams</span>. By paying attention to and learning about these needs of a person’s life, managers can build stronger, more meaningful relationships with their team members. Here’s how each component helps:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <span className="font-semibold">Family:</span> Showing genuine interest in an employee’s family life can create a sense of personal connection and trust.
          </li>
          <li>
            <span className="font-semibold">Occupation:</span> Understanding an employee’s role, challenges, and career aspirations helps managers provide better support and guidance.
          </li>
          <li>
            <span className="font-semibold">Recreation:</span> Knowing what employees enjoy doing in their free time can foster a more relaxed and friendly work environment.
          </li>
          <li>
            <span className="font-semibold">Dreams:</span> Learning about an employee’s long-term goals and aspirations can help managers align work opportunities with personal growth, increasing motivation and job satisfaction.
          </li>
        </ul>
        <p>
          By focusing on these areas, managers can create a more supportive and engaging workplace, leading to higher levels of respect and likability.
        </p>
      </section>

      {/* Practical Examples */}
      <section className="max-w-3xl mx-auto py-8 px-4 border-b border-gray-200 text-gray-700 text-lg leading-relaxed">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Applying the FORD Principles</h3>
        <div className="mb-4">
          <span className="font-semibold">Family:</span> Employees generally value certain universal principles in their managers, which align with the “Golden Rule” of treating others as you would like to be treated. Remembering and mentioning personal details about your employees, like family names and events, can indeed show that you care and can improve their willingness to support you.
        </div>
        <div className="mb-4">
          <span className="font-semibold">Occupation:</span> Learn about their previous experiences with employers including best practices. Also ask them what they need to advance their skills.
        </div>
        <div className="mb-4">
          Understanding your employees&#39; past experiences and best practices can provide valuable insights into what works well and what doesn’t. Additionally, asking them about their needs for skill advancement shows that you are invested in their professional growth.
        </div>
        <div className="mb-4">
          <span className="font-semibold">Recreation:</span> Recreation is one of the fruits of a person’s labor. The question “what do you do for fun when you are not working” elicits good feelings. Edify whatever they say even if it isn’t something you would like to do. For instance, if your worker friend says, “I like to sky dive,” now is not the time to say you fear heights. Ask them to tell you how it feels to be falling toward earth. Be interested in what they are interested in. Occasionally send them an article or purchase a sky diving magazine subscription when you draw their name for Christmas gifts at work.
        </div>
        <div className="mb-4">
          <span className="font-semibold">Dreams and goals:</span> Showing genuine interest in someone’s dreams and goals can be incredibly motivating and supportive. For example, “If money and time were no object, what would you love to do?” “What is something you’ve always wanted to pursue but haven’t had the chance to yet?” “Looking ahead to the next six months, what goals would you like to achieve?” This attention fosters loyalty.
        </div>
        <div>
          Reducing turnover and increasing the length of time an employee stays with a company is a profit accelerator. And to think this can happen so easily by educating the manager to be likeable!
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
