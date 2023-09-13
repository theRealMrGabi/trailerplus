export interface Movie {
	adult: boolean
	backdrop_path: string
	genre_ids: number[]
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	release_date: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
	media_type?: string
}

export interface MovieDetails extends Movie {
	belongs_to_collection: null
	budget: number
	genres: {
		id: number
		name: string
	}[]
	homepage: string
	imdb_id: string
	production_companies: {
		id: number
		logo_path: string
		name: string
		origin_country: string
	}[]
	production_countries: {
		iso_3166_1: string
		name: string
	}[]
	revenue: number
	runtime: number
	spoken_languages: {
		english_name: string
		iso_639_1: string
		name: string
	}[]
	status: string
	tagline: string
}

export interface MoviesResponse {
	dates?: {
		maximum: string
		minimum: string
	}
	page: number
	results: Movie[]
	total_pages: number
	total_results: number
}

export interface MovieCredits {
	id: number
	cast: {
		adult: boolean
		gender: number
		id: number
		known_for_department: string
		name: string
		original_name: string
		popularity: number
		profile_path: string
		cast_id: number
		character: string
		credit_id: string
		order: number
	}[]
	crew: {
		adult: boolean
		gender: number
		id: number
		known_for_department: string
		name: string
		original_name: string
		popularity: number
		profile_path: string | null
		credit_id: number
		department: string
		job: string
	}[]
}

export interface MovieVideo {
	id: string
	iso_639_1: string
	iso_3166_1: string
	key: string
	name: string
	official: boolean
	published_at: string
	site: string
	size: number
	type: 'Featurette' | 'Clip' | 'Trailer' | 'Behind the Scenes'
}

export interface MovieVideosResponse {
	id: number
	results: MovieVideo[]
}
