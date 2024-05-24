import {
  AboutContainer,
  AboutItem,
  AboutItemCardWrapper,
  AboutMenu,
} from "./About.styled";

function About() {
  return (
    <AboutContainer>
      <AboutMenu>
        <AboutItem>
          <AboutItemCardWrapper>
            <h3>FREE Shipping on US orders $120+</h3>
            <p>*U.S. Shipping Only (Excludes HI & AK)</p>
          </AboutItemCardWrapper>
        </AboutItem>
        <AboutItem>
          <AboutItemCardWrapper>
            <h3>Hassle free returns</h3>
            <p>Your Satisfaction is Our Top Priority</p>
          </AboutItemCardWrapper>
        </AboutItem>
        <AboutItem>
          <AboutItemCardWrapper>
            <h3>24/7 on-line</h3>
            <p>Contact our representative any time</p>
          </AboutItemCardWrapper>
        </AboutItem>
      </AboutMenu>
    </AboutContainer>
  );
}

export default About;
