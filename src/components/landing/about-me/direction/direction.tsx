import { component$, useStylesScoped$ } from "@builder.io/qwik";

export const Direction = component$(() => {
	useStylesScoped$(`
    .direction {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 2rem;
    }
    .direction__title {
      font-size: 4rem;
      line-height: 5rem;
      font-weight: 600;
    }
    .direction__time-zone {
      color: #2b264a;
      letter-spacing: 1px;
      line-height: 7rem;
      font-weight: 700;
      text-transform: uppercase;
    }
  `);
	return (
		<div class="direction">
			<h2 class="direction__title">
				Based in
				<br />
				Mendoza,
				<br />
				Argentina
				<br />
				<span class="direction__time-zone">GMT-3</span>
			</h2>
		</div>
	);
});
