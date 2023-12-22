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
		width: 44,
		height: 44,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent',
		borderRadius: 'full',
	},
}
