import MainCouter from "./MainCouter";

export default function Home() {

  return (
    <div className="m-2">
      <MainCouter/>
    </div>
  );
}




// export async function getStaticProps() {

//   const res = await fetch('https://fakestoreapi.com/products')
//   const products = await res.json()

//   return {
//     props: {
//       products,
//     },
//   }
// }


