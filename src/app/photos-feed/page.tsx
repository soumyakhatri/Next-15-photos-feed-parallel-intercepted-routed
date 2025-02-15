import Image from "next/image";
import { wonders } from "./wonders";
import Link from "next/link";

export default function PhotosFeed() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wonders && Array.isArray(wonders) && wonders?.map(({ src, id, name, shotBy, location }) => (
                    <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <Link href={`photos-feed/${id}`}>
                            <div className="relative h-64 w-full">
                                <Image 
                                    src={src} 
                                    alt={name} 
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </Link>
                        <div className="p-4">
                            <p className="text-sm font-medium text-gray-600">Photo By {shotBy}</p>
                            <p className="text-sm text-gray-500">{location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}