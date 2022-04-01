interface RandomConfig {
	min?: number;
	max?: number;
}

interface RandomRequest extends RandomConfig {}

interface RandomResponse {
	random: number;
}

type PossibleParams =
	| ExpressRequest['query']
	| ExpressRequest['params']
	| ExpressRequest['body'];
