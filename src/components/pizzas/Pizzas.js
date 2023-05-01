import Pizza from "./pizza/Pizza";
import pizzasData from '../../assets/pizzas.json'

const Pizzas = () => {

    console.log(pizzasData)

    let pizzas = pizzasData.map((pizza) => {
        return <Pizza name={pizza.name} img={pizza.imageUrl} price={pizza.price} />
    })
    return (
        <div className="content__items">
            {pizzas}
        </div>
    )
}

export default Pizzas;