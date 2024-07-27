
export default function Product(props) {
  const { email } = props.params;

  return(
    <div>Categoria dinámica: {email}</div>
  );
}