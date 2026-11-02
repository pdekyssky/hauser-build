"use client";

import Image from "next/image";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  onOpen: (project: Project) => void;
};

export default function ProjectCard({
  project,
  featured = false,
  onOpen,
}: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className={`group relative block w-full overflow-hidden text-left ${
        featured ? "aspect-[4/5] md:aspect-[3/4]" : "aspect-[4/3]"
      }`}
      aria-label={`Otvoriť fotografiu: ${project.title}`}
    >
      <div className="img-zoom absolute inset-0">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <p className="text-xs uppercase tracking-[0.16em] text-cream/65">
          {project.categoryLabel}
        </p>
        <p className="mt-1.5 font-display text-lg font-medium text-cream md:text-xl">
          {project.title}
        </p>
        {project.description ? (
          <p className="mt-1.5 max-w-sm text-sm text-cream/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
            {project.description}
          </p>
        ) : null}
      </div>
    </button>
  );
}
