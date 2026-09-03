export default function Input({
  label,
  type = "text",
  name,
  placeholder,
  dark = false,
  required = false,
  className = "",
}) {
  return (
    <label className={`block w-full ${className}`}>
      {label ? (
        <span
          className={`mb-[1.5rem] md:mb-[2rem] block text-[1.4rem] font-normal leading-[1.5] ${
            dark ? "text-white/40" : "text-ink-muted"
          }`}
        >
          {label}
        </span>
      ) : null}
      <span
        className={`flex items-center border-b pb-[1.5rem] md:pb-[1.8rem] ${
          dark
            ? "border-white/40 focus-within:border-white"
            : "border-ink/15 focus-within:border-ink"
        }`}
      >
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          dir={type === "email" || type === "tel" || type === "url" ? "ltr" : undefined}
          className={`w-full bg-transparent text-[1.6rem] md:text-[1.8rem] font-medium leading-[1.5] outline-none placeholder:text-current ${
            dark ? "text-white placeholder:text-white/40" : "text-ink"
          }`}
        />
      </span>
    </label>
  );
}
