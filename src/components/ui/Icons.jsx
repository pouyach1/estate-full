export function ArrowIcon({ className = "w-[1em] h-[1em]" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M3.315 10.996h16.623l-.884.707-8.084-8.135h2.526l8.261 8.337-8.286 8.337h-2.526l8.11-8.135.883.708H3.315z"
      />
    </svg>
  );
}

export function ChevronIcon({ className = "w-[1em] h-[1em]" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.515 6.385a.8.8 0 0 1 .103 1.126l-5.432 6.518c-1.033 1.24-1.864 2.238-2.616 2.917-.779.702-1.581 1.167-2.567 1.167-.985 0-1.788-.465-2.567-1.167-.752-.68-1.583-1.677-2.616-2.917L3.39 12.311a.8.8 0 1 1 1.229-1.024l1.39 1.669c1.084 1.3 1.843 2.208 2.5 2.802.642.579 1.076.755 1.495.755s.854-.176 1.495-.755c.657-.594 1.416-1.501 2.5-2.802l5.39-6.469a.8.8 0 0 1 1.127-.102"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function BrandMark({ className = "w-10 h-10" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
    >
      <circle cx="200" cy="200" r="200" fill="currentColor" />
      <path
        fill="#fff"
        d="M215.96 297.21h-80.5l70.89-96.8-70.9-96.82h80.51l70.9 96.81-70.9 96.81Z"
      />
    </svg>
  );
}

export function FindWordmark({ className = "w-[9.1rem] h-[2.6rem]" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 91 26"
      className={className}
      fill="currentColor"
      aria-label="FIND"
    >
      <path d="M6.2 2.1h16.4v3.6H10.4v4.6h9.4v3.5H10.4v7.1H6.2V2.1Z" />
      <path d="M27.1 2.1h6.3L41.8 21h-4.5l-1.5-3.7H26.4L24.9 21h-4.4l8.4-18.9h-1.8Zm.7 11.7h6.3l-3.1-7.7-3.2 7.7Z" />
      <path d="M45.2 2.1h8.3c4.7 0 7.8 2.8 7.8 7.1 0 4.4-3.1 7.2-7.8 7.2h-4.1V21h-4.2V2.1Zm4.2 3.6v6.9h3.7c2.4 0 3.8-1.3 3.8-3.5s-1.4-3.4-3.8-3.4H49.4Z" />
      <path d="M66.4 2.1h4.3l8.8 12.4V2.1h4.2V21h-4.3L70.6 8.6V21h-4.2V2.1Z" />
    </svg>
  );
}

export function FindLockup({ className = "w-full h-auto" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 977 281"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M1 1h207.91l35.64 80.28H81.14v59.42h101.02v80.17H81.14v60.12H1V1Z" />
      <path d="M235.2 1h141l-61.25 139.7L376.19 281h-141L235.2 1Z" />
      <path d="M403.2 1h110.33l81.92 182.2V1h80.14v280H556.68l-73.33-152.93V281H403.2V1Z" />
      <path d="M702.61 1.01h133.45c77.3 0 139.94 62.69 139.94 139.99 0 77.32-62.65 140-139.94 140H702.61V1.01Zm80.63 80.17v119.44h44.58a59.5 59.5 0 0 0 42.21-17.5 59.7 59.7 0 0 0-42.2-101.94h-44.59Z" />
    </svg>
  );
}
