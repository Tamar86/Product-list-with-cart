import styled from 'styled-components';
import {
	ButtonBase,
	btnPrimary,
	btnAction,
	btnConfirm,
	small,
	medium,
	large,
	xLarge,
} from '../Styles/ButtonStyles';

const StyledButton = styled(ButtonBase)`
	${({ variant = btnPrimary }) => {
		if (variant === 'btnAction') return btnAction;
		if (variant === 'btnPrimary') return btnPrimary;
		if (variant === 'btnConfirm') return btnConfirm;
	}}

	${({ size = medium }) => {
		if (size === 'small') return small;
		if (size === 'medium') return medium;
		if (size === 'large') return large;
		if (size === 'xLarge') return xLarge;
	}}
`;

function Button({ children, variant, size, onClick }) {
	return (
		<StyledButton variant={variant} size={size} onClick={onClick}>
			{children}
		</StyledButton>
	);
}

export default Button;
