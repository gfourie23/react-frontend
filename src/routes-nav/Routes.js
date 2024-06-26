import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import JobList from "../jobs/JobList";
import ProfileForm from "../profiles/ProfileForm";
import SignupForm from "../auth/SignupForm";
import LoginForm from "../auth/LoginForm";
import PrivateRoute from "./PrivateRoute";

/** Routes for the sites
 * Include routes only visible to logged in users 
 */
function Routes({ login, signup }) {
    console.debug(
        "Routes",
        `login=${typeof login}`,
        `register=${typeof register}`,
    );

    return (
        <div className="pt-5">
           <Switch>

                <Route exact path="/">
                    <Homepage />
                </Route>
                
                <Route exact path="/login">
                    <LoginForm login={login} />
                </Route>

                <Route exact path="/signup">
                    <SignupForm signup={signup} />
                </Route>

                <PrivateRoute exact path="/companies">
                    <CompanyList />
                </PrivateRoute>

                <PrivateRoute exact path="/companies/:handle">
                    <CompanyDetail />
                </PrivateRoute>

                <PrivateRoute exact path="/jobs">
                    <JobList />
                </PrivateRoute>

                <PrivateRoute exact path="/profile">
                    <ProfileForm />
                </PrivateRoute>

                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default Routes;