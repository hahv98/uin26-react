export default function ProductCard({p, setCart}){
    const handleClick = ()=>{
      setCart((prev) => 
        prev.some(item => item._id === p._id) ? 
        prev.map(item => item._id === p._id ? {...item, quantity: item.quantity + 1} : item) :
        [...prev, {...p, quantity: 1}])
      console.log("Legg i handlekurv")
    }

    return (
      <article className="product-card">
          <img src={p.imageURL} alt={p.productname} />
          <a href="#">{p.category}</a>
          <h3>{p.productname}</h3>
          <p>Kr. {p.price},-</p>
          <button onClick={handleClick}>Legg til handlevogn</button>
      </article>
    )
  }