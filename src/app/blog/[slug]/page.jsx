import Image from "next/image";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/siteConfig";
import { getPost, getPosts } from "@/lib/content";
import Button from "@/components/ui/Button";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: siteConfig.brand.legalName };
  return {
    title: `${post.title} | ${siteConfig.brand.legalName}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="section-pad-sm">
      <div className="site-container">
        <p className="caption mb-[2rem]">{post.date}</p>
        <h1 className="display-lg max-w-[120rem]">{post.title}</h1>
        <p className="lead-md mt-[3rem] max-w-[80rem]">{post.excerpt}</p>
        <div className="relative mx-[-2.5rem] mt-[4rem] aspect-[16/8] overflow-hidden bg-mist md:mx-0 md:mt-[8rem]">
          <Image
            src={post.image}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="mx-auto mt-[4rem] max-w-[80rem] space-y-[2.4rem] md:mt-[8rem]">
          {post.paragraphs.map((paragraph) => (
            <p key={paragraph} className="lead-md">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-[6rem]">
          <Button text={siteConfig.journal.ctaLabel} href="/blog" color="secondary" />
        </div>
      </div>
    </article>
  );
}
