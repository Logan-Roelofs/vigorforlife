"use client";
import React, { useMemo } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type ResourceCard = {
  title: string;
  description: string;
  link: string;
};

const resourceCards: ResourceCard[] = [
  {
    title: "Jim’s Gems",
    description:
      "Jim’s Gems: 30 Thought Provoking Aphorisms ~ Life is a tapestry woven with threads of principles—those quiet compass points that guide us. Now, imagine these principles as gemstones—each one multifaceted, gleaming with wisdom. Welcome to JIM’S GEMS—a treasury of...",
    link: "/resources/jims-gems",
  },
  {
    title: "Navigating Effective Communication with DISC",
    description:
      "Have you ever been mismanaged? Have you been guilty of mismanaging one of your employees? The answer is almost always yes! In dealing with workplace issues, I frequently hear stories like the following. See if you can relate. Georgina is extremely frustrated. She...",
    link: "/resources/navigating-effective-communication-with-disc",
  },
  {
    title: "Dealing with a Difficult Employee",
    description:
      "An out-of-place employee (not a good fit for the job) creates a high level of relationship tension within their sphere of influence. I am not talking about the occasional tiffs and misunderstandings that are a normal part of work. The difficult employee’s peers spend...",
    link: "/resources/dealing-with-a-difficult-employee",
  },
  {
    title: "Being Liked is Essential for Being Effective",
    description:
      "A manager or supervisor who maintains a good relationship with their staff will be about 50% more productive than one who has a poor relationship with their team. A Forbes magazine article revealed an interesting survey, which concluded that the most important part of...",
    link: "/resources/being-liked-is-essential-for-being-effective",
  },
  {
    title: "3 Biggest Mistakes in Office Communication",
    description:
      "In the bustling corridors of office life, communication isn’t just a bridge—it’s the very air we breathe.  Communication is key in any relationship. But in the workplace, miscommunication can be deadly to a professional relationship — and more so, to an organization...",
    link: "/resources/3-biggest-mistakes-in-office-communication",
  },
  {
    title: "Retaining Top Talent Amid Economic Challenges",
    description:
      "You never imagined it could happen to your business, but it has. A long-term employee is handing in her letter of resignation. Immediately you realize her value to the success of the operation.  This happened to the owner of a real estate company.  His top producer...",
    link: "/resources/retaining-top-talent-amid-economic-challenges",
  },
  {
    title: "From Micromanagement to Mentoring",
    description:
      "Here are the topics discussed in this Question-and-Answer style article: The Cost of Employee Disengagement The Difference between Mentoring and Coaching The 5 Attributes of Great Mentors/Coaches Determine Who Needs a Coach Where to Find a Coach Free of Charge  Q....",
    link: "/resources/from-micromanagement-to-mentoring",
  },
];

// Helper to chunk array into groups of 3
function chunkArray(arr: ResourceCard[], size: number): ResourceCard[][] {
  const result: ResourceCard[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

// Custom hook to detect breakpoints
function useResponsiveChunkSize() {
  const [chunkSize, setChunkSize] = React.useState(1);

  React.useEffect(() => {
    function updateChunkSize() {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setChunkSize(3); // lg and up
      } else if (window.matchMedia("(min-width: 640px)").matches) {
        setChunkSize(2); // sm and up
      } else {
        setChunkSize(1); // mobile
      }
    }
    updateChunkSize();
    window.addEventListener("resize", updateChunkSize);
    return () => window.removeEventListener("resize", updateChunkSize);
  }, []);

  return chunkSize;
}

export default function ResourcesPage() {
  const chunkSize = useResponsiveChunkSize();
  const cardGroups = useMemo(() => chunkArray(resourceCards, chunkSize), [chunkSize]);

  // Determine grid columns for current chunk size
  const gridCols =
    chunkSize === 3
      ? "grid-cols-3"
      : chunkSize === 2
        ? "grid-cols-2"
        : "grid-cols-1";

  return (
    <div className="flex flex-col">
      {/* Page Title */}
      <section className="max-w-3xl mx-auto py-10 px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-0 text-gray-800">Recources</h1>
      </section>
      {/* Books Side-by-Side Section */}
      <section className="w-full flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-stretch py-12 px-4">
        {/* Book 1: The 7 Deadly Mistakes Managers Make */}
        <div className="flex-1 max-w-xl bg-white rounded-xl p-8 flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-gray-800">
            The 7 Deadly Mistakes Managers Make
          </h2>
          <Image
            src="static/The-7-deadly-mistakes-managers-make.png"
            alt="The 7 Deadly Mistakes Managers Make book cover"
            width={192}
            height={256}
            className="w-48 h-auto rounded-lg shadow mb-6"
          />
          <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700 mb-4">
            Every manager, seasoned or aspiring, should delve into “The 7 Deadly Mistakes Managers Make.” It’s not just a recommendation; it’s essential reading.
            <br />
          </blockquote>

          <p className="text-lg text-gray-600 mb-8">
            This report isn’t just informative; it’s a treasure trove of modern managerial wisdom. Click below to grab your free copy and level up your management game!
          </p>
          <Button className="px-8 py-4 text-lg font-semibold shadow-lg mb-2" asChild>
            <a href="static/The-7-deadly-mistakes-managers-make.pdf" target="_blank" rel="noopener noreferrer">
              DOWNLOAD THE FREE REPORT NOW!
            </a>
          </Button>

        </div>

        {/* Book 2: 9 Points of Influence for City Managers */}
        <div className="flex-1 max-w-xl bg-white rounded-xl p-8 flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-gray-800">
            9 Points of Influence for City Managers
          </h2>
          <Image
            src="static/9-Points-of-influence-for-city-managers.jpg"
            alt="9 Points of Influence for City Managers book cover"
            width={192}
            height={256}
            className="w-48 h-auto rounded-lg shadow mb-6"
          />
          <p className="text-lg text-gray-600 mb-2">
            Imagine a workplace where colleagues genuinely like each other. It’s not an idealistic dream; it’s a reality waiting to unfold. When co-workers sense goodwill and positive vibes, they thrive. Learn how to create that ripple effect using the practical skills shared in this eBook.
          </p>
          <p className="text-gray-600 text-base mb-8">
            Although this book is specific to city managers, the principles are the same for any manager. Just getting one idea out of it can be a game changer.
          </p>
          {/* Amazon Button at Bottom */}
          <Button className="px-8 py-4 text-lg font-semibold shadow-lg mb-2" asChild>
            <a
              href="https://a.co/d/eaObs2r"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Amazon
            </a>
          </Button>
        </div>
      </section>

      {/* Featured Resources Carousel Section */}
      <section className="w-full max-w-6xl mx-auto py-8 px-16 sm:py-12 sm:px-12 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Featured Resources</h2>
        <Carousel className="w-full">
          <CarouselContent>
            {cardGroups.map((group: ResourceCard[], idx: number) => (
              <CarouselItem key={idx}>
                <div className={`grid gap-6 ${gridCols}`}>
                  {group.map((card: ResourceCard, cardIdx: number) => (
                    <div className="p-1" key={cardIdx}>
                      <div className="flex aspect-square items-center justify-center p-4 bg-white rounded-xl text-center w-full border border-gray-200">
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-gray-900">{card.title}</h3>
                          <p className="text-gray-600 mb-4">{card.description}</p>
                          <Link
                            href={card.link}
                            className="text-primary font-semibold underline hover:text-primary/80 transition"
                          >
                            read more        </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

    </div>
  );
}
