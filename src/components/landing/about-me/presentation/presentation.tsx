import { component$, useStylesScoped$ } from "@builder.io/qwik";

export const Presentation = component$(() => {
  useStylesScoped$(`
    .presentation__title {
      font-size: 5rem;
      line-height: 1.2;
      font-weight: 500;
    }
    .presentation__title-name {
      white-space: nowrap;
    }
    .presentation__paragraph {
      font-size: 2.6rem;
      line-height: 1.5;
      margin-top: 1.5rem;
    }
  `);
	return (
		<>
			<h1 class="presentation__title">
				Hi, my
				<br />
				name is <b class="presentation__title-name">Juanse Riera.</b>
			</h1>
			<p class="presentation__paragraph">
				I'm a <b>front-end developer</b> currently working at Slingr.
			</p>
		</>
	);
});
