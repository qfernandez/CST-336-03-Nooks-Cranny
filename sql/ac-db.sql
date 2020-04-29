SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Table structure for table `villagers`
--
DROP TABLE IF EXISTS `villagers`;
CREATE TABLE `villagers` (
  `villagerId` mediumint(9) NOT NULL,
  `villagerName` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `villagerPicture` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `villagerUserName` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `villagerPassword` varchar(25) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `villagers`
--

INSERT INTO `villagers` (`villagerId`, `villagerName`, `villagerPicture`, `villagerUserName`, `villagerPassword`) VALUES
(1, 'Tom Nook', 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/ef/NH-character-Tom_Nook.png/revision/latest?cb=20191228193640','tnook','tnook'),
(2, 'Apollo', 'https://vignette.wikia.nocookie.net/animalcrossing/images/0/0c/NH-Apollo-Render.png/revision/latest?cb=20200202215708', 'apollo', 'apollo'),
(3, 'Bam', 'https://vignette.wikia.nocookie.net/animalcrossing/images/b/ba/Bam_NewLeaf_Official.png/revision/latest?cb=20140210200209', 'bam', 'bam'),
(4, 'Carmen', 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/eb/Carmen_NH.png/revision/latest?cb=20200321204617', 'carmen', 'carmen'),
(5, 'Daisy', 'https://vignette.wikia.nocookie.net/animalcrossing/images/3/36/Daisy_NewLeaf_Official.png/revision/latest?cb=20130721182429', 'daisy', 'daisy'),
(6, 'Elmer', 'https://vignette.wikia.nocookie.net/animalcrossing/images/1/15/Elmer_NewLeaf_Official.png/revision/latest?cb=20130721184056', 'elmer', 'elmer'),
(7, 'Fang', 'https://vignette.wikia.nocookie.net/animalcrossing/images/7/74/NH-icon-Fang_01.png/revision/latest?cb=20200224181958', 'fang', 'fang'),
(8, 'Grizzly', 'https://vignette.wikia.nocookie.net/animalcrossing/images/4/46/Grizzly_NewHorizons.png/revision/latest?cb=20200407222650', 'grizzly', 'grizzly'),
(9, 'Henry', 'https://vignette.wikia.nocookie.net/animalcrossing/images/d/d1/Henry_HD.png/revision/latest?cb=20180518163033', 'henry', 'henry'),
(10, 'Ike', 'https://vignette.wikia.nocookie.net/animalcrossing/images/b/bf/Ike_HHD.png/revision/latest?cb=20180518170322', 'ike', 'ike'),
(11, 'Jay', 'https://vignette.wikia.nocookie.net/animalcrossing/images/f/f4/Jay_NewLeaf_Official.png/revision/latest?cb=20130721212323', 'jay', 'jay'),
(12, 'Kiki', 'https://vignette.wikia.nocookie.net/animalcrossing/images/4/4b/Kiki_NL.png/revision/latest?cb=20130708021703', 'kiki', 'kiki'),
(13, 'Lopez', 'https://vignette.wikia.nocookie.net/animalcrossing/images/2/20/Lopez_HD.png/revision/latest?cb=20180518161521', 'lopez', 'lopez'),
(14, 'Maple', 'https://vignette.wikia.nocookie.net/animalcrossing/images/a/a3/Maple_NewHorizons.png/revision/latest?cb=20200407222355', 'maple', 'maple'),
(15, 'Olivia', 'https://vignette.wikia.nocookie.net/animalcrossing/images/a/a2/-Olivia_-_Animal_Crossing_New_Leaf.png/revision/latest?cb=20130708015450', 'olivia', 'olivia'),
(16, 'Pate', 'https://vignette.wikia.nocookie.net/animalcrossing/images/c/c8/Pate_NewLeaf_Official.png/revision/latest?cb=20130721201210', 'pate','pate'),
(17, 'Quillson', 'https://vignette.wikia.nocookie.net/animalcrossing/images/5/5b/Quillson_HD.png/revision/latest?cb=20180518162105', 'quillson', 'quillson'),
(18, 'Raymond', 'https://vignette.wikia.nocookie.net/animalcrossing/images/2/2a/Raymond_NH.png/revision/latest?cb=20200317174731', 'raymond', 'raymond'),
(19, 'Sally', 'https://vignette.wikia.nocookie.net/animalcrossing/images/a/a3/Sally_NH.png/revision/latest?cb=20200309012550', 'sally', 'sally'),
(20, 'Tiffany', 'https://vignette.wikia.nocookie.net/animalcrossing/images/f/f0/Tiffany_NH.png/revision/latest?cb=20200321104144', 'tiffany', 'tiffany');
-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `productId` mediumint(9) NOT NULL,
	`productName` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
	`productPicture` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
	`productDescription` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
	`productType` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
	`productPrice` int(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productId`, `productName`, `productPicture`, `productDescription`, `productType`, `productPrice`) VALUES
(1, 'ACNH Nintendo Switch', 'https://villagerdb.com/images/items/full/acnh-nintendo-switch.a60ba9c.png', 'A Nintendo Switch based off of Animal Crossing: New Horizons', 'furniture', 35960),
(2, 'Barbell', 'https://villagerdb.com/images/items/full/barbell.aa41333.png', 'Get some gains with these barbell','furniture', 7500),
(3, 'Basketball Hoop', 'https://villagerdb.com/images/items/full/basketball-hoop.12e316a.png', 'Shoot some hoops!', 'furniture', 110000),
(4, 'Cat Tower', 'https://villagerdb.com/images/items/full/cat-tower.3f967f2.png', 'A palace for your feline', 'furniture', 3000),
(5, 'Dog House', 'https://villagerdb.com/images/items/full/doghouse.eb71fc9.png', 'A palace for your dogo', 'furniture', 3000),
(6, 'Electric Scooter', 'https://villagerdb.com/images/items/full/electric-kick-scooter.1bb6668.png', 'Vroom!', 'furniture', 4400),
(7, 'Film Projector', 'https://villagerdb.com/images/items/full/film-projector.b4d0ae8.png', 'Grab some popcorn and watch some films', 'furniture', 2400),
(8, 'Garden Gnome', 'https://villagerdb.com/images/items/full/garden-gnome.aa13365.png', 'Protector of the front lawn', 'furniture', 1900),
(9, 'Grand Piano', 'https://villagerdb.com/images/items/full/grand-piano.8591109.png', 'Music to your ears', 'furniture', 260000),
(10, 'High End Sterio', 'https://villagerdb.com/images/items/full/high-end-stereo.179b389.png', 'For some Hi-fi hip hop, 24/7 beats to jam out to', 'furniture', 10000),
(11, 'Ironing Board', 'https://villagerdb.com/images/items/full/ironing-board.4c6056a.png', 'Clean them clothes', 'furniture', 2300),
(12, 'Juxebox', 'https://villagerdb.com/images/items/full/jukebox.bd262c1.png', 'Grab a milkshake and listen to Elvis', 'furniture', 5600),
(13, 'Kotatsu', 'https://villagerdb.com/images/items/full/kotatsu.f022a23.png', 'Its like a bed with a table', 'furniture', 3700),
(14, 'Bathtub', 'https://villagerdb.com/images/items/full/long-bathtub.1024de3.png', 'Squeky clean', 'furniture', 7800),
(15, 'Manga Wall', 'https://villagerdb.com/images/items/full/manga-library-wall.273aa31.png', 'Kawaii!', 'furniture', 1050),
(16, 'Newton Craddle', 'https://villagerdb.com/item/newtons-cradle', 'The balls go back and forth', 'furniture', 1300),
(17, 'Crown', 'https://villagerdb.com/images/items/full/crown.79891f9.png', 'Literally the most expensive item in the game', 'clothes', 1000000),
(18, 'Bomber Jacket', 'https://villagerdb.com/images/items/full/bomber-style-jacket.cc87a81.png', 'So 2018', 'clothes', 1440),
(19, 'Frog Tee', 'https://villagerdb.com/images/items/full/frog-tee.0df540a.png', 'No chair so this will do for now', 'clothes', 640),
(20, 'Meme Tee', 'https://villagerdb.com/images/items/full/meme-shirt.2cc2a4b.png', 'Can i haz cheezburger?', 'clothes', 960);


--
-- Table structure for table `reviews`
--
DROP TABLE IF EXISTS `reviews`;
CREATE TABLE `reviews` (
  `reviewId` mediumint(9) NOT NULL,
	`reviewDescription` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
	`villagerId` mediumint(9) NOT NULL,
	`productId` mediumint(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `reviews` \\Remember to edit this
--

INSERT INTO `reviews` (`reviewId`, `reviewDescription`, `villagerId`, `productId`) VALUES
(1, 'Just what I needed for the court', 2, 3),
(2, 'So cute! Perfect for my manga collection', 4, 15),
(3, 'It would be weird to own a cat as a pet... as a cat', 12, 4),
(4, 'A Crown fit for a queen', 20, 17),
(5, 'You see these all around SF', 8, 6),
(6, 'I look great in it!', 17, 18),
(7, 'Perfect for a scientist', 10, 16),
(8, 'Loving taking naps in one of these', 13, 13),
(9, 'I wish I had the chair to go with these', 16, 19),
(10, 'So perfect for my memer friend', 3, 20),
(11, 'The perfect Switch', 1, 1),
(12, 'These will keep the dogs in', 5, 5),
(13, 'Needed it for the gains', 6, 2),
(14, 'Came in clutch for my movie night', 11, 7),
(15, 'Who would ever need this?', 7, 8),
(16, 'Perfect for when I play Mozart', 9, 9),
(17, 'So loud!', 14, 10),
(18, 'Its alright, perfect price for ironing my clothes', 15, 11),
(19, 'Needed this for my Grease-themed room!', 18, 12),
(20, 'Keeping me squeeky clean', 19, 14);



--
-- Indexes for dumped tables
--

--
-- Indexes for table `l9_author`
--
ALTER TABLE `villagers`
  ADD PRIMARY KEY (`villagerId`);

--
-- Indexes for table `l9_quotes`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productId`);

--
-- Indexes for table `l9_quotes` \\ Remember to edit this
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`reviewId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `villagers`
  MODIFY `villagerId` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 21;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `products`
  MODIFY `productId` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 21;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `reviewId` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 21; 
COMMIT;
