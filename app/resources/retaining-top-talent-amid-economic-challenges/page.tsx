import React from "react";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function RetainingTopTalentPage() {
  return (
    <div className="flex flex-col">
      {/* Title */}
      <section className="max-w-3xl mx-auto py-20 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-800">
          Retaining Top Talent Amid Economic Challenges
        </h1>
      </section>

      {/* Main Content */}
      <section className="max-w-3xl mx-auto py-8 px-4 text-gray-700 text-lg leading-relaxed border-b border-gray-200">
        <div className="space-y-6">
          <p>
            You never imagined it could happen to your business, but it has. A long-term employee is handing in her letter of resignation. Immediately you realize her value to the success of the operation.
          </p>
          <p>
            This happened to the owner of a real estate company. His top producer turned in her letter of resignation. Shocked, he told her, “You make a lot of money, drive the nicest car; own a beautiful home and vacation three times a year, what could possibly be missing?” She commented, “You never talk to me!” The stunned broker replied, “You don’t need my help, you can do it all!” She wanted to be more than a money producer for the company.
          </p>
          <p>
            The owner took the initiative. During the next two weeks, he was sitting in her office when she came to work. He asked about her family, what she liked to do for fun, the real estate deals she was working on, and her hopes for the future. Content with the change, she withdrew her resignation. Retention is more about relationships and less about money.
          </p>
          <p>
            Underappreciated high performing employees have more work options than ever before. Even amid economic challenges, high quality employees are in demand, and they know it. I recently asked the department head of a city electric department if anyone was contacting him to come to work for them. He replied, “all the time.” Retaining top talent is a key strategy for your organization to survive now and thrive in the future.
          </p>
          <p>
            It costs over one year’s salary to replace an executive according to the book “Impending Crisis—Too Many Jobs, Too Few People” authored by Roger Herman. Other job examples show a similar percentage. A co-presenter and I were speaking at an HR Conference, and he claimed that it costs up to three years salary to replace an attorney. His law firm has a defined employee retention strategy designed to protect their investment.
          </p>
          <p>
            A key employee retention strategy is to conduct a stay interview. It opens discussion about their job satisfaction. Now is a good time to conduct an interview with top performers. Ask questions about relationships, compensation, training, intentions and special needs. There is a worldwide shortage of key players in business and government. Their best source for hiring good employees is to lure them away from their present employer. A stay interview keeps key employees in place.
          </p>
          <p>
            A major factor that determines whether an employee stays or leaves is their relationship with their immediate supervisor and higher management. Listed below are three retention strategies managers need to execute routinely to meet the relational needs of their staff.
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-gray-800">
            <li>
              <span className="font-semibold">Start the day with positive energy.</span> Greet all employees when they first arrive. Being cordial and not in a hurry shows that you care. Ignoring employees gives them a subtle incentive to not do their best that day. I’ve discussed this idea dozens of times in my workshops. One time a boss made the mistake of making the comment “I do not have time to acknowledge everyone when I arrive”. The workshop attendees pounced on him and made my point; it sets their inspiration tone for the day. They want to be acknowledged at the beginning of the workday.
            </li>
            <li>
              <span className="font-semibold">Close the communication loop.</span> When you know something the employee doesn’t know, the communication loop is open. Managers who excel in closing the communication loop are highly regarded and receive deep loyalty from their employees. Timely communication of changes, acknowledging feelings, validating good practices, demonstrating appreciation, keeping promises and sincere encouragement strengthens the relationship bond, making it harder for another company to steal away a good employee.
            </li>
            <li>
              <span className="font-semibold">Provide regular feedback.</span> An employee’s contribution to the overall work mission and their performance must be recognized. Employees carry a big sign that reads “HOW AM I DOING?” They are eager to do a good job and covet feedback that is encouraging and constructive. When correction is needed, talk about the process not them.
            </li>
          </ol>
          <p>
            The old cliché “People join companies and leave bosses” is still true. At this very moment, your key employees are most likely being recruited by other organizations. Give them a lot of reasons to stay where they are.
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
