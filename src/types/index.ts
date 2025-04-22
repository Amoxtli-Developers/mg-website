// Property Types
export interface Property {
  id: number;
  title: string;
  description: string;
  price: string;
  location: string;
  features: string[];
  image: string;
  type: string;
}

// Testimonial Types
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
