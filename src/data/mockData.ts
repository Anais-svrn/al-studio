import type { BeautyRecommendation, ClothingItem, Inspiration, Look, User } from '../types'

export const styleOptions = ['Chic', 'Casual', 'Minimaliste', 'Sportwear', 'Bureau', 'Streetwear', 'Soirée'] as const

export const mockUser: User = {
  name: 'Emma',
  avatar:
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=80',
  preferredStyles: ['Chic', 'Minimaliste', 'Bureau'],
  colorProfile: ['Crème', 'Noir', 'Terracotta doux'],
}

const base = 'https://images.unsplash.com/'
const img = (id: string) => `${base}${id}?auto=format&fit=crop&w=700&q=80`

export const mockClothes: ClothingItem[] = [
  { id: 'c1', name: 'Chemisier satin ivoire', category: 'Haut', color: 'Ivoire', season: 'Printemps', styleTags: ['Chic', 'Bureau'], image: img('photo-1594633312681-425c7b97ccd1') },
  { id: 'c2', name: 'T-shirt coton nude', category: 'Haut', color: 'Nude', season: 'Été', styleTags: ['Casual', 'Minimaliste'], image: img('photo-1485230895905-ec40ba36b9bc') },
  { id: 'c3', name: 'Blazer noir structuré', category: 'Veste', color: 'Noir', season: 'Automne', styleTags: ['Chic', 'Bureau'], image: img('photo-1551232864-3f0890e580d9') },
  { id: 'c4', name: 'Jean mom stone', category: 'Bas', color: 'Bleu clair', season: 'Printemps', styleTags: ['Casual', 'Streetwear'], image: img('photo-1541099649105-f69ad21f3246') },
  { id: 'c5', name: 'Pantalon tailleur beige', category: 'Bas', color: 'Beige', season: 'Automne', styleTags: ['Bureau', 'Minimaliste'], image: img('photo-1591369822096-ffd140ec948f') },
  { id: 'c6', name: 'Robe midi terracotta', category: 'Robe', color: 'Terracotta', season: 'Été', styleTags: ['Soirée', 'Chic'], image: img('photo-1495385794356-15371f348c31') },
  { id: 'c7', name: 'Robe noire portefeuille', category: 'Robe', color: 'Noir', season: 'Hiver', styleTags: ['Soirée', 'Chic'], image: img('photo-1524504388940-b1c1722653e1') },
  { id: 'c8', name: 'Sneakers crème', category: 'Chaussures', color: 'Crème', season: 'Printemps', styleTags: ['Casual', 'Sportwear'], image: img('photo-1542291026-7eec264c27ff') },
  { id: 'c9', name: 'Escarpins nude', category: 'Chaussures', color: 'Nude', season: 'Automne', styleTags: ['Bureau', 'Soirée'], image: img('photo-1543163521-1bf539c55dd2') },
  { id: 'c10', name: 'Sandales doré rose', category: 'Chaussures', color: 'Or rose', season: 'Été', styleTags: ['Chic', 'Soirée'], image: img('photo-1525966222134-fcfa99b8ae77') },
  { id: 'c11', name: 'Sac seau camel', category: 'Sac', color: 'Camel', season: 'Automne', styleTags: ['Casual', 'Bureau'], image: img('photo-1584917865442-de89df76afd3') },
  { id: 'c12', name: 'Mini sac noir', category: 'Sac', color: 'Noir', season: 'Hiver', styleTags: ['Streetwear', 'Soirée'], image: img('photo-1591561954557-26941169b49e') },
  { id: 'c13', name: 'Créoles fines', category: 'Bijoux', color: 'Or rose', season: 'Été', styleTags: ['Chic', 'Minimaliste'], image: img('photo-1617038220319-276d3cfab638') },
  { id: 'c14', name: 'Collier perles modernes', category: 'Bijoux', color: 'Perle', season: 'Printemps', styleTags: ['Chic', 'Soirée'], image: img('photo-1611652022419-a9419f74343d') },
  { id: 'c15', name: 'Foulard imprimé blush', category: 'Accessoire', color: 'Blush', season: 'Printemps', styleTags: ['Casual', 'Streetwear'], image: img('photo-1523381210434-271e8be1f52b') },
  { id: 'c16', name: 'Lunettes cat-eye', category: 'Accessoire', color: 'Noir', season: 'Été', styleTags: ['Streetwear', 'Chic'], image: img('photo-1511499767150-a48a237f0083') },
  { id: 'c17', name: 'Jogging crème premium', category: 'Bas', color: 'Crème', season: 'Hiver', styleTags: ['Sportwear', 'Casual'], image: img('photo-1506629905607-c6f74d11ec42') },
  { id: 'c18', name: 'Bomber satiné kaki', category: 'Veste', color: 'Kaki', season: 'Hiver', styleTags: ['Streetwear', 'Sportwear'], image: img('photo-1483985988355-763728e1935b') },
]

export const mockLooks: Look[] = [
  { id: 'l1', name: 'Matin Chic', style: 'Chic', items: ['c1', 'c5', 'c9', 'c13'], mood: 'Réunion inspirante', weatherFit: 'Doux', image: img('photo-1483985988355-763728e1935b') },
  { id: 'l2', name: 'Weekend Latte', style: 'Casual', items: ['c2', 'c4', 'c8', 'c11'], mood: 'Brunch & balade', weatherFit: 'Soleil', image: img('photo-1524504388940-b1c1722653e1') },
  { id: 'l3', name: 'Capsule Pure', style: 'Minimaliste', items: ['c2', 'c5', 'c3', 'c12'], mood: 'Capsule épurée', weatherFit: 'Frais', image: img('photo-1495385794356-15371f348c31') },
  { id: 'l4', name: 'Pilates Glow', style: 'Sportwear', items: ['c2', 'c17', 'c8', 'c15'], mood: 'Énergie douce', weatherFit: 'Soleil', image: img('photo-1542291026-7eec264c27ff') },
  { id: 'l5', name: 'Office Signature', style: 'Bureau', items: ['c1', 'c5', 'c3', 'c11'], mood: 'Power dressing', weatherFit: 'Frais', image: img('photo-1551232864-3f0890e580d9') },
  { id: 'l6', name: 'City Edge', style: 'Streetwear', items: ['c2', 'c4', 'c18', 'c12'], mood: 'City day', weatherFit: 'Doux', image: img('photo-1594633312681-425c7b97ccd1') },
  { id: 'l7', name: 'Dîner Lumière', style: 'Soirée', items: ['c7', 'c10', 'c14', 'c12'], mood: 'Soirée élégante', weatherFit: 'Doux', image: img('photo-1524504388940-b1c1722653e1') },
  { id: 'l8', name: 'Terracotta Muse', style: 'Chic', items: ['c6', 'c10', 'c13', 'c11'], mood: 'Event lifestyle', weatherFit: 'Soleil', image: img('photo-1591369822096-ffd140ec948f') },
  { id: 'l9', name: 'Campus Soft', style: 'Casual', items: ['c2', 'c17', 'c8', 'c16'], mood: 'Journée active', weatherFit: 'Frais', image: img('photo-1506629905607-c6f74d11ec42') },
  { id: 'l10', name: 'Rose Edit', style: 'Minimaliste', items: ['c1', 'c5', 'c9', 'c15'], mood: 'Editorial soft', weatherFit: 'Doux', image: img('photo-1485230895905-ec40ba36b9bc') },
]

export const mockBeautyRecommendations: BeautyRecommendation[] = [
  { id: 'b1', style: 'Chic', title: 'Chignon bas satiné', type: 'Coiffure', description: 'Raie centrale et spray brillant pour une finition éditoriale.', image: img('photo-1521572267360-ee0c2909d518') },
  { id: 'b2', style: 'Casual', title: 'Wavy naturel', type: 'Coiffure', description: 'Ondulations souples et volume racine léger.', image: img('photo-1521572267360-ee0c2909d518') },
  { id: 'b3', style: 'Bureau', title: 'Teint soft-focus', type: 'Maquillage', description: 'Base lumineuse, blush poudré, lèvres nude.', image: img('photo-1515372039744-b8f02a3ae446') },
  { id: 'b4', style: 'Soirée', title: 'Regard bronze', type: 'Maquillage', description: 'Fard bronze diffusé, mascara intense et glow subtile.', image: img('photo-1487412720507-e7ab37603c6f') },
]

export const mockInspiration: Inspiration[] = [
  { id: 'i1', title: 'Parisian Mornings', style: 'Chic', description: 'Palette crème/noir, textures satin et cuir souple.', image: img('photo-1524504388940-b1c1722653e1') },
  { id: 'i2', title: 'Minimal Gallery', style: 'Minimaliste', description: 'Coupe nette, tons neutres, bijoux fins.', image: img('photo-1495385794356-15371f348c31') },
  { id: 'i3', title: 'Street Soft', style: 'Streetwear', description: 'Mix tailoring + sneakers dans des tons doux.', image: img('photo-1483985988355-763728e1935b') },
  { id: 'i4', title: 'Golden Sunset', style: 'Soirée', description: 'Touches or rose et silhouettes fluides pour le soir.', image: img('photo-1591369822096-ffd140ec948f') },
]
