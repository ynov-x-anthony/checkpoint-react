# Contrôle - React

## Objectif

Ce contrôle sert à **mesurer tes compétences React à un instant donné**. Il est
**noté sur 20**. Tu travailles seul·e, sur ta propre branche, et tu commit /
push après **chaque étape terminée**.

Il dure une demi-journée à une journée. Tout n'est pas forcément à finir : gère
ton temps et priorise (les algos d'abord, puis le projet, puis les bonus).

## Les grandes lignes

1. Cloner le dépôt localement à l'aide des commandes git
2. Immédiatement après le clonage, créer une nouvelle branche localement et basculer dessus
3. Pour nommer ta branche, utilise le modèle `{{firstname}}_{{LASTNAME}}` où :

- `{{firstname}}` est remplacé par ton prénom, en minuscules
- `{{LASTNAME}}` est remplacé par ton nom de famille, en majuscules

(par exemple, John Doe → `john_DOE`)

4. Ouvrir le dépôt cloné dans ton IDE
5. Faire un commit après chaque étape, avec un message qui met en évidence la partie terminée (par exemple `finished step 1`)
6. Pousser tes modifications vers GitHub, de préférence après chaque commit

## Barème général (/20)

| Partie                            | Points   | Bonus         |
| --------------------------------- | -------- | ------------- |
| Partie 1 - Algorithmes JS         | **4**    | +2            |
| Partie 2 - Projet "Macaron Union" | **16**   | +2            |
| **Total**                         | **/20**  | plafonné à 20 |

- Les points **bonus** (algos 3 & 4, étape 6 du projet) s'ajoutent, mais la note
  finale ne peut **pas dépasser 20/20**. Ils servent à compenser des points
  perdus ailleurs.
- **Malus git** : branche mal nommée ou absence de commits par étape → jusqu'à
  **-2** sur la note finale.
- À l'intérieur d'une étape, un code qui fonctionne mais négligé (variable non
  typée là où c'est demandé, `console` oublié, code mort…) peut coûter **-0,5**.

---

## Partie 1 - Algorithmes JS (~1 heure) - /4 (+2 bonus)

Résous ces exercices :

> [algo1.ts](./algo/1/countLetters.ts) - `countLetters`
>
> [algo2.ts](./algo/2/getFibonacciSequence.ts) - `getFibonacciSequence`

Des tests unitaires sont disponibles. Ils te permettront de savoir si tes
algorithmes fonctionnent correctement !

D'abord, installe les dépendances (`npm install` ou équivalent :wink:).
Ensuite, tu peux exécuter les tests :

```sh
npm run algo:test    # tous les tests

npm run algo:test:1  # tests du 1er algo uniquement
npm run algo:test:2  # tests du 2e algo uniquement
# etc... pour chaque algo.
```

Si tu as plus de temps, tu peux travailler sur ces algos **bonus** (facultatifs,
**ignore-les et reviens dessus une fois la Partie 2 terminée**) :

> [algo3.ts](./algo/3/getPoints.ts) - `getPoints`
>
> [algo4.ts](./algo/4/sumArrays.ts) - `sumArr`

### Notation Partie 1

| Exercice                       | Barème                                                          |
| ------------------------------ | ------------------------------------------------------------- |
| `countLetters` (algo 1)        | **2 pts** si tous les tests passent · 1 pt si une partie passe |
| `getFibonacciSequence` (algo 2)| **2 pts** si tous les tests passent · 1 pt si une partie passe |
| `getPoints` (algo 3 - bonus)   | **+1 pt** si tous les tests passent                            |
| `sumArr` (algo 4 - bonus)      | **+1 pt** si tous les tests passent                            |

> La notation des algos se fait **sur les tests**. Un algo qui ne passe aucun
> test = 0, même si l'intention est bonne.

---

## Partie 2 - Le projet "Macaron Union" (~3 heures) - /16 (+2 bonus)

Ton objectif est de voir où tu en es sur les concepts suivants :

- [ ] L'utilisation de `fetch`
- [ ] L'utilisation des props
- [ ] L'utilisation des states
- [ ] L'utilisation de `map` et `filter`
- [ ] Le hook `useEffect`
- [ ] La création de composants React
- [ ] La création de routes avec React Router

⚠️ N'oublie pas de copier le fichier `.env.sample` du dossier `client` et
renomme ta copie `.env`.

Lance ensuite les commandes suivantes :

```bash
npm install
npm run dev
```



Et ouvre l'adresse http://localhost:3000/ - la page **Instructions** détaille
les 5 étapes (+ 1 bonus) à réaliser dans `client/src/pages/MacaronList.tsx`.

### À propos des données d'exemple (`sample`)

Le fichier `MacaronList.tsx` fournit un tableau `sampleMacarons`. Il est là
**uniquement pour te permettre d'avancer** sur les étapes suivantes si tu bloques
sur le `fetch` de l'étape 1.

> **Utiliser `sampleMacarons` au lieu de récupérer les données depuis l'API te
> fait perdre l'intégralité des points de l'étape 1**, mais tu peux quand même
> gagner les points des étapes 2 à 5 si elles sont correctes.

Il n'existe **aucun sample pour les accessoires** : l'étape 3 exige un `fetch`
réel. Une étape 4 réalisée sur un tableau écrit "en dur" = 0.

### Notation Partie 2 (/16)

| Étape                                     | Points   | Ce qui est évalué                                                                                     |
| ---------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------- |
| **Step 1 - Récupérer les macarons**       | **4 pts** | `fetch` de `/api/macarons` dans un `useEffect`, stockage dans un `useState`, URL via `import.meta.env` |
| **Step 2 - Afficher tous les macarons**   | **3 pts** | `map` sur les macarons, composant `Macaron` avec la prop `data`, prop `key` (= id) sur chaque élément  |
| **Step 3 - Récupérer les accessoires**    | **3 pts** | `fetch` de `/api/accessories` dans un `useEffect`, données **typées**, tableau de dépendances correct  |
| **Step 4 - Remplir le sélecteur**         | **3 pts** | `map` des accessoires vers des `<option>`, `value` = id, `key` sur chaque option                       |
| **Step 5 - Filtrer la liste**             | **3 pts** | state du filtre, `<select>` **contrôlé** (`value` + `onChange`), `filter` avant le `map`, "---" = liste complète |
| **Step 6 - Page de détail (bonus)**       | **+2 pts** | page `MacaronDetails`, route `/macarons/:id`, `<Link>` depuis la liste, chargement du macaron avant le rendu |

**Barème par étape** - pour chaque étape :

- **Total** : la fonctionnalité marche + les consignes techniques de la colonne
  "Ce qui est évalué" sont respectées.
- **Moitié** : la fonctionnalité marche mais une consigne technique est ignorée
  (ex. pas de `key`, `select` non contrôlé, données non typées, fetch hors
  `useEffect`…).
- **0** : l'étape ne fonctionne pas, n'est pas commencée, ou repose sur des
  données `sample` / "en dur" alors qu'un `fetch` était demandé.

> Les étapes sont **indépendantes pour la notation** : rater le `fetch` de
> l'étape 1 (et utiliser le sample) n'empêche pas de marquer les points des
> étapes 2, 4 et 5.
