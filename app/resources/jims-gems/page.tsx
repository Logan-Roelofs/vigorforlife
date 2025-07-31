import React from "react";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function JimsGemsPage() {

  return (
    <div className="flex flex-col">
      {/* Title */}
      <section className="max-w-3xl mx-auto py-20 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-800">
          Jim’s Gems: <span className="block text-3xl font-semibold mt-2">30 Thought Provoking Aphorisms</span>
        </h1>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto py-8 px-4 text-gray-700 text-lg leading-relaxed border-b border-gray-200">
        <div className="mb-6">
          <p>
            <span className="font-semibold">Life is a tapestry woven with threads of principles</span>—those quiet compass points that guide us. Now, imagine these principles as gemstones—each one multifaceted, gleaming with wisdom. Welcome to JIM’S GEMS — a treasury of concise, impactful aphorisms, distilled into potent drops of insight.
          </p>
          <p className="mt-4">
            <span>
              You can also <span className="font-semibold">download these gems as a convenient PDF</span> to keep or share.
            </span>
          </p>
          <div className="mt-4">
            <Button asChild>
              <a href="static/jims-gems.pdf" target="_blank" rel="noopener noreferrer" download>
                Download or Print PDF
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Aphorisms List */}
      <section className="max-w-3xl mx-auto py-8 px-4 border-b border-gray-200">
        <ol className="list-decimal pl-6 space-y-3 text-gray-800 text-lg">
          <li>The price for success is not negotiable, the price is the price.</li>
          <li>Personal energy management is about avoiding strife, comparison, jealousy and adding unlimited forgiveness and mercy.</li>
          <li>When we habitually blame someone else, we become a victim.</li>
          <li>Over commitment reduces the quality of your life and those around you.</li>
          <li>Failing to keep your promises reduces influence and lessens trust.</li>
          <li>Perfection blocks inspiration.</li>
          <li>Humility is considering other people as more important than yourself.</li>
          <li>Someone else’s drama is not your drama, do not buy into it.</li>
          <li>Careful steady effort with hope wins life’s battles.</li>
          <li>Focusing on today’s tasks without regard for the future increases the value of your day. Be in the present, it’s a present.</li>
          <li>If you tolerate bad behavior without dissent, you are signaling the offense is acceptable.</li>
          <li>Improve your revenue quickly with a customer contact point survey. Maximize all those points in favor of the customer.</li>
          <li>Frame your story before you tell it. Set the scene from the beginning, such as, “In my hometown, when I was 15 . . .”</li>
          <li>Teach your inner coach to be your best advocate.</li>
          <li>Ten business owners unanimously concluded: “Maintaining workplace morale includes reassigning or firing poor performers”.</li>
          <li>Encouragement is the jet fuel that starts a mind shift in others.</li>
          <li>Validate good ideas, question assumptions in yourself and others.</li>
          <li>Your good idea today will be a better idea tomorrow. Override your need to act today and be amazed at your new improved perspective.</li>
          <li>Doubt is your real enemy, replace it with action.</li>
          <li>Your mistakes are not catastrophic; play down the drama, play up the possibility.</li>
          <li>Your health is a privilege, not a right. Be intentional about your health practices.</li>
          <li>Giving people attention plus acknowledging their attributes will greatly improve your influence.</li>
          <li>On-boarding new leaders optimally is about creating synergy and defining expectations.</li>
          <li>Look at organizational development as an ecologist looks at the natural environment. Everything is connected to everything. Make changes after asking, “How will this affect . . .?”</li>
          <li>Criticism is painful to receive; however, ask yourself, “Is there a grain of truth in the assertions?” If so, admit fault and seek a remedy.</li>
          <li>Complaining can become a habit. When someone complains, teach them you will listen to the complaint as long as they bring a potential remedy with it.</li>
          <li>When you need to disagree with a person, disagree with their actions not them. For example, “Jim, your rude behavior to the customer wasn’t like you, what’s going on?”</li>
          <li>Money benefits such as salary, paid time off, health insurance, holidays, and bonuses are all spent off the job; money is not a motivator at work.</li>
          <li>The currency of appreciation and inclusion is what drives morale and production on a day to day basis.</li>
          <li>Perfectionism is about avoiding shame and punishment.</li>
        </ol>
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
