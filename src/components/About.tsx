import Section from "./Section";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <Section id="about" title="About Me">
      <p className="text-gray-300 leading-relaxed max-w-3xl">
        {profile.bio}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {[
          "Next.js",
          "React",
          "Node.js",
          "PostgreSQL",
          "Docker",
          "Linux",
        ].map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-gray-900 rounded-full text-sm text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </Section>
  );
}
