function Container({ children, ...rest }) {
	return (
		<div className="container mx-auto px-4 my-6 max-w-2xl" {...rest}>
			{children}
		</div>
	);
}

export { Container };