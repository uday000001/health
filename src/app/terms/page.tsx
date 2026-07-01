import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Page() {
  return (
    <div className="pt-32 pb-24 container mx-auto px-4 min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 capitalize">Page Under Construction</h1>
      <p className="text-foreground/70 text-lg mb-8">This section is being updated.</p>
      <Link href="/">
        <Button className="rounded-full">Back to Home</Button>
      </Link>
    </div>
  );
}
