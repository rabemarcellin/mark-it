import ExternalLink from "@/components/custom/ExternalLink";

type Props = {
    name: string;
    description: string;
    image: string;
    link: string;
}
const ProductCard = ({
    name,
    description,
    image,
    link
}: Props) => {
    return (
        <div className="product-card">
            <div className="product-card--layout overflow-hidden">
                <div className="product-card__image">
                    <img src={image} alt={name} />
                </div>
                <div className="product-card__details">
                    <h3 className="product-card__name mb-2">{name}</h3>
                    <p className="product-card__description mb-4">{description}</p>

                    <div className="my-4 mb-8">
                        <ExternalLink
                        to={link} 
                        label={name} 
                        linkLabel="Voir la pubication" 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard