import Menu from '../Component/component.menu.jsx';

const MenuApp = () => {
    const products = [
    {
        name: "Hamburguesa comun",
        description: "Pan, carne, lechuga, cebolla, jitomate, mostaza, queso amarillo, capsup, mayonesa, chile y pepinillos.",
        img: "https://smartremo.es/wp-content/uploads/2020/04/hamburguesa-scaled.jpg"
    },
    {
        name: "Hamburguesa Extra Queso",
        description: "Pan, queso extra, mayonesa y carne",
        img: "https://th.bing.com/th/id/OIP.oBqH5u3Z8mwZFbY-z7L-oQHaDt?w=314&h=174&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    {
        name: "Hamburguesa Tocino",
        description: "Pan, lechuga, mayonesa, piña, tocino, carne y lechuga",
        img: "https://micasahernandez.com/wp-content/uploads/2021/11/C%C3%B3mo-preparar-hamburguesas-con-tocino-y-pi%C3%B1a.jpg"
    },
    {
        name: "Hamburguesa Mexicana",
        description: "Pan, salsa de molcajete roja, guacamole, cebolla rosa, queso, mayonesa, lechuga, carne, jitomate, chile y jitomate.",
        img: "https://canela-y-clavo.com/wp-content/uploads/2023/03/42-Mexicana.png"
    },
    {
        name: "Hamburguesa de Pollo",
        description: "Pan, queso, cebolla, lechuga, jitomate, tocino, mayonesa y carne de pollo empanizada.",
        img: "https://www.blogcocinafacil.com.es/wp-content/uploads/2022/06/Ricetta-hamburger-di-pollo.jpg"
    },
    {
        name: "Hamburguesa de Pescado",
        description: "Pan, cebolla, carne de tilapia, lechuga, mayonesa y chimichurri.",
        img: "https://okdiario.com/img/2021/03/29/hamburguesas-de-pescado.jpg"
    },
    {
        name: "Hamburguesa de Soya",
        description: "Pan, lechuga, jitomate, cebolla y carne de soya",
        img: "https://cdn7.kiwilimon.com/recetaimagen/11414/960x640/2574.jpg.jpg"
    },
    {
        name: "Hamburguesa de UTR",
        description: "Pan, lechuga, pepinillos, cebolla rosa, jitomate, queso, pepino y carne de arrachera.",
        img: "https://cdn.shopify.com/s/files/1/0669/7585/8999/files/carni-k_blog-hamburguesa.jpg?v=1667414084"
    }
];

    return (
        <div className='col-12'>
            
            <div className="row">
                {
                    products.map((item, index) => (
                        <Menu key={index} products={item}
                        />
                    ))}
            </div>
        </div>
    );
};

export default MenuApp;