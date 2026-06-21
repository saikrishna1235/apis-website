import Image from "next/image";
import { courses } from "@/data/courses";
import { notFound } from "next/navigation";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const course = courses.find(
    (item) => item.slug === slug
  );

  if (!course) {
    return notFound();
  }

  // your existing JSX below...

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[450px] flex items-center justify-center">
  <Image
    src={course.image}
    alt={course.title}
    fill
    className="object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-green-900/70" />

  <div className="relative z-10 text-center text-white max-w-4xl px-6">
    <span className="bg-green-500/20 border border-green-400 px-4 py-2 rounded-full text-sm">
      APIS Professional Program
    </span>

    <h1 className="text-5xl md:text-7xl font-bold mt-6 mb-6">
      {course.title}
    </h1>

    <p className="text-xl text-slate-200">
      {course.shortDescription}
    </p>
  </div>
</section>
      {/* COURSE OVERVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-20">
  <div className="bg-white rounded-3xl shadow-xl p-10">
    <h2 className="text-3xl font-bold mb-6">
      Course Overview
    </h2>

    <p className="text-slate-600 leading-8">
      {course.introduction}
    </p>
  </div>
</section>
      {/* MODULES */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
  <h2 className="text-4xl font-bold mb-10">
    Course Modules
  </h2>

  <div className="space-y-6">
    {course.modules.map((module: any) => (
      <div
        key={module.title}
        className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8"
      >
        <h3 className="text-xl font-bold text-blue-700 mb-4">
          {module.title}
        </h3>

        <ul className="grid md:grid-cols-2 gap-3">
          {module.topics.map((topic: string) => (
            <li
              key={topic}
              className="flex items-center gap-3"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              {topic}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>
      {/* PRACTICAL TRAINING */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
  <h2 className="text-4xl font-bold mb-10">
    Practical Training
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {course.practicalTraining.map((item) => (
      <div
        key={item}
        className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border"
      >
        ✅ {item}
      </div>
    ))}
  </div>
</section>
      {/* INTERVIEW PREPARATION */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
  <h2 className="text-4xl font-bold mb-10">
    Interview Preparation
  </h2>

  <div className="grid md:grid-cols-2 gap-6">
    {course.interviewPreparation.map((item) => (
      <div
        key={item}
        className="bg-slate-50 rounded-xl p-6 border-l-4 border-blue-600"
      >
        🎯 {item}
      </div>
    ))}
  </div>
</section>
      {/* OUTCOME */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
  <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-3xl p-10">
    <h2 className="text-3xl font-bold mb-6">
      What You'll Achieve
    </h2>

    <p className="text-lg leading-8">
      {course.outcome}
    </p>
  </div>
</section>
      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
  <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-16 text-center text-white">
    <h2 className="text-4xl font-bold mb-6">
      Ready to Build Your Career?
    </h2>

    <p className="text-xl mb-8">
      Join APIS and become industry-ready.
    </p>

    <button className="bg-white text-blue-700 px-10 py-4 rounded-xl font-semibold">
      Enroll Now
    </button>
  </div>
</section>
    </>
  );
}