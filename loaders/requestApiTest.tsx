export reqApi = String[];

interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
}

export interface Returns {
  name: string
}

export async function loader({ name = "api" }: Props): Promise<reqApi> {
  const { res } = awati();
  return res;
}