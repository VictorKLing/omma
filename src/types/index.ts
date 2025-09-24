export type SectionProps = {
  title: string;
  content: string;
};

export type NavbarProps = {
  links: Array<{ label: string; href: string }>;
};

export type FooterProps = {
  text: string;
};

export type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
};

export type CardProps = {
  title: string;
  description: string;
  imageUrl?: string;
};