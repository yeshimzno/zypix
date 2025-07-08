// src/ai/flows/photographer-recommendation.ts
'use server';

/**
 * @fileOverview AI flow to recommend a photographer based on user location and photographer's past performance.
 *
 * - recommendPhotographer - A function that handles the photographer recommendation process.
 * - PhotographerRecommendationInput - The input type for the recommendPhotographer function.
 * - PhotographerRecommendationOutput - The return type for the recommendPhotographer function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PhotographerRecommendationInputSchema = z.object({
  userLocation: z
    .string()
    .describe("The user's current location, e.g., 'New York, NY'."),
  pastJobs: z
    .string()
    .describe("JSON string of the photographer's past jobs and performance data."),
  userFeedback: z
    .string()
    .describe("JSON string of user feedback data."),
  photographers: z
    .string()
    .describe("JSON string of a list of available photographers and their details, including their gender."),
  preferFemalePhotographer: z.boolean().optional().describe('Whether the user has a preference for a female photographer for comfort.'),
});

export type PhotographerRecommendationInput = z.infer<
  typeof PhotographerRecommendationInputSchema
>;

const PhotographerRecommendationOutputSchema = z.object({
  recommendedPhotographer: z
    .string()
    .describe('The ID of the recommended photographer.'),
  reason: z
    .string()
    .describe('The reason for recommending this photographer.'),
});

export type PhotographerRecommendationOutput = z.infer<
  typeof PhotographerRecommendationOutputSchema
>;

export async function recommendPhotographer(
  input: PhotographerRecommendationInput
): Promise<PhotographerRecommendationOutput> {
  return recommendPhotographerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'photographerRecommendationPrompt',
  input: {schema: PhotographerRecommendationInputSchema},
  output: {schema: PhotographerRecommendationOutputSchema},
  prompt: `You are an AI expert in photographer recommendations.

  Here is a list of available photographers: {{{photographers}}}. Each photographer has a 'gender' property.

  Given the user's location: {{{userLocation}}}, the photographer's past job data: {{{pastJobs}}}, and user feedback data: {{{userFeedback}}}, recommend the best photographer for the user from the provided list.

  {{#if preferFemalePhotographer}}
  The user has expressed a preference for a female photographer for comfort. Please prioritize recommending a female photographer if one is available and suitable.
  {{/if}}

  Consider the photographer's performance, ratings, specialty, and availability in the user's location. Provide a clear reason for your recommendation. The recommended photographer ID must be one of the IDs from the list of available photographers.
  `,
});

const recommendPhotographerFlow = ai.defineFlow(
  {
    name: 'recommendPhotographerFlow',
    inputSchema: PhotographerRecommendationInputSchema,
    outputSchema: PhotographerRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
