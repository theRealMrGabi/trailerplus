import React from 'react'
import ContentLoader, { Rect, Circle } from 'react-content-loader/native'

export const HeroCardSkeleton = () => {
	return (
		<ContentLoader
			speed={2}
			width={350}
			height={180}
			viewBox='0 0 350 180'
			backgroundColor='#f0f0f0'
			foregroundColor='#dedede'>
			<Rect x='0' y='0' rx='10' ry='10' width='350' height='155' />
			<Rect x='0' y='170' rx='4' ry='4' width='300' height='10' />
		</ContentLoader>
	)
}

export const MovieCardSkeleton = () => {
	return (
		<ContentLoader viewBox='10 0 350 240' width={350} height={240}>
			<Rect x='16' y='10' rx='10' ry='10' width='330' height='150' />
			<Circle cx='35' cy='200' r='20' />
			<Rect x='69' y='180' rx='10' ry='10' width='275' height='15' />
			<Rect x='69' y='205' rx='10' ry='10' width='140' height='15' />
		</ContentLoader>
	)
}
