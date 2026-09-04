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

/** Original FIND header dropdown chevron (downward, 24×24). */
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
        clipRule="evenodd"
        d="M17.566 9.431a.8.8 0 0 1 .005 1.131l-1.78 1.797c-.669.674-1.218 1.229-1.708 1.622-.51.41-1.034.712-1.665.792a3.3 3.3 0 0 1-.83 0c-.63-.08-1.154-.382-1.665-.792-.49-.393-1.04-.948-1.707-1.622l-1.781-1.797A.8.8 0 0 1 7.57 9.436L9.32 11.2c.71.716 1.195 1.205 1.606 1.535.398.32.648.424.866.452q.211.027.424 0c.219-.028.468-.133.866-.452.41-.33.897-.819 1.607-1.535l1.747-1.763a.8.8 0 0 1 1.131-.005"
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

function FindLetterPaths() {
  return (
    <>
      <path
        fill="currentColor"
        d="M836.06 1.01c77.3 0 139.94 62.69 139.94 140C976 218.33 913.35 281 836.06 281H702.61V1.01zm-52.82 80.17v119.44h44.58a59.5 59.5 0 0 0 42.21-17.5 59.7 59.7 0 0 0-42.2-101.94z"
      />
      <path
        fill="currentColor"
        d="M595.45 183.2V1h80.14v279.99H556.68l-73.33-152.93V281H403.2V1h110.33z"
      />
      <path
        fill="currentColor"
        d="M376.19 280.99h-141l61.26-140.29L235.2 1h141v279.99Z"
      />
      <path
        fill="currentColor"
        d="M244.55 81.28H81.14v59.42h101.02v80.17H81.14v60.12H1V1h207.91z"
      />
    </>
  );
}

/** Header wordmark — original FIND paths, viewBox 975×280. */
export function FindWordmark({ className = "w-[9.1rem] h-[2.6rem]" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 975 280"
      fill="none"
      className={className}
      overflow="visible"
      aria-label="FIND"
      dir="ltr"
    >
      <FindLetterPaths />
    </svg>
  );
}

/** Footer lockup — same FIND mark, scaled to the original footer size. */
export function FindLockup({ className = "w-full h-auto" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 975 280"
      fill="none"
      className={className}
      overflow="visible"
      aria-hidden="true"
    >
      <FindLetterPaths />
    </svg>
  );
}

/** Removed from Hero scroll (Phase 16) — English FIND lockup must not reappear. */
export function FindHeroLockup() {
  return null;
}
