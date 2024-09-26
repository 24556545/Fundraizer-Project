-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 26, 2024 at 01:12 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crowdfunding_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `CATEGORY_ID` int(11) NOT NULL,
  `NAME` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`CATEGORY_ID`, `NAME`) VALUES
(1, 'Health'),
(2, 'Education'),
(3, 'Environment');

-- --------------------------------------------------------

--
-- Table structure for table `fundraiser`
--

CREATE TABLE `fundraiser` (
  `FUNDRAISER_ID` int(11) NOT NULL,
  `ORGANIZER` varchar(255) DEFAULT NULL,
  `CAPTION` text DEFAULT NULL,
  `TARGET_FUNDING` decimal(10,2) DEFAULT NULL,
  `CURRENT_FUNDING` decimal(10,2) DEFAULT NULL,
  `CITY` varchar(100) DEFAULT NULL,
  `ACTIVE` tinyint(1) DEFAULT NULL,
  `CATEGORY_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fundraiser`
--

INSERT INTO `fundraiser` (`FUNDRAISER_ID`, `ORGANIZER`, `CAPTION`, `TARGET_FUNDING`, `CURRENT_FUNDING`, `CITY`, `ACTIVE`, `CATEGORY_ID`) VALUES
(1, 'John Doe', 'Helping local schools', 5000.00, 1200.00, 'New York', 1, 2),
(2, 'Alice Smith', 'Save the rainforest', 10000.00, 2300.00, 'San Francisco', 1, 3),
(3, 'Robert Lee', 'Community health project', 7500.00, 3000.00, 'Chicago', 1, 1),
(4, 'Maria Garcia', 'Scholarship fund for underprivileged students', 8000.00, 4000.00, 'Miami', 1, 2),
(5, 'James Wilson', 'Clean water for rural areas', 10000.00, 5000.00, 'Austin', 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `last_login` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `email`, `password`, `last_login`) VALUES
(2, 'admin', 'test@test.com', '$2a$10$4lCo/gfxtMBuG/IIYD9fwOSyDmv5eOfbf/f1kyXO65l1HGUY8MQMe', '2024-09-25 19:52:43');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`CATEGORY_ID`);

--
-- Indexes for table `fundraiser`
--
ALTER TABLE `fundraiser`
  ADD PRIMARY KEY (`FUNDRAISER_ID`),
  ADD KEY `CATEGORY_ID` (`CATEGORY_ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `CATEGORY_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `fundraiser`
--
ALTER TABLE `fundraiser`
  MODIFY `FUNDRAISER_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `fundraiser`
--
ALTER TABLE `fundraiser`
  ADD CONSTRAINT `fundraiser_ibfk_1` FOREIGN KEY (`CATEGORY_ID`) REFERENCES `category` (`CATEGORY_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
