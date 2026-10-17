// ===========================================================================
//  FMPM Flashcards — configuration Firebase (projet dédié)
//  Projet : fmpm-flashcards | Compte : anzajewls@gmail.com
//  Créé le 2026-10-17. Auth Email/Password + Google activés, Firestore europe-west1.
// ===========================================================================
export const firebaseConfig = {
  apiKey: "AIzaSyAXmdC45pDJrXzrtWvvpDZnHEej-RG0KWg",
  authDomain: "fmpm-flashcards.firebaseapp.com",
  projectId: "fmpm-flashcards",
  storageBucket: "fmpm-flashcards.firebasestorage.app",
  messagingSenderId: "643591051713",
  appId: "1:643591051713:web:6ff0860675a056e73af740"
};

// Email de l'administrateur — seul cet email peut générer des codes.
// DOIT correspondre à la valeur isAdmin() dans firestore.rules
export const ADMIN_EMAIL = "anzajewls@gmail.com";
