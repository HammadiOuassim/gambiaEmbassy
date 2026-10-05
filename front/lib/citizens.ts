export type CitizenStatus = "Verified" | "Pending" | "Action";

export type Citizen = {
  id: string;
  initials: string;
  name: string;
  qid: string;
  passport: string;
  address: string;
  zone: string;
  civil: "Married" | "Single" | "Divorced";
  registered: string;
  status: CitizenStatus;
  phone: string;
  email: string;
  gender: string;
  nationality: string;
  dob: string;
  birthPlace: string;
  passportExpiry: string;
  qidNumber: string;
  qidExpiry: string;
};

export const citizens: Citizen[] = [
  {
    id: "sanyang",
    initials: "AS",
    name: "Abdoulie Sanyang",
    qid: "29145 001 772",
    passport: "PC081924",
    address: "Al Sadd",
    zone: "Zone 38",
    civil: "Married",
    registered: "24 Sep 2026",
    status: "Verified",
    phone: "+974 5551 2201",
    email: "abdoulie.sanyang@example.com",
    gender: "Male",
    nationality: "Gambian",
    dob: "02 Mar 1988",
    birthPlace: "Banjul",
    passportExpiry: "12 Jan 2029",
    qidNumber: "29145001772",
    qidExpiry: "04 May 2027",
  },
  {
    id: "bittaye",
    initials: "FB",
    name: "Fatou Bittaye",
    qid: "29670 017 341",
    passport: "PC084126",
    address: "Al Wakrah",
    zone: "Zone 90",
    civil: "Single",
    registered: "23 Sep 2026",
    status: "Pending",
    phone: "+974 5588 1044",
    email: "fatou.bittaye@example.com",
    gender: "Female",
    nationality: "Gambian",
    dob: "19 Nov 1995",
    birthPlace: "Brikama",
    passportExpiry: "03 Aug 2028",
    qidNumber: "29670017341",
    qidExpiry: "11 Dec 2026",
  },
  {
    id: "ceesay",
    initials: "LK",
    name: "Lamin K. Ceesay",
    qid: "28761 004 529",
    passport: "PC075633",
    address: "Al Rayyan",
    zone: "Zone 53",
    civil: "Married",
    registered: "20 Sep 2026",
    status: "Action",
    phone: "+974 5510 7782",
    email: "lamin.ceesay@example.com",
    gender: "Male",
    nationality: "Gambian",
    dob: "07 Jul 1984",
    birthPlace: "Serrekunda",
    passportExpiry: "30 Nov 2026",
    qidNumber: "28761004529",
    qidExpiry: "22 Jan 2027",
  },
  {
    id: "jallow",
    initials: "MJ",
    name: "Mariama Fatou Jallow",
    qid: "29245 001 783",
    passport: "PC081924",
    address: "Doha",
    zone: "Zone 38",
    civil: "Married",
    registered: "18 Sep 2026",
    status: "Verified",
    phone: "+974 5562 1840",
    email: "mariama.jallow@example.com",
    gender: "Female",
    nationality: "Gambian",
    dob: "14 May 1992",
    birthPlace: "Banjul",
    passportExpiry: "08 Nov 2028",
    qidNumber: "29245001783",
    qidExpiry: "17 Feb 2027",
  },
  {
    id: "bojang",
    initials: "OB",
    name: "Ousman Bojang",
    qid: "29384 016 210",
    passport: "PC088510",
    address: "Umm Salal",
    zone: "Zone 71",
    civil: "Single",
    registered: "15 Sep 2026",
    status: "Pending",
    phone: "+974 5577 4410",
    email: "ousman.bojang@example.com",
    gender: "Male",
    nationality: "Gambian",
    dob: "21 Jan 1991",
    birthPlace: "Banjul",
    passportExpiry: "16 Apr 2029",
    qidNumber: "29384016210",
    qidExpiry: "09 Sep 2027",
  },
  {
    id: "sirreh",
    initials: "NS",
    name: "Ndey Sirreh",
    qid: "29802 011 664",
    passport: "PC097281",
    address: "Al Khor",
    zone: "Zone 74",
    civil: "Divorced",
    registered: "12 Sep 2026",
    status: "Verified",
    phone: "+974 5533 9081",
    email: "ndey.sirreh@example.com",
    gender: "Female",
    nationality: "Gambian",
    dob: "30 Aug 1986",
    birthPlace: "Basse",
    passportExpiry: "02 Feb 2028",
    qidNumber: "29802011664",
    qidExpiry: "14 Jun 2027",
  },
];

export const mariama = citizens[3];
