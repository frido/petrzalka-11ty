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

CREATE TABLE `world`.`grant_subject` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `world`.`grant` (
`id` INT NOT NULL AUTO_INCREMENT,
`subject` INT NOT NULL,
`year` INT NOT NULL,
`amount` DECIMAL(10,2) NOT NULL,
`detail` VARCHAR(255) NULL,
PRIMARY KEY (`id`),
INDEX `fk_idx` (`subject` ASC) VISIBLE,
CONSTRAINT `fk_grant_grant_subject`
  FOREIGN KEY (`subject`)
  REFERENCES `world`.`grant_subject` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION);
