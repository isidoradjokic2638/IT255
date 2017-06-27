-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 25, 2017 at 08:21 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cs324-projekat`
--

-- --------------------------------------------------------

--
-- Table structure for table `knjiga`
--

CREATE TABLE `knjiga` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `author` varchar(30) NOT NULL,
  `price` varchar(10) NOT NULL,
  `about` varchar(2000) NOT NULL,
  `type` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `knjiga`
--

INSERT INTO `knjiga` (`id`, `name`, `author`, `price`, `about`, `type`) VALUES
(2, 'Nicomachean ethics', 'Artistotle', '76$', 'An detailed examination of what the best life might be for human beings. In order to anwer this question, Aristotle finds he also has to examine what virtue itself is and all of the various virtues that might make up the best life. ', 'history'),
(3, 'Henry Moore', 'David Sylvester', '57$', 'David Sylvester is an internationally renowned art critic who in 1993 became the first art critic to receive a Golden Lion at the Venice Biennale', 'art'),
(6, 'Contemporary portraits', 'Frank Harris', '68$', 'A collection of pen-portraits of authors and artists from the nineteenth and early twentieth centuries, including Whistler, Rodin, Verlaine, and Oscar Wilde.', 'biography'),
(7, 'Recipes for Diabetics', 'Billie Little', '91$', 'At last there can be an end to monotonous mealtimes and being ruled by what not to eat. With th newly revised and updated Recipes For Diabetics, you can enjoy practical, elegant and mouth-watering dishes without worrying about going off your diet. Now one cookbook can meet all your cooking and dining needs -- from easy family favorites like Chile con Carne to such extravagent treats as Chocolate Chiffon Cake with Rum.', 'recipes'),
(8, 'Sense and Sensibility', 'Jane Austen', '35$', 'When Mr. Dashwood dies, he must leave the bulk of his estate to the son by his first marriage, which leaves his second wife and three daughters (Elinor, Marianne, and Margaret) in straitened circumstances. They are taken in by a kindly cousin, but their lack of fortune affects the marriageability of both practical Elinor and romantic Marianne. ', 'romance'),
(9, 'How to Be a Domestic Goddess: Baking and the Art of Comfort Cooking', 'Nigella Lawson', '72$', 'Recipes, baking, domesticity (in a good way). ', 'recipes'),
(10, 'The Turn of the Screw', 'Henry James, Jr', '26$', 'Widely recognized as one of literature''s most gripping ghost stories, this classic tale of moral degradation concerns the sinister transformation of two innocent children into flagrant liars and hypocrites. The story begins when a governess arrives at an English country estate to look after Miles, aged ten, and Flora, eight.', 'children'),
(11, 'Jack and Jill: a village story', 'Louisa May Alcott', '47$', '"Clear the lulla!" was the general cry on a bright December afternoon, when all the boys and girls of Harmony Village were out enjoying the first good snow of the season.', 'children');

-- --------------------------------------------------------

--
-- Table structure for table `korisnik`
--

CREATE TABLE `korisnik` (
  `id` int(11) NOT NULL,
  `first` varchar(30) NOT NULL,
  `last` varchar(30) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(128) NOT NULL,
  `confirm` varchar(128) NOT NULL,
  `country` varchar(30) NOT NULL,
  `city` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `admin` int(11) NOT NULL DEFAULT '0',
  `token` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `korisnik`
--

INSERT INTO `korisnik` (`id`, `first`, `last`, `username`, `password`, `confirm`, `country`, `city`, `email`, `mobile`, `admin`, `token`) VALUES
(2, 'radmila', 'djokic', 'rada123', '176238df8a81f89eb2fede0b411699', '176238df8a81f89eb2fede0b411699', 'srb', 'bg', 'radasdasd@gmail.com', '1234567890', 0, ''),
(4, 'nikola', 'nikolic', 'nikola123', 'a646e457db47ad218d6d9d3ce32587', 'a646e457db47ad218d6d9d3ce32587', 'croatia', 'zagreb', 'nikola@yahoo.com', '1234567890', 1, ''),
(6, 'marija', 'marijic', 'marija123', '474f5d4cac3a8cef024c0b4bece7a5', '474f5d4cac3a8cef024c0b4bece7a5', 'srb', 'bg', 'marija@masd.com', '1234567890', 0, ''),
(8, 'marko', 'markic', 'marko1', '4dacbbf8c6ad88182d6271c0fc910d00', '4dacbbf8c6ad88182d6271c0fc910d00', 'srbija', 'beograd', 'marko@gmail.com', '1234567890', 1, ''),
(9, 'rada', 'miljkovic', 'rada1', '5a3778f2cb715b4e90978dc5af24225b', '5a3778f2cb715b4e90978dc5af24225b', 'austrija', 'bec', 'rada@radic.com', '9876543211', 0, 'c68edd523ebefb97d4f1547490ee5451caa024a8'),
(10, 'marko', 'marko', 'marko12', '806d55ab86ba5e6ed01ab6818b8a7246', '806d55ab86ba5e6ed01ab6818b8a7246', 'srbija', 'bg', 'marko@aads.com', '9876543211', 0, ''),
(11, 'ljilja', 'ljic', 'ljilja1', '223efd1da3d18dba2b2fc60604a3af74', '223efd1da3d18dba2b2fc60604a3af74', 'srbia', 'bg', 'ljilja@asd.com', '1234567890', 1, '6241aa1f7d3f6d7374901f35cd097d4075afb87b'),
(13, 'marko', 'hkj', 'jhk', '23ac94c9a5905932ec65300aec756b82', 'c0da2fcc51be7f583c7a9dfae4faaf16', 'hk', 'jhk', 'jhk', 'hkj', 0, ''),
(14, 'mjau', 'mjau', 'mjau', 'mjau', 'mjau', 'mjau', 'mjau', 'mjau', 'mjau', 0, ''),
(15, 'null', 'null', 'null', '37a6259cc0c1dae299a7866489dff0bd', '37a6259cc0c1dae299a7866489dff0bd', 'null', 'null', 'null', 'null', 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `korisnik_knjiga`
--

CREATE TABLE `korisnik_knjiga` (
  `id` int(11) NOT NULL,
  `id_korisnik` int(11) NOT NULL,
  `id_knjiga` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `knjiga`
--
ALTER TABLE `knjiga`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `korisnik`
--
ALTER TABLE `korisnik`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `korisnik_knjiga`
--
ALTER TABLE `korisnik_knjiga`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `knjiga`
--
ALTER TABLE `knjiga`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `korisnik`
--
ALTER TABLE `korisnik`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `korisnik_knjiga`
--
ALTER TABLE `korisnik_knjiga`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
