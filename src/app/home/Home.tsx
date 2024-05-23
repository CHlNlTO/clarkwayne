import RadialGradient from "@/components/magicui/radial-gradient";

export default function Home() {
  return (
    <div className="relative flex h-dvh w-full items-center justify-center bg-white dark:bg-[#0D0D11] p-20 md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        Clark Wayne
      </p>
      <RadialGradient className="top-0" />
    </div>
  );
}
