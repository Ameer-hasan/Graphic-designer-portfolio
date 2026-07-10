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
    skills: ["Social Media Creatives", "Branding & Identity", "Motion Graphics & VFX", "Layout & Typography", "Thumbnail & Banner Design"],
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
    title: "Motion Graphics & VFX",
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
  // Video Editing Projects (Youtube Embeds or placeholder MP4s)
  {
    id: "vid-1",
    title: "Chairose Travels - Destination Highlight",
    description: "Cinematic travel campaign showcasing luxury tour packages and destination highlights. Smooth speed-ramps, custom sound design, and color-graded clips.",
    category: "video",
    subcategory: "Travel Promo",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800&h=450",
    mediaUrl: "https://www.youtube.com/embed/ScMzIvxBSi4", // Beautiful generic travel cinematic video
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    featured: true
  },
  {
    id: "vid-2",
    title: "Mitti & Magic - Fashion Showcase Reel",
    description: "High-energy promo video for a fashion brand, matching beat-cuts, dynamic motion text overlay, and neon color profiles.",
    category: "video",
    subcategory: "Fashion Brand",
    thumbnail: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800&h=450",
    mediaUrl: "https://www.youtube.com/embed/A8gZ54t9f2U", // Fashion showcase video placeholder
    tools: ["After Effects", "Premiere Pro"],
    featured: true
  },
  {
    id: "vid-3",
    title: "Ranthambore Tiger Machan - Nature Promo",
    description: "Promotional video highlighting the luxury jungle resort experience, editing cinematic drone shots, wildlife footages, and calm ambient overlays.",
    category: "video",
    subcategory: "Resort Promotion",
    thumbnail: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=800&h=450",
    mediaUrl: "https://www.youtube.com/embed/2_H29O0Rj8c", // Wildlife cinematic video placeholder
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    featured: false
  },
  {
    id: "vid-4",
    title: "TCD - Correct Diet Recipe Reel",
    description: "Short-form vertical video recipe reel for health brand social channels. Designed with fast-paced cuts, sound effects, zoom ins, and captions.",
    category: "video",
    subcategory: "Social Media Reel",
    thumbnail: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800&h=450",
    mediaUrl: "https://www.youtube.com/embed/c0t499QYdM0", // Healthy cooking food reel placeholder
    tools: ["Premiere Pro", "CapCut"],
    featured: false
  },

  // Graphic Design Projects (High quality photos representing design work)
  {
    id: "des-1",
    title: "Chairose Travels Branding Identity",
    description: "Complete visual identity design including logo, travel brochures, social media grids, and business cards for a premium travel agency.",
    category: "design",
    subcategory: "Branding",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800&h=533",
    mediaUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200&h=800",
    tools: ["Photoshop", "Illustrator"],
    featured: true
  },
  {
    id: "des-2",
    title: "Mitti & Magic Brand Marketing Kit",
    description: "Designed creative social media campaign templates, product tags, digital advertisements, and promotional banners for fashion launch.",
    category: "design",
    subcategory: "Marketing Assets",
    thumbnail: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=800&h=533",
    mediaUrl: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=1200&h=800",
    tools: ["Photoshop", "Illustrator"],
    featured: true
  },
  {
    id: "des-3",
    title: "TCD Product Banner & Advertisements",
    description: "High-converting digital ads and poster creatives designed to market the healthy meal kit subscriptions for social channels.",
    category: "design",
    subcategory: "Social Ad Design",
    thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800&h=533",
    mediaUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200&h=800",
    tools: ["Photoshop", "Illustrator"],
    featured: false
  },
  {
    id: "des-4",
    title: "Creative Typography Poster Series",
    description: "A series of graphic posters focusing on modern typography, alignment layout, and visual contrast overlays for digital release.",
    category: "design",
    subcategory: "Typography Poster",
    thumbnail: "https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&q=80&w=800&h=533",
    mediaUrl: "https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&q=80&w=1200&h=800",
    tools: ["Illustrator", "Photoshop"],
    featured: false
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Rohan Sharma",
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
