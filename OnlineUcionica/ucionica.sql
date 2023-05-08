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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `casovi` */

insert  into `casovi`(`id`,`lekcijaId`,`userId`,`created_at`,`updated_at`) values 
(6,2,1,'2023-05-04 14:06:19','2023-05-04 14:06:19'),
(7,7,1,'2023-05-04 14:30:20','2023-05-04 14:30:20');

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
  `naziv` varchar(255) DEFAULT NULL,
  `tezina` int(11) DEFAULT NULL,
  `trajanje` int(11) DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `predmetId` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `lekcije` */

insert  into `lekcije`(`id`,`naziv`,`tezina`,`trajanje`,`imageUrl`,`predmetId`,`created_at`,`updated_at`) values 
(1,'Populaciona politika Srbije',5,20,'https://www.infocentarjug.rs/wp-content/uploads/2018/10/Porodica-1210x642.jpg',1,'2023-05-04 12:36:00','2023-05-06 12:02:14'),
(2,'Izvori vode i gejziri',2,20,'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Strokkur_geyser_eruption%2C_close-up_view.jpg/640px-Strokkur_geyser_eruption%2C_close-up_view.jpg?%D0%93%D0%B5%D1%98%D0%B7%D0%B5%D1%8025599802',1,'2023-05-04 12:36:00','2023-05-04 12:36:00'),
(3,'Kretanje tektonskih ploca',4,45,'https://ocdn.eu/images/pulscms/ZWY7MDA_/d0c4f2961bfa53820dbf3f95e51f614c.jpg',1,'2023-05-04 12:36:00','2023-05-04 12:36:00'),
(4,'Jupiterovi sateliti',1,10,'https://srpskacafe.com/wp-content/uploads/2019/03/jupiterovi-sateliti.jpg',1,'2023-05-04 12:36:00','2023-05-04 12:36:00'),
(5,'Demografske odlike Azije',4,30,'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Asia_on_the_globe_%28red%29.svg/800px-Asia_on_the_globe_%28red%29.svg.png',1,'2023-05-04 12:36:00','2023-05-04 12:36:00'),
(6,'Sedimentne stene',5,50,'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Stadtroda_Sandstein.jpg/250px-Stadtroda_Sandstein.jpg',1,'2023-05-04 12:36:00','2023-05-04 12:36:00'),
(7,'Prvi svetski rat',2,20,'https://kaleidoskop-media.com/images/post-gallery/kliknasvetlost_1064_71280_full.jpg',2,'2023-05-04 12:36:00','2023-05-04 12:36:00'),
(8,'Egipatske piramide',1,15,'https://static.nationalgeographic.rs/Picture/17345/jpeg/kako_su_nastale_piramide_aps_593266843',2,'2023-05-04 12:36:00','2023-05-04 12:36:00'),
(9,'Istorija kineske civilizacije',4,35,'https://www.dnevno.rs/wp-content/uploads/2018/05/31259-kina.jpg',2,'2023-05-04 12:36:00','2023-05-04 12:36:00'),
(10,'Velika seoba naroda',5,60,'https://upload.wikimedia.org/wikipedia/sr/6/6c/Seoba_Srba.jpg',2,'2023-05-04 12:36:00','2023-05-04 12:36:00'),
(11,'Cezarova osvajanja',3,40,'https://povijest.hr/wp-content/uploads/2016/01/Siege-alesia-vercingetorix-jules-cesar.jpg',2,'2023-05-04 12:36:00','2023-05-04 12:36:00'),
(12,'Deoba celija',4,25,'https://image.slidesharecdn.com/deobaelije-150922183447-lva1-app6892/85/deoba-elije-2-320.jpg?cb=1666045024',3,'2023-05-04 12:36:00','2023-05-04 12:36:00'),
(13,'Gmizavci i vodozemci',2,25,'https://s3.eu-central-1.amazonaws.com/web.repository/biodiverzitet-media-static/categories/2021/474x474/05-vodozemci-gmizavci.png',3,'2023-05-04 12:36:00','2023-05-04 12:36:00'),
(14,'Razmnozavanje kod golosemenica',5,25,'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Abies_koreana_(szyszki).JPG/1200px-Abies_koreana_(szyszki).JPG',3,'2023-05-04 12:36:00','2023-05-04 12:36:00'),
(15,'Ekosistemi u Srbiji',1,10,'https://ekospark.com/info/06_biodiverzitet/ekosistem/i/ekosistem.jpg',3,'2023-05-04 12:36:00','2023-05-04 12:36:00'),
(16,'SantjagoBernabeu',2,10,'fdsgsd',1,'2023-05-05 13:58:14','2023-05-05 13:58:14'),
(20,'Snuce',1,10,'https://petmagazine.rs/wp-content/uploads/2019/07/patuljasti-snaucer-2-680x1024.jpg',NULL,'2023-05-05 18:48:30','2023-05-06 13:42:51'),
(25,NULL,NULL,NULL,NULL,NULL,'2023-05-07 17:14:17','2023-05-07 17:23:22');

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
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `personal_access_tokens` */

insert  into `personal_access_tokens`(`id`,`tokenable_type`,`tokenable_id`,`name`,`token`,`abilities`,`last_used_at`,`expires_at`,`created_at`,`updated_at`) values 
(1,'App\\Models\\User',1,'auth_token','5968315f35a3c5b10421b9d2e40f75afeb7171de803ec3cf9c17cd6af10a50f5','[\"*\"]',NULL,NULL,'2023-05-01 23:49:24','2023-05-01 23:49:24'),
(2,'App\\Models\\User',1,'auth_token','cab0d4a9a55a7ddd7ea5e6fe48198ea47c2128c45fcdef8f49a8c8c76b8d78e4','[\"*\"]',NULL,NULL,'2023-05-02 01:09:02','2023-05-02 01:09:02'),
(3,'App\\Models\\User',4,'auth_token','470e7b356ec81eeb10be2f7e9a05f9329e68d7f58db0c62493a4ac09376f7019','[\"*\"]',NULL,NULL,'2023-05-02 19:52:03','2023-05-02 19:52:03'),
(4,'App\\Models\\User',4,'auth_token','e09b29d6dda97ce3ef778bd6174665a055003451d23e9a612673a80843732933','[\"*\"]',NULL,NULL,'2023-05-02 19:52:19','2023-05-02 19:52:19'),
(5,'App\\Models\\User',4,'auth_token','f2ae3eef68bb25d17b978fa261968eef552af97a15769d9ee8f590670b14d928','[\"*\"]',NULL,NULL,'2023-05-02 20:02:38','2023-05-02 20:02:38'),
(6,'App\\Models\\User',6,'auth_token','24f5fc07e7035317357572ad6c7414fc9997ce1020b6f912317d3fae9dadaf4e','[\"*\"]',NULL,NULL,'2023-05-03 09:53:51','2023-05-03 09:53:51'),
(7,'App\\Models\\User',6,'auth_token','c852ab78e01c5ed2b5911dba3e7a69b092eff245d15cac7fea583f5ed7682e8d','[\"*\"]',NULL,NULL,'2023-05-03 11:30:02','2023-05-03 11:30:02'),
(8,'App\\Models\\User',4,'auth_token','a835f410a0c25e9de358af9e6f5c9fc5e96e428ce3789b3aa26efab68057e9d4','[\"*\"]',NULL,NULL,'2023-05-03 11:31:15','2023-05-03 11:31:15'),
(9,'App\\Models\\User',4,'auth_token','a56d057ccf7056b476207a601b9cea97cc710bce168e9db2bd7ea8a589555222','[\"*\"]',NULL,NULL,'2023-05-03 11:31:56','2023-05-03 11:31:56'),
(10,'App\\Models\\User',4,'auth_token','560c58f180c6f308f1c7efe1ad3e8f660f2840277bbcb9666797e321507629e6','[\"*\"]',NULL,NULL,'2023-05-03 13:13:34','2023-05-03 13:13:34'),
(11,'App\\Models\\User',4,'auth_token','fe0033e1c9fb45fb87d1de249909711784ce8bc319f4bfb720c136b16918722f','[\"*\"]',NULL,NULL,'2023-05-03 13:15:11','2023-05-03 13:15:11'),
(12,'App\\Models\\User',4,'auth_token','12c1166c00c67adb4345cd850b2aac4c6e127715651fb5bacd2d479ac9c78f2c','[\"*\"]',NULL,NULL,'2023-05-03 13:15:48','2023-05-03 13:15:48'),
(13,'App\\Models\\User',4,'auth_token','4889842e6bd9686d6f09e4cc189aed1925492302d955358e324e32f65df21006','[\"*\"]',NULL,NULL,'2023-05-03 13:29:45','2023-05-03 13:29:45'),
(14,'App\\Models\\User',4,'auth_token','534411d1c8a4c11798db5b1290cf92413c12a49df791e1fe7039023c944509b3','[\"*\"]',NULL,NULL,'2023-05-03 13:37:56','2023-05-03 13:37:56'),
(15,'App\\Models\\User',4,'auth_token','e84a112dc5067895e0f04828a780e3ea36e7c0f0c41716c7dcc7a604342f2369','[\"*\"]',NULL,NULL,'2023-05-03 14:48:55','2023-05-03 14:48:55'),
(16,'App\\Models\\User',4,'auth_token','e4bb266e9c4014df49b3d47cf8c8fe6969b854854e84300cb89b1b1ec4b9eb3e','[\"*\"]',NULL,NULL,'2023-05-05 12:20:09','2023-05-05 12:20:09'),
(17,'App\\Models\\User',4,'auth_token','64314e3404f56b2e859bd591c0bafec7849a1a030bb8c9f29402fbe9d2980edd','[\"*\"]',NULL,NULL,'2023-05-05 12:23:12','2023-05-05 12:23:12'),
(18,'App\\Models\\User',4,'auth_token','7fda8d2d60a39ff1898dc04043a2c518c70f77ec35e4043d5716cbdf890975b3','[\"*\"]',NULL,NULL,'2023-05-05 12:23:53','2023-05-05 12:23:53'),
(19,'App\\Models\\User',4,'auth_token','d4d2ebe26584907f533a124d7713db0d2ff5578e8b7fefce5cbe7aaa642f0356','[\"*\"]',NULL,NULL,'2023-05-05 12:25:45','2023-05-05 12:25:45'),
(20,'App\\Models\\User',4,'auth_token','4799a73896bd25f9d55dba98c1304187f75845161fd868cbf0b8de86309281dd','[\"*\"]',NULL,NULL,'2023-05-05 12:27:21','2023-05-05 12:27:21'),
(21,'App\\Models\\User',4,'auth_token','94bbe880d1c1ef7218d7b8c1572be6460e4fe694122e4b41807a7d10e2c0281e','[\"*\"]',NULL,NULL,'2023-05-05 13:09:15','2023-05-05 13:09:15'),
(22,'App\\Models\\User',4,'auth_token','49122c2e3a9dc9aef918b485027f7051440a679e5e348399acf312b860bd6e3e','[\"*\"]',NULL,NULL,'2023-05-06 11:39:57','2023-05-06 11:39:57'),
(23,'App\\Models\\User',4,'auth_token','f7922af9d47b8134c5f75cbfa8a75a20c1ecbd2708655c2a24b9c8a9c97857e5','[\"*\"]',NULL,NULL,'2023-05-06 12:33:13','2023-05-06 12:33:13'),
(24,'App\\Models\\User',4,'auth_token','c3eeef9c6773e394b68cc2609e3b4f1d8adafea98d1f9fb1ac1b62954ff9a280','[\"*\"]',NULL,NULL,'2023-05-06 13:06:25','2023-05-06 13:06:25'),
(25,'App\\Models\\User',7,'auth_token','eb538f6ee5a0663d8094b19cb4bb2f9be2363c5c8cf593ec167f8f9df639092b','[\"*\"]',NULL,NULL,'2023-05-06 13:18:06','2023-05-06 13:18:06'),
(26,'App\\Models\\User',4,'auth_token','6368e472f55d5b2252022dddc7301b71e019e85c1e72776930054805f80fcfb0','[\"*\"]',NULL,NULL,'2023-05-06 13:42:00','2023-05-06 13:42:00'),
(27,'App\\Models\\User',4,'auth_token','b4f03cc9a40afe2e41e7c68a54c6d6895b9434b3ca6bb0865627f148dc6e4c6a','[\"*\"]',NULL,NULL,'2023-05-06 18:54:11','2023-05-06 18:54:11'),
(28,'App\\Models\\User',6,'auth_token','58c1b8fcdc370dbf8549ed72fe8bd2b49895fc2ee1311b26cfbe0ac992d88f1e','[\"*\"]',NULL,NULL,'2023-05-06 18:56:58','2023-05-06 18:56:58'),
(29,'App\\Models\\User',4,'auth_token','d3687de00c80a26a8b46646bcf522cfdd7e9955a95fd7e021cb549ac979121a5','[\"*\"]',NULL,NULL,'2023-05-06 19:05:05','2023-05-06 19:05:05'),
(30,'App\\Models\\User',4,'auth_token','d02e6c6cef8655906c46f1a48cda5fbde3912ba865e63bc92d728b9460a197bd','[\"*\"]',NULL,NULL,'2023-05-07 12:31:09','2023-05-07 12:31:09'),
(31,'App\\Models\\User',4,'auth_token','259e6b97012c0fe671ec0e41fe113f55746e0fe49c41de7e8d9ee7beb52b0ac1','[\"*\"]',NULL,NULL,'2023-05-07 15:31:18','2023-05-07 15:31:18'),
(32,'App\\Models\\User',4,'auth_token','3f884fcb2faa707c164fb63de53d3b4466b0aa67455f7150b56f3aed2de5be3d','[\"*\"]',NULL,NULL,'2023-05-07 15:59:47','2023-05-07 15:59:47');

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
(1,'Geografija','2023-05-04 12:36:00','2023-05-04 12:36:00'),
(2,'Istorija','2023-05-04 12:36:00','2023-05-04 12:36:00'),
(3,'Biologija','2023-05-04 12:36:00','2023-05-04 12:36:00');

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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `users` */

insert  into `users`(`id`,`name`,`email`,`email_verified_at`,`password`,`remember_token`,`created_at`,`updated_at`) values 
(1,'eko','ekosnauc@gmail.com','2023-05-01 23:49:00','$2y$10$l6ljFihRbR.dOkpDoUCALOI0fGcpZG87QmRJRfQa1SPSDnMhznPS6','ecQslfCAIZ','2023-05-01 23:49:00','2023-05-02 00:59:20'),
(4,'roko','roko1@gmail.com','2023-05-02 19:51:39','$2y$10$pweKC2NiWrn7SvLaExNaDuecqkRNTw/upz0TqkxKBwTXfiABDjLPe','giWO9gLIuS','2023-05-02 19:51:39','2023-05-02 19:51:39'),
(5,'Viktor','viktor@gmail.com','2023-05-03 09:41:38','$2y$10$z01jG/.lpVAOtvxo.jiFL.9vGD1ItuCGAjtrQkNqj39OI5oh628ry','r80slDRRbC','2023-05-03 09:41:38','2023-05-03 09:41:38'),
(6,'Beli','mackat@gmail.com','2023-05-03 09:53:41','$2y$10$wiOF4CRCm3CGFD5llyXXXu2s9fyDovl/3iTwRRY7ZfSFAtn42xlxO','8M2Casa1Qi','2023-05-03 09:53:41','2023-05-03 09:53:41'),
(7,'Tor','tor@gmail.com','2023-05-06 13:17:37','$2y$10$U8i327J2kkPiCu2Fl6icouDHih8AM1WQHvMv5D.yXvExPhDSDJ7Au','NyFramQWP8','2023-05-06 13:17:37','2023-05-06 13:17:37');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
