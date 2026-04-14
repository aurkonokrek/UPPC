import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  qualifications: string;
  image: string;
  category: "Management" | "Physiotherapist" | "Staff";
  socialLinks: {
    facebook: string;
    linkedin: string;
    whatsapp: string;
  };
}

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Asst. Prof. Dr. Md. Faruqul Islam",
    role: "Director & Chief Consultant",
    qualifications: "MBBS, BPT, MPT (Ortho), Fellow in Pain Management. Over 15 years of clinical experience in musculoskeletal rehabilitation and pain management. Recognized for pioneering advanced physiotherapy protocols in Bangladesh.",
    image: doctor1,
    category: "Management",
    socialLinks: { facebook: "#", linkedin: "#", whatsapp: "#" },
  },
  {
    id: 2,
    name: "Dr. Mokhlesur Rahman Siddiqui",
    role: "Co-Director & Senior Consultant",
    qualifications: "BPT, MPT (Neuro), PhD in Rehabilitation Sciences. Specializes in neurological rehabilitation with expertise in stroke recovery and spinal cord injury management. Published researcher in international journals.",
    image: doctor2,
    category: "Management",
    socialLinks: { facebook: "#", linkedin: "#", whatsapp: "#" },
  },
  {
    id: 3,
    name: "Dr. AKM Minarul Tawhid",
    role: "Consultant Physiotherapist",
    qualifications: "BPT, MPT (Sports Medicine). Expert in sports injury rehabilitation and post-surgical recovery. Trained in manual therapy techniques and dry needling with certifications from international programs.",
    image: doctor3,
    category: "Physiotherapist",
    socialLinks: { facebook: "#", linkedin: "#", whatsapp: "#" },
  },
  {
    id: 4,
    name: "Dr. Nasreen Akter",
    role: "Consultant Physiotherapist",
    qualifications: "BPT, MPT (Women's Health). Specializes in pelvic floor rehabilitation, prenatal and postnatal physiotherapy. Dedicated to empowering women through evidence-based therapeutic interventions.",
    image: doctor1,
    category: "Physiotherapist",
    socialLinks: { facebook: "#", linkedin: "#", whatsapp: "#" },
  },
  {
    id: 5,
    name: "Md. Rafikul Islam",
    role: "Office Manager",
    qualifications: "MBA in Healthcare Administration. Over 10 years of experience managing clinical operations and patient coordination. Ensures seamless day-to-day functioning of the centre with a focus on patient satisfaction.",
    image: doctor2,
    category: "Staff",
    socialLinks: { facebook: "#", linkedin: "#", whatsapp: "#" },
  },
  {
    id: 6,
    name: "Fatema Begum",
    role: "Patient Care Coordinator",
    qualifications: "BSc in Public Health. Skilled in patient communication and appointment scheduling. Passionate about creating a welcoming environment and guiding patients through their rehabilitation journey.",
    image: doctor3,
    category: "Staff",
    socialLinks: { facebook: "#", linkedin: "#", whatsapp: "#" },
  },
];

export default teamData;
