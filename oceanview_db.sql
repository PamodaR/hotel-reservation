-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 21, 2026 at 07:30 AM
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
-- Database: `oceanview_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `reservation`
--

CREATE TABLE `reservation` (
  `id` bigint(20) NOT NULL,
  `reservation_number` varchar(255) DEFAULT NULL,
  `guest_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `contact_number` varchar(255) DEFAULT NULL,
  `id_number` varchar(255) DEFAULT NULL,
  `room_type` varchar(255) DEFAULT NULL,
  `number_of_guests` int(11) DEFAULT NULL,
  `check_in_date` date DEFAULT NULL,
  `check_out_date` date DEFAULT NULL,
  `special_requests` varchar(255) DEFAULT NULL,
  `room_rate` double DEFAULT NULL,
  `total_bill` double DEFAULT NULL,
  `payment_method` varchar(255) DEFAULT NULL,
  `payment_status` varchar(255) DEFAULT NULL,
  `booking_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reservation`
--

INSERT INTO `reservation` (`id`, `reservation_number`, `guest_name`, `email`, `address`, `contact_number`, `id_number`, `room_type`, `number_of_guests`, `check_in_date`, `check_out_date`, `special_requests`, `room_rate`, `total_bill`, `payment_method`, `payment_status`, `booking_date`) VALUES
(4, 'RES3C7ED18E', 'pamoda', 'pamoda @gmail.com', 'thangalle', '0712314131', '', 'deluxe', 2, '2026-01-26', '2026-01-27', '', 15000, 15000, 'cash', 'PAID', '2026-01-18'),
(7, 'RES8A2192E7', 'Rajapaksha', 'rajapaksha@gmail.com', 'tangalle', '23466778', '2345678', 'single', 1, '2026-01-19', '2026-01-21', '', 5000, 10000, 'cash', 'PAID', '2026-01-18'),
(8, 'RES1833191C', 'pamoda', 'rajapaksha@gmail.com', 'no134', '0786353437', '113434354', 'double', 1, '2026-01-27', '2026-01-28', '', 8000, 8000, 'cash', 'PAID', '2026-01-27'),
(9, 'RES3489DDDA', 'shani', 'shani@gmail.com', '43/1', '23456767', '123456677', 'suite', 2, '2026-01-28', '2026-01-29', '', 12000, 12000, 'cash', 'PENDING', '2026-01-27'),
(10, 'RES41F04F7B', 'pamoda', 'rajapaksha@gmail.com', '23', '0786353437', '1123456', 'single', 2, '2026-01-29', '2026-01-30', '', 5000, 5000, 'cash', 'PAID', '2026-01-28'),
(11, 'RES90C8F559', 'niii', 'supplier@gmail.com', '878gjh', '0786353437', '123345', 'suite', 1, '2026-01-29', '2026-01-31', '', 12000, 24000, 'cash', 'PENDING', '2026-01-28'),
(12, 'RESA57A6E19', 'niii', 'supplier@gmail.com', 'adf', '0786353437', '123345', 'deluxe', 1, '2026-01-29', '2026-01-30', '', 15000, 15000, 'cash', 'PAID', '2026-01-28'),
(13, 'RESCDEE0214', 'red', 'red@gmail.com', 'galle', '0786353437', '123344', 'deluxe', 1, '2026-01-30', '2026-01-31', '', 15000, 15000, 'cash', 'PENDING', '2026-01-28');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `id_passport` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `document_type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `full_name`, `email`, `id_passport`, `phone_number`, `role`, `document_type`) VALUES
(6, 'pamo@gmail.com', '$2a$10$5ze3UeManaBUzsW3BO2gXuk2gLXgIMUVUv5EM.oe3eGlsrpIFSyAu', 'pamo', 'pamo@gmail.com', '', '', 'USER', NULL),
(7, 'p@gmail.com', '$2a$10$ds52T6k21H/.F1ai1L4.eObGXeF9B3t6ubXqCbYrFR47fh4nXuMbW', 'pamu', 'p@gmail.com', '', '', 'USER', NULL),
(8, 'pamudi@gmail.com', '$2a$10$J5rolSItAW8awCYsrLnuMuUn6xBqgNqSbM7Ol1b7Cz5bD3ba8BnzK', 'pamudi', 'pamudi@gmail.com', '', '', 'USER', NULL),
(9, 'rajapaksha@gmail.com', '$2a$10$hTH8wqVt/CQsZ5LOalPTsuGWDUAd2s0x2sZ.QwuTe4PpuNcFIuLk.', 'Rajapaksha', 'rajapaksha@gmail.com', '', '', 'ADMIN', NULL),
(10, 'pathiarana@gmail.com', '$2a$10$B5riPH9ISmA8OS0xE2PD9OmFBYo8VnnsbKto5Oqtw1iddmI/zy0Ee', 'pathirana ', 'pathiarana@gmail.com', '', '', 'ADMIN', NULL),
(11, 'john@gmail.com', '$2a$10$prUlJZAo24Ez11Y3vEYOkuLdOt31Isj5gn9RwuQi1immOpsICZh6G', 'john', 'john@gmail.com', '', '', 'USER', NULL),
(12, 'johnn@gmail.com', '$2a$10$ZS80i9GDR3up8NDHEOrGhuRpqpvI6sde/qqdK55bk/vpsook.dtxe', 'johnn', 'johnn@gmail.com', '', '', 'ADMIN', NULL),
(13, 'pamu@gmail.com', '$2a$10$bGbDJuBmnvbhnIlc2moYc.aks/kNA9BJSB1ygVgTU0d0i7YFHe75i', 'pamu', 'pamu@gmail.com', '', '', 'ADMIN', NULL),
(14, 'shani@gmail.com', '$2a$10$jditd3aBO2Y8GBY6AIz6sOVgc982rkSlZxZ83YhSmxzFUYmNwc7J.', 'shani', 'shani@gmail.com', '', '', 'USER', NULL),
(17, 'gamage@gmail.com', '$2a$10$Bbx7nx/jzHx2.o5Q2h.RQeHsxSYGuJ9csmCl2V3BZGe2G2kgvoa0K', 'pathirana', 'gamage@gmail.com', '', '', 'USER', NULL),
(18, 'pm@gmail.com', '$2a$10$24gcM7zmQHLgoGgP912sWOFuEPJTtTO5eQX2J9Z2I61Qs7ChV8Yb.', 'pm', 'pm@gmail.com', '', '', 'USER', NULL),
(19, 'pam@gmail.com', '$2a$10$KV1n4vrIyZlIKVSTY8OAnew4t.An2xx.67Pr.o8XP7./UUHAcedJW', 'pam', 'pam@gmail.com', '', '', 'USER', NULL),
(20, 'jeewa@gmail.com', '$2a$10$SJ5nOVEXvldgV6Qw/HCizeSTVhSda8wS2RR1uMdDN8QAc24a2NC2O', 'jeewa', 'jeewa@gmail.com', '', '', 'STAFF', NULL),
(21, 'gamagee@gmail.com', '$2a$10$BwB764yaMwwFi.YtC9Hilua7uM.ZfQGuK11CPVuXv5arEnceEVfiW', 'gamage', 'gamagee@gmail.com', '', '', 'STAFF', NULL),
(22, 'pama@gmail.com', '$2a$10$q8Nv80/lQ7PC5WQ7hTN.Lut6oSACqaxrC84c89q2aIanxYYZkixxq', 'pama', 'pama@gmail.com', '', '', 'STAFF', NULL),
(23, 'r@gmail.com', '$2a$10$Mo66ns2RnUYBGye69bJAJ.Vx6Ua5sYhlc4pPm.4JFZBCYOpstOf5.', 'Rajapaksha', 'r@gmail.com', '', '', 'USER', NULL),
(24, 'shan@gmail.com', '$2a$10$8mFck6ZFmWLOEgH9i0msyupuK3JwvIo.WAocYby34sjBcntTXV5S2', 'shani', 'shan@gmail.com', '', '', 'STAFF', NULL),
(25, 'nima@gmail.com', '$2a$10$kHowDnqouq.SgWlf2PEjde4JZSXOHsQdkN7w0pbrYZsqeS7tJJMRW', 'nima', 'nima@gmail.com', '', '', 'STAFF', NULL),
(26, 'mila@gmail.com', '$2a$10$wqbJl9tKqMum8VOGkDOvLe7UCdApb8TjqoudMYB1KrPLXbwd3AIoa', 'mila', 'mila@gmail.com', '', '', 'USER', NULL),
(27, 'chamu@gmail.com', '$2a$10$CAXCQVJC6p7Rqlm6S2HHT.XpUfd92Yr3BQ9.GbPC.aRkeWTZ49n2a', 'chamu', 'chamu@gmail.com', '', '', 'USER', NULL),
(28, 'sanu@gmail.com', '$2a$10$xL./zDcVfrwPS5hhr8IU4OZ5Vd0zYLAd1Q8chyQd3.vi3dajLb1Me', 'sanu', 'sanu@gmail.com', '', '', 'USER', NULL),
(29, 'sadi@gmail.com', '$2a$10$HYNk8JInDK.0C8xXZxgp1eoOUdytLbwlXsuKzkwpYCW.CDk6bfTYW', 'sadi', 'sadi@gmail.com', '244545645v', '0765432673', 'USER', 'ID'),
(30, 'jin@gmail.com', '$2a$10$woU9uqiCR2LBmoD1esxOQeAyAufTifpjWrbNt7xbgSy8EeVPHApEi', 'jin', 'jin@gmail.com', '5672345567v', '07765888922', 'STAFF', 'ID'),
(31, 'b@gmail.com', '$2a$10$BcxKlUqp.QmI/OtcpDNQiekwlefelndl.ylc.dKeaCzHP82O8axnO', 'bagya', 'b@gmail.com', '199987456328v', '0765432123', 'ADMIN', 'ID'),
(32, 'pmd@gmail.com', '$2a$10$BL/cKoVaYiYOEWLGlYo/U.BDAjDSlZBjbha1z8.CkTOOFBz8.NzbS', 'pmd', 'pmd@gmail.com', '23456788v', '0786534323', 'USER', 'ID'),
(33, 'j@gmail.com', '$2a$10$yydLVFzPYouh0DL2JcMQS.tNm8duWNDMPDpmWVPaSLL/nG2gunzIO', 'bagya', 'j@gmail.com', '45678346v', '08976543226', 'STAFF', 'ID');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `reservation_number` (`reservation_number`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reservation`
--
ALTER TABLE `reservation`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
