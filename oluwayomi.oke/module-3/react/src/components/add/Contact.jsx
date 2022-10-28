import styles from "./contact.module.css";

const Contact = ({
	title,
	onSubmit,
	value,
	onChange,
}) => {
	return (
		<form
			autoComplete="off"
			className={styles.formContainer}
			onSubmit={onSubmit}>
			<p className={styles.formHeading}>
				{title ? title : "Add Contact"}
			</p>

			<div className={styles.formText}>
				<label htmlFor="fullname">Name</label>
				<input
					type="text"
					name="fullname"
					id="fullname"
					placeholder="Enter your name..."
					value={value}
					onChange={onChange}
					required
				/>

				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Enter your email..."
					value={value}
					onChange={onChange}
					required
				/>

				<label htmlFor="phone">Phone</label>
				<input
					type="text"
					name="phone"
					id="phone"
					placeholder="Enter your phone..."
					value={value}
					onChange={onChange}
					required
				/>

				<button type="submit">Submit</button>
			</div>
		</form>
	);
};

export default Contact;
