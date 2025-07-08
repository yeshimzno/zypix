export interface Photographer {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  avatarUrl: string;
  coverImageUrl: string;
  isAvailable: boolean;
  gender: 'male' | 'female';
}

export const photographers: Photographer[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    specialty: 'Portraits & Headshots',
    rating: 4.9,
    reviewCount: 128,
    avatarUrl: 'https://placehold.co/100x100.png',
    coverImageUrl: 'https://placehold.co/400x300.png',
    isAvailable: true,
    gender: 'female',
  },
  {
    id: '2',
    name: 'Bob Williams',
    specialty: 'Street & Urban',
    rating: 4.7,
    reviewCount: 94,
    avatarUrl: 'https://placehold.co/100x100.png',
    coverImageUrl: 'https://placehold.co/400x300.png',
    isAvailable: true,
    gender: 'male',
  },
  {
    id: '3',
    name: 'Charlie Brown',
    specialty: 'Events & Candids',
    rating: 4.8,
    reviewCount: 212,
    avatarUrl: 'https://placehold.co/100x100.png',
    coverImageUrl: 'https://placehold.co/400x300.png',
    isAvailable: false,
    gender: 'male',
  },
  {
    id: '4',
    name: 'Diana Miller',
    specialty: 'Fashion & Lifestyle',
    rating: 5.0,
    reviewCount: 156,
    avatarUrl: 'https://placehold.co/100x100.png',
    coverImageUrl: 'https://placehold.co/400x300.png',
    isAvailable: true,
    gender: 'female',
  },
  {
    id: '5',
    name: 'Ethan Davis',
    specialty: 'Product Photography',
    rating: 4.6,
    reviewCount: 78,
    avatarUrl: 'https://placehold.co/100x100.png',
    coverImageUrl: 'https://placehold.co/400x300.png',
    isAvailable: true,
    gender: 'male',
  },
  {
    id: '6',
    name: 'Fiona Garcia',
    specialty: 'Family Portraits',
    rating: 4.9,
    reviewCount: 189,
    avatarUrl: 'https://placehold.co/100x100.png',
    coverImageUrl: 'https://placehold.co/400x300.png',
    isAvailable: true,
    gender: 'female',
  },
];
