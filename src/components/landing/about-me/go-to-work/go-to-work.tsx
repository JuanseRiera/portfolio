import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { GoToArrow } from "~/components/shared/go-to-arrow/go-to-arrow";

export const GoToWork = component$(() => {
	useStylesScoped$(`
    .goToWork__title {
      font-size: 4rem;
      line-height: 1.2;
      font-weight: 500;
    }
    .goToWork__arrow {
      transform: rotateX(180deg);
    }
  `);
	return (
		<>
			<h2 class="goToWork__title">Check out my work</h2>
			<div class="goToWork__arrow">
				<GoToArrow />
			</div>
		</>
	);
});
