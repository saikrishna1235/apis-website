type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="text-center mb-12">

      <h2 className="text-4xl font-bold mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}

    </div>
  );
}