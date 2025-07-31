import React from "react";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function DealingWithADifficultEmployeePage() {
  return (
    <div className="flex flex-col">
      {/* Title */}
      <section className="max-w-3xl mx-auto py-20 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-800">
          Dealing With A Difficult Employee
        </h1>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto py-8 px-4 text-gray-700 text-lg leading-relaxed border-b border-gray-200">
        <p className="mb-4">
          An out-of-place employee (not a good fit for the job) creates a high level of relationship tension within their sphere of influence.
        </p>
        <p className="mb-4">
          I am not talking about the occasional tiffs and misunderstandings that are a normal part of work. The difficult employee’s peers spend a portion of each workday trying to avoid them.
        </p>
        <p className="mb-4">
          In other words, time away from productive work is spent in “silent mental planning” about how to deal with this person!
        </p>
        <p className="mb-4">
          This individual is not respected by other employees. The atmosphere surrounding them is antagonistic. Day after day there is conflict between the inept employee and their peers. This person is making a difference; a negative unproductive one!
        </p>
        <p className="mb-4">
          The misplaced problem employee occurs for two basic reasons: a holdover from the previous manager or the lack of an assessment of skills and attitude needed for the position at the time of hiring.
        </p>
        <p className="mb-4">
          Often a person is appointed to a job because of a special relationship with an influential person. If the appointed person is not subject to the established hiring suitability processes, there is little chance for success.
        </p>
        <p className="mb-4">
          A good example of an unsuccessful appointment is a CEO I know who hired a friend. The new employee’s supervisors shifted him to various positions trying to find a spot where he could be productive and not inflame peers. It took 8 months and several shifts to find a suitable job. Lesson learned. Have all potential employees go through the established hiring protocols to determine viability.
        </p>
        <p className="mb-4">
          <span className="font-semibold">What do you do about the difficult employee? Here are 3 action steps for remedy:</span>
        </p>
        <ol className="list-decimal pl-6 space-y-3 mb-4">
          <li>
            <span className="font-semibold">Acknowledge</span>—Many times because of a sense of fairness or for political reasons managers have a hard time acknowledging that the unsuited employee does not fit the needs of the job. Acknowledgement is taking the first step.
          </li>
          <li>
            <span className="font-semibold">Evaluate</span>—Appraise the misplaced person as a new hire. Determine their soft skills. Use a validated assessment to provide objective information about their temperament (how they go about work), values (worldview, the why of their actions) and personal skills (what they are capable of). Also appraise their hard skills such as computer programs, certifications, or special equipment mastery. Determine if they could be reassigned to a job that fits their competencies.
          </li>
          <li>
            <span className="font-semibold">Coach</span>—Mentor the reassigned employee for up to 6 months (studies show that coaching accelerates success). Create a plan for personal development. Meet with them and assist in the process.
          </li>
        </ol>
        <p className="mb-4">
          According to Jim Collins, author of the book “Good to Great”, getting the right people in job positions is mandatory for an organization to reach its potential. The right team has less relationship tension, has a ‘we can do it’ attitude and enjoys work.
        </p>
        <p className="mb-4">
          Sometimes it is best to terminate the problem employee if they cannot be reassigned. A City Manager I was consulting with had an employee who was just not working out. The employee was not a team player, would not follow directives, created dissension daily and had no intention of trying to make things better. His peers were upset most of the time and were looking for other jobs.
        </p>
        <p className="mb-4">
          The City Manager made the right choice and let him go. About eight months later, I saw the former employee and asked how he was faring. He informed me that he had found a new job that paid more money, and he liked his manager. He told me it was good to have been fired from his old job. The person that took his former position was delighted to have the job, was a team player and strove to do his best. Everyone won!
        </p>
        <p className="mb-4">
          In the intricate dance of management, there’s a delicate step that often gives managers pause—the decision to let go of an underperforming employee. Sometimes even reluctant managers find themselves nudged toward action by the affected team. It’s okay—and often necessary—to reassign or bid farewell to someone who doesn’t meet expectations.
        </p>
        <p className="mb-4">
          That difficult employee—the one who doesn’t quite fit the job—creates discord, tension, stress, and affects morale. The cost of doing nothing is high; employees quitting, disengaged employees, and a lack of team motivation.
        </p>
        <p className="mb-4">
          <span className="font-semibold">Do you have an out-of-place employee? What are you going to do about it?</span>
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
