import Image from "next/image";
import { wonders } from "../wonders";
import { notFound } from "next/navigation";

export default async function Photo({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const photo = wonders.find(p => p.id === parseInt(id))
    if (photo) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative h-[600px] w-full">
                        <Image 
                            src={photo.src} 
                            alt={photo.name} 
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <p className="text-lg font-medium text-gray-800">Photo By {photo.shotBy}</p>
                        <p className="text-md text-gray-600 mt-2">{photo.location}</p>
                    </div>
                </div>
            </div>
        )
    } else {
        notFound()
    }
}