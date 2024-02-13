import { useStyles$, useStylesScoped$, component$ } from "@builder.io/qwik";
import styles from "./navbar.css?inline";

export const Navbar = component$(() => {
	useStylesScoped$(styles);
	useStyles$(styles);

	return (
		<header class="navbar">
      <a href="./" class="header__logo">
        <span>Juanse.</span>
      </a>
		</header>
	);
});
