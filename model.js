const model = {};

//An array containing all the monsters and tips
var monsters = [
    "A beautiful fairy", "Accessories", "Ame Onna", "Armor", "Akashita", "Arakawa Lord",
    "Bats", "Beard", "Bell", "Big Wings", "Bird", "Black Panther", "Black Scythe", "Blade", "Blood", "Blue Imp", "Blue skin", "Bone", "Bubbles", "Bugs", "Butt",
    "Candles", "Cane", "Ceramic", "Cheat", "Cherry Tree", "Chocho", "Cloud", "Coffins", "Control", "Curse Nail", "Cursed Dart", "Cute",
    "Dagger", "Dance", "Dandelion", "Diamond", "Ding", "Doll", "Doujo", "Drum",
    "Enma",
    "Fairy", "Feather coat", "Fisherman", "Flower", "Flute", "Fortune",
    "Gaki", "Gambling", "Ghost Mask", "Girl", "Grave Digger", "Green Imp", "Guitar",
    "Hahakigami", "Hammer", "Hangan", "Harden", "Hatred", "Healing", "Hitotsume", "Hone Onna", "Horn", "Hououka", "House",
    "Inugami",
    "Jikikaeru",
    "Kamaitachi", "Kamikui", "Kanko", "Kappa", "Karasu Tengu","Kite","Kodokushi", "Koi", "Kubinashi", "Kuro Mujou", "Kusa", "Kyonshi Ani", "Kyonshi Imoto", "Kyuumei Neko",
    "Lantern Boy", "Lantern Soul", "Leaf", "Lily", "Little Fairy", "Luck", "Luck Wealth",
    "Mahjong", "Mini Drum", "Mio", "Momiji", "Momo", "Moss", "Mouba", "Mustache",
    "Naginata", "Nail", "Nightmare", "Nurikabe",
    "Offering", "Oguna", "Ootengu", "Orb",
    "Paper Fan", "Parasite", "Petrified", "Pilow", "Poison", "Protection", "Puppet", "Puppeteer", "Purple Dog",
    "Rain", "Rake", "Red Ghost", "Red Imp", "Red Tail", "River",
    "Sakura", "Samurai X", "Satori", "Scarecrow", "Scholar", "Scythe", "Sea", "Seductive", "Shell", "Shiro Mujou", "Shuten Doji", "Shuzu",
    "Slapping", "Soup Bowl", "Staff", "Stone Buddha", "Stone hammer", "Straw Doll", "Strong", "Sutra",
    "Take life", "Tanto Sword", "Tanuki", "Tears", "Teeth", "Tesso", "Tree",
    "Umibozu", "Umbrella", "Ushi no Toki",
    "Vampira",
    "Wall", "Water Lily", "Water ball", "Wealth", "White", "Wind",
    "Yamausagi", "Yamawaro", "Yellow Imp", "Youko", "Young Girl", "Yuki Onna", "Yumekui",
    "Zashiki", "Zombie Dog",
];

model.lanternsoul = {
    "name": "Lantern Soul",
    "Chapter 9 1st Lantern Boy": 3,
    "Arakawa Stage 1": 3,
    "Arakawa Stage 2": 3,
    "Arakawa Stage 3": 3,
    "Shishio Stage 2" : 3,
    "Chapter 2 2nd Grave Digger" : 2,
    "Chapter 2 1st Parasite" : 2,
    "Chapter 9 2nd Lantern Boy" : 1,
}

model.akashita = {
    "name": "Akashita",
    "Chapter 23 1st Hone Onna": 3,
    "Chapter 23 2nd Hone Onna": 3,
    "Shishio Stage 4": 3,
    "Kamaitachi Stage 1": 3,
}

model.lanternboy = {
    "name" : "Lantern Boy",
    "Kappa Stage 1" : 3,
    "Kappa Stage 2": 3,
    "Kamaitachi Stage 1": 3,
    "Chapter 9 1st Lantern Boy" : 1,
}

model.redimp = {
    "name" : "Red Imp",
    "Chapter 13 1st Gaki" : 3,
    "Chapter 13 2nd Gaki" : 3,
    "Chapter 13 3rd Gaki" : 3,
}

model.greenimp = {
    "name" : "Green Imp",
    "Chapter 6 1st Blue Imp" : 3,
    "Chapter 6 2nd Blue Imp" : 3,
    "Chapter 6 boss Kodokushi" : 3,
}

model.yellowimp = {
    "name" : "Yellow Imp",
    "Shishio Stage 1" : 3,
    "Chapter 8 1st Green Imp" : 2,
    "Chapter 8 2nd Green Imp" : 2,
}

model.hahakigami = {
    "name" : "Hahakigami",
    "Ootengu Stage 1" : 4,
    "Chapter 6 1st Lantern Soul" : 3,
    "Chapter 6 2nd Lantern Soul" : 3,
}

model.blueimp = {
    "name" : "Blue Imp",
    "Yoto Hime Stage 1" : 4,
    "Chapter 10 1st Ushi no Toki" : 2,
    "Chapter 10 2nd Ushi no Toki" : 2,
}

model.parasite = {
    "name" : "Parasite",
    "Chapter 16 1st Akashita" : 3,
    "Chapter 16 2nd Akashita" : 3,
    "Chapter 16 3rd Akashita" : 3,
    "Arakawa Stage 1" : 3,

}

model.umbrella = {
    "name" : "Umbrella",
    "Ame Onna Stage 4" : 3,
    "Chapter 4 (Hard) 2nd Hahakigami" : 3,
}

model.gravedigger = {
    "name" : "Grave Digger",
    "Ame Onna Stage 1" : 3,
    "Shishio Stage 1" : 2,
}

model.nurikabe = {
    "name" : "Nurikabe",
    "Chapter 14 1st Nurikabe" : 6,
    "Chapter 14 2nd Nurikabe" : 6,
    "Chapter 14 3rd Nurikabe" : 6,
}

model.blackpanther = {
    "name" : "Black Panther",
    "Kappa Stage 4" : 3,
}

model.zombiedog = {
    "name" : "Zombie Dog",
    "Kiyohime Stage 1" : 13,
}

model.mio = {
    "name" : "Mio",
    "Ootengu Stage 1" : 4,
    "Yoto Hime Stage 4" : 3,
    "Chapter 18 1st Mio" : 2,
    "Chapter 18 2nd Mio" : 2,
    "Chapter 18 3rd Mio" : 2,
}

model.zashiki = {
    "name" : "Zashiki",
    "Ame Onna Stage 1" : 3,
    "Chapter 10 2nd Satori" : 2,
    "Chapter 10 2nd Puppeteer" : 2
}

model.koi = {
    "name" : "Koi",
    "Chapter 27 1st Kappa" : 3,
    "Chapter 27 2nd Kappa" : 3,
    "Chapter 7 1st Koi" : 3,
    "Chapter 7 2nd Lantern Boy" : 2,
    "Chapter 7 2nd Koi" : 1,
}

model.kyuumeineko = {
    "name" : "Kyuumei Neko",
    "Chapter 18 1st Kyuumei Neko" : 6,
    "Chapter 18 2nd Kyuumei Neko" : 6,
    "Chapter 18 3rd Kyuumei Neko" : 6,
}

model.tanuki = {
    "name" : "Tanuki",
    "Yoto Hime Stage 1" : 4,
    "Chapter 10 1st Satori" : 3,
    "Chapter 10 1st Puppeteer" : 2,
}

model.kappa = {
    "name" : "Kappa",
    "Umibozu Stage 5" : 5,
    "Chapter 27 1st Koi" : 3,
    "Umibozu Stage 3" : 3,
}

model.oguna = {
    "name" : "Oguna",
    "Kappa Stage 1" : 3,
    "Aoandon Stage 3" : 3,
    "Chapter 12 1st Oguna" : 1,
    "Chapter 12 2nd Oguna" : 1,

}

model.doujo = {
    "name" : "Doujo",
    "Chapter 3 2nd Yellow Imp" : 3,
    "Chapter 3 1st Samurai X" : 2,
    "Chapter 3 2nd Akashita" : 2,
}

model.gaki = {
    "name" : "Gaki",
    "Chapter 11 2nd Gaki" : 3,
    "Chapter 11 1st Gaki" : 1,
    "Soul Stage 8" : 1,
}

model.kodokushi = {
    "name" : "Kodokushi",
    "Kappa Stage 3" : 3,
    "Chapter 25 1st Kodokushi" : 1,
    "Chapter 25 2nd Kodokushi" : 1,
}

model.karasutengu = {
    "name" : "Karasu Tengu",
    "Chapter 25 3rd Samurai X": 3,
    "Chapter 12 2nd Umibozu" : 2,
    "Chapter 12 1st Oguna" : 2,
    "Chapter 12 2nd Oguna" : 2,
}

model.kamikui = {
    "name" : "Kamikui",
    "Kappa Stage 3" : 3,
    "Soul Stage 7" : 1,
    "Chapter 21 1st Kamikui" : 1,
    "Chapter 21 2nd Kamikui" : 1,
    "Chapter 21 3rd Kamikui" : 1,

}

model.kusa = {
    "name" : "Kusa",
    "Soul Sougenbi" : 4,
    "Chapter 26 1st Doumeki" : 1,
    "Chapter 26 2nd Doumeki" : 1,
    "Chapter 26 3rd Doumeki" : 1,
    "Chapter 26 1st Satori" : 1,
    "Chapter 26 2nd Satori" : 1,
}

model.warriorsoul = {
    "name" : "Warrior Soul",
    "Chapter 25 2nd Kodokushi" : 2,
    "Chapter 11 1st Warrior Soul" : 1,
    "Chapter 11 2nd Warrior Soul" : 1,
}

model.kyonshiimoto = {
    "name" : "Kyonshi Imoto",
    "Chapter 28 1st Susabi" : 3,
    "Chapter 28 1st Kyonshi Imoto" : 1,
}

model.samuraix = {
    "name" : "Samurai X",
    "Chapter 3 1st Samurai X" : 1,
    "Chapter 3 2nd Samurai X" : 1,
    "Soul Sougenbi" : 1,
}

model.ushinotoki = {
    "name" : "Ushi no Toki",
    "Chapter 21 1st Kamikui" : 3,
    "Chapter 21 2nd Kamikui" : 2,
    "Chapter 21 3rd Kamikui" : 2,
    "Kappa Stage 4" : 2, 
}

model.hitotsume = {
    "name" : "Hitotsume",
    "Chapter 11 2nd Warrior Soul" : 3,
    "Chapter 11 1st Hitotsume (Hard)" : 2,
    "Chapter 11 2nd Hitotsume (Hard)" : 2,
    "Chapter 25 1st Kodokushi" : 2,
}

model.tesso = {
    "name" : "Tesso",
    "Chapter 9 2nd Lantern Boy" : 2,
    "Chapter 9 2nd Tesso" : 2,
    "Chapter 9 2nd Yamausagi" : 1,
    "Chapter 9 1st Tesso" : 1,
    "Coin Monster" : 16,
}


model.shuzu = {
    "name" : "Shuzu",
    "Chapter 25 1st Samurai X" : 1,
    "Chapter 25 2nd Samurai X" : 1,
}

model.ameonna = {
    "name" : "Ame Onna",
    "Yoto Hime Stage 3" : 3,
    "Umibozu Stage 5" : 3,
}

model.kanko = {
    "name" : "Kanko",
    "Momiji Stage 1" : 4,
    "Chapter 5 1st Kanko" : 2,
    "Chapter 5 2nd Kanko" : 1,
}

model.yamausagi = {
    "name" : "Yamausagi",
    "Chapter 9 1st Yamausagi" : 4,
    "Chapter 9 2nd Yamausagi" : 3,
    "Chapter 25 1st Samurai X" : 2,
    "Chapter 25 2nd Samurai X" : 2,
}

model.chocho = {
    "name" : "Chocho",
    "Yoto Hime Stage 2" : 3,
    "Chapter 6 1st Chocho" : 1,
    "Chapter 6 2nd Chocho" : 1,
}

model.yamawaro = {
    "name" : "Yamawaro",
    "Kappa Stage 2" : 3,
    "Chapter 16 1st Gaki" : 2,
    "Chapter 16 2nd Gaki" : 2,
    "Chapter 16 3rd Gaki" : 2,

}

model.kubinashi = {
    "name" : "Kubinashi",
    "Ame Onna Stage 2" : 3,
    "Soul Stage 11" : 1,
}

model.satori = {
    "name" : "Satori",
    "Momiji Stage 1" : 3,
    "Kappa Stage 4" : 3,
    "Soul 10" : 1,
}

model.jikikaeru = {
    "name" : "Jikikaeru",
    "Aoandon Stage 5" : 2,
}

model.yukionna = {
    "name" : "Yuki Onna",
    "Arakawa Stage 6" : 4,
    "Chapter 12 1st Doujo" : 1,
    "Chapter 12 2nd Doujo" : 1,
    "Soul Stage 11" : 1
}

model.inugami = {
    "name" : "Inugami",
    "Chapter 10 2nd Satori" : 1,
    "Chapter 10 2nd Puppeteer" : 1,
}

model.honeonna = {
    "name" : "Hone Onna",
    "Ame Onna Stage 4" : 4,
}

model.umibozu = {
    "name" : "Umibozu",
    "Chapter 24 1st Vampira" : 3,
    "Chapter 24 2nd Vampira" : 3,
    "Chapter 27 1st Kingyo Hime" : 3,
    "Chapter 27 2nd Kingyo Hime" : 3,
    "Chapter 27 1st Umibozu" : 1,
    "Chapter 27 2nd Umibozu" : 1,
    "Umibozu Stage 5" : 1,
}

model.kyonshiani = {
    "name" : "Kyonshi Ani",
    "Chapter 24 1st Jourogumo" : 3,
    "Chapter 24 2nd Jourogumo" : 3,
    "Aoandon Stage 6" : 3,
}

model.puppeteer = {
    "name" : "Puppeteer",
    "Chapter 28 1st Puppeteer" : 3,
    "Chapter 28 2nd Puppeteer" : 3,
    "Chapter 27 1st Umibozu" : 3,
}

model.momiji = {
    "name" : "Momiji",
    "Momiji Stage 1" : 1,
    "Kappa Stage 5" : 1,
}

model.hangan = {
    "name" : "Hangan",
    "Chapter 28 1st Hangan" : 2,
    "Soul Stage 8" : 1,
}

model.sakura = {
    "name" : "Sakura",
    "Chapter 8 1st Sakura" : 1,
    "Chapter 8 2nd Sakura" : 1,
    "Chapter 8 Boss Sakura" : 1,
    "Kappa Stage 5" : 1,
}

model.yumekui = {
    "name" : "Yumekui",
    "Chapter 14 Boss Yumekui" : 5,
    "Soul Stage 4" : 2,
}

model.hououka = {
    "name" : "Hououka",
    "Chapter 20 2nd Hannya" : 1,
    "Soul Stage 7" : 1,
    "Kappa Stage 5" : 1,
}

model.momo = {
    "name" : "Momo",
    "Soul Stage 3" : 1,
}

model.mouba = {
    "name" : "Mouba",
    "Soul Stage 5" : 2,
    "Chapter 23 1st Mouba" : 1,
    "Chapter 23 2nd Mouba" : 1,
    "Chapter 23 3rd Mouba" : 1,
}

model.vampira = {
    "name" : "Vampira",
    "Chapter 21 1st Vampira" : 1,
    "Chapter 21 2nd Vampira" : 1,
    "Chapter 24 1st Vampira" : 1,
    "Chapter 24 2nd Vampira" : 1,
}

model.kuromujou = {
    "name" : "Kuro Mujou",
    "Kappa Stage 6" : 3,
    "Chapter 24 1st Kiyohime" : 2,
    "Chapter 24 2nd Kiyohime" : 2,
    "Chapter 24 3rd Kiyohime" : 2,
    "Chapter 28 1st Enma" : 2,
}

model.shiromujou = {
    "name" : "Shiro Mujou",
    "Ootengu Stage 6" : 2,
    "Chapter 24 1st Kiyohime" : 1,
    "Chapter 24 2nd Kiyohime" : 1,
    "Chapter 24 3rd Kiyohime" : 1,
}

model.kamaitachi = {
    "name" : "Kamaitachi",
    "Soul Stage 5" : 1,
    "Kappa Stage 4" : 1,
}

model.youko = {
    "name" : "Youko",
    "Chapter 7 Boss Youko" : 2,
    "Soul Sougenbi" : 1,
}

model.ootengu = {
    "name" : "Ootengu",
    "Soul Stage 10" : 2,
    "Soul Stage 11" : 2,
    "Chapter 15 3rd Lantern Boy" : 1,
}

model.shutendoji = {
    "name" : "Shuten Doji",
    "Soul Stage 10" : 1,
}

model.arakawalord = {
    "name" : "Arakawa Lord",
    "Soul Stage 7" : 2,
}

model.enma = {
    "name" : "Enma",
    "Soul Stage 6" : 1,
    "Chapter 28 1st Enma" : 1,
}