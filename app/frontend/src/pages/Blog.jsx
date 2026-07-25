import { FadeUp, ChapterHead } from "@/components/motion/Reveal";
import BlogList from "@/components/blog/BlogList";
import { blogPosts } from "@/data/portfolio";

export default function Blog() {
  return (
    <div className="pt-32 pb-32" data-testid="blog-page">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <FadeUp><ChapterHead number="—" kicker="Blog" title="Field notes, in ink." /></FadeUp>
        <FadeUp delay={0.15}>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Hover a line. The rest of the room quiets down.
          </p>
        </FadeUp>
      </div>
      <div className="mt-16 max-w-[1400px] mx-auto px-6 md:px-10">
        <BlogList posts={blogPosts} />
      </div>
    </div>
  );
}