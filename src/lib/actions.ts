'use server';

import { recommendPhotographer } from '@/ai/flows/photographer-recommendation';
import type { PhotographerRecommendationOutput } from '@/ai/flows/photographer-recommendation';
import { photographers } from './photographers';

export async function getAiRecommendation(
  userLocation: string,
  preferFemalePhotographer: boolean
): Promise<PhotographerRecommendationOutput> {
  const mockPastJobs = [
    { photographerId: '1', location: 'New York, NY', jobType: 'portrait', rating: 4.8 },
    { photographerId: '2', location: 'Brooklyn, NY', jobType: 'event', rating: 4.5 },
    { photographerId: '1', location: 'Manhattan, NY', jobType: 'street', rating: 4.9 },
    { photographerId: '4', location: 'New York, NY', jobType: 'fashion', rating: 5.0 },
  ];

  const mockUserFeedback = [
    { userId: 'u001', photographerId: '1', rating: 5, comment: 'Amazing work, very professional!' },
    { userId: 'u002', photographerId: '2', rating: 4, comment: 'Good, but a bit late.' },
    { userId: 'u003', photographerId: '1', rating: 5, comment: 'Captured the moment perfectly.' },
  ];

  try {
    const recommendation = await recommendPhotographer({
      userLocation,
      pastJobs: JSON.stringify(mockPastJobs),
      userFeedback: JSON.stringify(mockUserFeedback),
      photographers: JSON.stringify(photographers),
      preferFemalePhotographer,
    });
    return recommendation;
  } catch (error) {
    console.error('AI recommendation failed:', error);
    throw new Error('Could not retrieve AI recommendation.');
  }
}
