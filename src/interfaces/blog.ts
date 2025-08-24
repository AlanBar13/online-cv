export default interface Blog {
  id: number;
  documentId: string;
  Title: string;
  Content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  Extract?: string;
}
