-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `citas`
--

DROP TABLE IF EXISTS `citas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `citas` (
  `id_Reserva` int NOT NULL,
  `id_Menus` int NOT NULL,
  `estado` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_Reserva`,`id_Menus`),
  KEY `fk_Reservas_has_Menus_Menus1_idx` (`id_Menus`),
  KEY `fk_Reservas_has_Menus_Reservas1_idx` (`id_Reserva`),
  CONSTRAINT `fk_Reservas_has_Menus_Menus1` FOREIGN KEY (`id_Menus`) REFERENCES `menus` (`idMenus`),
  CONSTRAINT `fk_Reservas_has_Menus_Reservas1` FOREIGN KEY (`id_Reserva`) REFERENCES `reservas` (`idReserva`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `idComentarios` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) NOT NULL,
  `comentario` varchar(450) DEFAULT NULL,
  `estrellas` int DEFAULT NULL,
  `Usuarios_idUsuario` int NOT NULL,
  PRIMARY KEY (`idComentarios`,`Usuarios_idUsuario`),
  KEY `fk_Comentarios_Usuarios1_idx` (`Usuarios_idUsuario`),
  CONSTRAINT `fk_Comentarios_Usuarios1` FOREIGN KEY (`Usuarios_idUsuario`) REFERENCES `usuarios` (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `menus`
--

DROP TABLE IF EXISTS `menus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menus` (
  `idMenus` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `precio` decimal(8,2) NOT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `img` varchar(250) DEFAULT NULL,
  `categoria` varchar(45) NOT NULL,
  PRIMARY KEY (`idMenus`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `publicaciones`
--

DROP TABLE IF EXISTS `publicaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publicaciones` (
  `idPublicaciones` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) NOT NULL,
  `publicacion` varchar(450) NOT NULL,
  `Usuarios_idUsuario` int NOT NULL,
  PRIMARY KEY (`idPublicaciones`,`Usuarios_idUsuario`),
  KEY `fk_Publicaciones_Usuarios1_idx` (`Usuarios_idUsuario`),
  CONSTRAINT `fk_Publicaciones_Usuarios1` FOREIGN KEY (`Usuarios_idUsuario`) REFERENCES `usuarios` (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `reservas`
--

DROP TABLE IF EXISTS `reservas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservas` (
  `idReserva` int NOT NULL AUTO_INCREMENT,
  `numPersonas` int NOT NULL,
  `fecha_hora` datetime NOT NULL,
  `numMesa` int DEFAULT NULL,
  `Usuarios_idUsuario` int NOT NULL,
  PRIMARY KEY (`idReserva`),
  KEY `fk_Reservas_Usuarios1_idx` (`Usuarios_idUsuario`),
  CONSTRAINT `fk_Reservas_Usuarios1` FOREIGN KEY (`Usuarios_idUsuario`) REFERENCES `usuarios` (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `correo` varchar(45) NOT NULL,
  `contrasena` varchar(45) NOT NULL,
  `nombre_apellido` varchar(50) DEFAULT NULL,
  `rol` varchar(20) NOT NULL,
  `numero` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE KEY `contrasena_UNIQUE` (`contrasena`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-09 13:09:35
