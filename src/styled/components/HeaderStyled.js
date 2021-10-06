import { Navbar } from 'react-bootstrap'
import styled from 'styled-components'

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.cWhite};
`
export const NavbarStyled = styled(Navbar)`
    a {
        color: ${({ theme }) => theme.colors.cWatermelon}
    }
    a:hover {
        color: "#0000"
    }
    .Nav-brand {
        color: ${({ theme }) => theme.colors.cWatermelon}
    }
`
export const NavBrandStlyled = styled(Navbar.Brand)`
    color: ${({ theme }) => theme.colors.cWatermelon}
`