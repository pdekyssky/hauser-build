"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";

type FormStatus = "idle" | "loading" | "success" | "error";

type FormErrors = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  locality?: string;
  privacy?: string;
};

const initialValues = {
  name: "",
  phone: "",
  email: "",
  service: "",
  locality: "",
  message: "",
  privacy: false,
  botcheck: "",
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value: string): boolean {
  const digits = value.replace(/[\s\-()/]/g, "");
  return /^(\+421|0)?9\d{8}$/.test(digits) || /^(\+421|0)\d{9}$/.test(digits);
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function validate(): FormErrors {
    const next: FormErrors = {};

    if (!values.name.trim()) {
      next.name = "Vyplňte meno a priezvisko.";
    }

    if (!values.phone.trim()) {
      next.phone = "Vyplňte telefónne číslo.";
    } else if (!isValidPhone(values.phone.trim())) {
      next.phone = "Zadajte platné telefónne číslo (napr. 0948 899 330).";
    }

    if (values.email.trim() && !isValidEmail(values.email.trim())) {
      next.email = "Zadajte platný e-mail alebo pole nechajte prázdne.";
    }

    if (!values.service) {
      next.service = "Vyberte typ služby.";
    }

    if (!values.locality.trim()) {
      next.locality = "Vyplňte lokalitu realizácie.";
    }

    if (!values.privacy) {
      next.privacy = "Pre odoslanie je potrebné potvrdenie.";
    }

    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "loading") return;

    // Honeypot — boti často vyplnia skryté pole
    if (values.botcheck) {
      setStatus("success");
      setValues(initialValues);
      return;
    }

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "Formulár nie je nakonfigurovaný. Chýba Web3Forms Access Key."
      );
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const payload = {
      access_key: accessKey,
      subject: siteConfig.form.subject,
      from_name: values.name.trim(),
      email: values.email.trim() || siteConfig.email,
      replyto: values.email.trim() || undefined,
      // Prehľadné polia v tele e-mailu (Web3Forms ich zahrnie)
      "Meno a priezvisko": values.name.trim(),
      Telefón: values.phone.trim(),
      Email: values.email.trim() || "Neuvedený",
      "Typ služby": values.service,
      "Lokalita realizácie": values.locality.trim(),
      Správa: values.message.trim() || "Bez správy",
      "Prevádzkovateľ dopytu": siteConfig.legalName,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Odoslanie zlyhalo.");
      }

      setStatus("success");
      setValues(initialValues);
      setErrors({});
    } catch {
      setStatus("error");
      setErrorMessage(
        "Správu sa nepodarilo odoslať. Skúste to znova alebo nás kontaktujte telefonicky."
      );
    }
  }

  const inputClass =
    "mt-2 w-full border border-ink/15 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft focus:border-ink/40";
  const labelClass =
    "text-xs font-medium uppercase tracking-[0.14em] text-ink-muted";

  if (status === "success") {
    return (
      <div
        className="border border-ink/10 bg-cream-dark/40 px-6 py-10 md:px-8 md:py-12"
        role="status"
        aria-live="polite"
      >
        <p className="font-display text-xl font-semibold text-ink md:text-2xl">
          Ďakujeme za váš dopyt.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">
          Vaša správa bola úspešne odoslaná. Budeme vás kontaktovať.
        </p>
        <button
          type="button"
          className="mt-8 border border-ink/20 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
          onClick={() => setStatus("idle")}
        >
          Odoslať ďalší dopyt
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative space-y-6">
      <p className="text-sm leading-relaxed text-ink-muted md:text-base">
        Napíšte nám niečo o vašom projekte. Ozveme sa vám a dohodneme ďalší
        postup.
      </p>

      {/* Honeypot — skryté pred používateľmi */}
      <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="botcheck">Nevypĺňajte</label>
        <input
          id="botcheck"
          type="text"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          value={values.botcheck}
          onChange={(e) =>
            setValues((v) => ({ ...v, botcheck: e.target.value }))
          }
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="md:col-span-2">
          <label htmlFor="name" className={labelClass}>
            Meno a priezvisko *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className={inputClass}
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1.5 text-xs text-clay-dark">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Telefónne číslo *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            className={inputClass}
            placeholder="0948 899 330"
            value={values.phone}
            onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone ? (
            <p id="phone-error" className="mt-1.5 text-xs text-clay-dark">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            placeholder="nepovinné"
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-xs text-clay-dark">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="service" className={labelClass}>
            Typ služby *
          </label>
          <select
            id="service"
            name="service"
            className={`${inputClass} appearance-none`}
            value={values.service}
            onChange={(e) =>
              setValues((v) => ({ ...v, service: e.target.value }))
            }
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="">Vyberte službu</option>
            {siteConfig.form.serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service ? (
            <p id="service-error" className="mt-1.5 text-xs text-clay-dark">
              {errors.service}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="locality" className={labelClass}>
            Lokalita realizácie *
          </label>
          <input
            id="locality"
            name="locality"
            type="text"
            className={inputClass}
            placeholder="Napr. Badín"
            value={values.locality}
            onChange={(e) =>
              setValues((v) => ({ ...v, locality: e.target.value }))
            }
            aria-invalid={Boolean(errors.locality)}
            aria-describedby={errors.locality ? "locality-error" : undefined}
          />
          {errors.locality ? (
            <p id="locality-error" className="mt-1.5 text-xs text-clay-dark">
              {errors.locality}
            </p>
          ) : null}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Správa
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={`${inputClass} resize-y min-h-[120px]`}
            placeholder="Stručne o projekte, rozsahu alebo termíne…"
            value={values.message}
            onChange={(e) =>
              setValues((v) => ({ ...v, message: e.target.value }))
            }
          />
        </div>
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-ink-muted">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 shrink-0 border-ink/30 accent-ink"
            checked={values.privacy}
            onChange={(e) =>
              setValues((v) => ({ ...v, privacy: e.target.checked }))
            }
            aria-invalid={Boolean(errors.privacy)}
            aria-describedby={errors.privacy ? "privacy-error" : undefined}
          />
          <span>
            Oboznámil/a som sa s informáciami o{" "}
            <Link
              href="/ochrana-osobnych-udajov/"
              className="text-ink underline underline-offset-2 transition-colors hover:text-clay"
            >
              ochrane osobných údajov
            </Link>
            . *
          </span>
        </label>
        {errors.privacy ? (
          <p id="privacy-error" className="mt-1.5 text-xs text-clay-dark">
            {errors.privacy}
          </p>
        ) : null}
      </div>

      {status === "error" ? (
        <div
          className="border border-clay/40 bg-clay/10 px-4 py-3 text-sm text-ink"
          role="alert"
        >
          {errorMessage}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-ink px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-clay disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Odosielam…" : "Odoslať nezáväzný dopyt"}
      </button>
    </form>
  );
}
