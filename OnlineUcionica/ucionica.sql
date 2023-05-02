/*
SQLyog Community v13.1.9 (64 bit)
MySQL - 10.4.28-MariaDB : Database - ucionica
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`ucionica` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

USE `ucionica`;

/*Table structure for table `casovi` */

DROP TABLE IF EXISTS `casovi`;

CREATE TABLE `casovi` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `lekcijaId` bigint(20) unsigned NOT NULL,
  `userId` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `casovi` */

insert  into `casovi`(`id`,`lekcijaId`,`userId`,`created_at`,`updated_at`) values 
(1,2,1,'2023-05-02 01:10:16','2023-05-02 01:10:16'),
(2,2,1,'2023-05-02 01:11:24','2023-05-02 01:11:24'),
(3,2,1,'2023-05-02 01:15:46','2023-05-02 01:15:46'),
(4,2,1,'2023-05-02 08:30:10','2023-05-02 08:30:10'),
(5,2,1,'2023-05-02 08:30:19','2023-05-02 08:30:19');

/*Table structure for table `failed_jobs` */

DROP TABLE IF EXISTS `failed_jobs`;

CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `failed_jobs` */

/*Table structure for table `lekcije` */

DROP TABLE IF EXISTS `lekcije`;

CREATE TABLE `lekcije` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `naziv` varchar(255) NOT NULL,
  `tezina` int(11) NOT NULL,
  `trajanje` int(11) NOT NULL,
  `imageUrl` varchar(255) NOT NULL,
  `predmetId` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `lekcije` */

insert  into `lekcije`(`id`,`naziv`,`tezina`,`trajanje`,`imageUrl`,`predmetId`,`created_at`,`updated_at`) values 
(1,'Populaciona politika Srbije',3,30,'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',1,'2023-05-01 23:15:42','2023-05-01 23:15:42'),
(2,'Izvori vode i gejziri',2,20,'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',1,'2023-05-01 23:15:42','2023-05-01 23:15:42'),
(3,'Kretanje tektonskih ploca',4,45,'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',1,'2023-05-01 23:15:42','2023-05-01 23:15:42'),
(4,'Jupiterovi sateliti',1,10,'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',1,'2023-05-01 23:15:42','2023-05-01 23:15:42'),
(5,'Demografske odlike Azije',4,30,'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',1,'2023-05-01 23:15:42','2023-05-01 23:15:42'),
(6,'Sedimentne stene',5,50,'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',1,'2023-05-01 23:15:42','2023-05-01 23:15:42'),
(7,'Prvi svetski rat',2,20,'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',2,'2023-05-01 23:15:42','2023-05-01 23:15:42'),
(8,'Egipatske piramide',1,15,'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',2,'2023-05-01 23:15:42','2023-05-01 23:15:42'),
(9,'Istorija kineske civilizacije',4,35,'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',2,'2023-05-01 23:15:42','2023-05-01 23:15:42'),
(10,'Velika seoba naroda',5,60,'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',2,'2023-05-01 23:15:42','2023-05-01 23:15:42'),
(11,'Cezarova osvajanja',3,40,'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',2,'2023-05-01 23:15:42','2023-05-01 23:15:42'),
(12,'Deoba celija',4,25,'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',3,'2023-05-01 23:15:42','2023-05-01 23:15:42'),
(13,'Gmizavci i vodozemci',2,25,'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',3,'2023-05-01 23:15:42','2023-05-01 23:15:42'),
(14,'Razmnozavanje kod golosemenica',5,25,'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',3,'2023-05-01 23:15:42','2023-05-01 23:15:42'),
(15,'Ekosistemi u Srbiji',1,10,'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',3,'2023-05-01 23:15:42','2023-05-01 23:15:42');

/*Table structure for table `migrations` */

DROP TABLE IF EXISTS `migrations`;

CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `migrations` */

insert  into `migrations`(`id`,`migration`,`batch`) values 
(1,'2014_10_12_000000_create_users_table',1),
(2,'2014_10_12_100000_create_password_reset_tokens_table',1),
(3,'2019_08_19_000000_create_failed_jobs_table',1),
(4,'2019_12_14_000001_create_personal_access_tokens_table',1),
(5,'2023_05_01_230839_create_lekcije_table',2),
(6,'2023_05_01_230910_create_predmeti_table',2),
(7,'2023_05_01_230940_create_casovi_table',2);

/*Table structure for table `password_reset_tokens` */

DROP TABLE IF EXISTS `password_reset_tokens`;

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `password_reset_tokens` */

/*Table structure for table `personal_access_tokens` */

DROP TABLE IF EXISTS `personal_access_tokens`;

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `personal_access_tokens` */

insert  into `personal_access_tokens`(`id`,`tokenable_type`,`tokenable_id`,`name`,`token`,`abilities`,`last_used_at`,`expires_at`,`created_at`,`updated_at`) values 
(1,'App\\Models\\User',1,'auth_token','5968315f35a3c5b10421b9d2e40f75afeb7171de803ec3cf9c17cd6af10a50f5','[\"*\"]',NULL,NULL,'2023-05-01 23:49:24','2023-05-01 23:49:24'),
(2,'App\\Models\\User',1,'auth_token','cab0d4a9a55a7ddd7ea5e6fe48198ea47c2128c45fcdef8f49a8c8c76b8d78e4','[\"*\"]',NULL,NULL,'2023-05-02 01:09:02','2023-05-02 01:09:02');

/*Table structure for table `predmeti` */

DROP TABLE IF EXISTS `predmeti`;

CREATE TABLE `predmeti` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `naziv` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `predmeti` */

insert  into `predmeti`(`id`,`naziv`,`created_at`,`updated_at`) values 
(1,'Geografija','2023-05-01 23:15:42','2023-05-01 23:15:42'),
(2,'Istorija','2023-05-01 23:15:42','2023-05-01 23:15:42'),
(3,'Biologija','2023-05-01 23:15:42','2023-05-01 23:15:42');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `users` */

insert  into `users`(`id`,`name`,`email`,`email_verified_at`,`password`,`remember_token`,`created_at`,`updated_at`) values 
(1,'eko','ekosnauc@gmail.com','2023-05-01 23:49:00','$2y$10$l6ljFihRbR.dOkpDoUCALOI0fGcpZG87QmRJRfQa1SPSDnMhznPS6','ecQslfCAIZ','2023-05-01 23:49:00','2023-05-02 00:59:20');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
