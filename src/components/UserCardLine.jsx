function UserCardLine({ label, content }) {
	return (
		<div className="flex mb-2">
			<div className="mr-2 font-semibold">{label}</div>
			<div className="font-light">{content}</div>
		</div>
	);
}

export { UserCardLine };