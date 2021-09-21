import styled from "styled-components";
import { Row } from 'react-bootstrap';

const RowStyled = styled(Row)`
    
`
const DivStyled = styled.div`
    background-color: ${props => `#${props.color}`};
`

export {
    RowStyled,
    DivStyled
}