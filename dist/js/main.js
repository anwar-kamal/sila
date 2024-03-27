function isTextInputEmpty ( inputId, buttonId ) {
	const textInput = document.getElementById( inputId )
	const button = document.getElementById( buttonId )
	if ( textInput && button  ) {
		const updateButtonState = () => {
			button.disabled = textInput.value.trim() === ''
		}

		textInput.addEventListener( 'change', updateButtonState )
		textInput.addEventListener( 'input', updateButtonState )
		// Initial setup
		updateButtonState()
	}
}

// Call the function with specific text input, button, and next input IDs
isTextInputEmpty( 'promo', 'promo_button' )
