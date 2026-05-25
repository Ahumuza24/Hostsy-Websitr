"use client";

import { type FormEvent, type ReactNode, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type LocalFeedbackFormProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  successTitle: string;
  successMessage: string;
};

export default function LocalFeedbackForm({
  children,
  className,
  id,
  successTitle,
  successMessage,
}: LocalFeedbackFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.reportValidity()) {
      return;
    }

    setSubmitted(true);
    form.reset();
  };

  return (
    <form id={id} onSubmit={handleSubmit} className={cn(className)}>
      {children}

      {submitted ? (
        <div
          role="status"
          aria-live="polite"
          className="rounded-2xl border border-[#C8A86C]/40 bg-[#C8A86C]/12 p-4 text-left"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#C8A86C]" />
            <div>
              <p className="font-black text-[#0B1F3E]">{successTitle}</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">{successMessage}</p>
            </div>
          </div>
        </div>
      ) : null}
    </form>
  );
}
