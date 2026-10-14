# 🚀 GoMyCode Bootcamp - Checkpoint ES6

[![Node.js Tests](https://img.shields.io/badge/tests-22%2F22%20passing-brightgreen.svg)]()
[![JavaScript](https://img.shields.io/badge/ECMAScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)]()
[![CodeWars](https://img.shields.io/badge/CodeWars-300%2B%20Points-red.svg?logo=codewars)]()
[![Student](https://img.shields.io/badge/Student-Karma--22%20(Darius%20Ange)-blue.svg)]()

> Projet réalisé dans le cadre du **Bootcamp Full Stack Software Developer de GoMyCode**.  
> Ce checkpoint met en pratique les concepts fondamentaux et avancés de **JavaScript moderne (ES6+)** et valide plus de **300 points de challenges algorithmiques CodeWars**.

---

## 📋 Table des Matières

- [Aperçu du Projet](#-aperçu-du-projet)
- [Fonctionnalités ES6 Couvertes](#-fonctionnalités-es6-couvertes)
- [Structure du Projet](#-structure-du-projet)
- [Détail des Modules & Algorithmes](#-détail-des-modules--algorithmes)
- [CodeWars Katas (300 Points)](#-codewars-katas-300-points)
- [Installation & Exécution](#-installation--exécution)
- [Interface Web Interactive](#-interface-web-interactive)
- [Auteur & Contact](#-auteur--contact)

---

## 🎯 Aperçu du Projet

L'objectif de ce point de contrôle est de démontrer une maîtrise approfondie d'ECMAScript 2015 (ES6) et versions supérieures à travers :
1. La manipulation avancée des chaînes de caractères et des tableaux.
2. L'écriture d'algorithmes mathématiques et de fonctions récursives pures.
3. La résolution de Katas algorithmiques populaires (8 kyu à 5 kyu) issus de **CodeWars**.
4. La mise en place d'une suite de tests unitaires automatisés avec `node:test` (22/22 tests réussis).
5. Une interface utilisateur web interactive moderne pour tester visuellement chaque fonction.

---

## ✨ Fonctionnalités ES6 Couvertes

- **Arrow Functions (`() => {}`)** : Syntaxe concise et liaison lexicale du `this`.
- **Destructuring** : Déstructuration d'objets et de tableaux (`const [a, b] = arr; const { min, max } = obj;`).
- **Spread & Rest Operators (`...`)** : Décomposition et rassemblement d'arguments.
- **Template Literals (`` `${var}` ``)** : Interpolation d'expressions et chaînes multi-lignes.
- **Default Parameters** : Paramètres par défaut sécurisés pour les fonctions.
- **Collections ES6 (`Set`, `Map`)** : Déduplication de tableaux en complexité $O(N)$.
- **Higher-Order Array Methods** : `map()`, `filter()`, `reduce()`, `flat()`, `flatMap()`, `sort()`.
- **Modules ES6** : `import` / `export` natifs avec configuration `"type": "module"`.

---

## 📁 Structure du Projet

```text
01-es6-checkpoint/
├── index.html                   # Interface web interactive de démonstration
├── styles.css                   # Styles modernes en Dark Mode & Glassmorphism
├── package.json                 # Métadonnées et scripts npm
├── README.md                    # Documentation complète du checkpoint
├── src/
│   ├── index.js                 # Point d'entrée principal (démonstration console)
│   └── algorithms/
│       ├── stringUtils.js       # Fonctions sur les chaînes (palindrome, voyelles, etc.)
│       ├── arrayUtils.js        # Fonctions sur les tableaux (min/max, reduce, chunk, etc.)
│       ├── mathLogic.js         # Fonctions mathématiques (factorielle, fibonacci, premier)
│       └── codewarsKatas.js     # Résolution des Katas CodeWars (SpinWords, DigitalRoot, etc.)
└── tests/
    └── algorithms.test.js       # Suite de 22 tests unitaires avec node:test
```

---

## 🧠 Détail des Modules & Algorithmes

### 1. `stringUtils.js`
- `reverseString(str)` : Inverse n'importe quelle chaîne avec spread et reverse.
- `isPalindrome(str)` : Vérifie si un texte est un palindrome (insensible à la casse/ponctuation).
- `countVowels(str)` : Compte les voyelles dans un texte via regex ES6.
- `capitalizeWords(sentence)` : Met en majuscule chaque mot.
- `truncateText(text, maxLength, suffix)` : Tronque avec des paramètres par défaut.
- `maskString(str, unmaskedCount, maskChar)` : Masquage sécurisé de cartes ou données sensibles.

### 2. `arrayUtils.js`
- `findMinMax(arr)` : Retourne le min et max via `Math.min(...arr)`.
- `sumArray(arr)` & `averageArray(arr)` : Calculs via `Array.prototype.reduce()`.
- `removeDuplicates(arr)` : Élimination des doublons instantanée via `new Set()`.
- `filterEvens(arr)` / `filterOdds(arr)` : Filtrage fonctionnel.
- `chunkArray(arr, size)` : Découpage d'un tableau en blocs de taille $N$.
- `sortByProperty(arr, key, ascending)` : Tri dynamique d'objets.

### 3. `mathLogic.js`
- `factorial(n)` : Calcul récursif de la factorielle.
- `isPrime(num)` : Test de primalité optimisé ($O(\sqrt{n})$).
- `fibonacci(n)` : Génération de la suite de Fibonacci.
- `fizzBuzz(limit)` : Algorithme classique avec `Array.from()` et ternaires ES6.

---

## 🏆 CodeWars Katas (300 Points)

| Kata | Difficulté | Description | Fonction |
| :--- | :---: | :--- | :--- |
| **Two to One** | 7 kyu | Fusion de deux chaînes avec lettres uniques triées | `twoToOne(s1, s2)` |
| **Spin Words** | 6 kyu | Inverse tous les mots de 5 lettres ou plus | `spinWords(str)` |
| **Digital Root** | 6 kyu | Somme récursive de tous les chiffres d'un nombre | `digitalRoot(n)` |
| **Take a 10 Minute Walk** | 6 kyu | Vérifie un parcours de 10 blocs revenant au départ | `isValidWalk(walk)` |
| **Find Missing Letter** | 6 kyu | Détecte la lettre manquante dans une séquence alphabétique | `findMissingLetter(arr)` |
| **RGB To Hex Conversion** | 5 kyu | Conversion RVB vers code couleur Hexadécimal | `rgbToHex(r, g, b)` |
| **Who likes it ?** | 6 kyu | Système de notification de likes Facebook avec template literals | `likes(names)` |

---

## ⚙️ Installation & Exécution

### 1. Prérequis
- [Node.js](https://nodejs.org/) version 18 ou supérieure.

### 2. Cloner le dépôt
```bash
git clone https://github.com/Karma-22/gomycode-es6-checkpoint.git
cd gomycode-es6-checkpoint
```

### 3. Lancer la démonstration en console
```bash
npm start
# ou directement :
node src/index.js
```

### 4. Exécuter les tests unitaires
```bash
npm test
```
*Sortie attendue :*
```text
ℹ tests 22
ℹ suites 4
ℹ pass 22
ℹ fail 0
```

---

## 🌐 Interface Web Interactive

Ouvrez simplement le fichier `index.html` dans n'importe quel navigateur moderne (Chrome, Firefox, Edge) ou avec l'extension **Live Server** de VS Code pour tester interactivement toutes les fonctions avec retour visuel immédiat.

---

## 👨‍💻 Auteur

- **Étudiant** : Darius Ange (Karma-22)
- **GitHub** : [@Karma-22](https://github.com/Karma-22)
- **Formation** : Full Stack Software Developer - GoMyCode
