'use client';

import { useState } from 'react';

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number>(0);

  return (
    <div>
      {items.map((it, i) => (
        <div
          key={i}
          className={'faq__item' + (open === i ? ' is-open' : '')}
          onClick={() => setOpen(open === i ? -1 : i)}
        >
          <div className="faq__q">
            <span>{it.q}</span>
            <span className="plus" aria-hidden="true"></span>
          </div>
          <div className="faq__a">{it.a}</div>
        </div>
      ))}
    </div>
  );
}
