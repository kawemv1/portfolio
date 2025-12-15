import React from 'react';

export interface Project {
  id: number;
  title: string;
  tech: string[];
  description: string;
  link?: string;
  github?: string;
  highlights: string[];
  status?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
  icon: React.ReactNode;
}

export interface Service {
  title: string;
  icon: React.ReactNode;
  items: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
  label: string;
}