import { useStyles$, component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from './style.css?inline';

import { Navbar } from "~/components/shared/navbar/navbar";
import { AboutMeSection } from "~/components/landing/about-me/about-me";

export default component$(() => {
  useStyles$(styles);
	return (
		<>
			<div class="landing container">
        <div class="landing__navbar">
          <Navbar />    
        </div>
        <section id="about" class="landing__about">
          <AboutMeSection />
        </section>
        <section id="work" class="landing__work">

        </section>
      </div>
		</>
	);
});

export const head: DocumentHead = {
	title: "Juanse Riera - Frontend Developer",
	meta: [
		{
			name: "description",
			content: `Juanse is front-end developer from Argentina. He loves helping organisations to build ambitious web projects. Sometimes, he also writes in the third person.`,
		},
	],
};
