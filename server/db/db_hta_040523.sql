-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 04, 2023 at 12:29 AM
-- Server version: 8.0.31
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_hta`
--

-- --------------------------------------------------------

--
-- Table structure for table `anomaly`
--

DROP TABLE IF EXISTS `anomaly`;
CREATE TABLE IF NOT EXISTS `anomaly` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_by_id` int NOT NULL,
  `edge_id` int NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `severity` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_F9F97563B03A8386` (`created_by_id`),
  KEY `IDX_F9F97563696D413E` (`edge_id`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `anomaly`
--

INSERT INTO `anomaly` (`id`, `created_by_id`, `edge_id`, `status`, `severity`, `title`, `created_at`) VALUES
(2, 1, 15, 1, 'FAIBLE', 'un isolateur cassé - suport N° 6', '2023-02-24 00:10:26'),
(65, 1, 12, 0, NULL, 'Court-circuit dans un circuit électrique', '2023-03-04 21:03:10'),
(67, 1, 15, 1, 'NORMAL', 'Panne de disjoncteur', '2023-03-11 13:22:41'),
(69, 1, 15, 0, 'ELEVE', 'Câble électrique endommagé', '2023-03-11 13:37:30'),
(79, 1, 15, 0, 'NORMAL', 'Prise électrique cassée ou mal installée', '2023-03-11 13:37:30'),
(80, 1, 15, 0, 'ELEVE', 'Dysfonctionnement du tableau électrique', '2023-05-01 15:18:23'),
(82, 1, 14, 1, 'OTHER', 'Fusible grillé', '2023-05-01 15:26:48');

-- --------------------------------------------------------

--
-- Table structure for table `commune`
--

DROP TABLE IF EXISTS `commune`;
CREATE TABLE IF NOT EXISTS `commune` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `commune`
--

INSERT INTO `commune` (`id`, `titre`) VALUES
(1, 'Saidate'),
(2, 'Sidi bouzid'),
(3, 'Mejjat'),
(4, 'Sidi med dalil');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
CREATE TABLE IF NOT EXISTS `department` (
  `id` int NOT NULL AUTO_INCREMENT,
  `visuel_id` int DEFAULT NULL,
  `team_id` int DEFAULT NULL,
  `titre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `longueur` double DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_CD1DE18A9559EF01` (`visuel_id`),
  KEY `IDX_CD1DE18A296CD8AE` (`team_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`id`, `visuel_id`, `team_id`, `titre`, `longueur`) VALUES
(1, 1, 1, 'Chichaoua Imintanoute', 129),
(3, 3, 2, 'MEJJAT ADASSIL', 120),
(4, NULL, NULL, 'mejjat-chichaoua', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `edge`
--

DROP TABLE IF EXISTS `edge`;
CREATE TABLE IF NOT EXISTS `edge` (
  `id` int NOT NULL AUTO_INCREMENT,
  `department_id` int NOT NULL,
  `node_a_id` int NOT NULL,
  `node_b_id` int NOT NULL,
  `section` double DEFAULT NULL,
  `longueur` double DEFAULT NULL,
  `marque` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_7506D366AE80F5DF` (`department_id`),
  KEY `IDX_7506D366FC7ADECE` (`node_a_id`),
  KEY `IDX_7506D366EECF7120` (`node_b_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `edge`
--

INSERT INTO `edge` (`id`, `department_id`, `node_a_id`, `node_b_id`, `section`, `longueur`, `marque`) VALUES
(1, 1, 7, 5, NULL, NULL, NULL),
(12, 1, 5, 4, NULL, NULL, NULL),
(13, 1, 4, 3, NULL, NULL, NULL),
(14, 1, 5, 1, NULL, NULL, NULL),
(15, 1, 5, 2, NULL, NULL, NULL),
(16, 1, 2, 8, NULL, NULL, NULL),
(17, 3, 9, 10, NULL, NULL, NULL),
(18, 3, 10, 6, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `goal`
--

DROP TABLE IF EXISTS `goal`;
CREATE TABLE IF NOT EXISTS `goal` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `target_years` longtext COLLATE utf8mb4_unicode_ci COMMENT '(DC2Type:simple_array)',
  `target_achievement` smallint DEFAULT NULL,
  `goal_group_id` int DEFAULT NULL,
  `calc` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_FCDCEB2E4A2E4C72` (`goal_group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `goal`
--

INSERT INTO `goal` (`id`, `name`, `target_years`, `target_achievement`, `goal_group_id`, `calc`) VALUES
(9, 'Installation des DRR', NULL, 16, 3, 'SELECTION_COUNT'),
(10, 'Installation des IATCT', NULL, 30, 3, 'SELECTION_COUNT'),
(11, 'Transfere OCR', NULL, 15, 3, 'SELECTION_COUNT'),
(12, 'Insertion des IACM', NULL, 17, 3, 'SELECTION_COUNT'),
(13, 'Entretien des   IACM ', NULL, 400, 3, 'SELECTION_COUNT'),
(14, 'Visite au sol   (Km) ', NULL, 12000, 4, 'ANNUAL_VISIT_COUNT'),
(15, 'Visite montée   (Support)', NULL, 1200, 4, 'ANOMALY_VISIT_COUNT'),
(16, 'Visite par caméra infrarouge/connexions/postes H61', NULL, 400, 4, NULL),
(17, 'Visite   des postes MT/BT H61 ONED', NULL, 3500, 4, NULL),
(18, 'Visite   des postes MT/BT H61 Clients', NULL, 1240, 4, NULL),
(19, 'Vérification et mesure des terres des masses et parafoudre', NULL, 300, 5, 'SELECTION_COUNT'),
(20, 'Mise à jour des réglages des DDA ', NULL, 240, 5, 'SELECTION_COUNT'),
(21, 'Entretien  des postes MT/BT H61', NULL, 500, 5, 'SELECTION_COUNT'),
(22, 'Réparation du câble ', NULL, 100, 5, 'SELECTION_COUNT'),
(23, 'Elagage des arbres au voisinages des lignes MT', NULL, 800, 5, 'SELECTION_COUNT'),
(24, 'Dressage des brettelles', NULL, 500, 5, 'SELECTION_COUNT'),
(25, 'Dépose corps étrangers', NULL, 200, 5, 'SELECTION_COUNT'),
(26, 'Renforcement des bretelles à faible section et connexions', NULL, 320, 5, 'SELECTION_COUNT'),
(27, 'Remplacement des supports dégraderé ou endommagés', NULL, 10, 5, 'SELECTION_COUNT'),
(28, 'Pose des isolateurs en composite', NULL, 300, 5, 'SELECTION_COUNT'),
(29, 'Remplacement blocs par manchons 400', NULL, 50, 5, 'SELECTION_COUNT'),
(30, 'Pose des Contre poids et de renvoi', NULL, 70, 5, 'SELECTION_COUNT'),
(31, 'Installation de Jeux de parafoudre', NULL, 100, 5, 'SELECTION_COUNT'),
(32, 'Contrôle de charge des postes H61', NULL, 600, 5, 'SELECTION_COUNT'),
(33, 'Amélioration des terres ', NULL, 60, 5, 'SELECTION_COUNT'),
(34, 'Réception des nouveaux branchements ', NULL, 70, 6, 'SELECTION_COUNT'),
(35, 'Réception ou contre réception des villages PERG', NULL, 30, 6, 'SELECTION_COUNT'),
(36, 'Mise en service des postes ONED', NULL, 20, 6, 'SELECTION_COUNT'),
(37, 'Mise en service des postes clients', NULL, 40, 6, 'SELECTION_COUNT'),
(38, 'Mise en service des aménagements en Km', NULL, 25, 6, 'SELECTION_COUNT'),
(39, 'Renforcement des lignes à faible section en Km', NULL, 15, 6, 'SELECTION_COUNT'),
(40, 'Création des boucles En Km', NULL, 15, 6, 'SELECTION_COUNT'),
(41, 'Augmentations de puissance des postes H61', NULL, 15, 7, 'SELECTION_COUNT'),
(42, 'Rotation des transfo pour postes H61', NULL, 12, 7, 'SELECTION_COUNT'),
(43, 'Contrôle de charge des postes H61', NULL, 600, 7, 'SELECTION_COUNT'),
(44, 'Remplacement des transformateurs avariés', NULL, 15, 7, 'SELECTION_COUNT'),
(45, 'Remplacement des DHP', NULL, 30, 7, 'SELECTION_COUNT'),
(46, 'Injection des postes H61', '2023,2024', 15, 7, 'SELECTION_COUNT');

-- --------------------------------------------------------

--
-- Table structure for table `goal_group`
--

DROP TABLE IF EXISTS `goal_group`;
CREATE TABLE IF NOT EXISTS `goal_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_in_forms` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `goal_group`
--

INSERT INTO `goal_group` (`id`, `name`, `display_in_forms`) VALUES
(3, 'Organes de coupures', 1),
(4, 'Visite', NULL),
(5, 'Lignes HTA', 1),
(6, 'Reception et MST', 1),
(7, 'Poste MT/BT sur poteau', 1);

-- --------------------------------------------------------

--
-- Table structure for table `log`
--

DROP TABLE IF EXISTS `log`;
CREATE TABLE IF NOT EXISTS `log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `message` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `context` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:array)',
  `level` smallint NOT NULL,
  `level_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `extra` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci COMMENT '(DC2Type:array)',
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_8F3F68C5A76ED395` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=262 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `log`
--

INSERT INTO `log` (`id`, `user_id`, `message`, `context`, `level`, `level_name`, `extra`, `created_at`) VALUES
(1, 1, '<p class=\"mb-1\">Modifé autorisation : <b>Super Admin</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\UserPermissionsdetails/3\">App\\Entity\\UserPermissionsdetails/3</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 13:36:26'),
(2, 1, '<p class=\"mb-1\">Ajouté dépar : <b>Chichaoua Imintanoute</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Departmentdetails/1\">App\\Entity\\Departmentdetails/1</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 13:44:45'),
(3, 1, '<p class=\"mb-1\">Ajouté dépar : <b>Chichaoua Imintanoute</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Departmentdetails/2\">App\\Entity\\Departmentdetails/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 13:47:58'),
(4, 1, '<p class=\"mb-1\">Ajouté équipe : <b>équipe 1</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Teamdetails/1\">App\\Entity\\Teamdetails/1</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 14:09:52'),
(5, 1, '<p class=\"mb-1\">Modifé dépar : <b>Chichaoua Imintanoute</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Departmentdetails/2\">App\\Entity\\Departmentdetails/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 14:09:52'),
(6, 1, 'A possible infinite logging loop was detected and aborted. It appears some of your handler code is triggering logging, see the previous log record for a hint as to what may be the cause.', 'a:0:{}', 300, 'WARNING', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 14:09:52'),
(7, 1, '<p class=\"mb-1\">Ajouté poste : <b>GSM Wana</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Postedetails/2\">App\\Entity\\Postedetails/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 16:28:13'),
(8, 1, '<p class=\"mb-1\">Modifé poste : <b>GSM Wana</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Postedetails/2\">App\\Entity\\Postedetails/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 18:24:07'),
(9, 1, '<p class=\"mb-1\">Modifé poste : <b>GSM Wana</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Postedetails/2\">App\\Entity\\Postedetails/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 18:26:16'),
(10, 1, '<p class=\"mb-1\">Modifé poste : <b>GSM Wana</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Postedetails/2\">App\\Entity\\Postedetails/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 18:26:48'),
(11, 1, '<p class=\"mb-1\">Modifé poste : <b>GSM Wana</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Postedetails/2\">App\\Entity\\Postedetails/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 18:27:37'),
(12, 1, '<p class=\"mb-1\">Modifé poste : <b>GSM Wana</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Postedetails/2\">App\\Entity\\Postedetails/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 19:04:25'),
(13, 1, '<p class=\"mb-1\">Modifé poste : <b>GSM Wana</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Postedetails/2\">App\\Entity\\Postedetails/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 19:09:04'),
(14, 1, '<p class=\"mb-1\">Modifé poste : <b>GSM Wana</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Postedetails/2\">App\\Entity\\Postedetails/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 19:12:47'),
(15, 1, '<p class=\"mb-1\">Modifé poste : <b>GSM Wana</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Postedetails/2\">App\\Entity\\Postedetails/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 19:15:13'),
(16, 1, '<p class=\"mb-1\">Modifé poste : <b>GSM Wana</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Postedetails/2\">App\\Entity\\Postedetails/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 19:17:49'),
(17, 1, '<p class=\"mb-1\">Modifé poste : <b>GSM Wana</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Postedetails/2\">App\\Entity\\Postedetails/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 19:18:17'),
(18, 1, '<p class=\"mb-1\">Modifé poste : <b>GSM Wana</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Postedetails/2\">App\\Entity\\Postedetails/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 19:30:43'),
(19, 1, '<p class=\"mb-1\">Modifé poste : <b>GSM Wana</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Postedetails/2\">App\\Entity\\Postedetails/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 19:31:01'),
(20, 1, '<p class=\"mb-1\">Modifé poste : <b>GSM Wana</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Postedetails/2\">App\\Entity\\Postedetails/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 19:31:23'),
(21, 1, '<p class=\"mb-1\">Modifé poste : <b>GSM Wana</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Postedetails/2\">App\\Entity\\Postedetails/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 19:43:23'),
(22, 1, '<p class=\"mb-1\">Modifé poste : <b>GSM Wana</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Postedetails/2\">App\\Entity\\Postedetails/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 19:45:40'),
(23, 1, '<p class=\"mb-1\">Ajouté utilisateur : <b>user 1</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Userdetails/2\">App\\Entity\\Userdetails/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 20:48:50'),
(24, 1, '<p class=\"mb-1\">Modifé utilisateur : <b>user</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Userdetails/2\">App\\Entity\\Userdetails/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 20:49:53'),
(25, 1, '<p class=\"mb-1\">Modifé équipe : <b>équipe chichaoua</b></p><p class=\"mb-1\">URL : <b><a href=\"Proxies\\__CG__\\App\\Entity\\Teamdetails/1\">Proxies\\__CG__\\App\\Entity\\Teamdetails/1</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 20:50:56'),
(26, 1, '<p class=\"mb-1\">Modifé utilisateur : <b>admin</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Userdetails/1\">App\\Entity\\Userdetails/1</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 20:50:56'),
(27, 1, '<p class=\"mb-1\">Ajouté dépar : <b>MEJJAT ADASSIL</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Departmentdetails/3\">App\\Entity\\Departmentdetails/3</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 20:52:17'),
(28, 1, '<p class=\"mb-1\">Ajouté équipe : <b>équipe mejjat</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Teamdetails/2\">App\\Entity\\Teamdetails/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 20:53:32'),
(29, 1, '<p class=\"mb-1\">Modifé dépar : <b>MEJJAT ADASSIL</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Departmentdetails/3\">App\\Entity\\Departmentdetails/3</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 20:53:32'),
(30, 1, 'A possible infinite logging loop was detected and aborted. It appears some of your handler code is triggering logging, see the previous log record for a hint as to what may be the cause.', 'a:0:{}', 300, 'WARNING', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 20:53:32'),
(31, 1, '<p class=\"mb-1\">Modifé dépar : <b>MEJJAT ADASSIL test</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Departmentdetails/3\">App\\Entity\\Departmentdetails/3</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 20:54:10'),
(32, 1, '<p class=\"mb-1\">Modifé dépar : <b>MEJJAT ADASSIL</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Departmentdetails/3\">App\\Entity\\Departmentdetails/3</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 20:54:34'),
(33, 1, '<p class=\"mb-1\">Ajouté appareil : <b>inter 1</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Nodedetails/6\">App\\Entity\\Nodedetails/6</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 21:30:08'),
(34, 1, '<p class=\"mb-1\">Modifé appareil : <b>BOURAGBA</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Nodedetails/6\">App\\Entity\\Nodedetails/6</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 21:31:40'),
(35, 1, '<p class=\"mb-1\">Modifé appareil : <b>Bouragba</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Nodedetails/6\">App\\Entity\\Nodedetails/6</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 21:32:25'),
(36, 1, '<p class=\"mb-1\">Modifé autorisation : <b>Super Admin</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\UserPermissionsdetails/3\">App\\Entity\\UserPermissionsdetails/3</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-18 21:55:56'),
(37, 1, '<p class=\"mb-1\">Modifé autorisation : <b>User</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\UserPermissionsdetails/1\">App\\Entity\\UserPermissionsdetails/1</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-20 00:40:57'),
(38, 1, '<p class=\"mb-1\">Modifé autorisation : <b>Super Admin</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\UserPermissionsdetails/3\">App\\Entity\\UserPermissionsdetails/3</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-20 00:41:00'),
(39, 1, '<p class=\"mb-1\">Modifé appareil : <b>inter 127</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Nodedetails/5\">App\\Entity\\Nodedetails/5</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-20 01:10:43'),
(40, 1, '<p class=\"mb-1\">Modifé appareil : <b>inter  8</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Nodedetails/4\">App\\Entity\\Nodedetails/4</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-20 01:11:15'),
(41, 1, '<p class=\"mb-1\">Modifé appareil : <b>inter Bouragba</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Nodedetails/6\">App\\Entity\\Nodedetails/6</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-20 01:11:40'),
(42, 1, '<p class=\"mb-1\">Ajouté tronçon : <b>tronçon 1</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Edgedetails/1\">App\\Entity\\Edgedetails/1</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-20 20:26:56'),
(43, 1, '<p class=\"mb-1\">Modifé tronçon : <b>tronçon</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Edgedetails/1\">App\\Entity\\Edgedetails/1</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-22 00:49:52'),
(44, 1, '<p class=\"mb-1\">Modifé appareil : <b>inter 1</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Nodedetails/5\">App\\Entity\\Nodedetails/5</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-22 04:45:35'),
(45, 1, '<p class=\"mb-1\">Modifé appareil : <b>ONEP 2</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Nodedetails/1\">App\\Entity\\Nodedetails/1</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-22 04:45:45'),
(46, 1, '<p class=\"mb-1\">Supprimé poste : <b>ONEP</b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-danger\">Suppression</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-22 04:45:45'),
(47, 1, '<p class=\"mb-1\">Modifé appareil : <b>inter GSM wana 3</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Nodedetails/2\">App\\Entity\\Nodedetails/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-22 04:46:10'),
(48, 1, '<p class=\"mb-1\">Supprimé poste : <b>GSM Wana</b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-danger\">Suppression</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-22 04:46:10'),
(49, 1, '<p class=\"mb-1\">Modifé appareil : <b>inter ONEP 2</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Nodedetails/1\">App\\Entity\\Nodedetails/1</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-22 04:46:20'),
(50, 1, '<p class=\"mb-1\">Modifé appareil : <b>inter  4</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Nodedetails/4\">App\\Entity\\Nodedetails/4</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-22 04:46:40'),
(51, 1, '<p class=\"mb-1\">Modifé appareil : <b>inter GSM meditel 5</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Nodedetails/3\">App\\Entity\\Nodedetails/3</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-22 04:46:52'),
(52, 1, '<p class=\"mb-1\">Ajouté travaux : <b>1</b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Missiondetails/1\">App\\Entity\\Missiondetails/1</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-23 08:05:40'),
(53, 1, '<p class=\"mb-1\">Ajouté anomalie : <b></b></p><p class=\"mb-1\">URL : <b><a href=\"App\\Entity\\Anomalydetails/2\">App\\Entity\\Anomalydetails/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-24 00:10:26'),
(54, 1, '<p class=\"mb-1\">Modifé anomalie : <b>un isolateur cassé suport N° 6 pt el mazoudi</b></p><p class=\"mb-1\">URL : <b><a href=\"Anomalydetails/2\">Anomalydetails/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-24 00:41:23'),
(55, 1, '<p class=\"mb-1\">Modifé anomalie : <b>un isolateur cassé - suport N° 6 pt el mazoudi</b></p><p class=\"mb-1\">URL : <b><a href=\"anomalydetails/2\">anomalydetails/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-24 00:47:23'),
(56, 1, '<p class=\"mb-1\">Modifé anomalie : <b>un isolateur cassé - suport N° 6 pt el mazoudi</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200//anomaly\\/details\\/2\">http://localhost:4200//anomaly\\/details\\/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-24 01:35:42'),
(57, 1, '<p class=\"mb-1\">Modifé anomalie : <b>un isolateur cassé - suport N° 6 pt el mazoudi</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200//anomaly\\/details\\/2\">http://localhost:4200//anomaly\\/details\\/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-24 01:37:01'),
(58, 1, '<p class=\"mb-1\">Ajouté travaux : <b>2</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/mission/details/2\">http://localhost:4200/mission/details/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-24 03:59:45'),
(59, 1, '<p class=\"mb-1\">Modifé anomalie : <b>un isolateur cassé - suport N° 6 pt el mazoudi</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/2\">http://localhost:4200/anomaly/details/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-24 07:41:49'),
(60, 1, '<p class=\"mb-1\">Modifé anomalie : <b>un isolateur cassé - suport N° 6 pt el mazoudi</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/2\">http://localhost:4200/anomaly/details/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-24 17:21:15'),
(61, 1, '<p class=\"mb-1\">Ajouté travaux : <b>3</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/mission/details/3\">http://localhost:4200/mission/details/3</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-02-26 18:55:15'),
(62, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from the app</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/3\">http://localhost:4200/anomaly/details/3</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 11:09:21'),
(63, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 1</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/4\">http://localhost:4200/anomaly/details/4</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:30:07'),
(64, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 2</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/5\">http://localhost:4200/anomaly/details/5</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:30:07'),
(65, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 1</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/6\">http://localhost:4200/anomaly/details/6</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:40:32'),
(66, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 2</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/7\">http://localhost:4200/anomaly/details/7</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:40:32'),
(67, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 1</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/8\">http://localhost:4200/anomaly/details/8</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:43:23'),
(68, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 2</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/9\">http://localhost:4200/anomaly/details/9</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:43:23'),
(69, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 1</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/10\">http://localhost:4200/anomaly/details/10</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:47:16'),
(70, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 2</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/11\">http://localhost:4200/anomaly/details/11</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:47:16'),
(71, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 1</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/12\">http://localhost:4200/anomaly/details/12</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:47:38'),
(72, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 2</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/13\">http://localhost:4200/anomaly/details/13</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:47:38'),
(73, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 1</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/14\">http://localhost:4200/anomaly/details/14</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:54:24'),
(74, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 2</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/15\">http://localhost:4200/anomaly/details/15</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:54:24'),
(75, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 1</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/16\">http://localhost:4200/anomaly/details/16</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:54:50'),
(76, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 2</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/17\">http://localhost:4200/anomaly/details/17</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:54:50'),
(77, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 1</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/18\">http://localhost:4200/anomaly/details/18</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:55:29'),
(78, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 2</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/19\">http://localhost:4200/anomaly/details/19</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:55:29'),
(79, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 1</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/20\">http://localhost:4200/anomaly/details/20</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:56:04'),
(80, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 2</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/21\">http://localhost:4200/anomaly/details/21</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:56:04'),
(81, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 1</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/22\">http://localhost:4200/anomaly/details/22</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:56:32'),
(82, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 2</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/23\">http://localhost:4200/anomaly/details/23</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:56:32'),
(83, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 1</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/24\">http://localhost:4200/anomaly/details/24</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:56:54'),
(84, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 2</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/25\">http://localhost:4200/anomaly/details/25</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:56:54'),
(85, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 1</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/26\">http://localhost:4200/anomaly/details/26</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:58:17'),
(86, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 2</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/27\">http://localhost:4200/anomaly/details/27</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:58:17'),
(87, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 1</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/28\">http://localhost:4200/anomaly/details/28</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:58:34'),
(88, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 2</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/29\">http://localhost:4200/anomaly/details/29</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:58:34'),
(89, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 1</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/30\">http://localhost:4200/anomaly/details/30</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:58:58'),
(90, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 2</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/31\">http://localhost:4200/anomaly/details/31</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:58:58'),
(91, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 1</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/32\">http://localhost:4200/anomaly/details/32</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:59:57'),
(92, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 2</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/33\">http://localhost:4200/anomaly/details/33</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 16:59:57'),
(93, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 1</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/34\">http://localhost:4200/anomaly/details/34</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 17:00:12'),
(94, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 2</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/35\">http://localhost:4200/anomaly/details/35</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 17:00:12'),
(95, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 1</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/36\">http://localhost:4200/anomaly/details/36</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 17:01:10'),
(96, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 2</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/37\">http://localhost:4200/anomaly/details/37</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 17:01:10'),
(97, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 1</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/38\">http://localhost:4200/anomaly/details/38</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 17:01:28'),
(98, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 2</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/39\">http://localhost:4200/anomaly/details/39</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 17:01:28'),
(99, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 1</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/40\">http://localhost:4200/anomaly/details/40</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 17:16:24'),
(100, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 2</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/41\">http://localhost:4200/anomaly/details/41</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 17:16:24'),
(101, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 10</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/42\">http://localhost:4200/anomaly/details/42</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 17:16:52'),
(102, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 222</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/43\">http://localhost:4200/anomaly/details/43</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 17:16:52'),
(103, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 10</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/44\">http://localhost:4200/anomaly/details/44</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 17:18:12'),
(104, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 222</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/45\">http://localhost:4200/anomaly/details/45</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 17:18:12'),
(105, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman haha</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/46\">http://localhost:4200/anomaly/details/46</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 17:19:36'),
(106, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman 2hahahaha22</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/47\">http://localhost:4200/anomaly/details/47</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 17:19:36'),
(107, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman haha</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/48\">http://localhost:4200/anomaly/details/48</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 17:22:42'),
(108, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman babababa</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/49\">http://localhost:4200/anomaly/details/49</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 17:22:42'),
(109, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman haha</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/50\">http://localhost:4200/anomaly/details/50</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 17:24:01'),
(110, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman babababa</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/51\">http://localhost:4200/anomaly/details/51</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 17:24:01'),
(111, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman haha</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/52\">http://localhost:4200/anomaly/details/52</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 17:25:31'),
(112, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman babababa</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/53\">http://localhost:4200/anomaly/details/53</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 17:25:31'),
(113, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/54\">http://localhost:4200/anomaly/details/54</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 17:50:08'),
(114, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/55\">http://localhost:4200/anomaly/details/55</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 17:50:08'),
(115, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/56\">http://localhost:4200/anomaly/details/56</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 18:03:01'),
(116, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/57\">http://localhost:4200/anomaly/details/57</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 18:03:01'),
(117, 1, '<p class=\"mb-1\">Modifé anomalie : <b>un isolateur cassé - suport N° 6 pt el mazoudi</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/2\">http://localhost:4200/anomaly/details/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 18:04:32'),
(118, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/58\">http://localhost:4200/anomaly/details/58</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 18:29:10'),
(119, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/59\">http://localhost:4200/anomaly/details/59</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 18:29:10'),
(120, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/60\">http://localhost:4200/anomaly/details/60</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 21:00:10'),
(121, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/61\">http://localhost:4200/anomaly/details/61</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 21:00:10'),
(122, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/62\">http://localhost:4200/anomaly/details/62</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 21:00:51');
INSERT INTO `log` (`id`, `user_id`, `message`, `context`, `level`, `level_name`, `extra`, `created_at`) VALUES
(123, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Test from postman</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/63\">http://localhost:4200/anomaly/details/63</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 21:00:51'),
(124, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>1 postman</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/64\">http://localhost:4200/anomaly/details/64</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 21:03:10'),
(125, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>2 postman</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/65\">http://localhost:4200/anomaly/details/65</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 21:03:10'),
(126, 1, '<p class=\"mb-1\">Modifé anomalie : <b>1 postman</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/52\">http://localhost:4200/anomaly/details/52</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 21:05:38'),
(127, 1, '<p class=\"mb-1\">Modifé anomalie : <b>2 postman</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/53\">http://localhost:4200/anomaly/details/53</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 21:05:38'),
(128, 1, '<p class=\"mb-1\">Modifé anomalie : <b>2 postman</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/53\">http://localhost:4200/anomaly/details/53</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-04 21:05:38'),
(145, 1, '<p class=\"mb-1\">Ajouté visite : <b>1</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/visite/details/1\">http://localhost:4200/visite/details/1</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-07 20:39:48'),
(146, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>oh shit something iq happening</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/66\">http://localhost:4200/anomaly/details/66</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-11 11:14:30'),
(147, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>oh shit something iq happening 1</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/67\">http://localhost:4200/anomaly/details/67</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-11 13:22:41'),
(148, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>oh shit something iq happening 2</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/68\">http://localhost:4200/anomaly/details/68</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-11 13:22:41'),
(149, 1, '<p class=\"mb-1\">Ajouté travaux : <b>Coupeur</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/mission/details/4\">http://localhost:4200/mission/details/4</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-11 13:22:49'),
(150, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>j</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/69\">http://localhost:4200/anomaly/details/69</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-11 13:37:30'),
(151, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>k</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/70\">http://localhost:4200/anomaly/details/70</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-11 13:37:30'),
(152, 1, '<p class=\"mb-1\">Ajouté travaux : <b>Coupeur</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/mission/details/5\">http://localhost:4200/mission/details/5</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-11 13:37:36'),
(153, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>test</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/71\">http://localhost:4200/anomaly/details/71</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-18 08:56:39'),
(154, 1, '<p class=\"mb-1\">Ajouté travaux : <b>6</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/mission/details/6\">http://localhost:4200/mission/details/6</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-18 08:56:46'),
(155, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>test</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/72\">http://localhost:4200/anomaly/details/72</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-18 09:01:01'),
(156, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>lkdsq</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/73\">http://localhost:4200/anomaly/details/73</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-18 09:01:01'),
(157, 1, '<p class=\"mb-1\">Ajouté travaux : <b>Coupeur</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/mission/details/7\">http://localhost:4200/mission/details/7</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-18 09:01:03'),
(158, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>test</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/74\">http://localhost:4200/anomaly/details/74</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-18 09:08:32'),
(159, 1, '<p class=\"mb-1\">Ajouté travaux : <b>Coupeur</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/mission/details/8\">http://localhost:4200/mission/details/8</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-18 09:08:34'),
(160, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>f</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/75\">http://localhost:4200/anomaly/details/75</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-18 09:22:21'),
(161, 1, '<p class=\"mb-1\">Ajouté travaux : <b>9</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/mission/details/9\">http://localhost:4200/mission/details/9</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-18 09:22:23'),
(162, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>aaa</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/76\">http://localhost:4200/anomaly/details/76</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-18 10:04:25'),
(163, 1, '<p class=\"mb-1\">Ajouté travaux : <b>Coupeur</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/mission/details/10\">http://localhost:4200/mission/details/10</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-18 10:04:34'),
(164, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>test</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/77\">http://localhost:4200/anomaly/details/77</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-19 01:12:58'),
(165, 1, '<p class=\"mb-1\">Ajouté travaux : <b>11</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/mission/details/11\">http://localhost:4200/mission/details/11</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-19 01:13:00'),
(166, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>normale</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/78\">http://localhost:4200/anomaly/details/78</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-19 01:30:55'),
(167, 1, '<p class=\"mb-1\">Ajouté travaux : <b>Coupeur</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/mission/details/12\">http://localhost:4200/mission/details/12</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-19 01:30:57'),
(168, 1, '<p class=\"mb-1\">Modifé anomalie : <b>normale</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/78\">http://localhost:4200/anomaly/details/78</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-19 01:44:23'),
(169, 1, '<p class=\"mb-1\">Modifé anomalie : <b>test</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/77\">http://localhost:4200/anomaly/details/77</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-19 01:45:31'),
(170, 1, '<p class=\"mb-1\">Modifé anomalie : <b>test</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/77\">http://localhost:4200/anomaly/details/77</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-03-19 01:45:35'),
(171, 1, '<p class=\"mb-1\">Modifé anomalie : <b>test</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/77\">http://localhost:4200/anomaly/details/77</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-08 02:18:32'),
(172, 1, '<p class=\"mb-1\">Modifé anomalie : <b>aaa</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/76\">http://localhost:4200/anomaly/details/76</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-08 02:18:37'),
(173, 1, '<p class=\"mb-1\">Modifé anomalie : <b>normale</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/78\">http://localhost:4200/anomaly/details/78</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-08 02:18:41'),
(174, 1, '<p class=\"mb-1\">Modifé anomalie : <b>f</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/75\">http://localhost:4200/anomaly/details/75</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-08 02:19:51'),
(175, 1, '<p class=\"mb-1\">Modifé autorisation : <b>Super Admin</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/userpermissions/details/3\">http://localhost:4200/userpermissions/details/3</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-09 00:14:29'),
(176, 1, '<p class=\"mb-1\">Modifé autorisation : <b>Super Admin</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/userpermissions/details/3\">http://localhost:4200/userpermissions/details/3</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-11 03:30:56'),
(177, 1, '<p class=\"mb-1\">Ajouté Groupe d\'objectif : <b>Organes de coupures</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/goalgroup/details/1\">http://localhost:4200/goalgroup/details/1</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-11 03:36:51'),
(178, 1, '<p class=\"mb-1\">Modifé Groupe d\'objectif : <b>Organes de coupures 2</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/goalgroup/details/1\">http://localhost:4200/goalgroup/details/1</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-11 03:37:05'),
(179, 1, '<p class=\"mb-1\">Supprimé Groupe d\'objectif : <b>Organes de coupures 2</b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-danger\">Suppression</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-11 03:37:30'),
(180, 1, '<p class=\"mb-1\">Ajouté Groupe d\'objectif : <b>Organes de coupures</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/goalgroup/details/2\">http://localhost:4200/goalgroup/details/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-11 03:37:39'),
(181, 1, '<p class=\"mb-1\">Ajouté objective : <b>Installation des DRR</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/goal/details/2\">http://localhost:4200/goal/details/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-11 03:59:22'),
(182, 1, '<p class=\"mb-1\">Ajouté objective : <b>Installation des DRR</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/goal/details/3\">http://localhost:4200/goal/details/3</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-12 04:04:57'),
(183, 1, '<p class=\"mb-1\">Ajouté objective : <b>Installation des DRR</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/goal/details/4\">http://localhost:4200/goal/details/4</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-12 04:07:13'),
(184, 1, '<p class=\"mb-1\">Ajouté objective : <b>Installation des DRR</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/goal/details/5\">http://localhost:4200/goal/details/5</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-12 04:07:47'),
(185, 1, '<p class=\"mb-1\">Ajouté objective : <b>Installation des DRR</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/goal/details/6\">http://localhost:4200/goal/details/6</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-12 04:08:13'),
(186, 1, '<p class=\"mb-1\">Ajouté objective : <b>Installation des DRR</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/goal/details/7\">http://localhost:4200/goal/details/7</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-12 04:31:31'),
(187, 1, '<p class=\"mb-1\">Ajouté objective : <b>Installation des DRR</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/goal/details/8\">http://localhost:4200/goal/details/8</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-12 21:06:29'),
(188, 1, '<p class=\"mb-1\">Modifé autorisation : <b>Super Admin</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/userpermissions/details/3\">http://localhost:4200/userpermissions/details/3</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-12 22:22:09'),
(189, 1, '<p class=\"mb-1\">Ajouté état du suivi : <b>Dressage des brettelles</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/5\">http://localhost:4200/objective/details/5</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-14 02:01:51'),
(190, 1, '<p class=\"mb-1\">Ajouté état du suivi : <b>Amélioration des terres </b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/6\">http://localhost:4200/objective/details/6</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-14 02:03:31'),
(191, 1, '<p class=\"mb-1\">Ajouté état du suivi : <b>Contrôle de charge des postes H61</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/7\">http://localhost:4200/objective/details/7</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-14 02:35:12'),
(192, 1, '<p class=\"mb-1\">Ajouté état du suivi : <b>Dressage des brettelles</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/8\">http://localhost:4200/objective/details/8</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-14 02:36:58'),
(193, 1, '<p class=\"mb-1\">Ajouté état du suivi : <b>Dressage des brettelles</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/9\">http://localhost:4200/objective/details/9</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-14 02:37:53'),
(194, 1, '<p class=\"mb-1\">Ajouté état du suivi : <b>Dressage des brettelles</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/10\">http://localhost:4200/objective/details/10</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-14 02:38:08'),
(195, 1, '<p class=\"mb-1\">Ajouté état du suivi : <b>Dressage des brettelles</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/11\">http://localhost:4200/objective/details/11</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-16 15:32:01'),
(196, 1, '<p class=\"mb-1\">Modifé état du suivi : <b>Dressage des brettelles</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/11\">http://localhost:4200/objective/details/11</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-16 15:35:42'),
(197, 1, '<p class=\"mb-1\">Ajouté état du suivi : <b>Amélioration des terres </b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/12\">http://localhost:4200/objective/details/12</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-16 15:37:13'),
(198, 1, '<p class=\"mb-1\">Modifé état du suivi : <b>Amélioration des terres </b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/12\">http://localhost:4200/objective/details/12</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-16 15:37:22'),
(199, 1, '<p class=\"mb-1\">Modifé état du suivi : <b>Amélioration des terres </b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/12\">http://localhost:4200/objective/details/12</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-16 15:43:35'),
(200, 1, '<p class=\"mb-1\">Modifé état du suivi : <b>Amélioration des terres </b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/12\">http://localhost:4200/objective/details/12</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-16 15:43:52'),
(201, 1, '<p class=\"mb-1\">Modifé état du suivi : <b>Amélioration des terres </b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/12\">http://localhost:4200/objective/details/12</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-17 22:29:35'),
(202, 1, '<p class=\"mb-1\">Modifé état du suivi : <b>Amélioration des terres </b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/3\">http://localhost:4200/objective/details/3</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-17 22:30:49'),
(203, 1, '<p class=\"mb-1\">Modifé état du suivi : <b>Amélioration des terres </b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/3\">http://localhost:4200/objective/details/3</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-17 22:30:58'),
(204, 1, '<p class=\"mb-1\">Modifé état du suivi : <b>Dressage des brettelles</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/11\">http://localhost:4200/objective/details/11</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-17 22:42:04'),
(205, 1, '<p class=\"mb-1\">Supprimé état du suivi : <b>Dressage des brettelles</b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-danger\">Suppression</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-17 22:42:16'),
(206, 1, '<p class=\"mb-1\">Modifé état du suivi : <b>Amélioration des terres </b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/12\">http://localhost:4200/objective/details/12</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-17 22:43:45'),
(207, 1, '<p class=\"mb-1\">Ajouté état du suivi : <b>Dépose corps étrangers</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/13\">http://localhost:4200/objective/details/13</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-17 23:29:34'),
(208, 1, '<p class=\"mb-1\">Modifé état du suivi : <b>Dépose corps étrangers</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/13\">http://localhost:4200/objective/details/13</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-17 23:29:52'),
(209, 1, '<p class=\"mb-1\">Ajouté Groupe d\'objectif : <b>test</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/goalgroup/details/8\">http://localhost:4200/goalgroup/details/8</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-19 19:36:09'),
(210, 1, '<p class=\"mb-1\">Ajouté Groupe d\'objectif : <b>TEST</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/goalgroup/details/9\">http://localhost:4200/goalgroup/details/9</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-19 20:27:45'),
(211, 1, '<p class=\"mb-1\">Supprimé Groupe d\'objectif : <b>TEST</b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-danger\">Suppression</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-19 20:28:04'),
(212, 1, '<p class=\"mb-1\">Supprimé Groupe d\'objectif : <b>test</b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-danger\">Suppression</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-19 20:28:08'),
(213, 1, '<p class=\"mb-1\">Modifé Groupe d\'objectif : <b>Poste MT/BT sur poteau</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/goalgroup/details/7\">http://localhost:4200/goalgroup/details/7</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-19 20:39:15'),
(214, 1, '<p class=\"mb-1\">Modifé Groupe d\'objectif : <b>Reception et MST</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/goalgroup/details/6\">http://localhost:4200/goalgroup/details/6</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-19 20:39:24'),
(215, 1, '<p class=\"mb-1\">Modifé Groupe d\'objectif : <b>Lignes HTA</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/goalgroup/details/5\">http://localhost:4200/goalgroup/details/5</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-19 20:39:30'),
(216, 1, '<p class=\"mb-1\">Modifé Groupe d\'objectif : <b>Organes de coupures</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/goalgroup/details/3\">http://localhost:4200/goalgroup/details/3</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-19 20:39:39'),
(217, 1, '<p class=\"mb-1\">Modifé objective : <b>Injection des postes H61</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/goal/details/46\">http://localhost:4200/goal/details/46</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-19 22:31:48'),
(218, 1, '<p class=\"mb-1\">Ajouté objective : <b>test</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/goal/details/47\">http://localhost:4200/goal/details/47</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-19 22:33:44'),
(219, 1, '<p class=\"mb-1\">Supprimé objective : <b>test</b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-danger\">Suppression</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-19 22:34:11'),
(220, 1, '<p class=\"mb-1\">Ajouté travaux : <b>Coupeur</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/mission/details/13\">http://localhost:4200/mission/details/13</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-24 22:24:11'),
(221, 1, '<p class=\"mb-1\">Modifé travaux : <b>Coupeur</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/mission/details/13\">http://localhost:4200/mission/details/13</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-26 20:56:47'),
(222, 1, '<p class=\"mb-1\">Modifé travaux : <b>Coupeur</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/mission/details/13\">http://localhost:4200/mission/details/13</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-26 21:20:35'),
(223, 1, '<p class=\"mb-1\">Modifé travaux : <b>Coupeur</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/mission/details/13\">http://localhost:4200/mission/details/13</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-26 21:34:15'),
(224, 1, '<p class=\"mb-1\">Modifé travaux : <b>Coupeur</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/mission/details/13\">http://localhost:4200/mission/details/13</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-28 22:07:41'),
(225, 1, '<p class=\"mb-1\">Modifé travaux : <b>Coupeur</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/mission/details/13\">http://localhost:4200/mission/details/13</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-28 22:09:51'),
(226, 1, '<p class=\"mb-1\">Modifé travaux : <b>Coupeur</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/mission/details/13\">http://localhost:4200/mission/details/13</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-28 22:13:35'),
(227, 1, '<p class=\"mb-1\">Ajouté état du suivi : <b>Installation de Jeux de parafoudre</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/14\">http://localhost:4200/objective/details/14</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-28 22:27:50'),
(228, 1, '<p class=\"mb-1\">Ajouté état du suivi : <b>Pose des Contre poids et de renvoi</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/15\">http://localhost:4200/objective/details/15</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-29 08:50:12'),
(229, 1, '<p class=\"mb-1\">Modifé travaux : <b>Coupeur</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/mission/details/13\">http://localhost:4200/mission/details/13</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-29 08:50:12'),
(230, 1, '<p class=\"mb-1\">Ajouté état du suivi : <b>Mise à jour des réglages des DDA </b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/16\">http://localhost:4200/objective/details/16</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-29 08:50:12'),
(231, 1, '<p class=\"mb-1\">Ajouté état du suivi : <b>Entretien  des postes MT/BT H61</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/17\">http://localhost:4200/objective/details/17</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-29 08:50:12'),
(232, 1, '<p class=\"mb-1\">Ajouté état du suivi : <b>Elagage des arbres au voisinages des lignes MT</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/18\">http://localhost:4200/objective/details/18</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-29 08:50:12'),
(233, 1, '<p class=\"mb-1\">Ajouté état du suivi : <b>Dressage des brettelles</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/19\">http://localhost:4200/objective/details/19</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-29 08:50:12'),
(234, 1, '<p class=\"mb-1\">Modifé travaux : <b>Coupeur</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/mission/details/13\">http://localhost:4200/mission/details/13</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-29 08:53:01'),
(235, 1, '<p class=\"mb-1\">Modifé état du suivi : <b>Entretien  des postes MT/BT H61</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/17\">http://localhost:4200/objective/details/17</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-29 08:53:28'),
(236, 1, '<p class=\"mb-1\">Modifé travaux : <b>Coupeur</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/mission/details/13\">http://localhost:4200/mission/details/13</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-29 08:53:28'),
(237, 1, '<p class=\"mb-1\">Modifé état du suivi : <b>Mise à jour des réglages des DDA </b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/16\">http://localhost:4200/objective/details/16</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-29 08:59:00'),
(238, 1, '<p class=\"mb-1\">Modifé travaux : <b>Coupeur</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/mission/details/12\">http://localhost:4200/mission/details/12</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-29 08:59:00'),
(239, 1, '<p class=\"mb-1\">Modifé état du suivi : <b>Pose des Contre poids et de renvoi</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/15\">http://localhost:4200/objective/details/15</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-29 08:59:33'),
(240, 1, '<p class=\"mb-1\">Modifé travaux : <b>Coupeur</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/mission/details/12\">http://localhost:4200/mission/details/12</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-29 08:59:33'),
(241, 1, '<p class=\"mb-1\">Ajouté état du suivi : <b>Dressage des brettelles</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/20\">http://localhost:4200/objective/details/20</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-29 10:43:39'),
(242, 1, '<p class=\"mb-1\">Supprimé état du suivi : <b>Elagage des arbres au voisinages des lignes MT</b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-danger\">Suppression</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-29 10:43:51'),
(243, 1, '<p class=\"mb-1\">Ajouté état du suivi : <b>Elagage des arbres au voisinages des lignes MT</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/21\">http://localhost:4200/objective/details/21</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-29 11:16:53'),
(244, 1, '<p class=\"mb-1\">Ajouté état du suivi : <b>Entretien  des postes MT/BT H61</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/22\">http://localhost:4200/objective/details/22</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-29 11:25:42'),
(245, 1, '<p class=\"mb-1\">Ajouté état du suivi : <b>Elagage des arbres au voisinages des lignes MT</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/23\">http://localhost:4200/objective/details/23</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-29 11:26:25'),
(246, 1, '<p class=\"mb-1\">Modifé travaux : <b>Coupeur</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/mission/details/13\">http://localhost:4200/mission/details/13</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-29 11:39:22'),
(247, 1, '<p class=\"mb-1\">Supprimé état du suivi : <b>Dressage des brettelles</b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-danger\">Suppression</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-29 11:39:22'),
(248, 1, '<p class=\"mb-1\">Modifé anomalie : <b>un isolateur cassé - suport N° 6</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/2\">http://localhost:4200/anomaly/details/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-29 18:05:32'),
(249, 1, '<p class=\"mb-1\">Ajouté état du suivi : <b>Visite au sol   (Km) </b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/24\">http://localhost:4200/objective/details/24</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-30 11:26:23'),
(250, 1, '<p class=\"mb-1\">Ajouté visite : <b>2</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/visite/details/2\">http://localhost:4200/visite/details/2</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-04-30 11:26:23'),
(251, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Dysfonctionnement du tableau électrique</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/80\">http://localhost:4200/anomaly/details/80</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-05-01 15:18:23'),
(252, 1, '<p class=\"mb-1\">Ajouté état du suivi : <b>Visite au sol   (Km) </b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/25\">http://localhost:4200/objective/details/25</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-05-01 15:22:23'),
(253, 1, '<p class=\"mb-1\">Ajouté visite : <b>3</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/visite/details/3\">http://localhost:4200/visite/details/3</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-05-01 15:22:23'),
(254, 1, '<p class=\"mb-1\">Ajouté état du suivi : <b>Visite montée   (Support)</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/26\">http://localhost:4200/objective/details/26</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-05-01 15:26:48'),
(255, 1, '<p class=\"mb-1\">Ajouté anomalie : <b>Fusible grillé</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/81\">http://localhost:4200/anomaly/details/81</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-05-01 15:26:48'),
(256, 1, '<p class=\"mb-1\">Modifé anomalie : <b>Fusible grillé</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/81\">http://localhost:4200/anomaly/details/81</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-05-01 15:29:39'),
(257, 1, '<p class=\"mb-1\">Supprimé état du suivi : <b>Visite montée   (Support)</b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-danger\">Suppression</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-05-01 15:29:39');
INSERT INTO `log` (`id`, `user_id`, `message`, `context`, `level`, `level_name`, `extra`, `created_at`) VALUES
(258, 1, '<p class=\"mb-1\">Ajouté état du suivi : <b>Visite montée   (Support)</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/objective/details/27\">http://localhost:4200/objective/details/27</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-success\">Création</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-05-01 15:38:35'),
(259, 1, '<p class=\"mb-1\">Modifé anomalie : <b>Fusible grillé</b></p><p class=\"mb-1\">URL : <b><a href=\"http://localhost:4200/anomaly/details/81\">http://localhost:4200/anomaly/details/81</a></b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-warning\">modification</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-05-01 15:38:35'),
(260, 1, '<p class=\"mb-1\">Supprimé état du suivi : <b>Visite montée   (Support)</b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-danger\">Suppression</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-05-01 15:41:23'),
(261, 1, '<p class=\"mb-1\">Supprimé anomalie : <b>Fusible grillé</b></p><p class=\"mb-0 d-block mt-3\">Type d\'événement : <span class=\"badge rounded-pill badge-soft-danger\">Suppression</span></p>', 'a:0:{}', 200, 'INFO', 'a:1:{s:8:\"clientIp\";s:9:\"127.0.0.1\";}', '2023-05-01 15:41:23');

-- --------------------------------------------------------

--
-- Table structure for table `media_object`
--

DROP TABLE IF EXISTS `media_object`;
CREATE TABLE IF NOT EXISTS `media_object` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `media_object`
--

INSERT INTO `media_object` (`id`, `content_url`, `file_path`) VALUES
(1, NULL, '63f0d64998e8e185446772.png'),
(2, NULL, '63f0d70b38d87063768849.png'),
(3, NULL, '63f13a7ddf84a302157891.png');

-- --------------------------------------------------------

--
-- Table structure for table `messenger_messages`
--

DROP TABLE IF EXISTS `messenger_messages`;
CREATE TABLE IF NOT EXISTS `messenger_messages` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `body` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `headers` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue_name` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `available_at` datetime NOT NULL,
  `delivered_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_75EA56E0FB7336F0` (`queue_name`),
  KEY `IDX_75EA56E0E3BD61CE` (`available_at`),
  KEY `IDX_75EA56E016BA31DB` (`delivered_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `mission`
--

DROP TABLE IF EXISTS `mission`;
CREATE TABLE IF NOT EXISTS `mission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date_start` datetime DEFAULT NULL,
  `date_end` datetime DEFAULT NULL,
  `type` tinyint(1) DEFAULT NULL,
  `causes` smallint DEFAULT NULL,
  `dms` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ifs` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nb_clients` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `node_a_id` int NOT NULL,
  `actions` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci COMMENT '(DC2Type:simple_array)',
  PRIMARY KEY (`id`),
  KEY `IDX_9067F23CFC7ADECE` (`node_a_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `mission`
--

INSERT INTO `mission` (`id`, `date_start`, `date_end`, `type`, `causes`, `dms`, `ifs`, `nb_clients`, `node_a_id`, `actions`) VALUES
(1, '2023-01-01 14:11:21', '2023-01-01 21:00:00', 1, 2, '5.455', '0.801', '330/412', 7, NULL),
(2, '2023-02-24 03:57:47', '2023-02-24 05:00:00', 1, NULL, '0.516', '0.498', '205/412', 7, NULL),
(3, '2023-02-26 18:51:27', NULL, 1, 2, NULL, '0.485', '200/412', 7, '1,2,29'),
(4, '2023-03-11 13:21:17', NULL, NULL, NULL, NULL, '1', '412/412', 7, NULL),
(5, '2023-03-11 13:35:37', NULL, NULL, NULL, NULL, '1', '412/412', 7, NULL),
(6, '2023-03-18 08:52:37', NULL, 1, NULL, NULL, '0.515', '212/412', 5, NULL),
(7, '2023-03-18 08:59:38', NULL, NULL, NULL, NULL, '0.002', '1/412', 8, NULL),
(8, '2023-03-18 09:04:08', NULL, NULL, NULL, NULL, '0.515', '212/412', 5, NULL),
(9, '2023-03-18 09:20:54', NULL, 1, NULL, NULL, '1', '412/412', 7, NULL),
(10, '2023-03-18 09:52:00', NULL, NULL, NULL, NULL, '1', '412/412', 7, NULL),
(11, '2023-03-19 01:11:54', NULL, 1, NULL, NULL, '1', '412/412', 7, NULL),
(12, '2023-04-24 01:30:08', NULL, NULL, NULL, NULL, '1', '412/412', 7, '20,30'),
(13, '2023-04-24 22:21:50', NULL, NULL, NULL, NULL, '1', '412/412', 7, '30,20,23'),
(14, '2023-02-26 19:51:27', '2023-02-26 20:51:27', 1, 2, NULL, '0.485', '200/412', 7, '1,2,29');

-- --------------------------------------------------------

--
-- Table structure for table `mission_node`
--

DROP TABLE IF EXISTS `mission_node`;
CREATE TABLE IF NOT EXISTS `mission_node` (
  `mission_id` int NOT NULL,
  `node_id` int NOT NULL,
  PRIMARY KEY (`mission_id`,`node_id`),
  KEY `IDX_AC3D444ABE6CAE90` (`mission_id`),
  KEY `IDX_AC3D444A460D9FD7` (`node_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `mission_node`
--

INSERT INTO `mission_node` (`mission_id`, `node_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 4),
(3, 5);

-- --------------------------------------------------------

--
-- Table structure for table `node`
--

DROP TABLE IF EXISTS `node`;
CREATE TABLE IF NOT EXISTS `node` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `department_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_857FE845AE80F5DF` (`department_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `node`
--

INSERT INTO `node` (`id`, `titre`, `department_id`) VALUES
(1, 'inter ONEP 2', 1),
(2, 'inter GSM wana 3', 1),
(3, 'inter 5', 1),
(4, 'inter  4', 1),
(5, 'inter 1', 1),
(6, 'inter Bouragba', 3),
(7, 'inter y', 1),
(8, 'inter 7', 1),
(9, 'inter y', 3),
(10, 'inter 1', 3);

-- --------------------------------------------------------

--
-- Table structure for table `objective`
--

DROP TABLE IF EXISTS `objective`;
CREATE TABLE IF NOT EXISTS `objective` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `count` smallint DEFAULT NULL,
  `goal_id` int NOT NULL,
  `planned_count` smallint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_B996F101667D1AFE` (`goal_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `objective`
--

INSERT INTO `objective` (`id`, `date`, `count`, `goal_id`, `planned_count`) VALUES
(3, '2023-04-01', 5, 33, 10),
(4, '2023-03-01', 3, 32, 6),
(5, '2023-02-01', NULL, 24, NULL),
(6, '2023-01-01', NULL, 33, 12),
(7, '2023-01-01', NULL, 32, 2),
(8, '2023-02-01', 10, 24, NULL),
(9, '2023-03-01', NULL, 24, 7),
(10, '2023-03-01', 5, 24, 7),
(12, '2023-06-01', 40, 33, 34),
(13, '2022-01-01', NULL, 25, 24),
(14, '2023-04-01', 12, 31, NULL),
(15, '2023-04-24', 2, 30, NULL),
(16, '2023-04-24', 2, 20, NULL),
(17, '2023-04-24', 0, 21, NULL),
(20, '2023-01-01', NULL, 24, 10),
(21, '2023-01-01', NULL, 23, 12),
(22, '2023-01-01', NULL, 21, 54),
(23, '2023-02-01', NULL, 23, 21),
(24, '2023-04-30', 1, 14, NULL),
(25, '2023-05-01', 1, 14, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `poste`
--

DROP TABLE IF EXISTS `poste`;
CREATE TABLE IF NOT EXISTS `poste` (
  `id` int NOT NULL AUTO_INCREMENT,
  `commune_id` int DEFAULT NULL,
  `designation` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mle` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pkva` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nb_clients` double DEFAULT NULL,
  `date_mst` date DEFAULT NULL,
  `node_id` int NOT NULL,
  `type` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `marque` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `poste` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `n_serie` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_7C890FAB131A4F72` (`commune_id`),
  KEY `IDX_7C890FAB460D9FD7` (`node_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `poste`
--

INSERT INTO `poste` (`id`, `commune_id`, `designation`, `mle`, `pkva`, `nb_clients`, `date_mst`, `node_id`, `type`, `marque`, `poste`, `n_serie`) VALUES
(3, 1, '5 ANABDOUR', '86028-11-L', '100', 200, '2022-12-01', 7, NULL, NULL, NULL, NULL),
(4, 2, '1 Kasbat nouacer', 'H40_114_13C', '50', 1, '2012-07-04', 5, NULL, NULL, NULL, NULL),
(5, 1, '2 ONEP', NULL, NULL, 1, NULL, 1, NULL, NULL, NULL, NULL),
(6, 1, '3 GSM wana', NULL, NULL, 2, NULL, 2, NULL, NULL, NULL, NULL),
(7, 3, '7 BOUFATAS', 'H40-150-13C', '100', 1, NULL, 8, NULL, NULL, NULL, NULL),
(8, 2, '4 Akhnoukhate', '7740-05-E', '100', 129, '2022-12-01', 4, NULL, NULL, NULL, NULL),
(9, 2, '6 Centre Elbachire', '73342-22-W', '100', 78, '2022-12-01', 3, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `refresh_tokens`
--

DROP TABLE IF EXISTS `refresh_tokens`;
CREATE TABLE IF NOT EXISTS `refresh_tokens` (
  `id` int NOT NULL AUTO_INCREMENT,
  `refresh_token` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `valid` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_9BACE7E1C74F2195` (`refresh_token`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `refresh_tokens`
--

INSERT INTO `refresh_tokens` (`id`, `refresh_token`, `username`, `valid`) VALUES
(1, '9aac87101a4f55321acd085a351dc7c63cf1da9cdc7231be98fbca6f66d5326ffdd165b54a004249128b50c1657d2e66b6972c29237bc5d08e3dd725c2599b26', 'admin', '2023-03-20 13:23:06'),
(2, '7a6fb8d5d4af548b80504f1f273cd2dc8aacddbb408f2482eb01168983546d56be6ca4410b8daa19ad6688fd33ba2c9e979b2ae15edf93770b21dabc87025f10', 'admin', '2023-03-20 13:26:51'),
(3, '024aefa227ce38f27b8f14e024691dec7cbb145da5863efa0b63aba77d93674c2cac2afb0de97c39aad639b33df35a604c0194099c62c18125006762157c6e30', 'admin', '2023-03-20 13:35:21'),
(4, '638521570090b12f09fbfd1297924c34dc53273fb5327dddd08a9ba00ede83dd71f3d1e556f341bc0db6f87d25fed6078e7f82e80f933c9cd2d9d0fb202c1cd3', 'admin', '2023-03-22 00:34:49'),
(5, 'b78b1c54b2c675c295795a12f607c7aff4967e0c88ae441715f55fd5fe46a4bb82c7d2e3615fa80f93a15e1dcceca15b13630c0248d57dc3ca083ef111b7b4b9', 'admin', '2023-03-23 08:51:05'),
(6, '7eb865db2275eae528cd9e1150cf890620bb43e4378d08bddfaf8a2fbb3b95d585b8965bd97f4e275bcce98d647b811e3610c2cdfd3466a6b76413b896c96d4b', 'admin', '2023-03-25 00:14:12'),
(7, 'bd0b11c8f5ee8479496147ef598a02250f5fad7b956d022af957affe5f0c9c49604cdae1c25f612a7d1e2dec1ac91e0057b33f5e51b0a3547e9d1627e71c96d1', 'admin', '2023-03-25 07:46:38'),
(8, 'a94582af698a0cc2dab3406d1cd9b32bb9e8badd24a7d1eb9f441d512568b8ba58fff627df5a3b060fa5e6735b2ad865bc4095f6f57aebe908ecbc83eaf4fe51', 'admin', '2023-03-26 02:58:05'),
(9, 'f4bdcd6489bb9912ebbe59541f9b253ec14d26e6c7eb37e43745689efb08cfd5d0534d5bb8b5481faac4182af22d4cf0f9472b137096b9e3556c5b6d11658963', 'admin', '2023-03-26 14:28:31'),
(10, '45ffc4a9c62b37e6c6f0ff88d785f407370d33f29565e50df6071be18cefcfd65745937a22ef80685c3d57244dbdc4f3424ad4d81ccacd5b4d326ed01b53a345', 'admin', '2023-03-26 19:21:10'),
(11, 'b178fd8cc54e5965da6845c0a8c3e90a0e62e9ac09d3ddb3d88271f3ac6ac1e14c4058b1f04bb35bab32ac7fd3cb557d77400ac5905ba22177314f135148c177', 'admin', '2023-03-27 20:24:25'),
(12, 'd5f920ff987eb3d3bc697d84dd474e7640126fe645aadd228f827615e757f1c1ce7e4547137fd9c146c391cc31fc16408e9ea5ea9fa4ef220b201337dbb63c4d', 'admin', '2023-03-27 20:46:25'),
(13, '09e0d2d97bc0970d49d5c56b3c173e1e723aa00f45741b378145158d5fb1518d9cd8a085f972107af9041b2e2d9dd5f28096847d8fc6d025b6fb7b4dc2fa055d', 'admin', '2023-03-30 18:43:09'),
(14, 'b2b5d3c04c62dc9d75e7995b266ab7b71360c76a1ab104ba037bf29c98d69344bda2106b8a50e7fd98ea54a01560c63cc062556339eb82ea431352ab4d892549', 'admin', '2023-04-01 20:10:33'),
(15, 'b3e5e499885bef983370cac5962ffb1c04144247b75c7003887f540c9c63e9a77bcb8edcea07e6635bcadee1410f448a5a3a7996afd2a8303c0fca5ca5132472', 'admin', '2023-04-03 10:46:19'),
(16, '56ab17bd2cf7a31bd989bcaf25846a9170d69832da2c78f0c5ad5cedb1345a0cc942b31e42e31c8034a8787521f240e585e5f7af68ef7df30922a3e0948989a1', 'admin', '2023-04-03 11:08:07'),
(17, 'f3e5586ed36b52507fc2f61987cbaa99e0048ab3a981cfeaf2b21bfeae16805fa07f3f03e8bc745309126f1ff8177a76852561a3d83dc774148f09a7f84d5e3e', 'admin', '2023-04-04 12:35:56'),
(18, '6bd9693fe42183d3c9a55c7eb5f736c48cecf40adac7fdd055939e2475e36bacdf645fdb1e1b4e93b5986bbe902966d3c508ad3829039496c5a3acfa20ba3338', 'admin', '2023-04-04 14:05:47'),
(19, '5ad979eec985501019a369c2b33c8d40f2fb42b73518656e7220e5b067ff669b02eb342706c5f76439e76eadeac1114265ba9917aeb16130f5ce7fd2b9b28614', 'admin', '2023-04-06 20:06:37'),
(20, 'bdc400f99e1f2af84d36e835a06813063f630425708cf32672265004de660a40986375a89627a541b251aa99452e1eb1939d76e71bd7729ba83a40bfd6cfed7d', 'admin', '2023-04-10 09:25:54'),
(21, '5a7f8e7544979b4e4dcb5a4778a3231c44aa24c157ec1c17d8b70b5404313c441478fe9646f35343820347174ed7f0becc91272d45bdc46696c4623eff869ab4', 'admin', '2023-04-17 08:51:13'),
(22, '1620fd9a13d8b781d0c0a9b020e97446170e88a9ce3bc393dc6e5606f7ad8b03451d6b36067b151e5dd0da85d8e37571c2ed7757193e563c4ad9d355582778f6', 'admin', '2023-04-18 01:11:35'),
(23, '7b4c2a821d53f15c38a97918b6ee8ea9333bd1e316d9039214ae9ae6c1193d11c379af3524d3f88cbb0a68b48cd93b8ed534db206d818d8ac2749e185379de49', 'admin', '2023-04-25 10:40:01'),
(24, '0821f63e819383259744dfd3deeb0b2c2313be084ee938afb5cc60e269511be6c6dac4864e2c4cd250eae6fec3594accc72ab75c96fe9f39a17bff03acc54aab', 'admin', '2023-05-01 11:38:08'),
(25, '911c708f504e839a6b7ba8e695fbaccdfa959f0ae0b7252a53db0568fe8ffc7cafe214cabeb415763f1ceb5377a259be4cadfd5ef31c5fb763af31451b4bfdef', 'admin', '2023-05-08 01:42:53'),
(26, 'c9802979de79e59a6c3cef4e85f322a1c62bead0ea17be091f3c4f831bf0fa70ee97a4d904aab4c050008327b261174c95b53cb94ffcc6c2536fd04182557d9a', 'admin', '2023-05-11 03:29:41'),
(27, 'b80f456e79c981a3cecc8dc2e55408688f592eea544bcb0e9d867faac4e39a7d6d2dbe1e21707e7e9003fc26ed25b006ef6773d72a385671afffff18a8768647', 'admin', '2023-05-12 04:00:11'),
(28, 'cbbe24b1ef93513027453a8b3ffe76d78116e10d83dd11bbd353f907b628b1e2552f1c5982a6063f2cbc1ac30b29bb2ecaed88c29038d6b55605953376fb1284', 'admin', '2023-05-12 04:04:14'),
(29, '8c7d6f8ea0177b457293a46b94e519f24d8c9042f45813f0f595e4a2978772f5460c9dc2b51347f5b94c1e9d16bc21c3347a7fe6cabfbe982da5e178a4223f39', 'admin', '2023-05-13 22:47:15'),
(30, 'f84e48bda866861186b406d26ec836f83ddac371d5f3f5288c9694b36d99dc38dc27a984497df98ae4a46f940439fd461b26274bf654daa0b8768491f7441415', 'admin', '2023-05-14 00:25:51'),
(31, 'b7a063f863cfbff570d887a3b595f8ae34538f5f1ba27e93c06153af5ffc87b78281b1cc88b446ab969661c3c2ca8fca5ae21611198257074d6cef8bed1ace24', 'admin', '2023-05-16 01:03:31'),
(32, '83077c7373c676a7b0136ab2b336594972157096b579ad473209fe7096e68717407c2a9ae1f7916f3919d5f5dcbfa540effe3be5ff18ebd8b483b7adf0200670', 'admin', '2023-05-17 21:23:23'),
(33, '7c944bd5b68d15eb73d2e62a3b49cd30dd61168a687e1074da9d2f47710714bc4826de7e689bd5153d9c7eab2f7229ba6da61f42d27ba96b0757e0496c0bdfcf', 'admin', '2023-05-19 19:26:10'),
(34, '55f91783f20fa1d87d2d0f03a631dbcc84f1014b54bb0078be9d5b83cd535c6dca371c9d77c6908c521db0fa9c0376329110eba205d6024b938eff679b53da99', 'admin', '2023-05-20 00:13:31'),
(35, '53a83c59b24108c0660b4ebdbfa2b42cf50d951431f968027fc0c58f55300d07fde8c4800b3f77b8f4afb8eeffc7624d7619d48ef79c79e10c7f12646963c04a', 'admin', '2023-05-24 20:58:42'),
(36, 'c4458bccacca13848bbf95a5508f8f3637d50d31f70d125c28822cca9161b519afce39352e4f7f2cf944ab1c32d1a5c7582f76ea39e8bd3dfe69da1da29ee0e0', 'admin', '2023-05-26 19:22:09'),
(37, '18132ec8b823fc42898e2c3c3ff7c4467c881c592702c967c1c61b738c3a0aa987dadb75d666a2a2c07f0922417b58dd41b93193f752d043071249a781f60be9', 'user', '2023-05-26 20:41:43'),
(38, '7549bc2b68535f6ece22a62b833b801449847f3ad69ba2bf5ad1becf8bd7d585b5a642e69add06135c865cc38abbc66b1ec7a8473207beec7bfea0a411554317', 'user', '2023-05-26 20:44:45'),
(39, 'da88b274c4e43fd4fdf3e23d9055d3f542530efcbe47179a1b58dd57f0f30f2c8c30208a620ada2b0cdf609643e2a8a2583fa3b5931341f0bd2d54b3d5edfbcd', 'admin', '2023-05-26 20:45:38'),
(40, '92d9676e493c07f3b7ce00c39f469b7357137b7cbf7feda772172bc04c277122b7dc172e96278defba25eb2abe03611a03194973e5fc111e2f316131325b2470', 'admin', '2023-05-28 21:55:29'),
(41, 'a6c5855a0bff9b85d0ee83dd2345b82c74ddc3e40571134c0e4f17caa9482b3dcec101fbf117b2e273ab8d7997435a5173f6d90670e48d0700062a2b7c2f3f23', 'admin', '2023-05-28 22:25:56'),
(42, 'fb5a8752b9b556a354a0ae8035daf3360f5a8b727aaa6b83f6628bd930f5b2f08813f019fb0d1451ca1ea7b716eeafbbe1c960ce6266f3219fb6ddb5bab11b82', 'admin', '2023-05-29 23:01:19'),
(43, '1dcf3cb52a8f4bd25810466016d91e8cd5dc46f1fbada317a503da183004016588b17dff7852be025b13b2396f9895cb653651c8e1c9050a07bf83cb8aefcdae', 'admin', '2023-05-30 17:31:58'),
(44, '5c002f0a4160a534b064a149eaea22605de597c3e88c2bea4c0736e7fb10df1125b57d4b65faa99319d82eb400f7e8514c45d31201e92f693a552e048c9e06ff', 'admin', '2023-05-31 14:12:33'),
(45, '6d560c3328b64ca52c9ed8f80fb3986f2df4427d84bb502ba55fea076320e22bad664c71a0e0eea84db65e4077bd1f382f3623f445082960db9b7f79ad54e9b6', 'admin', '2023-05-31 18:44:55');

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

DROP TABLE IF EXISTS `team`;
CREATE TABLE IF NOT EXISTS `team` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`id`, `titre`) VALUES
(1, 'équipe chichaoua'),
(2, 'équipe mejjat');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `team_id` int DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `full_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_8D93D649296CD8AE` (`team_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `team_id`, `username`, `full_name`, `password`, `roles`) VALUES
(1, 2, 'admin', 'admin', '$2y$13$vqGDCysbQ4KFklrWrYym6uc1yEwO/cReKX33bOxZuijV11i7Nq/N2', '[\"ROLE_SUPER_ADMIN\"]'),
(2, 1, 'user', 'user', '$2y$13$XzBjPbnYdOWQ5G6imohx4Ok/3Vy720XxRgPirqlyLjnrXfBsm1fEK', '[\"ROLE_ADMIN\"]');

-- --------------------------------------------------------

--
-- Table structure for table `user_permissions`
--

DROP TABLE IF EXISTS `user_permissions`;
CREATE TABLE IF NOT EXISTS `user_permissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `permissions` json DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_permissions`
--

INSERT INTO `user_permissions` (`id`, `role`, `label`, `permissions`) VALUES
(1, 'ROLE_USER', 'User', '[\"anomalies_update\", \"anomalies_delete\", \"anomalies_add\", \"anomalies_details\", \"anomalies_show\", \"anomalies_export\", \"anomalies_import\", \"travaux_import\", \"travaux_export\", \"travaux_show\", \"travaux_details\", \"travaux_add\", \"travaux_delete\", \"travaux_update\", \"calendrier_show\", \"objectifs_show\", \"postes_update\", \"postes_delete\", \"postes_add\", \"postes_details\", \"postes_show\", \"postes_export\", \"postes_import\", \"statistiques_show\", \"users_Modifier\", \"users_Supprimer\", \"users_Ajouter\", \"users_Details\", \"users_Afficher\", \"historique_show\", \"equipes_Modifier\", \"equipes_Supprimer\", \"equipes_Ajouter\", \"equipes_Details\", \"equipes_Afficher\", \"visites_update\", \"visites_delete\", \"visites_add\", \"visites_details\", \"visites_show\", \"visites_export\", \"visites_import\", \"visites_profile\", \"missions_update\", \"missions_delete\", \"missions_add\", \"missions_details\", \"missions_show\", \"missions_export\", \"missions_import\"]'),
(2, 'ROLE_ADMIN', 'Admin', '[\"anomalies_update\", \"anomalies_delete\", \"anomalies_add\", \"anomalies_details\", \"anomalies_show\", \"anomalies_export\", \"anomalies_import\", \"travaux_import\", \"travaux_export\", \"travaux_show\", \"travaux_details\", \"travaux_add\", \"travaux_delete\", \"travaux_update\", \"calendrier_show\", \"objectifs_show\", \"postes_update\", \"postes_delete\", \"postes_add\", \"postes_details\", \"postes_show\", \"postes_export\", \"postes_import\", \"statistiques_show\", \"users_Modifier\", \"users_Supprimer\", \"users_Ajouter\", \"users_Details\", \"users_Afficher\", \"historique_show\", \"equipes_Modifier\", \"equipes_Supprimer\", \"equipes_Ajouter\", \"equipes_Details\", \"equipes_Afficher\", \"autorisation_show\", \"data_show\", \"users_show\", \"users_details\", \"users_delete\", \"users_add\", \"users_update\", \"equipes_show\", \"equipes_details\", \"equipes_add\", \"equipes_delete\", \"equipes_update\"]'),
(3, 'ROLE_SUPER_ADMIN', 'Super Admin', '[\"anomalies_update\", \"anomalies_delete\", \"anomalies_add\", \"anomalies_details\", \"anomalies_show\", \"anomalies_export\", \"anomalies_import\", \"travaux_import\", \"travaux_export\", \"travaux_details\", \"travaux_add\", \"travaux_delete\", \"travaux_update\", \"calendrier_show\", \"objectifs_show\", \"postes_update\", \"postes_delete\", \"postes_add\", \"postes_details\", \"postes_show\", \"postes_export\", \"postes_import\", \"statistiques_show\", \"users_Modifier\", \"users_Supprimer\", \"users_Ajouter\", \"users_Details\", \"users_Afficher\", \"historique_show\", \"equipes_Modifier\", \"equipes_Supprimer\", \"equipes_Ajouter\", \"equipes_Details\", \"equipes_Afficher\", \"autorisation_show\", \"users_details\", \"users_delete\", \"users_add\", \"users_update\", \"equipes_show\", \"equipes_details\", \"equipes_add\", \"equipes_delete\", \"equipes_update\", \"users_show\", \"logs_show\", \"data_show\", \"teams_update\", \"teams_delete\", \"teams_add\", \"teams_details\", \"teams_show\", \"departements_update\", \"departements_delete\", \"departements_add\", \"departements_details\", \"departements_show\", \"communes_update\", \"communes_delete\", \"communes_add\", \"communes_details\", \"communes_show\", \"appareils_update\", \"appareils_delete\", \"appareils_add\", \"appareils_details\", \"appareils_show\", \"visites_show\", \"users_profile\", \"visite_update\", \"visite_add\", \"visite_delete\", \"visite_details\", \"visite_show\", \"visite_import\", \"visite_profile\", \"visite_export\", \"visites_update\", \"visites_add\", \"visites_delete\", \"visites_details\", \"visites_export\", \"visites_import\", \"travaux_show\", \"segments_update\", \"segments_delete\", \"segments_add\", \"segments_details\", \"segments_show\", \"mission_update\", \"mission_delete\", \"mission_details\", \"mission_add\", \"mission_show\", \"mission_import\", \"mission_export\", \"departments_update\", \"departments_delete\", \"departments_add\", \"departments_details\", \"departments_show\", \"nodes_update\", \"nodes_delete\", \"nodes_details\", \"nodes_add\", \"nodes_show\", \"edges_update\", \"edges_delete\", \"edges_add\", \"edges_details\", \"edges_show\", \"missions_update\", \"missions_delete\", \"missions_add\", \"missions_details\", \"missions_show\", \"missions_export\", \"missions_import\", \"objectives_show\", \"goal_groups_update\", \"goal_groups_delete\", \"goal_groups_add\", \"goal_groups_details\", \"goal_groups_show\", \"goals_update\", \"goals_delete\", \"goals_add\", \"goals_details\", \"goals_show\", \"objectives_update\", \"objectives_delete\", \"objectives_add\"]');

-- --------------------------------------------------------

--
-- Table structure for table `visite`
--

DROP TABLE IF EXISTS `visite`;
CREATE TABLE IF NOT EXISTS `visite` (
  `id` int NOT NULL AUTO_INCREMENT,
  `team_id` int DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `node_a_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_B09C8CBB296CD8AE` (`team_id`),
  KEY `IDX_B09C8CBBFC7ADECE` (`node_a_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `visite`
--

INSERT INTO `visite` (`id`, `team_id`, `date`, `node_a_id`) VALUES
(1, 1, '2023-03-07 00:00:00', 5),
(2, 2, '2023-04-30 00:00:00', 5),
(3, 1, '2023-05-01 00:00:00', 7);

-- --------------------------------------------------------

--
-- Table structure for table `visite_node`
--

DROP TABLE IF EXISTS `visite_node`;
CREATE TABLE IF NOT EXISTS `visite_node` (
  `visite_id` int NOT NULL,
  `node_id` int NOT NULL,
  PRIMARY KEY (`visite_id`,`node_id`),
  KEY `IDX_80E47F4C1C5DC59` (`visite_id`),
  KEY `IDX_80E47F4460D9FD7` (`node_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `visite_node`
--

INSERT INTO `visite_node` (`visite_id`, `node_id`) VALUES
(1, 4),
(2, 3),
(3, 3);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `anomaly`
--
ALTER TABLE `anomaly`
  ADD CONSTRAINT `FK_F9F97563696D413E` FOREIGN KEY (`edge_id`) REFERENCES `edge` (`id`),
  ADD CONSTRAINT `FK_F9F97563B03A8386` FOREIGN KEY (`created_by_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `department`
--
ALTER TABLE `department`
  ADD CONSTRAINT `FK_CD1DE18A296CD8AE` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`),
  ADD CONSTRAINT `FK_CD1DE18A9559EF01` FOREIGN KEY (`visuel_id`) REFERENCES `media_object` (`id`);

--
-- Constraints for table `edge`
--
ALTER TABLE `edge`
  ADD CONSTRAINT `FK_7506D366AE80F5DF` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`),
  ADD CONSTRAINT `FK_7506D366EECF7120` FOREIGN KEY (`node_b_id`) REFERENCES `node` (`id`),
  ADD CONSTRAINT `FK_7506D366FC7ADECE` FOREIGN KEY (`node_a_id`) REFERENCES `node` (`id`);

--
-- Constraints for table `goal`
--
ALTER TABLE `goal`
  ADD CONSTRAINT `FK_FCDCEB2E4A2E4C72` FOREIGN KEY (`goal_group_id`) REFERENCES `goal_group` (`id`);

--
-- Constraints for table `log`
--
ALTER TABLE `log`
  ADD CONSTRAINT `FK_8F3F68C5A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `mission`
--
ALTER TABLE `mission`
  ADD CONSTRAINT `FK_9067F23CFC7ADECE` FOREIGN KEY (`node_a_id`) REFERENCES `node` (`id`);

--
-- Constraints for table `mission_node`
--
ALTER TABLE `mission_node`
  ADD CONSTRAINT `FK_AC3D444A460D9FD7` FOREIGN KEY (`node_id`) REFERENCES `node` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_AC3D444ABE6CAE90` FOREIGN KEY (`mission_id`) REFERENCES `mission` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `node`
--
ALTER TABLE `node`
  ADD CONSTRAINT `FK_857FE845AE80F5DF` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`);

--
-- Constraints for table `objective`
--
ALTER TABLE `objective`
  ADD CONSTRAINT `FK_B996F101667D1AFE` FOREIGN KEY (`goal_id`) REFERENCES `goal` (`id`);

--
-- Constraints for table `poste`
--
ALTER TABLE `poste`
  ADD CONSTRAINT `FK_7C890FAB131A4F72` FOREIGN KEY (`commune_id`) REFERENCES `commune` (`id`),
  ADD CONSTRAINT `FK_7C890FAB460D9FD7` FOREIGN KEY (`node_id`) REFERENCES `node` (`id`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_8D93D649296CD8AE` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`);

--
-- Constraints for table `visite`
--
ALTER TABLE `visite`
  ADD CONSTRAINT `FK_B09C8CBB296CD8AE` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`),
  ADD CONSTRAINT `FK_B09C8CBBFC7ADECE` FOREIGN KEY (`node_a_id`) REFERENCES `node` (`id`);

--
-- Constraints for table `visite_node`
--
ALTER TABLE `visite_node`
  ADD CONSTRAINT `FK_80E47F4460D9FD7` FOREIGN KEY (`node_id`) REFERENCES `node` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_80E47F4C1C5DC59` FOREIGN KEY (`visite_id`) REFERENCES `visite` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
