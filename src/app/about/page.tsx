export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          About APIS
        </h1>

        <p className="text-xl text-blue-600 font-semibold">
          APIS – Advanced Pharma IT Services
        </p>

        <p className="mt-2 text-lg text-gray-600">
          From Learning to Leadership
        </p>

        <p className="mt-4 text-sm text-gray-500">
          Established on 14 September 2024
        </p>
      </div>

      {/* Introduction */}
      <section className="mb-12">
        <p className="text-lg leading-8 text-gray-700">
          APIS (Advanced Pharma IT Services) is a professional training
          institute dedicated to empowering students and professionals with
          industry-relevant knowledge and practical skills in pharmaceutical,
          clinical research, healthcare, and emerging technology domains.
        </p>

        <p className="mt-6 text-lg leading-8 text-gray-700">
          At APIS, we believe that education should go beyond theory. Our
          training programs are designed to bridge the gap between academic
          learning and industry expectations through practical learning,
          real-world case studies, hands-on exercises, and career-focused
          guidance.
        </p>
      </section>

      {/* Courses */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">
          Training Programs We Offer
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Pharmacovigilance",
            "Clinical Research",
            "Clinical Data Management (CDM)",
            "Clinical SAS",
            "Medical Coding",
            "Regulatory Affairs",
            "Materiovigilance",
            "Pharma AI",
          ].map((course) => (
            <div
              key={course}
              className="p-4 border rounded-lg bg-gray-50"
            >
              {course}
            </div>
          ))}
        </div>

        <p className="mt-6 text-lg leading-8 text-gray-700">
          Our programs are designed to help learners understand industry
          workflows, strengthen technical and professional skills, and build
          confidence for career opportunities in pharmaceutical,
          biotechnology, healthcare, and life sciences sectors.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="p-6 rounded-xl bg-blue-50 border">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-7">
            To provide high-quality, industry-oriented education that equips
            learners with practical knowledge, professional skills, and the
            confidence needed to succeed in the pharmaceutical and healthcare
            industries.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-green-50 border">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-7">
            To become a trusted learning platform that transforms aspiring
            learners into skilled professionals and future leaders in the
            pharmaceutical, healthcare, and life sciences sectors.
          </p>
        </div>
      </section>

      {/* Why APIS */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">
          What Makes APIS Different?
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Industry-Relevant Curriculum",
            "Practical Learning Approach",
            "Real-World Case Studies",
            "Expert-Led Training Sessions",
            "Resume Building Support",
            "Mock Interview Preparation",
            "Career Guidance",
            "Placement Guidance",
            "Professional Skill Development",
            "Flexible Learning Opportunities",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 p-3 border rounded-lg"
            >
              <span className="text-green-600 font-bold">✔</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Who Can Join */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Who Can Join?</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "B.Pharm Graduates",
            "M.Pharm Graduates",
            "Pharm.D Graduates",
            "B.Sc Life Sciences Graduates",
            "M.Sc Life Sciences Graduates",
            "Biotechnology Graduates",
            "Healthcare and Allied Health Professionals",
            "Freshers and Working Professionals",
          ].map((item) => (
            <div
              key={item}
              className="p-3 border rounded-lg bg-gray-50"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Commitment */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>

        <p className="text-lg leading-8 text-gray-700">
          At APIS, our goal is not only to teach concepts but also to help
          learners develop the skills, knowledge, and professional mindset
          required to excel in today's evolving pharmaceutical and healthcare
          industries.
        </p>
      </section>

      {/* Footer Quote */}
      <div className="text-center border-t pt-10">
        <h3 className="text-2xl font-bold text-blue-600">
          APIS – Advanced Pharma IT Services
        </h3>
        <p className="mt-2 text-lg font-medium">
          From Learning to Leadership
        </p>
        <p className="mt-2 text-gray-600">
          Learn Today. Lead Tomorrow.
        </p>
      </div>
    </div>
  );
}