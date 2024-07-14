export type reqApi = String[];

interface Props {
  /**
  * @description The description of name.
  */
  numberOfFacts?: number;
}

async function loader({ numberOfFacts = 1 }: Props): Promise<reqApi> {
  const { facts } = (await fetch(`https://dogapi.dog/api/facts?number=${numberOfFacts ?? 1}`,
  ).then((r) => r.json()));
  return facts;
}

export default loader;