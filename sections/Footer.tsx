import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";


interface Props {
  href?: string;
  image?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
  text?: string;
}
default function Footer({ href, width = 50 }: Props) {
  return (
    <div className="py-8 lg:px-0 px-6 fixed bottom-0 w-full mx-auto">
      {/* Add the Input component here */}

      {/* Existing code */}
      <a
        href={href}
        className="flex flex-row gap-1 items-center justify-center text-xs"
        style={{ width: `` }}
      >
        {/* ... */}
      </a>
    </div>
  );
}
export default Footer;
