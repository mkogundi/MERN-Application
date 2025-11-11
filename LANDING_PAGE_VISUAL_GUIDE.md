# Landing Page - Visual Reference Guide

## Page Layout

```
┌─────────────────────────────────────────────────────────────┐
│                        NAVBAR                              │
│  🎬 The Movies Hub    [Browse]  [Login]  [Register]        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                   HERO BANNER SECTION                       │
│            [Banner Background/Image with Overlay]          │
│                                                             │
│                   🎬 The Movies Hub                        │
│         Cinematic Odyssey : The magic of movies            │
│                                                             │
│           [Explore Movies]  [Sign In]                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   FEATURES SECTION                          │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │     🎯       │  │     🔍       │  │     ⭐       │    │
│  │Browse        │  │Smart         │  │Ratings &     │    │
│  │Curated       │  │Filtering     │  │Reviews       │    │
│  │Movies        │  │              │  │              │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                             │
│  ┌──────────────┐                                         │
│  │     🛡️       │                                          │
│  │Secure        │                                         │
│  │Access        │                                         │
│  └──────────────┘                                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    CTA SECTION                              │
│                                                             │
│  Ready to Start Your Cinematic Journey?                    │
│  Browse thousands of movies or create an account           │
│                                                             │
│           [Browse Movies Now]                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Component Hierarchy

```
App
├── AuthProvider
│   └── AppContent
│       ├── Navbar
│       │   ├── Logo (navigates to home)
│       │   ├── Browse Button
│       │   ├── User Info / Auth Buttons
│       │   └── Admin Panel Button (if admin)
│       └── Router
│           └── Routes
│               ├── / → Landing
│               │   ├── .landing-banner
│               │   │   ├── .banner-image
│               │   │   ├── .banner-overlay
│               │   │   └── .banner-content
│               │   │       ├── .app-title
│               │   │       ├── .app-subtitle
│               │   │       └── .banner-buttons
│               │   ├── .landing-features
│               │   │   └── .feature-card (×4)
│               │   └── .landing-cta
│               ├── /login → Login
│               ├── /register → Register
│               ├── /movies → Movies
│               └── /admin → Admin
```

## Color Reference

### Primary Gradient
```
Deep Purple: #0f0c29
Mid Purple:  #302b63
Dark Purple: #24243e
```

### Accent Colors
```
Red:        #ff6b6b  (Buttons, Primary actions)
Dark Red:   #ff5252  (Hover state)
Yellow:     #feca57  (CTAs, Highlights)
Cyan:       #48dbfb  (Secondary accents)
```

### Text Colors
```
Primary Text:    #ffffff (white)
Secondary Text:  #e0e0e0 (light gray)
Muted Text:      #b0b0b0 (medium gray)
Body Text:       #c0c0c0 (light gray)
```

## Typography Hierarchy

```
APP TITLE
5rem | Bold | Gradient (Red → Yellow → Cyan)
"🎬 The Movies Hub"

SUBTITLE
1.8rem | Light Weight | Light Gray (#e0e0e0)
"Cinematic Odyssey : The magic of movies"

FEATURE HEADERS
1.5rem | Bold | Red Gradient (#ff6b6b)
"Browse Curated Movies"

BODY TEXT
1rem | Regular | Medium Gray (#b0b0b0)
"Discover a handpicked collection..."

CTA HEADING
2.5rem | Gradient | Yellow to Pink
"Ready to Start Your Cinematic Journey?"
```

## Button Styles

### Primary Button (Explore Movies, Browse Movies Now)
```
Background:  Linear gradient (#ff6b6b → #ff5252)
Text Color:  White
Padding:     14px 40px
Border:      None
Border Radius: 50px
Font Weight: 600
Hover: TranslateY(-3px) + Increased shadow
```

### Secondary Button (Sign In)
```
Background:  Transparent
Border:      2px solid white
Text Color:  White
Padding:     14px 40px
Border Radius: 50px
Font Weight: 600
Hover: Background white with opacity
```

### Large CTA Button
```
Background:  Linear gradient (#feca57 → #ff9ff3)
Text Color:  #1a1a2e (dark)
Padding:     16px 50px
Font Size:   1.2rem
Hover: TranslateY(-3px) + Increased shadow
```

## Animation Timings

```
slideInDown
  Duration: 1s
  Easing:   ease-out
  From:     translateY(-50px), opacity 0
  To:       translateY(0), opacity 1

fadeInScale
  Duration: 1.2s
  Easing:   ease-out
  From:     scale(0.9), opacity 0
  To:       scale(1), opacity 1

fadeIn
  Duration: 1.5s
  Easing:   ease-out
  From:     opacity 0
  To:       opacity 1

fadeInUp (Staggered)
  Duration: 1s
  Easing:   ease-out
  Delays:   0.2s, 0.4s, 0.6s, 0.8s (for 4 cards)
  From:     translateY(30px), opacity 0
  To:       translateY(0), opacity 1
```

## Feature Cards

```
┌────────────────────────────┐
│           🎯               │
│                            │
│    Browse Curated Movies   │
│                            │
│  Discover a handpicked    │
│  collection of the best    │
│  movies from around the    │
│  world.                    │
└────────────────────────────┘

Background:    Glass effect + semi-transparent white
Border:        1px solid rgba(255, 255, 255, 0.1)
Border Radius: 15px
Padding:       40px 30px
Backdrop:      blur(10px)
Hover:         Border red, shadow increase, lift up
```

## Responsive Breakpoints

### Desktop (1200px+)
- Grid: 4 columns for feature cards
- Title: 5rem
- Subtitle: 1.8rem
- Full width utilization

### Tablet (768px - 1199px)
- Grid: 2 columns for feature cards
- Title: 3rem
- Subtitle: 1.4rem
- Padding: 40px

### Mobile (480px - 767px)
- Grid: 1 column for feature cards
- Title: 2rem
- Subtitle: 1.2rem
- Buttons: Stack vertically
- Padding: 20px

### Small Mobile (<480px)
- Title: 1.8rem
- Feature cards: Reduced padding
- All text sizes reduced by 10-15%

## Shadow Effects

```
Light Shadow:    0 2px 8px rgba(0, 0, 0, 0.1)
Medium Shadow:   0 4px 15px rgba(0, 0, 0, 0.2)
Deep Shadow:     0 8px 25px rgba(0, 0, 0, 0.3)
Feature Shadow:  0 10px 40px rgba(0, 0, 0, 0.3)
Button Hover:    0 8px 25px rgba([color], 0.4)
```

## Hover States

### Banner Buttons
```
Explore Movies: Red glow, lift 3px up
Sign In: White overlay 10%, lift 3px up
```

### Feature Cards
```
Lift 10px up
Border color changes to red
Shadow increases to deep shadow
```

### Navbar Browse Button
```
Background darkens slightly
Lift 2px up
Maintains visibility
```

---

**This guide helps developers understand and maintain the visual consistency of the landing page.**
