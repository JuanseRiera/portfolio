import { component$, useStylesScoped$ } from "@builder.io/qwik";

export const GoToArticle = component$(() => {
	useStylesScoped$(`
    .goToArticle {
      height: 100%;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .goToArticle__title {
      font-size: 4rem;
      line-height: 5rem;
      font-weight: 600;
    }
    .goToArticle__soon {
      font-size: 2.6rem;
      line-height: 1.5;
      margin-top: 1.5rem;
    }
  `);
	return (
		<div class="goToArticle">
			<h2 class="goToArticle__title">Articles</h2>
			<p class="goToArticle__soon">Comming soon...</p>
		</div>
	);
});
