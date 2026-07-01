import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-6xl md:text-8xl font-heading font-bold text-primary mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
      <p className="text-foreground/70 mb-8 max-w-md">The page you are looking for doesn't exist or has been moved.</p>
      <Link href="/" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
        Return Home
      </Link>
    </div>
  );
}
