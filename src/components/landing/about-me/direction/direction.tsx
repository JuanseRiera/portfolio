import { component$, useStylesScoped$ } from "@builder.io/qwik";

export const Direction = component$(() => {
  useStylesScoped$(`
    .direction {
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
		<>
			<h2 class="direction">
        Based in 
        <br />
        Mendoza,
        <br />
        Argentina
        <br />
        <span class="direction__time-zone">GMT-3</span>
      </h2>
		</>
	);
});
