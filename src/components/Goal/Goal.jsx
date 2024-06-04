import { OfferText } from "../Offer/Offer.styled";
import Title from "../ui/SectionTitle";
import { GoalMenu, GoalWrapper } from "./Goal.styled";

function Goal() {
  return (
    <GoalWrapper>
      <Title>CHOOSE YOUR GOAL</Title>
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
