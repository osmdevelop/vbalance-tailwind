// app/page.jsx
'use client'; 

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to default language (e.g., /en)
    router.push('/en');
  }, [router]);

  return null;  // No content, immediate redirect
}
