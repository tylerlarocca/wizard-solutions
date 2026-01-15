import { useEffect, useState } from "react";

const quotes = [
  {
    name: "Jack Callahan",
    role: "CEO - Helping A Hero",
    text: "Fast, thoughtful, and obsessed with quality. Our site finally feels premium.",
  },
  {
    name: "Rob Higgins",
    role: "Co-Founder - Witt Machine",
    text: "Automation saved us hours every week. Clear communication the whole time.",
  },
  {
    name: "Mike Reilly",
    role: "Co-Founder - Backdraft Suppressors and Outlier",
    text: "Performance and SEO jumped quickly—and conversion followed.",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setI((v) => (v + 1) % quotes.length),
      5000
    );
    return () => window.clearInterval(id);
  }, []);

  const q = quotes[i];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-sm text-white/80">“{q.text}”</p>
      <div className="mt-4 text-xs text-white/60">
        <span className="font-medium text-white/80">{q.name}</span> • {q.role}
      </div>

      <div className="mt-5 flex gap-2">
        {quotes.map((_, idx) => (
          <button
            key={idx}
            className={`h-2 w-2 rounded-full ${
              idx === i ? "bg-white" : "bg-white/30"
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
            onClick={() => setI(idx)}
          />
        ))}
      </div>
    </div>
  );
}
