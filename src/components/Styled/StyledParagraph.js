import styled from 'styled-components'

const StyledParagraph = styled.p`
  font-weight: 300;
  color: #111;

  ${props => props.white && `
    color: #fff;
  `}
`

export default StyledParagraph