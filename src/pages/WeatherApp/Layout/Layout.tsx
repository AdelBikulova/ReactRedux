import { useNavigate } from "react-router-dom"
import { LayoutProps } from "./types"
import {
  LayoutWrapper,
  Header,
  HeaderLogoContainer,
  HeaderLogo,
  NavContainer,
  Main,
  Title,
  Footer,
  StyledNavLink,
  StyledLink,
  FooterNavContainer,
} from "./styles"
import { Logo } from "assets"

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()

  const goToHomePage = () => navigate("/")

  return (
    <LayoutWrapper>
      <Header>
        <HeaderLogoContainer onClick={goToHomePage}>
          <HeaderLogo src={Logo} />
        </HeaderLogoContainer>
        <Title>Weather App</Title>
        <NavContainer>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/weather"
          >
            Weather
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <HeaderLogoContainer onClick={goToHomePage}>
          <HeaderLogo src={Logo} />
        </HeaderLogoContainer>
        <FooterNavContainer>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/weather">Weather</StyledLink>
        </FooterNavContainer>
      </Footer>
    </LayoutWrapper>
  )
}

export default Layout
