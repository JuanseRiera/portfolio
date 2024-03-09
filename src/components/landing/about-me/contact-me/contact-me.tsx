import { component$, useStyles$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./contact-me.css?inline";

export const ContactMe = component$(() => {
  useStylesScoped$(styles);
	useStyles$(styles);

	return (
		<a href="mailto:rierajuanse@gmail.com" class="contact">
			<div>
				<img
          class="contact__img"
					src="images/contact-me.svg"
					alt="Contact me"
					height={100}
					width={100}
				/>
			</div>

			<div class="contact-info">
				<h2 class="contact__title">Wanna talk? Send me a message.</h2>
				<p class="contact__mail">rierajuanse@gmail.com</p>
			</div>
		</a>
	);
});
