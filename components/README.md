# New Sections Usage Guide

This guide explains how to use and customize the new sections added to the DLBC Southend website.

## Components Overview

### 1. ScriptureBanner
A full-width banner section with a background image, overlay, and centered scripture text.

**Props:**
- `imageSrc` (string, required): Path to background image
- `scripture` (string, required): The scripture text to display
- `reference` (string, required): The scripture reference (e.g., "Psalm 133:1")
- `imageAlt` (string, optional): Alt text for the image

**Example:**
```tsx
import imgBanner from "../assets/809ee5c3463ae88314b8d0c99e963f2cd4c475af.png";

<ScriptureBanner 
  imageSrc={imgBanner.src}
  scripture="Behold, how good and how pleasant it is for brethren to dwell together in unity!"
  reference="Psalm 133:1 (KJV)"
/>
```

---

### 2. GalleryCarousel
An interactive image carousel/gallery with navigation arrows and dots.

**Props:**
- `images` (array, required): Array of image objects with `src` and `alt`
- `title` (string, optional): Section title (default: "Gallery")

**Example:**
```tsx
import img1 from "../assets/809ee5c3463ae88314b8d0c99e963f2cd4c475af.png";
import img2 from "../assets/73abb69066aa35b5a918fdf33372492b361bf848.png";
import img3 from "../assets/89fa95729f4951199dc1e0214d5900ff429b178a.png";

<GalleryCarousel 
  images={[
    { src: img1.src, alt: "Church service" },
    { src: img2.src, alt: "Bible study" },
    { src: img3.src, alt: "Community event" },
  ]}
  title="Moments of Fellowship, Memories of Faith"
/>
```

---

### 3. ContactSection
A comprehensive contact section with a glassmorphism form and an info card.

**Props:**
- `backgroundImage` (string, required): Background image for the entire section
- `cardImage` (string, required): Image for the contact info card
- `contactInfo` (object, required): Object with `email`, `phone`, and `address`

**Example:**
```tsx
import bgImg from "../assets/809ee5c3463ae88314b8d0c99e963f2cd4c475af.png";
import cardImg from "../assets/73abb69066aa35b5a918fdf33372492b361bf848.png";

<ContactSection 
  backgroundImage={bgImg.src}
  cardImage={cardImg.src}
  contactInfo={{
    email: "contact@dlbcsouthend.org",
    phone: "+44 123 456 7890",
    address: "St Peter's Community Hall, Eastbourne Grove, Westcliff-on-Sea, SS0 0QF"
  }}
/>
```

---

### 4. ContactForm
A standalone form component used within ContactSection (can be used independently).

**Props:**
- `onSubmit` (function, optional): Callback function to handle form submission

**Example:**
```tsx
<ContactForm 
  onSubmit={(formData) => {
    console.log('Name:', formData.get('name'));
    console.log('Email:', formData.get('email'));
    console.log('Phone:', formData.get('phone'));
    console.log('Message:', formData.get('message'));
    // Add your form submission logic here
  }}
/>
```

---

### 5. Footer
The site footer with links, social media icons, and branding.

**Props:**
- `quickLinks` (array, optional): Array of link objects with `label` and `href`
- `socialLinks` (object, optional): Object with social media URLs

**Example:**
```tsx
<Footer 
  quickLinks={[
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'Contact', href: '#contact' },
  ]}
  socialLinks={{
    facebook: 'https://facebook.com/dlbcsouthend',
    instagram: 'https://instagram.com/dlbcsouthend',
    youtube: 'https://youtube.com/@dlbcsouthend',
    email: 'mailto:contact@dlbcsouthend.org'
  }}
/>
```

---

## Available Images in Assets Folder

Here are some images you can use from your assets folder:

```tsx
// Import statements
import img1 from "../assets/809ee5c3463ae88314b8d0c99e963f2cd4c475af.png";
import img2 from "../assets/73abb69066aa35b5a918fdf33372492b361bf848.png";
import img3 from "../assets/89fa95729f4951199dc1e0214d5900ff429b178a.png";
import img4 from "../assets/d6d87d449b601242cf48ff584d9fa7432836c574.png";
import img5 from "../assets/bbb989e48d9b1decc89776bd7017047b43e65fbd.png";
import img6 from "../assets/ddef11e3b02574ec5550f4f45615c149dbdd9694.png";
import img7 from "../assets/ab5b177bac98f4160531363f92b969c748fb3991.png";
import img8 from "../assets/9e910c2cd3241d00a70a6e70808946855fa74d16.png";
```

---

## Responsive Design

All components are fully responsive:

- **Mobile**: Single column layout, stacked elements
- **Tablet (md)**: 2-column layouts where appropriate
- **Desktop (lg)**: Full multi-column layouts with optimized spacing

Breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

---

## Styling Theme

All components use the project's design system:

**Colors:**
- Primary Blue: `#1c4e80`
- Secondary Blue: `#4cafe8`
- Text Dark: `#2d2d2d`
- Background: `#fdfdfd`

**Fonts:**
- TacticSans-UltIt:Italic (for large headings)
- TacticSans-MedIt:Italic (for medium headings)
- TacticSans-RegIt:Italic (for body text)

**Effects:**
- Glassmorphism: `bg-white/10 backdrop-blur-md`
- Smooth animations with framer-motion
- Hover effects and transitions

---

## Customization Tips

1. **Change Gallery Images**: Simply update the `images` array with new image imports
2. **Update Contact Info**: Modify the `contactInfo` object
3. **Add More Footer Links**: Extend the `quickLinks` array
4. **Custom Form Handling**: Pass a custom `onSubmit` function to ContactForm
5. **Different Scripture Banners**: Use ScriptureBanner multiple times with different content

---

## Component Structure

Each component is:
- ✅ Under 150 lines
- ✅ Fully typed with TypeScript
- ✅ Composable and reusable
- ✅ Mobile-first responsive
- ✅ Accessible with ARIA labels
- ✅ Uses Framer Motion animations
