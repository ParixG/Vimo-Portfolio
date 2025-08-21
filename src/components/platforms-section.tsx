'use client';

import { useLanguage } from '@/context/language-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Corrected import path
import { faInstagramSquare, faMeta, faYoutube, faTiktok, faTelegram } from '@fortawesome/free-brands-svg-icons'; // Corrected import path

const platforms = [
	{
		name: 'Instagram',
		icon: <FontAwesomeIcon icon={faInstagramSquare} />,
	},
	{
		name: 'Meta',
		icon: <FontAwesomeIcon icon={faMeta} />,
	},
	{
		name: 'YouTube',
		icon: <FontAwesomeIcon icon={faYoutube} />,
	},
	{
		name: 'TikTok',
		icon: <FontAwesomeIcon icon={faTiktok} />,
	},
	{
		name: 'Telegram',
		icon: <FontAwesomeIcon icon={faTelegram} />,
	},
];

export function PlatformsSection() {
	const { t } = useLanguage();
	return (
		<section id="platforms" className="py-20 md:py-28 bg-secondary">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold font-headline">
						{t('platformsTitle')}
					</h2>
					<p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
						{t('platformsSubtitle')}
					</p>
				</div>
				<div className="flex flex-wrap justify-center gap-8 md:gap-16">
					{platforms.map((platform) => (
						<div
							key={platform.name}
							className="flex flex-col items-center gap-4 text-center w-32 p-6 bg-background rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
						>
							<div className="p-4 rounded-full bg-primary/10">
								{platform.icon}
							</div>
							<span className="font-semibold text-lg">{platform.name}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
