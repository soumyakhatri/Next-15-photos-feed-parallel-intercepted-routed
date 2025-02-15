import Image from "next/image";
import { wonders } from "../../wonders";
import { notFound } from "next/navigation";
import Modal from "@/components/modal";

export default async function PhotoInModal({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const photo = wonders.find(p => p.id === parseInt(id))
    if (photo) {
        return (
            <Modal>
                <div className="space-y-24">
                    <div className="relative h-[50px] w-full">
                        <Image 
                            src={photo.src} 
                            alt={photo.name} 
                            width={200}
                            height={200}
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="space-y-2">
                        <p className="text-lg font-medium text-gray-800">Photo By {photo.shotBy}</p>
                        <p className="text-md text-gray-600">{photo.location}</p>
                    </div>
                </div>
            </Modal>
        )
    } else {
        notFound()
    }
}