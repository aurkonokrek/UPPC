import heroImg from "@/assets/hero-physio.jpg";

interface PageHeroProps {
  title: string;
  breadcrumb: string;
}

const PageHero = ({ title, breadcrumb }: PageHeroProps) => (
  <section className="relative h-[280px] md:h-[340px] flex items-end overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary-dark/70" />
    </div>
    <div className="relative container mx-auto px-4 lg:px-8 pb-10">
      <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">{title}</h1>
      <p className="text-sm text-primary-foreground/70">
        Home | <span className="text-primary-foreground/90">{breadcrumb}</span>
      </p>
    </div>
  </section>
);

export default PageHero;
