import { Product } from '../../data'

const Products = ({ id, name, url, price, description, size_avaliable, quantity_avaliable, images }: Product) => {
    return (
        <div className="product">
            <a className="product_link-image" href="details.html">
                <img className="product_image" src={images[0].url}
                    alt={images[0].description} />
                <img className="product_image" src={images[1].url}
                    alt={images[1].description} />
                <img className="product_image" src={images[2].url}
                    alt={images[2].description} />
            </a>
            <div className="product_size">
                <input type="radio" id={`size-p-` + id} name={`size_model-` + id} className="size_input" />
                <label className="size_label" htmlFor={`size-p-` + id}>P</label>
                <input type="radio" id={`size-m-` + id} name={`size_model-` + id} className="size_input" />
                <label className="size_label" htmlFor={`size-m-` + id}>M</label>
                <input type="radio" id={`size-g-` + id} name={`size_model-` + id} className="size_input" />
                <label className="size_label" htmlFor={`size-g-` + id}>G</label>
            </div>
            <a href="#" className="products_especification">
                <h4 className="especification_name">{name}</h4>
                <p className="especification_value">R$ {price.toFixed(2)}</p>
            </a>
            <div className="product_button-bag">
                <div className="button-bag_content">
                    <div className="content_front-button">
                        <button className="button-bag">POR NA SACOLA</button>
                    </div>
                    <button className="content_back-button"></button>
                </div>
            </div>
        </div>
    )
}

export default Products