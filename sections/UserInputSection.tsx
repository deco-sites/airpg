import type { reqApi } from "../loaders/requestApiTest.ts";

// Props type that will be configured in deco.cx's Admin
export interface Props {
  title: string;
  req?: reqApi;
}

export default function SectionUser(
  { title = "title", req }: Props,
) {
  return (
    <div class="p-4">
      <h1 class="font-bold">{title}</h1>
      <ul>
        {req?.map((fact) => <li>{fact}</li>)}
      </ul>
    </div>
  );
}