import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <h1 className="text-9xl font-extrabold text-blue-100">404</h1>
            <div className="absolute">
                <h2 className="text-4xl font-bold text-blue-900 mb-4">Page not found</h2>
            </div>
            <p className="text-gray-600 max-w-md mx-auto mb-8 mt-20 relative z-10">
                Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
            </p>
            <Link href="/">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                    Go back home
                </Button>
            </Link>
        </div>
    );
}
