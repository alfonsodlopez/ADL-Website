import styled from 'styled-components'

export default Stats = styled.div`
	display: flex;
	align-items: center;
	div {
		display: flex;
		&:first-child {
			margin-right: 0.5rem;
		}
		img {
			margin: 0;
		}
		span {
			color: #000;
			margin-left: 0.5rem;
		}
	}
`;