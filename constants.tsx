
import React from 'react';
import { Layout, Code, Target, Share2, Video, Rocket, Search, Cpu } from 'lucide-react';
import { CaseStudy, Service, NavItem } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'meta-ads',
    title: 'Meta Ads Management',
    description: 'Scaling brands with data-driven paid social strategies that convert.',
    icon: 'Target',
    accentColor: 'indigo-500',
    details: [
      'Campaign Architecture',
      'A/B Creative Testing',
      'Audience Segmentation',
      'ROAS Optimization'
    ]
  },
  {
    id: 'social',
    title: 'Social Media Management',
    description: 'Managing your digital presence to build community and authority.',
    icon: 'Share2',
    accentColor: 'blue-400',
    details: [
      'Content Strategy',
      'Engagement Growth',
      'Brand Consistency',
      'Analytics Reporting'
    ]
  },
  {
    id: 'google-ads',
    title: 'Google Ads Management',
    description: 'Capturing high-intent traffic with precision-targeted search and display campaigns.',
    icon: 'Search',
    accentColor: 'blue-600',
    details: [
      'Keyword Research & Strategy',
      'Search & Display Campaigns',
      'Conversion Tracking Setup',
      'Bidding Strategy Optimization'
    ]
  },
  {
    id: 'video',
    title: 'Video Editing',
    description: 'Cinematic storytelling and motion graphics that grab attention in 3 seconds.',
    icon: 'Video',
    accentColor: 'cyan-500',
    details: [
      'Short-form Content (Reels/TikTok)',
      'Product Explainers',
      'Color Grading',
      'Sound Design'
    ]
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description: 'Creating intuitive, conversion-focused digital interfaces that resonate with users.',
    icon: 'Layout',
    accentColor: 'blue-500',
    details: [
      'User Research & Personas',
      'Wireframing & Prototyping',
      'Visual Interface Design',
      'Usability Testing'
    ]
  },
  {
    id: 'dev',
    title: 'Web Development',
    description: 'Building high-performance, scalable web applications using cutting-edge technologies.',
    icon: 'Code',
    accentColor: 'cyan-400',
    details: [
      'Full-stack React Development',
      'E-commerce Solutions',
      'CMS Integration',
      'Performance Optimization'
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '3',
    title: 'Premium Watches – Scaling Revenue',
    category: 'Meta Ads & Funnel Optimization',
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
    description: 'Scaling daily order volume and revenue while maintaining high profitability for a luxury watch brand.',
    challenge: 'The brand faced stagnant growth due to ad fatigue and rising Customer Acquisition Costs (CAC), threatening overall profitability.',
    solution: 'We restructured the Meta Ads architecture, implementing rigorous A/B testing for creatives. We prioritized high-quality video assets and dynamic catalog ads, while optimizing targeting for high-intent buyers.',
    results: [
      '6.11x Average ROAS',
      '65% Revenue Growth',
      '391 Total Purchases',
      '₹4.7M+ Sales Value'
    ],
    tags: ['Meta Ads', 'E-commerce', 'Scaling']
  },
  {
    id: '4',
    title: 'Food Industry – Organic Social Media Revamp',
    category: 'Social Media Management & Strategy',
    thumbnail: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
    description: 'Transforming an inconsistent social profile into a visually cohesive, premium brand presence.',
    challenge: 'The brand suffered from a cluttered, inconsistent digital identity that failed to drive meaningful organic growth or community engagement.',
    solution: 'We developed strict visual guidelines with a premium aesthetic and executed a strategic content calendar balancing cinematic Reels, carousels, and interactive Stories.',
    results: [
      '120% Organic Reach Growth',
      '7.5x Engagement Boost',
      '60% Inbound DM Increase',
      'Premium Brand Elevation'
    ],
    tags: ['Social Media', 'Content Strategy', 'Food Industry']
  },
  {
    id: '2',
    title: 'Pulse Fitness App',
    category: 'Product Design',
    thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop',
    description: 'Designing a mobile-first workout tracking experience.',
    challenge: 'Users found existing fitness apps too cluttered and demotivating.',
    solution: 'Focused on a "Gamified Minimalist" approach with electric blue micro-interactions for every completed set.',
    results: [
      'App Store Top 50 Featured',
      '85% Weekly Active User Rate',
      'Sub-2s Interaction Latency'
    ],
    tags: ['Mobile', 'UX', 'Fitness']
  }
];

export const PROCESS_STEPS = [
  {
    title: 'Discovery',
    description: 'Deep diving into your business goals, market position, and target audience.',
    icon: Search,
    color: 'blue-500'
  },
  {
    title: 'Strategy',
    description: 'Crafting a roadmap that aligns visual identity with conversion objectives.',
    icon: Target,
    color: 'cyan-400'
  },
  {
    title: 'Execution',
    description: 'Bringing the vision to life with pixel-perfect design and clean code.',
    icon: Cpu,
    color: 'indigo-500'
  },
  {
    title: 'Growth',
    description: 'Optimizing and scaling based on real-world performance data.',
    icon: Rocket,
    color: 'blue-400'
  }
];
