import Link from '../components/Link';

const MainPageHeader = () => {
  return (`
    <div class="page-header row">
      <div id="toast-place-holder"></div>
      <div class="text">
        <div class="name"><span>Hi, </span>Solomonowen</div>
      </div>
      <div class="icons">
        <span class="icon-group notification">
          <span class="fa fa-bell"></span>
        </span>
        <span class="drop-down-container">
          <span class='icon-group'>
            <span class="fa fa-user"></span>
          </span>
          <div class="drop-down">
            <ul>
              <!-- <li><a href="#">Settings</a></li> -->
              <li>
                ${Link({
                  to:'/user-profile', 
                  text:`Profile`,
                })}
              </li>
              <li>
                ${Link({
                  to:'/logout', 
                  text:`Logout`, 
                })}
              </li>
            </ul>
          </div>
        </span>
        <span class="icon-group" id="toggle-mobile-menu">
          <span class="fa fa-navicon"></span>
        </span>
      </div>
    </div>

  `);
}

export default MainPageHeader;
