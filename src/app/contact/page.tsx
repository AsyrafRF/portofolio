import { profile } from "@/data/profile";

export default function ContactPage() {
  return (
    <section id="contact" className="p-8 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p>Email: <a className="text-blue-400" href={`mailto:${profile.email}`}>{profile.email}</a></p>
      <p className="mt-2">
        LinkedIn: <a className="text-blue-400" href={profile.linkedin} target="_blank">View Profile</a>
      </p>
      <p className="mt-2">
        GitHub: <a className="text-blue-400" href={profile.github} target="_blank">View GitHub</a>
      </p>
    </section>
  );
}
