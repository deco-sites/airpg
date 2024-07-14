export type reqApi = String[];

interface Props {
  /**
  * @description The description of name.
  */
  numberOfFacts?: BigInt;
}

export interface Returns {
  name: string
}

export async function loader({ numberOfFacts }: Props): Promise<reqApi> {
  const { res } = (await fetch(`https://dogapi.dog/api/facts?number=${numberOfFacts ?? 1}`,
  ).then((r) => r.json()));
  return res;
}