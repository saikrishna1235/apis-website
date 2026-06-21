import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  image: string;
  slug: string;
};

export default function CourseCard({
  title,
  image,
  slug,
}: Props) {
  return (
    <Link href={`/courses/${slug}`}>

      <div
        className="
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-500
        hover:-translate-y-3
        group
        "
      >

        <div className="relative h-56 overflow-hidden">

          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width:768px) 100vw, 33vw"
            className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
            "
          />

        </div>

        <div className="p-6">

          <h3
            className="
            font-bold
            text-xl
            text-slate-800
            group-hover:text-blue-700
            transition-colors
            "
          >
            {title}
          </h3>

          <p className="text-slate-500 text-sm mt-2">
            Industry-focused professional training program
          </p>

          <div
            className="
            mt-4
            text-blue-700
            font-semibold
            group-hover:translate-x-2
            transition-transform
            "
          >
            View Course →
          </div>

        </div>

      </div>

    </Link>
  );
}