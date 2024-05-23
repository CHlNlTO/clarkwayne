import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";

export async function FeaturedWorkBadge() {
  return (
    <div className="z-10 flex items-center justify-start">
      <AnimatedGradientText>
        🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#40e9ff] via-[#4050ff] to-[#40e9ff] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
          )}
        >
          Featured Work
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </div>
  );
}
