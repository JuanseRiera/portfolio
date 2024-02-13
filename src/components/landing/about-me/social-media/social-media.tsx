import { useStyles$, useStylesScoped$, component$ } from "@builder.io/qwik";
import styles from "./social-media.css?inline";

export const SocialMedia = component$(() => {
	useStylesScoped$(styles);
	useStyles$(styles);
	return (
		<div class="social__links">
			<div class="social__link social__link-linkedin">
				<svg class="social__link-icon">
					<use xlink:href="images/sprite.svg#icon-linkedin"></use>
				</svg>
			</div>
			<div class="social__link social__link-twitter">
				<svg class="social__link-icon">
					<use xlink:href="images/sprite.svg#icon-x"></use>
				</svg>
			</div>
			<div class="social__link social__link-instagram">
				<svg class="social__link-icon">
					<use xlink:href="images/sprite.svg#icon-instagram"></use>
				</svg>
			</div>
			<div class="social__link social__link-github">
				<svg class="social__link-icon">
					<use xlink:href="images/sprite.svg#icon-github"></use>
				</svg>
			</div>
		</div>
	);
});
