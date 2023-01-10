import { useCallback, useState } from 'react';

function TextField({ type = 'text', name, label, value, required, register, error, errorMessage }) {
	const [isFocus, setIsFocus] = useState(!!value?.toString().length);

	const inputRegister = register(name);
	const fullLabel = label + (required ? '*' : '');

	const handleFocus = useCallback(() => {
		setIsFocus(true);
	}, []);

	const handleBlur = useCallback((event) => {
		inputRegister.onBlur(event);
		if (!event.target.value.length) {
			setIsFocus(false);
		}

	}, [inputRegister]);

	return (
		<div className={`input-field ${isFocus ? 'focused' : ''} ${error ? 'error' : ''}`}>
			<div className="input-field-container">
				<label>
					<span>{fullLabel}</span>
					<input type={type} defaultValue={value} {...inputRegister} onFocus={handleFocus} onBlur={handleBlur} />
				</label>
				<fieldset>
					<legend><span>{fullLabel}</span></legend>
				</fieldset>
			</div>
			<div className="input-field-error">{errorMessage}</div>
		</div>
	);

}

export { TextField };