import type { RichTextWidget } from "apps/admin/widgets.ts";

export interface Props {
  title?: string; // @format rich-text
  paragraph?: string; // @format textarea
}

export default function HelloSection({ title = "Hello", paragraph = "Hello from decopilot" }: Props) {
  return (
    <div class="text-center py-12">
      <h1 class="text-4xl font-bold mb-4">{title}</h1>
      <p class="text-lg">{paragraph}</p>
    </div>
  );
}