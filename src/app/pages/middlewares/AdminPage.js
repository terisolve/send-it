import { retrieveAuthUser } from "../../services/localStorage";

export default class AdminPage {
  static guard() {
    /**
     * providing a higher order function that returns a loading component
     * for now, this class renders a loading view
     */
    let next = () => {
      return new AdminPage();
    }

    const savedAuthUser = retrieveAuthUser();
    if (! savedAuthUser || !savedAuthUser.isAdmin) {
      // redirect user to the client login page, if not logged in or not a client user
      window.location.href = '/admin-login';
      // return the function that renders the loading view
      return next;
    }
    
    /**
     * providing a higher order function that returns the supplied component
     * this will return the component if the user is authenticated as a valid client
     */
    next = (component) => {
      return component;
    }
    return next;
  }

  render() {
    return `
      <div class='page-loading'></div>
    `;
  }
}