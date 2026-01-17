
septembre 2025, nous avions un prototype de notre application mindlet developper tout au long de notre annee de master 1 .
architecture generale du projet : 
- frontend : application mobile en react native
- backend : api fastapi en python, service ia pour la generation de contenu, embeddings, analyse semantique
- base de donnees : postgresql
- base vectorielle : chroma db
- stockage objets : minio

au depart mindlet se projetai comme un projet completement opensource, independant de tout service tiers.
mais au fil du temps nous avons realise que pour garantir une experience utilisateur fluide et performante, il etait necessaire d'integrer certains services tiers, notamment pour l'hebergement et la scalabilite de l'application.
nous avons donc decide d'utiliser des services cloud pour l'hebergement de notre backend et de notre base de donnees, tout en conservant une partie de notre infrastructure en opensource.

nous avons donc pris linitiative de migrer le projet petit a petit vers une architecture hybride, combinant le meilleur des deux mondes :
- une partie opensource pour garantir la transparence et la personnalisation de l'application
- des services tiers pour assurer la performance, la scalabilite et la fiabilite de l'application.

architecture cible du projet :
- frontend : application mobile en react native
- backend : api en laravel, hebergee sur un service cloud avec kubernetes pour la scalabilite
- service ia : langchain, langraph, cloud pour la generation de contenu, embeddings, analyse semantique
- base de donnees : postgresql hebergee sur un service cloud
- base vectorielle : qdrant
- stockage objets : minio heberge sur un service cloud

tout au long du semestre, nous avons eu des haut et des bas, des moments de doute et des moments d'excitation.
beaucoup de recherches, d'essais avec differentes technologies, des echecs et des reussites.

notre status d'etudiant entrepreneur nous a permis de participer au concours pepite france, ou nous avons eu l'opportunite de briller parmis les 30 laureats nationaux, ce qui a ete une experience tres enrichissante et motivante pour toute l'equipe.

en parallele, nous doutions enormement quant au deploiement de notre application sur les stores mobiles, la communication au sein de l'universite de corse, et la gestion de la propriete intellectuelle.
beaucoup de questions ethiques et legales se posaient, notamment en ce qui concerne l'utilisation de l'intelligence artificielle dans notre application.
nous avons donc decide de consulter des experts juridiques et de nous entourer de mentors pour nous guider dans ces aspects complexes.

tous ces defis nous ont fait grandement reflechir et ont fait enormement evoluer notre vision du projet mindlet.
nous avons realise que pour reussir, il ne suffisait pas d'avoir une bonne idee, mais qu'il fallait aussi savoir s'adapter, apprendre de ses erreurs, et etre ouvert aux conseils et aux critiques.

nous avons tant bien que mal reussi a lancer une version beta de notre application a la fin de l'annee universitaire, en parrallel nous avons produit enormement de code et fonctionnalites par peur de ne pas etre a la hauteur des attentes en terme de perfomance.

ce lancement beta a ete un moment fort pour toute l'equipe, et s'est revele etre un echec technique important.
nous avons recu de nombreux retours d'utilisateurs, mettant en lumiere des bugs critiques et des problemes de technique majeurs.
ceci nous a pousse a revoir completement notre approche du developpement, en mettant l'accent sur la qualite, les tests et la fiabilite de notre application.
nous avons decide de ralentir le rythme de developpement pour nous concentrer sur la stabilisation et l'amelioration de l'experience utilisateur.

fin decembre 2025, nous avons eu l'occasion de presenter notre projet a un entrepreneur local, ce qui nous a permis d'obtenir des conseils precieux et de nouer des contacts importants pour l'avenir de mindlet.
suite a ces echanges, nous avons decide de revoir notre strategie de communication et de marketing, en mettant l'accent sur la valeur ajoutee de notre application et en ciblant des segments de marche plus precis.

mindlet se projete desormais vers le marche b2b, en visant les entreprises et les institutions educatives comme principaux clients.
nous avons commence a developper des fonctionnalites specifiques pour repondre aux besoins de ces clients, notamment en termes de personnalisation, creation de contenu, parcous d'apprentissage et suivi des performances.

au final, cette premiere annee de master 2 a ete une experience incroyablement enrichissante, pleine d'apprentissages et de decouvertes.

