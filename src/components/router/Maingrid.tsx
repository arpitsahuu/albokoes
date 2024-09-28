import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] mb-10">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
          index={i}
          url={item?.url}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({image,index}:{image:string,index:number}) => (
  // <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  <img className="flex flex-1 w-full h-full min-h-[6rem] rounded-sm bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" src={image} alt="new image" />
);
const items = [
  {
    title: "",
    description: "",
    header:"/layout1.jpg" ,
    className: "md:col-span-2",
    image:"/layout1.jpg"

  },
  {
    title: "Albokoes Latest News & Events",
    description: "Albokoes delivers the latest news, events, and insights, keeping you informed and up-to-date.",
    url:"/newsandevents",
    header: "https://images.unsplash.com/photo-1584269413806-0b718f2ddc7d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    image:"https://images.unsplash.com/photo-1584269413806-0b718f2ddc7d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Products & Innovations",
    description: "Discover Albokoes' latest products and innovations shaping the future and transforming industries.",
    url:"/products",
    header: "https://images.unsplash.com/photo-1723914677058-660c90cb772a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
    className: "md:col-span-1",
    icon: <IconSignature  className="h-4 w-4 text-neutral-500" />,
    image:"https://images.unsplash.com/photo-1723914677058-660c90cb772a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "",
    description:
      "",
    header:"/layout2.jpg",
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
