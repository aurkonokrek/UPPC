import { useState } from "react";
import { Facebook, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import teamData, { type TeamMember } from "@/data/teamData";

const categories = [
  { key: "Management", label: "Management" },
  { key: "Physiotherapist", label: "Physiotherapists" },
  { key: "Staff", label: "Support Staff" },
] as const;

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const TeamCard = ({ member }: { member: TeamMember }) => (
  <div className="bg-card rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
    <div className="overflow-hidden">
      <img
        src={member.image}
        alt={member.name}
        className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div className="p-5">
      <h3 className="font-bold text-foreground text-lg">{member.name}</h3>
      <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
      <p className="text-muted-foreground text-xs leading-relaxed line-clamp-4">
        {member.qualifications}
      </p>
    </div>
    <div className="border-t border-border px-5 py-3 flex items-center justify-center gap-4">
      {member.socialLinks.facebook && (
        <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Facebook className="h-4 w-4" />
        </a>
      )}
      {member.socialLinks.linkedin && (
        <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin className="h-4 w-4" />
        </a>
      )}
      {member.socialLinks.whatsapp && (
        <a href={member.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <WhatsAppIcon />
        </a>
      )}
    </div>
  </div>
);

const About = () => {
  const [activeTab, setActiveTab] = useState<string>("Management");

  const filtered = teamData.filter((m) => m.category === activeTab);

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero title="Our Team" breadcrumb="Our Team" />

      {/* Header */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Dedicated Team
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            At Unique Pain &amp; Paralysis Centre, our multidisciplinary team of
            experienced professionals is committed to delivering compassionate,
            evidence-based care that helps every patient regain independence and
            live without pain.
          </p>
        </div>
      </section>

      {/* Tabs + Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-muted rounded-lg p-1 gap-1">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveTab(cat.key)}
                  className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === cat.key
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filtered.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
