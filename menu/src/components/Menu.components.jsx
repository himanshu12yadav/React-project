const Menu = ({ items }) => {
    return (
        <div className="section-center">
            {
                items.map(menuItem => {
                    const { id, title, price, img, desc } = menuItem;
                    return (
                        <article className="menu-item" key={id}>
                            <img src={img} className='photo' alt={title} />
                            <div className="item-info">
                                <header>
                                    <h4>{title}</h4>
                                    <h4 className='price'>${price}</h4>
                                </header>
                                <p className="item-text">{desc}</p>
                            </div>
                        </article>
                    );
                })
            };
        </div>
    );

};

export default Menu;