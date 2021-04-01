import styled from 'styled-components'

const StyledHeading = styled.h2`
  font-weight: 700;
  color: #111;

  @media (max-width: 991px) {
    font-size: 1.8em;
    line-height: 1.5em;
    margin-bottom: 15px;
    font-weight: 300;
  }

  ${props => props.white && `
    color: #fff;
  `}
`

export default StyledHeading
