import React from "react";

export default function SuccessStoriesPage() {
  return (
    <div className="flex flex-col">
      <section className="max-w-3xl mx-auto py-20 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-800">
          Success Stories
        </h1>
      </section>

      {/* Story 1 */}
      <section className="max-w-3xl mx-auto py-12 px-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Retail Hardware Store vs. National Home Center
        </h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-1">Challenge</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            The owner of a hardware store was facing a projected 40% drop in market share because a national chain box store was scheduled to open about 2 blocks away. Losing 40% of their market share would most likely put them out of business.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-1">Solution</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            We reorganized his staff of 75 so they fit their positions well. Some of the managers were reassigned to different jobs and staff with a better fit were promoted to manager positions. Managers were given training on how to communicate effectively and improve their influence. Everyone participated in a comprehensive customer relations training program. Another consultant assisted in improving workflow and processes.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-1">Results</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            One year later the owner reported that they had lost 10% of their market share and had a 17% increase per sales transaction. They survived and were positioned to gain market share, and they did!
          </p>
        </div>
        <a
          href="/unlocking-team-dynamics"
          className="text-primary font-semibold underline hover:text-primary/80 transition"
        >
          Learn More About Our Training
        </a>
      </section>

      {/* Story 2 */}
      <section className="max-w-3xl mx-auto py-12 px-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Home Builder CEO Hires the Right Manager
        </h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-1">Challenge</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            A home builder wanted to find a person who would match well with him, be a self-starter and enjoy the work.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-1">Solution</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Two candidates had potential to meet the needs of the position. Each one responded to the Talent Insights® report which provides an excellent view of behavior (DISC) and Driving Forces. Their scores were compared to the job benchmark for a near fit. In-person interviewing provided additional information and other aspects of hiring were employed.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-1">Results</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            The best person emerged as the ideal candidate. The choice worked out well. A year later she received an annual increase in salary of $25,000.00!
          </p>
        </div>
      </section>

      {/* Story 3 */}
      <section className="max-w-3xl mx-auto py-12 px-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Star Performer Regains Footing
        </h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-1">Challenge</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            A supply chain management company was down to their last bit of patience with a star performer who was excellent with customers but horrible with teammates. His manager said, “He changes to become a team player, or he is out the door—fired!” Our coaching intervention was his last chance.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-1">Solution</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Through a series of meetings, we discovered that he was suffering from a chronic pain condition. His medical doctor had advised him to share details about his injury and pain with his peers to foster understanding. However, this approach proved ineffective. He decided to abandon the plan of explaining his pain, and I worked with him to help him become more relatable to others.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-1">Results</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Within three months, he had become part of the work culture. He was accepted as part of the group. After three years, he was still performing well with customers and his teammates.
          </p>
        </div>
        <a
          href="/conflict-management"
          className="text-primary font-semibold underline hover:text-primary/80 transition"
        >
          Learn More About Our Coaching
        </a>
      </section>

      {/* Testimonial */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Conflict Resolution</h2>
        <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700 mb-4">
          “Jim brings a fresh and objective third party look at everything from new hire candidates to inter-company development and future planning. I consider him a valuable resource to our operation.”
          <br />
          <span className="block mt-2 font-semibold text-gray-600">R.M.-Loadcraft Industries</span>
        </blockquote>
        <p className="text-gray-600 text-lg leading-relaxed mt-6">
          People Smart Tools will help your company find solutions to current challenges and discover unusual possibilities for growth. Results you can expect from our services are improved workplace morale and productivity, less conflict, and better ways to accurately assess, develop and retain top talent.
        </p>
      </section>
    </div>
  );
}
