import {
  OfferMenu,
  OfferMenuItem,
  OfferText,
  OfferTitle,
  OfferWrapper,
} from "./Offer.styled";
import products from "../../../data/products.json";

function Offer() {
  return (
    <OfferWrapper>
      <OfferTitle>BEST-SELLERS</OfferTitle>
      <OfferText>Innovating Sports Nutrition Since 1998</OfferText>
      <div>
        <OfferMenu>
          {products.map(({ id, name, description, sale, salePrice, price }) => {
            return (
              <OfferMenuItem key={id}>
                <h3>{name}</h3>
                <p>{description}</p>
                {sale ? (
                  <div>
                    <span>{salePrice} </span>
                    <span style={{ textDecoration: "underline" }}>{price}</span>
                  </div>
                ) : (
                  <span>{price}</span>
                )}
              </OfferMenuItem>
            );
          })}
        </OfferMenu>
      </div>
    </OfferWrapper>
  );
}

export default Offer;
