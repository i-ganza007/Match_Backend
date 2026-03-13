import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import * as argon2 from 'argon2';
import { randomUUID } from 'crypto';
import 'dotenv/config';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// 10 real Rwandan districts with accurate GPS coordinates (lng, lat)
const users = [
  {
    name:         'Uwimana Amina',
    sex:          'FEMALE',
    email:        'amina.uwimana@match.rw',
    phone_number: '+250781100001',
    district:     'Nyarugenge',
    sector:       'Nyamirambo',
    village:      'Kimisagara',
    cell:         'Biryogo',
    longitude:    30.0529,
    latitude:     -1.9706,
  },
  {
    name:         'Nkusi Jean Pierre',
    sex:          'MALE',
    email:        'jean.nkusi@match.rw',
    phone_number: '+250782200002',
    district:     'Gasabo',
    sector:       'Remera',
    village:      'Rukiri',
    cell:         'Nyarutarama',
    longitude:    30.1127,
    latitude:     -1.9355,
  },
  {
    name:         'Mukamana Diane',
    sex:          'FEMALE',
    email:        'diane.mukamana@match.rw',
    phone_number: '+250783300003',
    district:     'Kicukiro',
    sector:       'Gahanga',
    village:      'Rugarama',
    cell:         'Kanombe',
    longitude:    30.1028,
    latitude:     -1.9731,
  },
  {
    name:         'Habimana Eric',
    sex:          'MALE',
    email:        'eric.habimana@match.rw',
    phone_number: '+250784400004',
    district:     'Musanze',
    sector:       'Kinigi',
    village:      'Rwaza',
    cell:         'Nyamyumba',
    longitude:    29.5989,
    latitude:     -1.4995,
  },
  {
    name:         'Uwase Claudine',
    sex:          'FEMALE',
    email:        'claudine.uwase@match.rw',
    phone_number: '+250785500005',
    district:     'Rubavu',
    sector:       'Gisenyi',
    village:      'Kamuhanda',
    cell:         'Buhimba',
    longitude:    29.2569,
    latitude:     -1.6837,
  },
  {
    name:         'Niyonzima Patrick',
    sex:          'MALE',
    email:        'patrick.niyonzima@match.rw',
    phone_number: '+250786600006',
    district:     'Huye',
    sector:       'Ngoma',
    village:      'Butare',
    cell:         'Sovu',
    longitude:    29.7412,
    latitude:     -2.5967,
  },
  {
    name:         'Mukamana Grace',
    sex:          'FEMALE',
    email:        'grace.mukamana@match.rw',
    phone_number: '+250787700007',
    district:     'Nyagatare',
    sector:       'Karangazi',
    village:      'Rwimiyaga',
    cell:         'Gasura',
    longitude:    30.3289,
    latitude:     -1.2972,
  },
  {
    name:         'Bizimana Samuel',
    sex:          'MALE',
    email:        'samuel.bizimana@match.rw',
    phone_number: '+250788800008',
    district:     'Rwamagana',
    sector:       'Munyaga',
    village:      'Gahengeri',
    cell:         'Kiramuruzi',
    longitude:    30.4346,
    latitude:     -1.9488,
  },
  {
    name:         'Uwimana Solange',
    sex:          'FEMALE',
    email:        'solange.uwimana@match.rw',
    phone_number: '+250789900009',
    district:     'Muhanga',
    sector:       'Gitarama',
    village:      'Kabagari',
    cell:         'Mushishiro',
    longitude:    29.7560,
    latitude:     -2.0843,
  },
  {
    name:         'Ndagijimana Claude',
    sex:          'MALE',
    email:        'claude.ndagijimana@match.rw',
    phone_number: '+250780000010',
    district:     'Rusizi',
    sector:       'Cyangugu',
    village:      'Kamembe',
    cell:         'Mururu',
    longitude:    28.9063,
    latitude:     -2.4850,
  },
];

async function main() {
  console.log('Hashing passwords...');
  const password = await argon2.hash('Password123');

  console.log('Seeding 10 users...');
  for (const u of users) {
    // Check by email (unique) — idempotent without needing a fixed userId
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
        ${randomUUID()},
        ${u.name},
        ${u.sex}::"Gender",
        ${password},
        ${u.phone_number},
        ${u.email},
        NOW(),
        ${u.district},
        ${u.sector},
        ${u.village},
        ${u.cell},
        ST_GeomFromText(${'POINT(' + u.longitude + ' ' + u.latitude + ')'}, 4326)
      )
    `;
    console.log(`  created ${u.name} — ${u.district}`);
  }

  console.log('\nDone! All 10 users seeded.');
  console.log('Password for all accounts: Password123');
  console.log('\nSample logins:');
  users.forEach(u => console.log(`  ${u.email}  (${u.district})`));
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); await pool.end(); });
