export interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface Memory {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}