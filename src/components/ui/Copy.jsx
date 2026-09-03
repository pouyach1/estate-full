/**
 * Bidirectional copy helper.
 * - Default `dir="auto"` lets Latin or Persian strings choose their own
 *   inline direction so punctuation stays on the correct side.
 * - `ltr` isolates phone numbers, emails, prices, and Latin addresses.
 */
export default function Copy({
  as: Tag = "span",
  ltr = false,
  className = "",
  children,
  ...props
}) {
  return (
    <Tag dir={ltr ? "ltr" : "auto"} className={className} {...props}>
      {children}
    </Tag>
  );
}
