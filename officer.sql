-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2016 at 07:27 AM
-- Server version: 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ltodb`
--

-- --------------------------------------------------------

--
-- Table structure for table `officer`
--

CREATE TABLE IF NOT EXISTS `officer` (
  `OFFI_CODE` int(10) NOT NULL,
  `USER_NAME` varchar(20) COLLATE utf8mb4_sinhala_ci NOT NULL,
  `PWD` varchar(20) COLLATE utf8mb4_sinhala_ci NOT NULL,
  `STATUS` varchar(10) COLLATE utf8mb4_sinhala_ci NOT NULL,
  `CRE_DATE` varchar(20) COLLATE utf8mb4_sinhala_ci NOT NULL COMMENT 'CREATED DATE',
  `OFFI_NAME` varchar(100) COLLATE utf8mb4_sinhala_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_sinhala_ci;

--
-- Dumping data for table `officer`
--

INSERT INTO `officer` (`OFFI_CODE`, `USER_NAME`, `PWD`, `STATUS`, `CRE_DATE`, `OFFI_NAME`) VALUES
(1, 'shariq', 'shariq', 'Active', '', 'Mr.Shariq');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `officer`
--
ALTER TABLE `officer`
  ADD PRIMARY KEY (`OFFI_CODE`), ADD UNIQUE KEY `USER_NAME` (`USER_NAME`), ADD UNIQUE KEY `USER_NAME_2` (`USER_NAME`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `officer`
--
ALTER TABLE `officer`
  MODIFY `OFFI_CODE` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
DELIMITER $$
--
-- Events
--
CREATE DEFINER=`root`@`localhost` EVENT `DayEnd` ON SCHEDULE EVERY 10 SECOND STARTS '2015-07-17 00:00:00' ENDS '2017-10-17 00:00:00' ON COMPLETION NOT PRESERVE ENABLE DO BEGIN

DECLARE finished INTEGER DEFAULT 0;
DECLARE Hto varchar(100) DEFAULT "";
DECLARE DLY_C varchar(100) DEFAULT "";
DECLARE CNTR_NO varchar(100) DEFAULT "";
-- DECLARE PENALTY varchar(100) DEFAULT "";
DECLARE ITMCD varchar(100) DEFAULT "";
 
-- declare cursor 
DEClARE itm CURSOR FOR
SELECT C.H_TO"H_TO",
	   C.DLY_CHRG"DLY_CHRG",
	   C.CONTR_NO"CONTR_NO",
	   C.ITM_CODE"ITM_CODE"
FROM contract_details C , contract_header CC
WHERE  C.CONTR_NO=CC.CONTR_NO AND
		CC.CONTR_STS='A';

-- declare NOT FOUND handler
DECLARE CONTINUE HANDLER FOR NOT FOUND SET finished = 1;

OPEN itm;
 
	get_itms: LOOP
 
		FETCH itm INTO Hto,DLY_C,CNTR_NO,ITMCD;
 
        IF finished = 1 THEN
        LEAVE get_itms;
        END IF;
 
	 IF STR_TO_DATE(Hto,'%Y-%m-%d')< CURDATE() THEN
START TRANSACTION;

		-- INSERT INTO pro_categories VALUES(CNTR_NO,"111");

		UPDATE contract_header SET PENALTY_AMT=(PENALTY_AMT+DLY_C) WHERE CONTR_NO=CNTR_NO;
		
		-- SELECT PENALTY_AMT INTO PENALTY FROM contract_header WHERE CONTR_NO=CNTR_NO;

	 INSERT INTO contr_penalty (`CONTR_NO`,`ITM_CODE`,`PENALTY_DATE`,`AMT`) VALUES(CNTR_NO,ITMCD,CURDATE(),DLY_C);

COMMIT;
	 END IF;


 
	END LOOP get_itms;
 
CLOSE itm;



END$$

DELIMITER ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
