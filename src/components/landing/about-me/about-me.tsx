import { useStyles$, useStylesScoped$, component$ } from "@builder.io/qwik";
import styles from "./about-me.css?inline";
import { Presentation } from "./presentation/presentation";
import { Avatar } from "./avatar/avatar";
import { SocialMedia } from "./social-media/social-media";
import { Direction } from "./direction/direction";
import { GoToArticle } from "./go-to-article/go-to-article";
import { GoToWork } from "./go-to-work/go-to-work";
import { ContactMe } from "./contact-me/contact-me";

export const AboutMeSection = component$(() => {
	useStylesScoped$(styles);
	useStyles$(styles);
	return (
		<div class="aboutMe">
			<div class="aboutMe__box aboutMe__presentation">
				<Presentation />
			</div>
			<div class="aboutMe__box aboutMe__avatar">
				<Avatar />
			</div>
			<div class="aboutMe__social-media">
				<SocialMedia />
			</div>
			<div class="aboutMe__box aboutMe__articles">
				<GoToArticle />
			</div>
			<div class="aboutMe__box aboutMe__direction">
				<Direction />
			</div>
			<div class="aboutMe__box aboutMe__check-work">
				<GoToWork />
			</div>
			<div class="aboutMe__box aboutMe__contact-me">
				<ContactMe />
			</div>
		</div>
	);
});
