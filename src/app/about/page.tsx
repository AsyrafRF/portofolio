import { profile } from "@/data/profile";

export default function AboutPage() {
  return (
    <section id="about" className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-3">About</h2>
      <p className="text-gray-300">{profile.bio}</p>
    </section>
  );
}
