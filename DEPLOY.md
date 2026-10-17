# FMPM Flashcards — Guide de mise en ligne

Site statique : comptes (Google + email), progression sauvegardée dans le
cloud, classement, plan 32 semaines synchronisé, codes d'activation liés
au compte. **Statique** (GitHub Pages : `fmpm-flashcards.github.io`) +
**Firebase** (Auth + Firestore, projet `fmpm-flashcards`).

Contenu : 350 sujets, 10 487 flashcards (30/sujet, 3 sujets partiels), 5 disciplines —
Anatomie (48), Biologie (46), Pathologie médicale (125),
Pathologie chirurgicale (81), Urgences (51).
Formule unique : Pro 100 DH à vie. Parrainage : 15 DH par vente, retrait dès 30 DH.
Sources : programme officiel « PROG RES/INT MARRAKECH.pdf » (sujets) +
cours MOUNIB 2023 (Anatomie, Biologie, Patho Med/Chir, Urgences Med/Chir).

## Étape 1 — Créer le projet Firebase

1. console.firebase.google.com → *Add project* → nomme-le `fmpm-flashcards`
   (désactive Google Analytics, inutile ici).
2. **Build → Authentication → Get started** → active **Google** et **Email/Password**.
3. **Project Overview → Add app → Web** → nomme-la `fmpm-web` → copie l'objet
   `firebaseConfig` dans `firebase-config.js` (remplace le PLACEHOLDER).
4. **Build → Firestore Database → Create database** → *Start in production mode*,
   région `europe-west1`.
5. Onglet **Rules** → colle le contenu de **`firestore.rules`** → **Publish**.
   (L'admin est déjà `anzajewls@gmail.com`.)
6. **Authentication → Settings → Authorized domains** → ajoute
   `fmpm-flashcards.github.io`.

## Étape 2 — Générateur de codes privé

Comme FMPR/FMPA/FMPT : codes à usage unique via le panneau admin
(`fmpm-admin`, à créer comme les autres) ou le générateur privé existant.
⚠️ Ne jamais mettre en ligne un fichier contenant le secret maître.

## Étape 3 — Déployer sur GitHub Pages

1. Crée le dépôt `fmpm-flashcards/fmpm-flashcards.github.io`.
2. Pousse le contenu de `fmpm-full/` (**sauf** `firestore.rules` — inutile en ligne,
   et **sauf** `hidden_files/` — sources, excerpts, scripts de build).
3. Le site est servi à `https://fmpm-flashcards.github.io/`.

## Étape 4 — Checklist de test

- [ ] Créer un compte (Google + email) → arrive sur l'accueil
- [ ] Mode démo : 5 cartes/sujet, classement/plan verrouillés
- [ ] Entrer un code dans Profil → Pro activé ✅
- [ ] Rejouer un code déjà utilisé → refusé ✅
- [ ] Faire des cartes → score + XP → apparaître dans le classement
- [ ] Cocher une tâche du plan → recharger → toujours cochée
- [ ] Vérifier les 351 sujets présents (diff sujets officiels vs index.json = 0 manquant)

## Notes

- **Coût : 0.** Firebase Spark (gratuit) + GitHub Pages (gratuit).
- **Offline** : le service worker met en cache le site + les données après la
  1re visite ; Firestore garde la progression en local et synchronise au retour
  du réseau.
- **Logos** : `fmpm-logo-circle.jpg` / `fmpm-logo-banner.jpg` sont des
  placeholders générés — remplacer par les vrais logos FMPM quand disponibles.
- **Couverture** : chaque sujet du programme officiel a 30 cartes, vérifié par
  diff programmatique (voir `hidden_files/sources/`).
