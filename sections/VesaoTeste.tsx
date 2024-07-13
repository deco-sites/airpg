interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
}

export default function Section({ name = "Capy" }: Props) {
  <div>Ola<div>
  return <div>Hello {name}</div>
}