import Image from "next/image";

export const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height={20}
      width={20}
      alt="thumbnail"
      className="rounded-full h-6 w-6 border-2 border-white object-contain"
    />
    <p>{title}</p>
  </div>
);
