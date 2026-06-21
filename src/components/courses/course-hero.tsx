import Image from "next/image";

type Props = {
  title: string;
  image: string;
  description: string;
};

export default function CourseHero({
  title,
  image,
  description,
}: Props) {
  return (
    <section className="relative h-[500px]">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {title}
          </h1>

          <p className="text-lg md:text-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}