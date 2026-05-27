export default function WhatsAppPill() {
  return (
    <a
      className="wa"
      href="https://wa.me/27678182968"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <span className="ic">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F1EBDE" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 1 1-3.5-7.1L21 4l-1.4 4A8.9 8.9 0 0 1 21 12Z" />
          <path d="M8.5 10.5c.3 1.5 1.4 3 2.7 3.8.5.3 1.4.7 2 .4l1-.6c.2-.1.4 0 .6.1l1.5 1c.2.2.3.5.2.8a2.5 2.5 0 0 1-2.6 1.6c-2.3-.2-4.3-1.4-5.7-3.2C7 12.7 6.6 11 7 9.6a2.5 2.5 0 0 1 2.1-1.7c.3 0 .5.1.6.4l.7 1.6c.1.2.1.4 0 .6Z" />
        </svg>
      </span>
      <span>WhatsApp +27 67 818 2968</span>
    </a>
  );
}
