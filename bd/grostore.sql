-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 04 sep. 2024 à 17:21
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `grostore`
--

-- --------------------------------------------------------

--
-- Structure de la table `purchases`
--

CREATE TABLE `purchases` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `buyer_name` varchar(100) NOT NULL,
  `refclient` varchar(100) NOT NULL,
  `purchase_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `purchases`
--

INSERT INTO `purchases` (`id`, `product_id`, `quantity`, `buyer_name`, `refclient`, `purchase_date`) VALUES
(0, 123, 2, 'CHER NJARA tinalalaina', 'client_6671682777bfc5.34311008', '2024-06-18 10:57:43'),
(0, 123, 2, 'CHER NJARA tinalalaina', 'client_66716832ad2770.83410452', '2024-06-18 10:57:56'),
(0, 62, 5, 'jj', 'client_66717593667d98.07668874', '2024-06-18 11:54:59'),
(0, 125, 2, 'tina lalaina', 'client_66d833cec3c640.00645661', '2024-09-04 10:17:50'),
(0, 126, 1, 'tina lalaina', 'client_66d833cec3c640.00645661', '2024-09-04 10:17:51');

-- --------------------------------------------------------

--
-- Structure de la table `tbl_product`
--

CREATE TABLE `tbl_product` (
  `p_id` int(11) NOT NULL,
  `ptitle` varchar(255) NOT NULL,
  `pprice` varchar(255) NOT NULL,
  `pstockinitiale` int(250) NOT NULL,
  `pstock` int(250) NOT NULL,
  `pfile` varchar(255) NOT NULL,
  `pstatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `tbl_product`
--

INSERT INTO `tbl_product` (`p_id`, `ptitle`, `pprice`, `pstockinitiale`, `pstock`, `pfile`, `pstatus`) VALUES
(125, 'tenis', '30000', 16, 10, '17254447881714456027IMG_20231229_060946.jpg', 1),
(126, 'tenis', '35000', 20, 19, '17254448591714456185IMG_20231229_061213.jpg', 1),
(127, 'tenis', '40000', 15, 15, '17254449171714456065IMG_20231229_061006.jpg', 1);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','user') NOT NULL,
  `is_connected` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`, `is_connected`) VALUES
(76, '123456', '$2y$10$lfh/BeiasE6Z4dGo.U9fde6yPnr0YH3b8m/1p6pHx30hSDY4KZU6G', 'user', 0),
(77, 'volahasina', '$2y$10$heucKEHYiUsMPyFoId9YZO/mgcT7DSNuSw3eKhbblIQbbeHJt9oDi', 'user', 0),
(78, 'tinalalaina14@gmail.com', '$2y$10$1Pv0nGlYHrsenYewSbn/SOVTF/sgYLZecr1UDl9oUdiTt/YFJAMC6', 'user', 1),
(79, 'tina14@gmail.com', '$2y$10$ivWlmWaSO5hyv9U0ei6Iq.7oxegq7X/.rdqGcs/pepa05ePwmJaae', 'user', 0),
(80, 'lalaina@gmail.com', '$2y$10$xz4TcnoPX/1GbeOV7rrk..MPMVjqCE50zQykKCFmelckeNhOthEnq', 'user', 0),
(81, 'lalaina@gmail.com', '$2y$10$xMnNzpI0rbybUzLYagC0tePy3F2SFa7BsOyugYsk82DD6IrCWdyQC', 'user', 0),
(82, 'lalaina@gmail.com', '$2y$10$uGJpczbksCOg1dHlYrohyeUwtNpBGx23QIQyHOPs0cUIzdQTJvTRu', 'user', 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `tbl_product`
--
ALTER TABLE `tbl_product`
  ADD PRIMARY KEY (`p_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `tbl_product`
--
ALTER TABLE `tbl_product`
  MODIFY `p_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
