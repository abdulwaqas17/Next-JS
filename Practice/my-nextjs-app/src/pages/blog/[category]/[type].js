import { useRouter } from 'next/router';

export default function BlogPage() {
  const router = useRouter();
  const { category, type } = router.query;

  return (
    <div>
      <h1>Blog Category: {category}</h1>
      <p>Blog Slug: {type}</p>
    </div>
  );
}
