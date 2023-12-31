export const getStaticPaths = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(ninja => {
        return {
            params: {id: ninja.id.toString()}
        }
    })

    return {paths, fallback: false};
}

export const getStaticProps = async(context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {props: {ninja: data}}
}

const NinjaDetails = ({ninja}) => {

  return (
    <div>
      <h1>Details Page</h1>
      <div>
        <h2>{ninja.name}</h2>
        <h2>{ninja.email}</h2>
        <h2>{ninja.website}</h2>
        <h2>{ninja.address.city}</h2>
      </div>
    </div>
  )
}
export default NinjaDetails;

