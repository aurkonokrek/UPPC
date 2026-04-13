import servicePhysio from "@/assets/service-physio.jpg";
import servicePain from "@/assets/service-pain.jpg";
import serviceStroke from "@/assets/service-stroke.jpg";
import serviceElectro from "@/assets/service-electro.jpg";
import serviceManual from "@/assets/service-manual.jpg";
import serviceSports from "@/assets/service-sports.jpg";

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  mainImage: string;
  contentParagraph1: string;
  quoteText: string;
  subHeading: string;
  bulletPoints: string[];
  contentParagraph2: string;
}

const blogData: BlogPost[] = [
  {
    id: "understanding-physiotherapy",
    title: "Understanding the Role of Physiotherapy in Modern Healthcare",
    category: "Physiotherapy",
    readTime: "5 min read",
    date: "March 15, 2025",
    excerpt:
      "Discover how physiotherapy has evolved into a cornerstone of modern healthcare, helping patients recover faster and live pain-free lives.",
    mainImage: servicePhysio,
    contentParagraph1:
      "Physiotherapy has become one of the most essential pillars of modern healthcare, offering non-invasive solutions for a wide range of conditions. From chronic back pain to post-surgical rehabilitation, physiotherapists use evidence-based techniques to restore movement, reduce pain, and improve quality of life. The field has seen tremendous growth in recent years, with advances in technology enabling more precise diagnostics and targeted treatments that were previously unavailable.",
    quoteText:
      "Physiotherapy is not just about treating injuries — it's about empowering patients to take control of their own recovery and long-term well-being.",
    subHeading: "Benefits of Physiotherapy for Everyday Health",
    bulletPoints: [
      "Reduces chronic pain without the need for medication or surgery",
      "Improves mobility, flexibility, and overall range of motion",
      "Accelerates recovery after sports injuries or surgical procedures",
      "Helps manage age-related conditions like arthritis and osteoporosis",
      "Strengthens muscles and joints to prevent future injuries",
    ],
    contentParagraph2:
      "Whether you're an athlete recovering from a sports injury, an office worker dealing with repetitive strain, or a senior looking to maintain independence, physiotherapy offers personalized treatment plans tailored to your unique needs. At Unique Pain & Paralysis Centre, our team of certified physiotherapists combines hands-on expertise with the latest therapeutic technologies to deliver outstanding patient outcomes.",
  },
  {
    id: "electrotherapy-pain-management",
    title: "How Electrotherapy is Revolutionizing Pain Management",
    category: "Pain Management",
    readTime: "7 min read",
    date: "February 28, 2025",
    excerpt:
      "Electrotherapy devices like TENS units are transforming how clinics approach chronic pain — learn about the science behind the treatment.",
    mainImage: serviceElectro,
    contentParagraph1:
      "Electrotherapy has emerged as a game-changing modality in the management of chronic and acute pain. Techniques such as Transcutaneous Electrical Nerve Stimulation (TENS), Interferential Therapy (IFT), and Ultrasound Therapy use controlled electrical currents to stimulate nerves, reduce inflammation, and promote tissue healing. These treatments are non-invasive, drug-free, and have been clinically proven to provide significant pain relief for a variety of musculoskeletal conditions.",
    quoteText:
      "The future of pain management lies in technology that works with the body's natural healing processes, not against them.",
    subHeading: "Key Electrotherapy Modalities Used in Clinics",
    bulletPoints: [
      "TENS therapy for nerve stimulation and pain gate control",
      "Interferential Therapy (IFT) for deep tissue pain relief",
      "Therapeutic Ultrasound for soft tissue healing and inflammation reduction",
      "Electrical Muscle Stimulation (EMS) for muscle re-education",
      "Laser therapy for accelerated wound and tissue repair",
    ],
    contentParagraph2:
      "At Unique Pain & Paralysis Centre, we utilize state-of-the-art electrotherapy equipment to complement our manual therapy programs. Our practitioners are trained to customize treatment protocols based on each patient's condition, ensuring maximum therapeutic benefit. If you're struggling with persistent pain, electrotherapy may be the breakthrough solution you've been looking for.",
  },
  {
    id: "stroke-rehabilitation-guide",
    title: "A Comprehensive Guide to Stroke Rehabilitation",
    category: "Rehabilitation",
    readTime: "8 min read",
    date: "January 10, 2025",
    excerpt:
      "Stroke recovery is a journey — explore the physiotherapy techniques and timelines that help patients regain independence.",
    mainImage: serviceStroke,
    contentParagraph1:
      "Stroke rehabilitation is a critical phase in a patient's recovery journey, often determining the degree to which they can regain lost motor functions and cognitive abilities. Physiotherapy plays a central role in this process, employing targeted exercises, neuromuscular re-education, and functional training to help patients rebuild strength, coordination, and balance. Early intervention is key — studies show that patients who begin rehab within the first few weeks post-stroke achieve significantly better outcomes.",
    quoteText:
      "Every stroke recovery journey is unique, but with the right rehabilitation plan, remarkable progress is always possible.",
    subHeading: "Phases of Stroke Rehabilitation",
    bulletPoints: [
      "Acute phase: Stabilization and early mobilization in hospital",
      "Sub-acute phase: Intensive physiotherapy to restore basic motor functions",
      "Chronic phase: Long-term exercises for strength, balance, and daily living skills",
      "Speech and cognitive therapy alongside physical rehabilitation",
      "Family education and home exercise programs for continued progress",
    ],
    contentParagraph2:
      "Our dedicated stroke rehabilitation program at Unique Pain & Paralysis Centre combines the expertise of physiotherapists, occupational therapists, and neurological specialists to provide a holistic recovery experience. We work closely with patients and their families to set realistic goals and celebrate every milestone along the way. Recovery from stroke is a marathon, not a sprint, and we are committed to being with our patients every step of the way.",
  },
  {
    id: "sports-injury-prevention",
    title: "Sports Injury Prevention: Tips from Professional Physiotherapists",
    category: "Sports Medicine",
    readTime: "6 min read",
    date: "December 5, 2024",
    excerpt:
      "Learn the top strategies recommended by physiotherapists to prevent common sports injuries and keep your body performing at its best.",
    mainImage: serviceSports,
    contentParagraph1:
      "Sports injuries are among the most common reasons people seek physiotherapy treatment. Whether you're a weekend warrior or a competitive athlete, understanding how to prevent injuries is just as important as knowing how to treat them. Physiotherapists specializing in sports medicine emphasize the importance of proper warm-ups, technique correction, and progressive training loads to minimize injury risk.",
    quoteText:
      "The best injury is the one that never happens. Prevention through proper training and body awareness is the ultimate competitive advantage.",
    subHeading: "Essential Injury Prevention Strategies",
    bulletPoints: [
      "Always perform dynamic warm-ups before physical activity",
      "Incorporate strength and flexibility training into your routine",
      "Use proper technique and equipment for your sport",
      "Listen to your body — don't push through sharp or persistent pain",
      "Schedule regular physiotherapy check-ups for early detection of imbalances",
    ],
    contentParagraph2:
      "At Unique Pain & Paralysis Centre, our sports physiotherapy team works with athletes of all levels to develop personalized prevention programs. From biomechanical assessments to sport-specific conditioning plans, we help you stay in the game and perform at your peak. Don't wait for an injury to sideline you — invest in prevention today.",
  },
  {
    id: "manual-therapy-benefits",
    title: "The Science Behind Manual Therapy and Its Benefits",
    category: "Manual Therapy",
    readTime: "5 min read",
    date: "November 18, 2024",
    excerpt:
      "Manual therapy techniques like joint mobilization and soft tissue manipulation offer powerful relief — here's how they work.",
    mainImage: serviceManual,
    contentParagraph1:
      "Manual therapy encompasses a range of hands-on techniques used by physiotherapists to treat musculoskeletal pain and dysfunction. These techniques include joint mobilization, soft tissue manipulation, myofascial release, and trigger point therapy. Unlike passive treatments, manual therapy actively addresses the root cause of pain by restoring joint mechanics, improving tissue extensibility, and reducing muscle tension.",
    quoteText:
      "The human touch remains one of the most powerful therapeutic tools in medicine. Manual therapy bridges the gap between technology and healing.",
    subHeading: "Common Manual Therapy Techniques",
    bulletPoints: [
      "Joint mobilization to restore range of motion",
      "Soft tissue manipulation for muscle relaxation and pain relief",
      "Myofascial release to address fascial restrictions",
      "Trigger point therapy for localized muscle knots",
      "Spinal manipulation for back and neck pain management",
    ],
    contentParagraph2:
      "Our physiotherapists at Unique Pain & Paralysis Centre are highly trained in advanced manual therapy techniques. Each treatment session is tailored to the patient's specific condition, combining manual therapy with exercise prescription and patient education for comprehensive care. If you're experiencing persistent musculoskeletal pain, manual therapy could be the key to unlocking lasting relief.",
  },
  {
    id: "chronic-pain-management",
    title: "Living with Chronic Pain: A Physiotherapy Perspective",
    category: "Pain Management",
    readTime: "6 min read",
    date: "October 22, 2024",
    excerpt:
      "Chronic pain affects millions worldwide — discover how physiotherapy provides sustainable, drug-free management strategies.",
    mainImage: servicePain,
    contentParagraph1:
      "Chronic pain is defined as pain that persists for more than three months, and it affects an estimated 1.5 billion people worldwide. Unlike acute pain, which serves as a warning signal, chronic pain often continues long after the original injury has healed. Physiotherapy offers a multifaceted approach to chronic pain management, combining exercise therapy, education, and behavioral strategies to help patients regain function and improve their quality of life.",
    quoteText:
      "Managing chronic pain is not about eliminating it completely — it's about learning to live well despite it, and physiotherapy gives patients the tools to do exactly that.",
    subHeading: "Physiotherapy Approaches to Chronic Pain",
    bulletPoints: [
      "Graded exercise therapy to gradually build tolerance and strength",
      "Pain neuroscience education to change how patients understand their pain",
      "Cognitive behavioral strategies integrated with physical treatment",
      "Hydrotherapy and aquatic exercises for low-impact movement",
      "Mindfulness and relaxation techniques for pain coping",
    ],
    contentParagraph2:
      "At Unique Pain & Paralysis Centre, we understand that chronic pain is complex and deeply personal. Our multidisciplinary team takes a patient-centered approach, developing individualized management plans that address not just the physical symptoms but also the emotional and psychological impact of living with chronic pain. You don't have to face chronic pain alone — let us help you find a path forward.",
  },
];

export default blogData;
