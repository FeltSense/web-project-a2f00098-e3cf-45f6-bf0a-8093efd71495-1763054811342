# TechBusiness Website - Project Context

## Overview
A modern, professional website for a tech business targeting general consumers. The design emphasizes clean aesthetics, trust-building, and clear calls-to-action.

## Brand Identity
- **Name:** TechBusiness
- **Industry:** Technology
- **Target Audience:** General consumers
- **Style:** Modern and professional
- **Color Palette:** Blue (trust, technology), white/gray (clean, professional)

## Key Features

### 1. Hero Section
- Full-screen impact with professional team imagery
- Clear value proposition: "Innovation That Drives Success"
- Dual CTAs: Primary (Get Started) and Secondary (Learn More)
- Gradient overlay for text readability
- Animated scroll indicator

### 2. Services Section
- 4 core services in a 2-column responsive grid
- Icons from lucide-react for visual consistency
- Hover effects for engagement
- Services include: Lightning Fast Solutions, Enterprise Security, Scalable Infrastructure, Rapid Deployment

### 3. Testimonials Section
- Carousel format (different from services grid)
- 6 testimonials from various industries
- 5-star ratings for social proof
- Auto-rotating every 5 seconds
- Manual navigation controls
- Professional headshots with role/company information

### 4. Pricing Section
- Single enterprise plan at $29/month
- "Most Popular" badge for urgency
- 8 key features listed with checkmarks
- Stripe integration for secure payments
- Trust indicators (uptime, support, clients, certification)
- 30-day money-back guarantee

### 5. Contact Form
- Split layout: contact info + form
- Form fields: name, email, phone, message
- Hidden fields for founder_id and project_id
- Real-time submission to API endpoint
- Success/error feedback
- Contact details with icons (address, phone, email)

### 6. Navigation
- Sticky header that changes style on scroll
- Logo + menu items + CTA button
- Mobile-responsive hamburger menu
- Smooth scroll to sections

### 7. Footer
- Comprehensive with 4 columns: Company info, Quick Links, Resources, Contact
- Social media links
- Legal links (Privacy, Terms, Cookies)
- Copyright information

## Technical Stack
- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS
- **Icons:** lucide-react
- **Language:** TypeScript
- **Images:** Unsplash (professional business imagery)

## Design Principles
1. **Generous White Space:** Sections have py-24, cards have p-8+
2. **Large Typography:** Hero headings at text-6xl to text-8xl
3. **Professional Colors:** Blue for trust, white/gray for cleanliness
4. **Smooth Interactions:** Hover effects, transitions, animations
5. **Clear Hierarchy:** Distinct sections with purpose-driven layouts
6. **Mobile-First:** Responsive design from sm to lg breakpoints

## API Integration
- Form submission endpoint: https://deep-api-server-2moiw.kinsta.app/api/form-submissions
- Stripe payment link: https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00
- Required hidden fields: founder_id, project_id (placeholders included)

## User Experience
- Smooth scrolling between sections
- Animated carousel for testimonials
- Form validation and feedback
- Hover states on interactive elements
- Mobile-friendly navigation
- Fast load times with optimized images

## Conversion Optimization
- Multiple CTAs throughout the page
- Social proof via testimonials and trust indicators
- Clear pricing with money-back guarantee
- Easy-to-use contact form
- Professional imagery builds credibility

## Future Enhancements
- Blog section for content marketing
- Case studies page
- Client portal
- Live chat integration
- Advanced analytics dashboard