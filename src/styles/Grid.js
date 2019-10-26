import styled from 'styled-components'

export default styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 8fr;
	gap: 1.2rem 1.2rem;
	@media (max-width: 960px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 680px) {
		grid-template-columns: 1fr;
	}
`;