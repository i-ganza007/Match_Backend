import { PrismaClient, AnimalType, AnimalSpecies, Gender, AnimalStatus } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Pool } from 'pg';
import * as argon2 from 'argon2';
import { randomUUID } from 'crypto';
import 'dotenv/config';

// ── Clients ───────────────────────────────────────────────────────────────────

const pool     = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter  = new PrismaPg(pool);
const prisma   = new PrismaClient({ adapter });
const supabase: SupabaseClient = createClient(
  process.env.SUPABASE_URL!,
  process.env.SERVICE_ROLE!,
);

const BUCKET       = 'Animal_Images';
const DEFAULT_PHOTO = `https://hzihqpbtzfseejihukvk.supabase.co/storage/v1/object/public/${BUCKET}/avatar.jpg`;

// ── Wikipedia Commons images — one reliable URL per species ───────────────────
// Wikipedia requires a User-Agent header; we set it in uploadFromUrl().
const SPECIES_IMAGE_URLS: Partial<Record<AnimalSpecies, string>> = {
  [AnimalSpecies.FREISIAN_COW]:       'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Cow_female_black_white.jpg/640px-Cow_female_black_white.jpg',
  [AnimalSpecies.HOLSTEIN_COW]:       'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Cow_female_black_white.jpg/640px-Cow_female_black_white.jpg',
  [AnimalSpecies.ANKOLE_COW]:         'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Ankole_cattle_02.jpg/640px-Ankole_cattle_02.jpg',
  [AnimalSpecies.JERSEY_COW]:         'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Jersey_Cow.jpg/640px-Jersey_Cow.jpg',
  [AnimalSpecies.SAHIWAL_COW]:        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sahiwal_cattle.jpg/640px-Sahiwal_cattle.jpg',
  [AnimalSpecies.LARGE_WHITE_PIG]:    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Large_white_sow.jpg/640px-Large_white_sow.jpg',
  [AnimalSpecies.DUROC_PIG]:          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/DurocBoar.jpg/640px-DurocBoar.jpg',
  [AnimalSpecies.MERINO_SHEEP]:       'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Ovis_aries_Rambouillet.jpg/640px-Ovis_aries_Rambouillet.jpg',
  [AnimalSpecies.DORPER_SHEEP]:       'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Dorper_sheep.jpg/640px-Dorper_sheep.jpg',
  [AnimalSpecies.LOCAL_GOAT]:         'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Domestic_goat_kid_in_caprifarm.jpg/640px-Domestic_goat_kid_in_caprifarm.jpg',
  [AnimalSpecies.INDIGENOUS_GOAT]:    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Jamnapari_goat.jpg/640px-Jamnapari_goat.jpg',
};

// Cache so the same species image is uploaded only once per seed run
const uploadedUrlCache = new Map<AnimalSpecies, string>();

async function uploadFromUrl(species: AnimalSpecies): Promise<string> {
  // Return cached URL if already uploaded this run
  if (uploadedUrlCache.has(species)) return uploadedUrlCache.get(species)!;

  const sourceUrl = SPECIES_IMAGE_URLS[species];
  if (!sourceUrl) return DEFAULT_PHOTO;

  try {
    const res = await fetch(sourceUrl, {
      headers: { 'User-Agent': 'MatchBreedingSeed/1.0 (seed script)' },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const buffer      = Buffer.from(await res.arrayBuffer());
    const contentType = res.headers.get('content-type') || 'image/jpeg';
    const ext         = contentType.split('/')[1]?.split(';')[0] || 'jpg';
    const filename    = `seed_${species}_${randomUUID()}.${ext}`;

    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(filename, buffer, { contentType, upsert: false });

    if (error) throw new Error(error.message);

    const { data } = supabase.storage.from(BUCKET).getPublicUrl(filename);
    uploadedUrlCache.set(species, data.publicUrl);
    console.log(`    uploaded image for ${species}`);
    return data.publicUrl;
  } catch (e) {
    console.warn(`    image upload failed for ${species} (${e.message}) — using default`);
    return DEFAULT_PHOTO;
  }
}

// ── Birth date helper ─────────────────────────────────────────────────────────

const dob = (monthsAgo: number) => {
  const d = new Date();
  d.setMonth(d.getMonth() - monthsAgo);
  return d;
};

// ── User data ─────────────────────────────────────────────────────────────────

const users = [
  { name: 'Uwimana Amina',      sex: 'FEMALE', email: 'amina.uwimana@match.rw',      phone_number: '+250781100001', district: 'Nyarugenge', sector: 'Nyamirambo', village: 'Kimisagara', cell: 'Biryogo',      longitude: 30.0529, latitude: -1.9706 },
  { name: 'Nkusi Jean Pierre',  sex: 'MALE',   email: 'jean.nkusi@match.rw',          phone_number: '+250782200002', district: 'Gasabo',     sector: 'Remera',     village: 'Rukiri',     cell: 'Nyarutarama', longitude: 30.1127, latitude: -1.9355 },
  { name: 'Mukamana Diane',     sex: 'FEMALE', email: 'diane.mukamana@match.rw',      phone_number: '+250783300003', district: 'Kicukiro',   sector: 'Gahanga',    village: 'Rugarama',   cell: 'Kanombe',     longitude: 30.1028, latitude: -1.9731 },
  { name: 'Habimana Eric',      sex: 'MALE',   email: 'eric.habimana@match.rw',       phone_number: '+250784400004', district: 'Musanze',    sector: 'Kinigi',     village: 'Rwaza',      cell: 'Nyamyumba',   longitude: 29.5989, latitude: -1.4995 },
  { name: 'Uwase Claudine',     sex: 'FEMALE', email: 'claudine.uwase@match.rw',      phone_number: '+250785500005', district: 'Rubavu',     sector: 'Gisenyi',    village: 'Kamuhanda',  cell: 'Buhimba',     longitude: 29.2569, latitude: -1.6837 },
  { name: 'Niyonzima Patrick',  sex: 'MALE',   email: 'patrick.niyonzima@match.rw',   phone_number: '+250786600006', district: 'Huye',       sector: 'Ngoma',      village: 'Butare',     cell: 'Sovu',        longitude: 29.7412, latitude: -2.5967 },
  { name: 'Mukamana Grace',     sex: 'FEMALE', email: 'grace.mukamana@match.rw',      phone_number: '+250787700007', district: 'Nyagatare',  sector: 'Karangazi',  village: 'Rwimiyaga',  cell: 'Gasura',      longitude: 30.3289, latitude: -1.2972 },
  { name: 'Bizimana Samuel',    sex: 'MALE',   email: 'samuel.bizimana@match.rw',     phone_number: '+250788800008', district: 'Rwamagana',  sector: 'Munyaga',    village: 'Gahengeri',  cell: 'Kiramuruzi',  longitude: 30.4346, latitude: -1.9488 },
  { name: 'Uwimana Solange',    sex: 'FEMALE', email: 'solange.uwimana@match.rw',     phone_number: '+250789900009', district: 'Muhanga',    sector: 'Gitarama',   village: 'Kabagari',   cell: 'Mushishiro',  longitude: 29.7560, latitude: -2.0843 },
  { name: 'Ndagijimana Claude', sex: 'MALE',   email: 'claude.ndagijimana@match.rw',  phone_number: '+250780000010', district: 'Rusizi',     sector: 'Cyangugu',   village: 'Kamembe',    cell: 'Mururu',      longitude: 28.9063, latitude: -2.4850 },
];

// ── Animal data ───────────────────────────────────────────────────────────────

const animalTemplates: {
  ownerEmail: string;
  name: string;
  sex: Gender;
  type: AnimalType;
  specie: AnimalSpecies;
  birthMonthsAgo: number;
  breed_confidence: number;
}[] = [
  // Pairs: same type+species, opposite sex, different owners
  { ownerEmail: 'amina.uwimana@match.rw',     name: 'Isuku',    sex: Gender.MALE,   type: AnimalType.COW,   specie: AnimalSpecies.FREISIAN_COW,    birthMonthsAgo: 24, breed_confidence: 0.92 },
  { ownerEmail: 'amina.uwimana@match.rw',     name: 'Impano',   sex: Gender.FEMALE, type: AnimalType.GOAT,  specie: AnimalSpecies.LOCAL_GOAT,       birthMonthsAgo: 18, breed_confidence: 0.85 },
  { ownerEmail: 'jean.nkusi@match.rw',         name: 'Amata',    sex: Gender.FEMALE, type: AnimalType.COW,   specie: AnimalSpecies.FREISIAN_COW,    birthMonthsAgo: 20, breed_confidence: 0.90 },
  { ownerEmail: 'jean.nkusi@match.rw',         name: 'Inzuki',   sex: Gender.MALE,   type: AnimalType.PIG,   specie: AnimalSpecies.LARGE_WHITE_PIG, birthMonthsAgo: 12, breed_confidence: 0.87 },
  { ownerEmail: 'diane.mukamana@match.rw',     name: 'Rugira',   sex: Gender.MALE,   type: AnimalType.COW,   specie: AnimalSpecies.ANKOLE_COW,       birthMonthsAgo: 30, breed_confidence: 0.95 },
  { ownerEmail: 'diane.mukamana@match.rw',     name: 'Intama',   sex: Gender.FEMALE, type: AnimalType.SHEEP, specie: AnimalSpecies.MERINO_SHEEP,     birthMonthsAgo: 14, breed_confidence: 0.80 },
  { ownerEmail: 'eric.habimana@match.rw',      name: 'Akarabo',  sex: Gender.FEMALE, type: AnimalType.COW,   specie: AnimalSpecies.ANKOLE_COW,       birthMonthsAgo: 22, breed_confidence: 0.93 },
  { ownerEmail: 'eric.habimana@match.rw',      name: 'Ingurube', sex: Gender.FEMALE, type: AnimalType.PIG,   specie: AnimalSpecies.LARGE_WHITE_PIG, birthMonthsAgo: 10, breed_confidence: 0.82 },
  { ownerEmail: 'claudine.uwase@match.rw',     name: 'Rurama',   sex: Gender.MALE,   type: AnimalType.GOAT,  specie: AnimalSpecies.LOCAL_GOAT,       birthMonthsAgo: 15, breed_confidence: 0.78 },
  { ownerEmail: 'claudine.uwase@match.rw',     name: 'Urukundo', sex: Gender.MALE,   type: AnimalType.SHEEP, specie: AnimalSpecies.MERINO_SHEEP,     birthMonthsAgo: 12, breed_confidence: 0.83 },
  { ownerEmail: 'patrick.niyonzima@match.rw',  name: 'Inzovu',   sex: Gender.MALE,   type: AnimalType.COW,   specie: AnimalSpecies.HOLSTEIN_COW,     birthMonthsAgo: 28, breed_confidence: 0.96 },
  { ownerEmail: 'patrick.niyonzima@match.rw',  name: 'Ihene',    sex: Gender.FEMALE, type: AnimalType.GOAT,  specie: AnimalSpecies.INDIGENOUS_GOAT,  birthMonthsAgo: 16, breed_confidence: 0.79 },
  { ownerEmail: 'grace.mukamana@match.rw',     name: 'Inyange',  sex: Gender.FEMALE, type: AnimalType.COW,   specie: AnimalSpecies.HOLSTEIN_COW,     birthMonthsAgo: 20, breed_confidence: 0.94 },
  { ownerEmail: 'grace.mukamana@match.rw',     name: 'Inzira',   sex: Gender.MALE,   type: AnimalType.GOAT,  specie: AnimalSpecies.INDIGENOUS_GOAT,  birthMonthsAgo: 14, breed_confidence: 0.81 },
  { ownerEmail: 'samuel.bizimana@match.rw',    name: 'Impongo',  sex: Gender.FEMALE, type: AnimalType.PIG,   specie: AnimalSpecies.DUROC_PIG,        birthMonthsAgo: 11, breed_confidence: 0.86 },
  { ownerEmail: 'samuel.bizimana@match.rw',    name: 'Inkona',   sex: Gender.MALE,   type: AnimalType.SHEEP, specie: AnimalSpecies.DORPER_SHEEP,     birthMonthsAgo: 13, breed_confidence: 0.88 },
  { ownerEmail: 'solange.uwimana@match.rw',    name: 'Ubwiza',   sex: Gender.MALE,   type: AnimalType.PIG,   specie: AnimalSpecies.DUROC_PIG,        birthMonthsAgo: 12, breed_confidence: 0.84 },
  { ownerEmail: 'solange.uwimana@match.rw',    name: 'Inshuti',  sex: Gender.FEMALE, type: AnimalType.SHEEP, specie: AnimalSpecies.DORPER_SHEEP,     birthMonthsAgo: 16, breed_confidence: 0.89 },
  { ownerEmail: 'claude.ndagijimana@match.rw', name: 'Gasabo',   sex: Gender.MALE,   type: AnimalType.COW,   specie: AnimalSpecies.JERSEY_COW,       birthMonthsAgo: 26, breed_confidence: 0.91 },
  { ownerEmail: 'claude.ndagijimana@match.rw', name: 'Inyana',   sex: Gender.FEMALE, type: AnimalType.COW,   specie: AnimalSpecies.SAHIWAL_COW,      birthMonthsAgo: 18, breed_confidence: 0.77 },
];

// ── Seed functions ────────────────────────────────────────────────────────────

async function seedUsers(password: string) {
  console.log('\nSeeding users...');
  for (const u of users) {
    const existing = await prisma.$queryRaw<{ count: bigint }[]>`
      SELECT COUNT(*)::bigint AS count FROM "User" WHERE "email" = ${u.email}
    `;
    if (existing[0].count > 0n) {
      console.log(`  skipping ${u.name} (already exists)`);
      continue;
    }
    await prisma.$executeRaw`
      INSERT INTO "User" (
        "userId", "name", "sex", "password", "phone_number", "email",
        "lastActive", "district", "sector", "village", "cell", "location"
      ) VALUES (
        ${randomUUID()}, ${u.name}, ${u.sex}::"Gender", ${password},
        ${u.phone_number}, ${u.email}, NOW(),
        ${u.district}, ${u.sector}, ${u.village}, ${u.cell},
        ST_GeomFromText(${'POINT(' + u.longitude + ' ' + u.latitude + ')'}, 4326)
      )
    `;
    console.log(`  created ${u.name} — ${u.district}`);
  }
}

async function seedAnimals() {
  console.log('\nSeeding animals (with image upload)...');

  // Resolve all user emails → real UUIDs in one query
  const dbUsers = await prisma.$queryRaw<{ userId: string; email: string }[]>`
    SELECT "userId", "email" FROM "User"
    WHERE "email" = ANY(${users.map(u => u.email)})
  `;
  const emailToId = new Map(dbUsers.map(u => [u.email, u.userId]));

  for (const a of animalTemplates) {
    const ownerId = emailToId.get(a.ownerEmail);
    if (!ownerId) {
      console.log(`  skipping ${a.name} — owner not found`);
      continue;
    }

    const existing = await prisma.animal.findFirst({ where: { name: a.name, ownerId } });
    if (existing) {
      console.log(`  skipping ${a.name} (already exists)`);
      continue;
    }

    // Download from Wikipedia Commons and upload to Supabase (cached per species)
    const profilePhoto = await uploadFromUrl(a.specie);

    await prisma.animal.create({
      data: {
        name:             a.name,
        sex:              a.sex,
        type:             a.type,
        specie:           a.specie,
        birthDate:        dob(a.birthMonthsAgo),
        status:           AnimalStatus.ALIVE,
        recommendable:    true,
        breed_confidence: a.breed_confidence,
        profilePhoto,
        ownerId,
      },
    });
    console.log(`  created ${a.name} (${a.specie}, ${a.sex})`);
  }
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('Hashing passwords...');
  const password = await argon2.hash('Password123');

  await seedUsers(password);
  await seedAnimals();

  console.log('\nSeed complete!');
  console.log('Password for all accounts: Password123');
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); await pool.end(); });
