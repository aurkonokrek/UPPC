import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualifications: string;
  image: string;
  category: "Management" | "Physiotherapist" | "Staff";
  socialLinks: {
    facebook?: string;
    linkedin?: string;
    whatsapp?: string;
  };
}

const teamData: TeamMember[] = [
  {
    id: "1",
    name: "Asst. Prof. Dr. Md. Faruqul Islam",
    role: "Chairman & Chief Consultant",
    qualifications:
      "MBBS, BPT, MPT (Ortho), DNHE. Over 15 years of clinical experience in musculoskeletal rehabilitation, sports injuries, and post-surgical recovery. Published researcher in manual therapy techniques and chronic pain management protocols.",
    image: doctor1,
    category: "Management",
    socialLinks: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      whatsapp: "https://wa.me/880123456789",
    },
  },
  {
    id: "2",
    name: "Dr. Mokhlesur Rahman Siddiqui",
    role: "Executive Director",
    qualifications:
      "BPT, MPT (Neuro), DPT. Specializes in neurological rehabilitation including stroke recovery, spinal cord injuries, and movement disorders. Trained in advanced neurorehabilitation techniques with strength in patient-centered holistic treatment approaches.",
    image: doctor2,
    category: "Management",
    socialLinks: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      whatsapp: "https://wa.me/880123456780",
    },
  },
  {
    id: "3",
    name: "Dr. AKM Minarul Tawhid",
    role: "Consultant Physiotherapist",
    qualifications:
      "BPT, MPT (Sports), CSCS. Expert in sports physiotherapy, athletic performance optimization, and injury prevention. Extensive experience working with professional athletes and designing individualized exercise prescription programs for rehabilitation.",
    image: doctor3,
    category: "Physiotherapist",
    socialLinks: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      whatsapp: "https://wa.me/880123456781",
    },
  },
  {
    id: "4",
    name: "Dr. Nusrat Jahan",
    role: "Senior Physiotherapist",
    qualifications:
      "BPT, MPT (Cardiopulmonary), MIAP. Dedicated to cardiopulmonary rehabilitation with expertise in post-cardiac surgery recovery, respiratory therapy, and chronic obstructive pulmonary disease management. Committed to evidence-based practice and continuous learning.",
    image: doctor1,
    category: "Physiotherapist",
    socialLinks: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      whatsapp: "https://wa.me/880123456782",
    },
  },
  {
    id: "5",
    name: "Dr. Tahmina Akter",
    role: "Junior Physiotherapist",
    qualifications:
      "BPT, Certified in Dry Needling & Cupping Therapy. Passionate about manual therapy, myofascial release, and trigger point therapy. Actively involved in community health outreach programs and patient education initiatives for chronic pain self-management.",
    image: doctor2,
    category: "Physiotherapist",
    socialLinks: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      whatsapp: "https://wa.me/880123456783",
    },
  },
  {
    id: "6",
    name: "Md. Rafiqul Islam",
    role: "Patient Coordinator",
    qualifications:
      "BSc in Health Administration, Diploma in Hospital Management. Manages patient scheduling, insurance coordination, and front-desk operations with a warm and professional demeanor. Ensures seamless communication between patients and the clinical team.",
    image: doctor3,
    category: "Staff",
    socialLinks: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      whatsapp: "https://wa.me/880123456784",
    },
  },
  {
    id: "7",
    name: "Fatima Begum",
    role: "Therapy Assistant",
    qualifications:
      "Diploma in Physiotherapy Assistance, Certified in First Aid & CPR. Supports senior physiotherapists in treatment sessions, prepares therapy equipment, and assists patients with exercises. Dedicated to creating a comfortable and supportive environment for recovery.",
    image: doctor1,
    category: "Staff",
    socialLinks: {
      facebook: "https://facebook.com",
      whatsapp: "https://wa.me/880123456785",
    },
  },
];

export default teamData;
