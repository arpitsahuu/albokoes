import { cn } from "@/lib/utils";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-3 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  index,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: string;
  icon?: React.ReactNode;
  index: number;
}) => {
  const isFullBackground = index === 0 || index === 3;

  const bgColor =
    index === 1
      ? "#bfdce3"
      : index === 2
      ? "#bfe9e6"
      : "bg-gray-100"; // default background

  const textColor = isFullBackground ? "text-white" : "text-neutral-600";
  
  return (
    <div
      className={cn(
        `relative row-span-1 rounded-sm group/bento hover:shadow-xl transition duration-200 shadow-input   bg-gray-100 border border-transparent flex flex-col`, 
        className,
        isFullBackground ? "p-0" : "p-3" // Remove padding for index 0 and 3
      )}
      style={
        isFullBackground
          ? { backgroundImage: `url(${header})`, backgroundSize: "cover", backgroundPosition: "center" }
          : { backgroundColor: bgColor }
      }
    >
      {/* Flex container to push the content to the bottom */}
      <div className="flex-grow"></div>

      {/* Text content container */}
      <div className="relative z-10">
        {/* Conditionally render the semi-transparent overlay for index 0 and 3 */}
        {isFullBackground && (
          <div className="absolute inset-x-0 bottom-0 bg-black opacity-50 w-full h-full max-h-16"></div>
        )}

        {/* Text content */}
        <div className={cn("relative", !isFullBackground && "p-3")}>
          <div
            className={cn(
              "font-bold mb-2 text-black",
              isFullBackground && "ps-3 pt-3", // Apply ps-3 and pt-3 for index 0 and 3
              textColor
            )}
          >
            {title}
          </div>
          <div
            className={cn(
              "font-normal text-xs text-black",
              isFullBackground && "ps-3 pb-3", // Apply ps-3 and pb-3 for index 0 and 3
              textColor
            )}
          >
            {description}
          </div>
          {(index === 1 || index === 2) && (
            <a
              href="#"
              className={cn(
                "block mt-3 text-sm font-semibold text-black",
                "underline hover:text-gray-800"
              )}
            >
              Learn more
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
