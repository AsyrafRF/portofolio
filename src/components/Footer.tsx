export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 mt-32">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} Asyraf Rais Fadhil
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/AsyrafRF"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/asyraf-rais-fadhil/"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:asrafrf@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
