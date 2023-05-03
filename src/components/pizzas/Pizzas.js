import Pizza from "./pizza/Pizza";

const Pizzas = (props) => {



    let pizzas = props.items.map((pizza) => {
        return <Pizza key={pizza.id} {...pizza} />
    })
    return (
        <div className="content__items">
            {pizzas}
        </div>
    )
}

export default Pizzas;