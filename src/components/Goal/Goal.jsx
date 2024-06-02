import { OfferText, OfferTitle } from "../Offer/Offer.styled";
import { GoalMenu, GoalWrapper } from "./Goal.styled";

function Goal() {
  return (
    <GoalWrapper>
      <OfferTitle>CHOOSE YOUR GOAL</OfferTitle>
      <OfferText>Find The Products To Help You Reach It</OfferText>
      <GoalMenu>
        <li>
          <img src="#" alt="" />
          <h3>Build Muscle + Mass</h3>
        </li>
        <li>
          <img src="#" alt="" />
          <h3>Endurance + Recovery</h3>
        </li>
        <li>
          <img src="#" alt="" />
          <h3>Athletic Performance</h3>
        </li>
      </GoalMenu>
    </GoalWrapper>
  );
}

export default Goal;
