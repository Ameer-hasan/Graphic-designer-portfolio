import videosLink from "./videosLink.json";

export interface Stat {
  label: string;
  value: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  bulletPoints: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "video" | "design";
  subcategory: string;
  thumbnail: string;
  mediaUrl: string; // YouTube embed URL, Vimeo URL, or image URL
  tools: string[];
  featured: boolean;
  fallbackUrl?: string;
}

function getDirectVideoUrl(driveUrl: string): string {
  const match = driveUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }
  return driveUrl;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  comment: string;
  avatar: string;
}

export const personalInfo = {
  name: "Ameer Hasan",
  title: "Video Editor & Graphic Designer",
  subtitle: "Elevating content to a professional level through cinematic storytelling & dynamic graphic designs.",
  email: "hasanameer0012@gmail.com",
  phone: "+91 9887145643",
  linkedin: "https://www.linkedin.com/in/ameer-hasan-b07221391",
  location: "Jaipur, Rajasthan, India",
  languages: ["English", "Hindi"],
  summary: "Creative and detail-oriented Graphic Designer and Video Editor with experience in graphic design, motion graphics, video editing, and visual storytelling. Skilled in creating engaging digital content, social media creatives, branding materials, promotional videos, and marketing campaigns. Proficient in Adobe Creative Suite with strong creative thinking, time management, and multitasking abilities.",
  resumeUrl: "#", // Placeholder for actual resume PDF file
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300", // Elegant dark portrait placeholder
};

export const stats: Stat[] = [
  { label: "Years Experience", value: "2+" },
  { label: "Clients Handled", value: "15+" },
  { label: "Projects Completed", value: "40+" },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Software Proficiency",
    skills: ["Adobe Premiere Pro", "Adobe After Effects", "Adobe Photoshop", "Adobe Illustrator", "CapCut"],
  },
  {
    category: "Core Editing Skills",
    skills: ["Cinematic Video Editing", "Color Grading & LUTs", "Sound Design & Mixing", "Pacing & Storytelling", "Reels & Shorts Optimization"],
  },
  {
    category: "Creative & Design Skills",
    skills: ["Social Media Creatives", "Branding & Identity", "Motion Graphics", "Layout & Typography", "Thumbnail & Banner Design"],
  },
];

export const experiences: Experience[] = [
  {
    role: "Graphic Designer & Video Editor",
    company: "Softhunters Private Limited",
    location: "Jaipur, Raj, IN",
    period: "02/2026 - Present",
    bulletPoints: [
      "Designing creative social media posts, advertisements, banners, and branding materials.",
      "Editing promotional, marketing, and social media videos using Adobe Premiere Pro and After Effects.",
      "Creating motion graphics, reels, and short-form video content for digital campaigns.",
      "Collaborating with marketing and content teams to develop engaging visual communication.",
      "Maintaining brand consistency across digital and print platforms."
    ]
  },
  {
    role: "Graphic Designer, Motion Graphic Designer & Videographer",
    company: "TCD – The Correct Diet",
    location: "Jaipur, Raj, IN",
    period: "04/2025 - 01/2026",
    bulletPoints: [
      "Designed engaging visual content for digital marketing, social media, and branding using Adobe Photoshop and Illustrator.",
      "Created video content using After Effects and Premiere Pro to support campaigns and product promotions.",
      "Handled end-to-end video production including scripting, shooting, editing, and post-production.",
      "Collaborated with marketing and creative teams to maintain a consistent visual identity across all platforms."
    ]
  },
  {
    role: "Graphic Designer & Motion Graphic Intern",
    company: "GKMT JAIPUR",
    location: "Jaipur, Raj, IN",
    period: "12/2024 - 03/2025",
    bulletPoints: [
      "Designed engaging visual content for digital marketing, social media, and branding using Adobe Photoshop and Illustrator.",
      "Created video content using After Effects and Premiere Pro to support campaigns and product promotions.",
      "Collaborated with marketing and creative teams to maintain a consistent visual identity across all platforms."
    ]
  }
];

export const educationList: Education[] = [
  {
    degree: "Graphic Designing & Video Editing Certificate",
    institution: "MAAC Animation",
    location: "Jaipur, Raj",
    period: "05/2024 - 02/2025"
  },
  {
    degree: "Bachelors of Commerce",
    institution: "L.B.S. P.G. College",
    location: "Jaipur, Raj",
    period: "2014 - 2016"
  }
];

export const services: Service[] = [
  {
    id: "v-edit",
    title: "Cinematic Video Editing",
    description: "High-end commercial, corporate, and travel video editing with focused pacing, color grading, and crisp sound design.",
    icon: "Video"
  },
  {
    id: "m-graph",
    title: "Motion Graphics",
    description: "Engaging dynamic titles, lower-thirds, custom transitions, and explanation animations that make content stand out.",
    icon: "Activity"
  },
  {
    id: "g-design",
    title: "Graphic Design & Branding",
    description: "Creative visual assets, modern branding, logos, social media grids, and marketing banners optimized for conversion.",
    icon: "Layout"
  },
  {
    id: "s-media",
    title: "Social Media Reels & Shorts",
    description: "Fast-paced, hook-based short-form vertical videos designed to drive viral reach on Instagram, TikTok, and YouTube.",
    icon: "Zap"
  }
];

export const projects: Project[] = [
  // Video Editing Projects mapped from videosLink.json
  {
    id: "vid-1",
    title: "Video Work Link 1",
    description: "Cinematic video edit and storytelling project showcased in the portfolio.",
    category: "video",
    subcategory: "Video Editing",
    thumbnail: "https://placehold.co/800x450/18181b/e4e4e7?text=Video+Work+Link+1",
    mediaUrl: getDirectVideoUrl(videosLink.link1),
    tools: ["Premiere Pro", "After Effects"],
    featured: true
  },
  {
    id: "vid-2",
    title: "Video Work Link 2",
    description: "Cinematic video edit and storytelling project showcased in the portfolio.",
    category: "video",
    subcategory: "Video Editing",
    thumbnail: "https://placehold.co/800x450/18181b/e4e4e7?text=Video+Work+Link+2",
    mediaUrl: getDirectVideoUrl(videosLink.link2),
    tools: ["Premiere Pro", "After Effects"],
    featured: true
  },
  {
    id: "vid-3",
    title: "Video Work Link 3",
    description: "Cinematic video edit and storytelling project showcased in the portfolio.",
    category: "video",
    subcategory: "Video Editing",
    thumbnail: "https://placehold.co/800x450/18181b/e4e4e7?text=Video+Work+Link+3",
    mediaUrl: getDirectVideoUrl(videosLink.link3),
    tools: ["Premiere Pro", "After Effects"],
    featured: true
  },
  {
    id: "vid-4",
    title: "Video Work Link 4",
    description: "Cinematic video edit and storytelling project showcased in the portfolio.",
    category: "video",
    subcategory: "Video Editing",
    thumbnail: "https://placehold.co/800x450/18181b/e4e4e7?text=Video+Work+Link+4",
    mediaUrl: getDirectVideoUrl(videosLink.link4),
    tools: ["Premiere Pro", "After Effects"],
    featured: false
  },
  {
    id: "vid-5",
    title: "Video Work Link 5",
    description: "Cinematic video edit and storytelling project showcased in the portfolio.",
    category: "video",
    subcategory: "Video Editing",
    thumbnail: "https://placehold.co/800x450/18181b/e4e4e7?text=Video+Work+Link+5",
    mediaUrl: getDirectVideoUrl(videosLink.link5),
    tools: ["Premiere Pro", "After Effects"],
    featured: false
  },
  {
    id: "vid-6",
    title: "Video Work Link 6",
    description: "Cinematic video edit and storytelling project showcased in the portfolio.",
    category: "video",
    subcategory: "Video Editing",
    thumbnail: "https://placehold.co/800x450/18181b/e4e4e7?text=Video+Work+Link+6",
    mediaUrl: getDirectVideoUrl(videosLink.link6),
    tools: ["Premiere Pro", "After Effects"],
    featured: false
  },
  {
    id: "vid-7",
    title: "Video Work Link 7",
    description: "Cinematic video edit and storytelling project showcased in the portfolio.",
    category: "video",
    subcategory: "Video Editing",
    thumbnail: "https://placehold.co/800x450/18181b/e4e4e7?text=Video+Work+Link+7",
    mediaUrl: getDirectVideoUrl(videosLink.link7),
    tools: ["Premiere Pro", "After Effects"],
    featured: false
  },
  {
    id: "vid-8",
    title: "Video Work Link 8",
    description: "Cinematic video edit and storytelling project showcased in the portfolio.",
    category: "video",
    subcategory: "Video Editing",
    thumbnail: "https://placehold.co/800x450/18181b/e4e4e7?text=Video+Work+Link+8",
    mediaUrl: getDirectVideoUrl(videosLink.link8),
    tools: ["Premiere Pro", "After Effects"],
    featured: false
  },
  {
    id: "vid-9",
    title: "Video Work Link 9",
    description: "Cinematic video edit and storytelling project showcased in the portfolio.",
    category: "video",
    subcategory: "Video Editing",
    thumbnail: "https://placehold.co/800x450/18181b/e4e4e7?text=Video+Work+Link+9",
    mediaUrl: getDirectVideoUrl(videosLink.link9),
    tools: ["Premiere Pro", "After Effects"],
    featured: false
  },
  {
    id: "vid-10",
    title: "Video Work Link 10",
    description: "Cinematic video edit and storytelling project showcased in the portfolio.",
    category: "video",
    subcategory: "Video Editing",
    thumbnail: "https://placehold.co/800x450/18181b/e4e4e7?text=Video+Work+Link+10",
    mediaUrl: getDirectVideoUrl(videosLink.link10),
    tools: ["Premiere Pro", "After Effects"],
    featured: false
  },
  {
    id: "vid-11",
    title: "Video Work Link 11",
    description: "Cinematic video edit and storytelling project showcased in the portfolio.",
    category: "video",
    subcategory: "Video Editing",
    thumbnail: "https://placehold.co/800x450/18181b/e4e4e7?text=Video+Work+Link+11",
    mediaUrl: getDirectVideoUrl(videosLink.link11),
    tools: ["Premiere Pro", "After Effects"],
    featured: false
  },
  {
    id: "vid-12",
    title: "Video Work Link 12",
    description: "Cinematic video edit and storytelling project showcased in the portfolio.",
    category: "video",
    subcategory: "Video Editing",
    thumbnail: "https://placehold.co/800x450/18181b/e4e4e7?text=Video+Work+Link+12",
    mediaUrl: getDirectVideoUrl(videosLink.link12),
    tools: ["Premiere Pro", "After Effects"],
    featured: false
  },
  {
    id: "vid-13",
    title: "Video Work Link 13",
    description: "Cinematic video edit and storytelling project showcased in the portfolio.",
    category: "video",
    subcategory: "Video Editing",
    thumbnail: "https://placehold.co/800x450/18181b/e4e4e7?text=Video+Work+Link+13",
    mediaUrl: getDirectVideoUrl(videosLink.link13),
    tools: ["Premiere Pro", "After Effects"],
    featured: false
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "CEO Sir",
    role: "Director of Marketing",
    company: "Softhunters",
    comment: "Ameer has an incredible eye for detail. His edits are snappy, modern, and aligned with our brand's vibe. He turned around our campaign assets in record time and exceeded expectations.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    id: "test-2",
    name: "Priyanka Gupta",
    role: "Founder",
    company: "TCD – The Correct Diet",
    comment: "Working with Ameer was a game-changer for our social media. The reels he edited got 3x our typical engagement, and the graphic design assets look extremely sleek and professional.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
  }
];
