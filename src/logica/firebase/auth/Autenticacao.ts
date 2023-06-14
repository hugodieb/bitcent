import Usuario from "@/logica/core/usuario/Usuario";
import { Auth, GoogleAuthProvider, User, getAuth, signInWithPopup, signOut } from "firebase/auth"
import { app } from "../config/app";

export default class Autenticacao {
    private _auth: Auth

    constructor() {
        this._auth = getAuth(app)
    }

    async loginGoogle(): Promise<Usuario | null> {
        const resp = await signInWithPopup(this._auth, new GoogleAuthProvider)
        return this.converterParaUsuario(resp.user)
    }

    logout(): Promise<void> {
        return signOut(this._auth)
    }

    private converterParaUsuario(usuarioFirebase: User | null): Usuario | null {
        if(!usuarioFirebase?.email) return null
        const nomeAlternativo = usuarioFirebase.email!.split('@')[0]

        return {
            id: usuarioFirebase.uid,
            nome: usuarioFirebase.displayName ?? nomeAlternativo,
            email: usuarioFirebase.email,
            imageUrl: usuarioFirebase.photoURL
        }
    }
}