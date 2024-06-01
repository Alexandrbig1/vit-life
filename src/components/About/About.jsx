import {
  AboutContainer,
  AboutItem,
  AboutItemCardIcon,
  AboutItemCardIconDelivery,
  AboutItemCardIconReturn,
  AboutItemCardIconSupport,
  AboutItemCardIconWrapper,
  AboutItemCardText,
  AboutItemCardTitle,
  AboutItemCardWrapper,
  AboutMenu,
} from "./About.styled";

function About() {
  return (
    <AboutContainer>
      <AboutMenu>
        <AboutItem>
          <AboutItemCardWrapper>
            <AboutItemCardIconWrapper>
              <AboutItemCardIcon>
                <AboutItemCardIconDelivery />
              </AboutItemCardIcon>
            </AboutItemCardIconWrapper>
            <AboutItemCardTitle>
              FREE Shipping on US orders $120+
            </AboutItemCardTitle>
            <AboutItemCardText>
              *U.S. Shipping Only (Excludes HI & AK)
            </AboutItemCardText>
          </AboutItemCardWrapper>
        </AboutItem>
        <AboutItem>
          <AboutItemCardWrapper>
            <AboutItemCardIconWrapper>
              <AboutItemCardIcon>
                <AboutItemCardIconReturn />
              </AboutItemCardIcon>
            </AboutItemCardIconWrapper>
            <AboutItemCardTitle>Hassle free returns</AboutItemCardTitle>
            <AboutItemCardText>
              Your Satisfaction is Our Top Priority
            </AboutItemCardText>
          </AboutItemCardWrapper>
        </AboutItem>
        <AboutItem>
          <AboutItemCardWrapper>
            <AboutItemCardIconWrapper>
              <AboutItemCardIcon>
                <AboutItemCardIconSupport />
              </AboutItemCardIcon>
            </AboutItemCardIconWrapper>
            <AboutItemCardTitle>24/7 on-line</AboutItemCardTitle>
            <AboutItemCardText>
              Contact our representative any time
            </AboutItemCardText>
          </AboutItemCardWrapper>
        </AboutItem>
      </AboutMenu>
    </AboutContainer>
  );
}

export default About;
