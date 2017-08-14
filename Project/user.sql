-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 17, 2017 at 07:35 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Shuttle`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` varchar(10) NOT NULL,
  `username` varchar(10) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `temppassword` varchar(50) NOT NULL,
  `temp` varchar(10) NOT NULL,
  `img` varchar(500) NOT NULL,
  `qr` varchar(500) NOT NULL,
  `payment` varchar(10) NOT NULL,
  `hand` varchar(20) NOT NULL,
  `submitted` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `nic` varchar(15) NOT NULL,
  `amount` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `firstname`, `lastname`, `temppassword`, `temp`, `img`, `qr`, `payment`, `hand`, `submitted`, `email`, `password`, `nic`, `amount`) VALUES
('IT14001680', 'IT14001680', 'Vaikunthan', 'Paramananthasivam', '', 'true', 'https://firebasestorage.googleapis.com/v0/b/nirogi-a24ce.appspot.com/o/Sad-Image-Of-Micky-Mouse.gif?alt=media&token=95bed99b-711c-4eac-8808-acdd507806ed', 'https://firebasestorage.googleapis.com/v0/b/nirogi-a24ce.appspot.com/o/IT14001680.png?alt=media&token=7fac3a10-9cfb-4ac5-b4a3-7babc3e34cce', '0', '23', '12', 'IT14001680@my.sliit.lk', 'Vaikunthan20@', '931324569V', ''),
('IT14004032', 'IT14004032', 'Thebeyanthan ', 'Krishnamohan', '', 'true', 'https://firebasestorage.googleapis.com/v0/b/nirogi-a24ce.appspot.com/o/mickey-walking.png?alt=media&token=11b81d96-2130-4177-8f9a-33b069910984', 'https://firebasestorage.googleapis.com/v0/b/nirogi-a24ce.appspot.com/o/IT14004032.png?alt=media&token=a1b114e8-aa6b-458f-b764-6b0925c60375', '0', '14', '2', 'IT14004032@my.sliit.lk', 'Thebeyanthan20@', '942830521V', ''),
('IT14108150', 'IT14108150', 'Achsuthan', 'Mahendran', '', 'true', 'https://firebasestorage.googleapis.com/v0/b/nirogi-a24ce.appspot.com/o/stev.png?alt=media&token=0165ce0f-e737-426f-af03-53693cf24acb', 'https://firebasestorage.googleapis.com/v0/b/nirogi-a24ce.appspot.com/o/IT14108150.png?alt=media&token=b22b87af-7efa-4532-94f9-7566bfe78ca8', '0', '4', '4', 'IT14108150@my.sliit.lk', 'Achsuthan20@', '931410490V', ''),
('IT14502484', 'IT14502484', 'Ashok', 'Selvakumar', '', 'true', 'https://firebasestorage.googleapis.com/v0/b/nirogi-a24ce.appspot.com/o/mickey_jaunt.gif?alt=media&token=6caf95fb-12df-4209-9a5e-10dfbb3171c1', 'https://firebasestorage.googleapis.com/v0/b/nirogi-a24ce.appspot.com/o/mickey_jaunt.gif?alt=media&token=6caf95fb-12df-4209-9a5e-10dfbb3171c1', '-60', '2', '29', 'IT14502484@my.sliit.lk', 'Ashok20@', '931234459V', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
