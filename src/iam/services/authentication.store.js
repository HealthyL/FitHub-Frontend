import {defineStore} from "pinia";
import {AuthenticationService} from "./authentication.service.js";
import {SignInResponse} from "../model/sign-in.response.js";
import {SignUpResponse} from "../model/sign-up.response.js";

const authenticationService = new AuthenticationService();

export const useAuthenticationStore = defineStore( {
    id: 'authentication',
    state: () => ({signedIn: false, userId: 0, userName: ''}),
    getters: {
        isSignedIn: (state) => state["signedIn"],
        currentUserId: state => state["userId"],
        currentUsername: state => state["username"],
        currentToken: () => localStorage.getItem('token')
    },
    actions: {
        async signIn(signInRequest, router) {
            try {
                console.log('state1', signInRequest);
                const response = await authenticationService.signIn(signInRequest);
                console.log('state2', signInRequest);
                let signInResponse = new SignInResponse(response.data.id, response.data.username, response.data.token);
                this.signedIn = true;
                this.userId = signInResponse.id;
                this.username = signInResponse.username;
                console.log('state3', signInRequest);
                localStorage.setItem('token', signInResponse.token);
                console.log(signInResponse);
                router.push({name: 'my-account'});
            } catch (error) {
                router.push({name: 'sign-in'});
            }
        },
        async signUp(signUpRequest, router) {
            authenticationService.signUp(signUpRequest)
                .then(response => {
                    let signUpResponse = new SignUpResponse(response.data.message);
                    console.log(signUpResponse.message);
                    router.push({name: 'sign-in'});
                    console.log(signUpResponse);
                })
                .catch(error => {
                    console.error(error);
                    router.push({name: 'sign-in'});
                });
        },
        async signOut(router) {
            this.signedIn = false;
            this.userId = 0;
            this.username = '';
            localStorage.removeItem('token');
            console.log('Signed out');
            await router.push({name: 'sign-in'});
        }
    }
})