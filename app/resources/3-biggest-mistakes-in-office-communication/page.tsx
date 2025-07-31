import React from "react";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ThreeBiggestMistakesPage() {
  return (
    <div className="flex flex-col">
      {/* Title */}
      <section className="max-w-3xl mx-auto py-20 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-800">
          3 Biggest Mistakes in Office Communication
        </h1>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto py-8 px-4 text-gray-700 text-lg leading-relaxed border-b border-gray-200">
        <p className="mb-4">
          In the bustling corridors of office life, communication isn’t just a bridge—it’s the very air we breathe. Communication is key in any relationship. But in the workplace, miscommunication can be deadly to a professional relationship — and more so, to an organization overall.
        </p>
        <p className="mb-4">
          Some of these common communication mistakes can lead to bigger issues if not addressed.
        </p>
      </section>

      {/* Mistakes List */}
      <section className="max-w-3xl mx-auto py-8 px-4 border-b border-gray-200">
        <ol className="list-decimal pl-6 space-y-6 text-gray-800 text-lg">
          <li>
            <span className="font-bold">Crooked Communication (positive communication followed by a negative remark):</span>
            <span className="block mt-2">
              This is communication that appears positive on the surface but has a hidden negative message. For example, saying “You’re remarkably skilled for someone your age” might seem like a compliment, but it subtly implies that the person’s age is a limitation. Crooked communications appear like compliments but harbor secret barbs.
            </span>
          </li>
          <li>
            <span className="font-bold">Plastic Communication (comments given as a ritual):</span>
            <span className="block mt-2">
              These are compliments wrapped in cellophane—shiny but hollow. They are given without genuine feeling or intention. “Great job!” they say, while yawning internally.
            </span>
          </li>
          <li>
            <span className="font-bold">Zero Communication (absence of communication when it is expected):</span>
            <span className="block mt-2">
              This is the absence of any feedback, positive or negative. It can make the recipient feel ignored or invisible, which can be detrimental to their motivation and engagement. Examples: Ignoring a greeting, not responding to messages, avoiding eye contact, withholding information on purpose or by default, overlooking contributions such as saying thank-you, and other instances where communication is expected but not received.
            </span>
          </li>
        </ol>
      </section>

      {/* Anecdote */}
      <section className="max-w-3xl mx-auto py-8 px-4 text-gray-700 text-lg leading-relaxed border-b border-gray-200">
        <p className="mb-4">
          I was a speaker at the Texas Municipal League annual conference speaking on the subject ‘Communication Mishaps’. I was discussing the zero-communication mishap, emphasizing the importance of greeting people in the morning with voice, handwave, or eye contact. A city manager stood up quite indignantly and said, “That is a bunch of bull! When I arrive at work, all I want to do is work”.
        </p>
        <p className="mb-4">
          I then asked the audience how they would react to his workplace entry. Many shared their thoughts, saying things like:
        </p>
        <ul className="list-disc pl-8 mb-4 space-y-2">
          <li>“If you don’t acknowledge me, I will do my best to avoid you the rest of the day.”</li>
          <li>“I feel no respect and that gets me off to a bad start.”</li>
          <li>“I will be spending my time planning on making you say something, even if it is negative.”</li>
        </ul>
        <p>
          The city manager listened for about 10 minutes to the crowd’s comments and later told me it was a valuable lesson for him.
        </p>
      </section>

      {/* Reflection */}
      <section className="max-w-3xl mx-auto py-8 px-4 text-gray-700 text-lg leading-relaxed border-b border-gray-200">
        <p>
          Are you making any of these communication mishaps? Your key employees are most likely being recruited by other organizations. Give them a lot of reasons to stay where they are.
        </p>
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
