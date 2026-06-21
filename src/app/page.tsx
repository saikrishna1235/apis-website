import Hero from "@/components/home/hero";
import CourseCard from "@/components/courses/course-card";
import SectionHeading from "@/components/ui/section-heading";
import { courses } from "@/data/courses";
import Link from "next/link";
export default function HomePage() {
  return (
    <>
      <Hero />

      {/* About Section */}
<section className="py-28 bg-white">

  <div className="container mx-auto px-4">

    <div className="max-w-4xl mx-auto text-center">

      <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-6">
        About APIS
      </span>

      <h2 className="text-5xl font-bold mb-6">
        Empowering Future Pharma Professionals
      </h2>

      <p className="text-xl text-slate-600 leading-9">
        APIS empowers students, graduates, and working professionals
        with practical pharmaceutical and healthcare industry skills
        through expert-led training, real-world projects, and
        career-focused learning.
      </p>

    </div>

    {/* Stats */}
    <div className="grid md:grid-cols-4 gap-8 mt-20">

  <div className="bg-white border rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition">
    <h3 className="text-5xl font-bold text-blue-600">
      8
    </h3>
    <p className="mt-3 text-slate-600">
      Specialized Programs
    </p>
  </div>

  <div className="bg-white border rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition">
    <h3 className="text-5xl font-bold text-green-600">
      100%
    </h3>
    <p className="mt-3 text-slate-600">
      Industry-Oriented Curriculum
    </p>
  </div>

  <div className="bg-white border rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition">
    <h3 className="text-5xl font-bold text-blue-600">
      Live
    </h3>
    <p className="mt-3 text-slate-600">
      Interactive Training Sessions
    </p>
  </div>

  <div className="bg-white border rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition">
    <h3 className="text-5xl font-bold text-green-600">
      Career
    </h3>
    <p className="mt-3 text-slate-600">
      Resume & Interview Support
    </p>
  </div>

</div>

    {/* Features */}
    <div className="grid md:grid-cols-3 gap-8 mt-20">

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8">

        <div className="text-5xl mb-4">
          🎯
        </div>

        <h3 className="font-bold text-2xl mb-3">
          Industry Focused
        </h3>

        <p className="text-slate-600">
          Learn skills aligned with current pharmaceutical
          industry requirements.
        </p>

      </div>

      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8">

        <div className="text-5xl mb-4">
          💼
        </div>

        <h3 className="font-bold text-2xl mb-3">
          Book free demo
        </h3>

        <p className="text-slate-600">
          With APIS
        </p>

      </div>

      <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl p-8">

        <div className="text-5xl mb-4">
          🚀
        </div>

        <h3 className="font-bold text-2xl mb-3">
          Practical Learning
        </h3>

        <p className="text-slate-600">
          Hands-on projects, case studies,
          and real-world industry exposure.
        </p>

      </div>

    </div>

  </div>

</section>

      {/* Courses Section */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Courses"
            subtitle="Explore our specialized pharma and healthcare training programs."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                image={course.image}
                slug={course.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose APIS */}
      <section className="py-24 bg-slate-50">
  <div className="container mx-auto px-4">

    <SectionHeading
      title="Why Choose APIS?"
      subtitle="Industry-focused training designed to make you job-ready."
    />

    <div className="grid md:grid-cols-3 gap-8 mt-12">

      {[
        {
          icon: "📚",
          title: "Industry Curriculum",
          desc: "Designed according to current pharmaceutical industry standards."
        },
        {
          icon: "👨‍🏫",
          title: "Expert Trainers",
          desc: "Learn directly from experienced industry professionals."
        },
        {
          icon: "💼",
          title: "Practical Learning",
          desc: "Real-time case studies and hands-on project experience."
        },
        {
          icon: "📄",
          title: "Resume Building",
          desc: "Professional resume and LinkedIn profile optimization."
        },
        {
          icon: "🎯",
          title: "Mock Interviews",
          desc: "Prepare confidently with industry-focused interview practice."
        },
        {
          icon: "🚀",
          title: "Career Guidance",
          desc: "From APIS"
        },
      ].map((item) => (
        <div
          key={item.title}
          className="
          bg-white
          rounded-3xl
          p-8
          shadow-lg
          hover:shadow-2xl
          hover:-translate-y-2
          transition-all
          duration-300
          border
          border-slate-100
          "
        >

          <div className="text-5xl mb-4">
            {item.icon}
          </div>

          <h3 className="text-xl font-bold text-slate-800 mb-3">
            {item.title}
          </h3>

          <p className="text-slate-500 leading-7">
            {item.desc}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-28">

  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-cyan-600 to-emerald-500" />

  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
  </div>

  <div className="relative z-10 container mx-auto px-4 text-center text-white">

    <span className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm uppercase tracking-wider">
      Career Growth Starts Here
    </span>

    <h2 className="text-5xl md:text-6xl font-bold mt-8 mb-6">
      Ready to Start Your Pharma Career?
    </h2>

    <p className="max-w-2xl mx-auto text-xl text-white/90 mb-10">
      Join APIS and gain industry-ready skills, practical training,
      interview preparation, and career guidance.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-5">

      <Link
        href="/courses"
        className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg"
      >
        Explore Courses
      </Link>

      <Link
        href="/contact"
        className="border border-white px-8 py-4 rounded-full text-white hover:bg-white hover:text-slate-900 transition-all duration-300"
      >
        Contact Us
      </Link>

    </div>

  </div>

</section>
    </>
  );
}