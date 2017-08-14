-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 12, 2017 at 11:43 AM
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
('IT14108150', 'IT14108150', 'Achsuthan', 'Mahendran', '5834338', 'false', 'https://firebasestorage.googleapis.com/v0/b/nirogi-a24ce.appspot.com/o/stev.png?alt=media&token=0165ce0f-e737-426f-af03-53693cf24acb', 'https://firebasestorage.googleapis.com/v0/b/nirogi-a24ce.appspot.com/o/IT14108150.png?alt=media&token=b22b87af-7efa-4532-94f9-7566bfe78ca8', '-60', '5', '3', 'IT14108150@my.sliit.lk', 'Achsuthan20@', '931410490V', '');

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
