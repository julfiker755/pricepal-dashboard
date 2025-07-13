
import { StatusBadge } from "@/components/reuseable/status"
import { Button } from "@/components/ui/button"
import { PlaceholderImg } from "@/lib/utils"
import { MapPin, Star, Phone, Users, Briefcase } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import ServicesList from "../service-list"
import { Backbtn } from "@/components/reuseable/Icon-button"

export default function ProviderDetails() {
  const [seeAll, setSeeAll] = useState(false)
  const services = [
    {
      id: 1,
      clientName: "Maria jones",
      location: "Dhaka, Bangladesh",
      date: "21-04-2025",
      status: "In progress",
      avatar: PlaceholderImg(),
    },
    {
      id: 2,
      clientName: "Maria jones",
      location: "Dhaka, Bangladesh",
      date: "21-04-2025",
      status: "Completed",
      avatar: PlaceholderImg(),
    },
    {
      id: 3,
      clientName: "Maria jones",
      location: "Dhaka, Bangladesh",
      date: "21-04-2025",
      status: "Completed",
      avatar: PlaceholderImg(),
    },
    {
      id: 4,
      clientName: "Maria jones",
      location: "Dhaka, Bangladesh",
      date: "21-04-2025",
      status: "Completed",
      avatar: PlaceholderImg(),
    }
  ];
  return (

    <div>
      {seeAll ? (<div>
        <div className={`mb-4 flex items-center  justify-between`}>
          {seeAll && (<Backbtn onClick={() => {
            setSeeAll(!seeAll)
          }}></Backbtn>)}
          <h1 className="font-semibold text-center text-lg">All services by this provider</h1>
          <h1 className="opacity-0">2</h1>
        </div>
        <ServicesList/>
      </div>) : (<div>
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-4">
          <div className="size-28 mx-auto rounded-full">
            <Image
              src={PlaceholderImg()}
              alt={"item3"}
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">ABC</h2>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <MapPin className="h-4 w-4 mr-1" />
            <span>Dhaka, Bangladesh</span>
          </div>
          <div className="flex items-center mt-2">
            {[...Array(4)].map((_, i) => (
              <Star key={`filled-${i}`} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            ))}
            <Star className="h-5 w-5 text-gray-300 fill-gray-300" />
            <span className="ml-2 text-sm font-medium text-gray-700">4.0 (100)</span>
          </div>
          <div className="flex space-x-2 mt-4">
            <Button variant={"main"} className={"rounded-full"}>Cleaner</Button>
            <Button variant={"main"} className={"rounded-full"}> Plumber</Button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="rounded-lg p-2 border">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">About</h3>
              <div className="text-sm text-gray-600 p-1">
                Lorem ipsum dolor sit amet consectetur. Morbi eu consequat non ornare viverra scelerisque imperdiet.
                Nisi tortor amet nunc magnis at morbi. Odio risus suspendisse tempus tempus quisque. Pellentesque
                tincidunt arcu porttitor diam. Gravida arcu eu pellentesque penatibus morbi. Feugiat ac eu non in. At
                pulvinar vulputate eu consectetur eu orci. Aliquet nisi eu ridiculus eleifend praesent iaculis.
              </div>
            </div>

            <div className="rounded-lg p-2 border">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Overview</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-gray-500" />
                  <span>+01245698745</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-gray-500" />
                  <span>10 employees</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-4 w-4 mr-2 text-gray-500" />
                  <span>2 years in business</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="rounded-lg p-2 border">
              <div className="flex flex-row items-center justify-between pb-5">
                <h3 className="text-lg font-semibold text-gray-800">Previous history</h3>
                <Button
                  onClick={() => setSeeAll(!seeAll)}
                  variant="outline"
                  className="text-sm text-gray-600 px-3 py-1 h-auto rounded-md bg-transparent"
                >
                  See all
                </Button>
              </div>
              <div className="bg-gray-50 rounded-lg">
                <div className="space-y-5">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className="flex items-center bg-gray-200/70 rounded-md py-[6px] px-1  justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src={PlaceholderImg()}
                          alt={service.clientName}
                          className="size-14 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {service.clientName}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {service.location}
                          </p>
                          <p className="text-sm text-gray-500">
                            {service.date}
                          </p>
                        </div>
                      </div>
                      <StatusBadge status={service.status} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>)}
    </div>
  )
}
