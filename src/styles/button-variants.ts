const defaults = {
	height: 52,
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: 'blue',
	borderRadius: 'rounded-lg',
}

export const buttonVariants = {
	defaults,
	secondary: {
		...defaults,
		backgroundColor: 'transparent',
	},
	rounded: {
		width: 48,
		height: 48,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent',
		borderRadius: 'full',
	},
}
