Cypress.Commands.add('loginOkta', () => {
        const optionsSessionToken = {
        method: 'POST',
        url: Cypress.env('session_token_url'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'      
        },
        body: {
            username: Cypress.env('username'),
            password: Cypress.env('password'),
            options: {
                warnBeforePasswordExpired: 'true'
                }
            }
        };
    
        cy.request(optionsSessionToken).then(response => {
        const sessionToken = response.body.sessionToken;
        cy.log("Session Token: ",sessionToken)
        // cy.log(sessionToken)

        const qs = {
            client_id: Cypress.env('client_id'),
            code_challenge: Cypress.env('code_challenge'),
            state: Cypress.env('state'),
            nonce: Cypress.env('nonce'),
            redirect_uri: Cypress.env('redirect_uri'),
            code_challenge_method: 'S256',
            code_challenge: Cypress.env(''),
            response_mode: 'fragment',
            response_type: 'token',
            scope: 'openid',
            sessionToken: sessionToken
        }
    
        cy.request({
            method: 'GET',
            url: Cypress.env('auth_token_url'),
            form: true,
            followRedirect: false,
            qs: qs
        }).then(responseWithToken => {
            const redirectUrl = responseWithToken.redirectedToUrl;
            cy.log("RedirectURL: ",redirectUrl)
    
            const accessToken = redirectUrl
            .substring(redirectUrl.indexOf('access_token'))
            .split('=')[1]
            .split('&')[0];
            cy.log("Access Token: ",accessToken)
            cy.wrap(accessToken).as('accessToken');
    
            cy.visit(redirectUrl).then(() => {
            cy.visit('/');
            });
        });
        });
    })