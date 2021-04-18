CREATE TABLE `world`.`budget` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NULL,
  `year` INT NULL,
  `program` INT NULL,
  `amount_original` DECIMAL NULL DEFAULT 0,
  `amount_updated` DECIMAL NULL DEFAULT 0,
  `amount_real` DECIMAL NULL DEFAULT 0,
  `comment` VARCHAR(255) NULL,
  `status` VARCHAR(45) NULL,
  `previous` INT NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `world`.`budget`
ADD INDEX `fk_idx` (`previous` ASC) VISIBLE;
;
ALTER TABLE `world`.`budget`
ADD CONSTRAINT `fk`
FOREIGN KEY (`previous`)
REFERENCES `world`.`budget` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

INSERT INTO `world`.`budget` (`title`, `year`, `program`, `amount_original`, `amount_updated`, `amount_real`, `comment`, `status`)
VALUES ('Moderná prezentácia pamiatok a pamätihodností MČ', '2020', '1', '0', '0', '0', 'niCE life projekt. Náhradné čerpanie za neschválený pôvodný projekt. Pre potreby niCE life projektu sú potrebné iba bežné výdavky. Kapitálové výdavky v roku 2020 nebudú čerpané', 'error');