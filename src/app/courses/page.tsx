import { courses } from "@/data/courses";
import CourseCard from "@/components/courses/course-card";

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-20">

      <h1 className="text-5xl font-bold text-center mb-12">
        All Courses
      </h1>

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
  );
}