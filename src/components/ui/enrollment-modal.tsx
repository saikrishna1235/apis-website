"use client";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function EnrollmentModal({
  isOpen,
  onClose,
}: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]">

      <div className="bg-white rounded-2xl p-8 w-full max-w-lg relative">

        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold mb-6">
          Enroll Now
        </h2>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg"
          />

          <select className="w-full border p-3 rounded-lg">
            <option>Select Course</option>
            <option>Pharmacovigilance</option>
            <option>Clinical Research</option>
            <option>Clinical SAS</option>
            <option>Clinical Data Management</option>
            <option>Medical Coding</option>
            <option>Regulatory Affairs</option>
            <option>Materiovigilance</option>
            <option>Pharma AI</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Submit
          </button>

        </form>

      </div>

    </div>
  );
}