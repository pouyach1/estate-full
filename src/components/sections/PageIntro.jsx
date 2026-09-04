import Reveal from "@/components/ui/Reveal";

export default function PageIntro({
  caption,
  heading,
  headingEmphasis,
  body,
  children,
}) {
  return (
    <section className="section-pad-sm">
      <div className="site-container">
        <div className="grid gap-[3rem] md:grid-cols-[auto_97.6rem] md:items-end">
          <Reveal>
            {caption ? <p className="caption mb-[2rem]">{caption}</p> : null}
            <h1 className="display-lg">
              {heading}
              {headingEmphasis ? (
                <>
                  <br />
                  <span className="em">{headingEmphasis}</span>
                </>
              ) : null}
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            {body ? <p className="lead-md max-w-[70rem]">{body}</p> : null}
            {children}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
