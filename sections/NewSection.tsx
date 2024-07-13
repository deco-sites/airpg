interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
}

export default function Section({ name = "Cap" }: Props) {
  return (
    <div><h5>Hello {name}</h5></div>
  )
}