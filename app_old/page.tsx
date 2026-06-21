import Hero from "@/components/home/hero";
import CourseCard from "@/components/courses/course-card";
import SectionHeading from "@/components/ui/section-heading";

const courses = [
  {
    title: "Pharmacovigilance",
    image: "/images/courses/pharmacovigilance.jpg",
  },
  {
    title: "Clinical Research",
    image: "/images/courses/clinical-research.jpg",
  },
  {
    title: "Clinical Data Management",
    image: "/images/courses/clinical-data-management.jpg",
  },
  {
    title: "Clinical SAS",
    image: "/images/courses/clinical-sas.jpg",
  },
  {
    title: "Medical Coding",
    image: "/images/courses/medical-coding.jpg",
  },
  {
    title: "Regulatory Affairs",
    image: "/images/courses/regulatory-affairs.jpg",
  },
  {
    title: "Materiovigilance",
    image: "/images/courses/materiovigilance.jpg",
  },
  {
    title: "Pharma AI",
    image: "/images/courses/pharma-ai.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-24 container mx-auto px-4">

        <SectionHeading
          title="Welcome to APIS"
          subtitle="Industry-focused pharmaceutical and healthcare training programs."
        />

        <div className="max-w-4xl mx-auto text-center text-gray-600 leading-8">
          APIS empowers students, graduates and professionals
          with practical pharmaceutical and healthcare industry
          skills through expert-led online training programs.
        </div>

      </section>

      <section className="bg-slate-50 py-24">

        <div className="container mx-auto px-4">

          <SectionHeading
            title="Our Courses"
            subtitle="Explore our specialized pharma and healthcare training programs."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {courses.map((course) => (
              <CourseCard
                key={course.title}
                title={course.title}
                image={course.image}
              />
            ))}

          </div>

        </div>

      </section>

      <section className="py-24">

        <div className="container mx-auto px-4">

          <SectionHeading
            title="Why Choose APIS?"
          />

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Industry-Oriented Curriculum",
              "Expert Trainers",
              "Practical Learning",
              "Resume Building",
              "Mock Interviews",
              "Career Guidance",
            ].map((item) => (
              <div
                key={item}
                className="bg-white shadow-lg rounded-2xl p-8 text-center"
              >
                <h3 className="font-semibold text-xl">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-24">

        <div className="container mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Pharma Career?
          </h2>

          <p className="mb-8 text-lg">
            Join APIS and gain industry-ready skills.
          </p>

          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold">
            Enroll Now
          </button>

        </div>

      </section>
    </>
  );
}