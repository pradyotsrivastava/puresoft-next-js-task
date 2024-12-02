"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoBulbSharp } from "react-icons/io5";
import {
  MdSettings,
  MdShowChart,
  MdPeople,
  MdOutlineDirectionsRun,
} from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";

const menuItemsTop = [
  { label: "Reports", href: "/dashboard", icon: <MdShowChart /> },
  {
    label: "Library",
    href: "/dashboard/library",
    icon: <BsFillLightningChargeFill />,
  },
  { label: "People", href: "/dashboard/people", icon: <MdPeople /> },
  {
    label: "Activities",
    href: "/dashboard/activities",
    icon: <MdOutlineDirectionsRun />,
  },
];

const menuItemsBottom = [
  { label: "Get Started", href: "/dashboard/support", icon: <IoBulbSharp /> },
  { label: "Settings", href: "/dashboard/settings", icon: <MdSettings /> },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-48 bg-white p-4 h-full flex-col hidden lg:flex">
      <div className="mb-8 text-red-600 text-2xl font-bold">
        <Image src="/tesla-logo.png" alt="TESLA" width={100} height={100} />
      </div>
      <div>
        <nav className="space-y-1">
          {menuItemsTop.map(({ label, icon, href }) => (
            <div
              key={label}
              className={`${
                pathname === href
                  ? "bg-sky-500/30 text-blue-600"
                  : "text-gray-500"
              } flex items-center gap-2 p-2 rounded-md`}
            >
              <span>{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </nav>
      </div>
      <div className="mt-8">
        <h1 className="text-gray-500 font-semibold p-2">Support</h1>
        <nav className="space-y-1">
          {menuItemsBottom.map(({ label, icon, href }) => (
            <div
              key={label}
              className={`${
                pathname === href
                  ? "bg-sky-500/30 text-blue-600"
                  : "text-gray-500"
              } flex items-center gap-2 p-2 rounded-md`}
            >
              <span>{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </nav>
      </div>
      <div className="mt-auto bg-gray-300 h-[1px]"></div>
      <div className="w-8 h-8 relative mt-4">
        <Image
          src="https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE="
          alt="Sam Wheeler"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <span>Sam Wheeler</span>
      <span className="text-xs text-gray-500">samwheeler@example.com</span>
    </aside>
  );
}
