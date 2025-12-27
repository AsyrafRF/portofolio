import Section from "./Section";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-12 md:grid-cols-2">
        {/* CTA & Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Let’s build something great together
          </h3>

          <p className="text-gray-300 dark:text-gray-400 leading-relaxed">
            Tertarik bekerja sama, diskusi project, atau sekadar ngobrol
            seputar teknologi? Jangan ragu untuk menghubungi saya.
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <p>
              📧 Email:{" "}
              <a
                href="mailto:asrafrf@gmail.com"
                className="text-blue-500 hover:underline"
              >
                asrafrf@gmail.com
              </a>
            </p>

            <p>
              💼 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/asyraf-rais-fadhil/"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                linkedin.com/in/asyraf-rais-fadhil
              </a>
            </p>

            <p>
              💻 GitHub:{" "}
              <a
                href="https://github.com/AsyrafRF"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                github.com/AsyrafRF
              </a>
            </p>
          </div>
        </div>

        {/* Form */}
        <ContactForm />
      </div>
    </Section>
  );
}
