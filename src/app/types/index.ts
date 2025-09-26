export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  image: string;
}

export interface Blog {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export type FormStatus = "idle" | "loading" | "sending" | "success" | "error";

export interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}
