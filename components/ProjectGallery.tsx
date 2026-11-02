"use client";

import { useMemo, useState } from "react";
import {
  projectCategories,
  projects,
  type Project,
  type ProjectCategory,
} from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import Lightbox from "./Lightbox";

type ProjectGalleryProps = {
  showFilters?: boolean;
  limit?: number;
  category?: ProjectCategory;
  className?: string;
};

export default function ProjectGallery({
  showFilters = false,
  limit,
  category,
  className = "",
}: ProjectGalleryProps) {
  const [active, setActive] = useState<"all" | ProjectCategory>(
    category ?? "all"
  );
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    let list =
      active === "all" ? projects : projects.filter((p) => p.category === active);
    if (category && !showFilters) {
      list = projects.filter((p) => p.category === category);
    }
    if (typeof limit === "number") {
      list = list.slice(0, limit);
    }
    return list;
  }, [active, category, limit, showFilters]);

  return (
    <div className={className}>
      {showFilters ? (
        <div
          className="mb-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter realizácií"
        >
          {projectCategories.map((cat) => {
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat.id)}
                className={`border px-4 py-2 text-sm transition-colors ${
                  isActive
                    ? "border-ink bg-ink text-cream"
                    : "border-ink/15 text-ink-muted hover:border-ink/40 hover:text-ink"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      ) : null}

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-5">
        {filtered.map((project, index) => (
          <div
            key={project.id}
            className={`mb-4 break-inside-avoid lg:mb-5 ${
              index % 5 === 0 ? "sm:mt-8" : ""
            }`}
          >
            <ProjectCard
              project={project}
              featured={index % 3 === 0}
              onOpen={setSelected}
            />
          </div>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="border border-ink/10 px-6 py-12 text-center text-ink-muted">
          V tejto kategórii zatiaľ nie sú zaradené fotografie. Čoskoro doplníme
          reálne realizácie.
        </p>
      ) : null}

      <Lightbox
        open={Boolean(selected)}
        src={selected?.image.src ?? ""}
        alt={selected?.image.alt ?? ""}
        title={selected?.title}
        caption={
          selected
            ? `${selected.categoryLabel}${selected.description ? ` — ${selected.description}` : ""}`
            : undefined
        }
        onClose={() => setSelected(null)}
      />
    </div>
  );
}
