export default function Component() {
  return (
    <>
    {    Array(100000).fill('Blablabla')
    .map((name, idx) => (<li key={idx}>{name}</li>))}
    </>
)
}
