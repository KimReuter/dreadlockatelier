interface PageHeroProps {
  label: string;
  title: string;
}

export default function PageHero({ label, title }: PageHeroProps) {
  return (
    <section className="bg-dark flex flex-col justify-end px-8 md:px-24 pt-40 pb-16">
      <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-6">
        {label}
      </p>
      <h1 className="font-serif text-5xl md:text-7xl text-background leading-tight">
        {title}
      </h1>
    </section>
  );
}
