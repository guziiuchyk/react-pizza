import Pizza from "./pizza/Pizza";

const Pizzas = (props) => {
    let pizzasData = [
        {
            name:"Сырная-пицца",
            price:'295',
            img:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
        },
        {
            name:"Чизбургер-пицца",
            price:'300',
            img:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
        },
        {
            name:"Вегетарианская-пицца",
            price:'210',
            img:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
        },
        {
            name:"Мясная-пицца",
            price:'270',
            img:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
        },
        {
            name:"Колбасная-пицца",
            price:'260',
            img:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
        },
        {
            name:"Закрытая-пицца",
            price:'230',
            img:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
        },
        {
            name:"Ананас-пицца",
            price:'250',
            img:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
        },
    ]

    let pizzas = pizzasData.map((pizza) => {
        return <Pizza name={pizza.name} img={pizza.img} price={pizza.price} />
    })
    return (
        <div className="content__items">
            {pizzas}
        </div>
    )
}

export default Pizzas;