"use client";

import { motion } from "framer-motion";

export default function ProjectCard({ project }: any) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="
      bg-gray-100 dark:bg-gray-900
      text-black dark:text-white
      rounded-xl overflow-hidden 
      border border-gray-200 dark:border-gray-800
      "
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-gray-800 dark:text-gray-400 text-sm">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t: string) => (
            <span
              key={t}
              className="
              text-xs px-3 py-1
              text-black dark:text-white
              bg-white dark:bg-black 
              border border-gray-700 
              rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-4 text-sm">
          <a
            href={project.demo}
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
