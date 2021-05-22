
import { graphql } from "babel-plugin-relay/macro";
import { loadQuery } from "react-relay";
import { createOperationDescriptor, getRequest } from "relay-runtime";
import environment from "../app/config/relay/Environment";

class AppSession {
    variables: any;
    loginSession: any;
    user: any;

    constructor() {
        const USER = localStorage.getItem("USER") || "";

        if(!USER){
            throw new Error("User has not logged in");
        }

        this.user = JSON.parse(USER);
        let { accountRef: ref, idToken, csrfToken, refreshToken } = this.user;
        this.variables = { ref, idToken, csrfToken, refreshToken };
    }

    initializeApp() {
        const userDashboardQuery = graphql`
                query AppSessionQuery ( $refreshToken:String!, $idToken:String!, $csrfToken:String!, $ref: String! ) {
                    sessionLogin(login: { refreshToken:$refreshToken, idToken: $idToken, csrfToken:$csrfToken, accountRef:$ref}) {
                        ...on BankUser {
                        balances {
                            opening_balance
                        }
                        account {
                            id
                            accountRef
                            firstName,
                            lastName,
                            email
                        }
                        token
                    }
                    ...on BankUserSessionError {
                        error {
                            message
                            code
                        }
                    }
                }
            }
        `;

        const udqRef = loadQuery(environment, userDashboardQuery, this.variables);
        const request = getRequest(userDashboardQuery);
        const descriptor = createOperationDescriptor(request, this.variables);
        this.loginSession = environment.retain(descriptor);

        return [udqRef, userDashboardQuery];
    }

    killApp() {
        localStorage.removeItem("USER");
        this.loginSession.dispose();
    }
}

export default AppSession;