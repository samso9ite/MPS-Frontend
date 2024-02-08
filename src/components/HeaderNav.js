const HeaderNav = () => {

    return(
        <>
        <div id="pre-load">
           <div id="loader" class="loader">
               <div class="loader-container">
                   <div class='loader-icon'><img src="assets/images/logo_main.fw.png" alt="MyProcurement Agent" /></div>
               </div>
           </div>              
        </div>
        
		<div class="main-content">
            
            <div class="full-width-header">
                <header id="rs-header" class="rs-header style2 header-home4-style header-transparent">
                    <div class="menu-area menu-sticky">
                        <div class="container custom">
                            <div class="row-table">
                                <div class="col-cell header-logo">                                  
                                    <div class="logo-area">
                                        <a href="index.html">
                                            <img src="assets/images/logo_main.fw.png" alt="logo" />  
                                        </a>
                                    </div>
                                </div>
                                <div class="col-cell">
                                    <div class="rs-menu-area">
                                        <div class="main-menu">
                                            <nav class="rs-menu hidden-md">
                                                <ul class="nav-menu">
                                                    <li class="current-menu-item">
                                                        <a href="index.html">Home</a>
                                                       
                                                    </li>
                                                    <li class="">
                                                        <a href="about.html">About</a>                                                        
                                                    </li>
                                                    <li class="">
                                                        <a href="process.html">How it Works</a>
                                                    </li>
                                                  <li class="">
                                                        <a href="contact.html">Contact</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-cell">
                                    <div class="expand-btn-inner">
                                        <ul>
                                           
                                            <li class="humburger">
                                                <a id="nav-expander" class="nav-expander bar" href="#">
                                                    <div class="bar">
                                                        <span class="dot1"></span>
                                                        <span class="dot2"></span>
                                                        <span class="dot3"></span>
                                                        <span class="dot4"></span>
                                                        <span class="dot5"></span>
                                                        <span class="dot6"></span>
                                                        <span class="dot7"></span>
                                                        <span class="dot8"></span>
                                                        <span class="dot9"></span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <div class="btn-part">
                                                    <a class="readon consultant lets-talk" href="contact.html">Let's Talk</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav class="right_menu_togle mobile-navbar-menu" id="mobile-navbar-menu">
                        <div class="close-btn">
                            <a id="nav-close2" class="nav-close">
                                <div class="line">
                                    <span class="line1"></span>
                                    <span class="line2"></span>
                                </div>
                            </a>
                        </div>
                        <ul class="nav-menu">
                            <li class="current-menu-item">
                                <a href="index.html">Home</a>
                               
                            </li>
                            <li class="">
                                <a href="about.html">About</a>                                                        
                            </li>
                            <li class="">
                                <a href="process.html">How it Works</a>
                            </li>
                          <li class="">
                                <a href="contact.html">Contact</a>
                            </li>
                        </ul> 
                        <div class="canvas-contact">
                              <div class="address-area">
                                  <div class="address-list">
                                      <div class="info-icon">
                                          <i class="flaticon-location"></i>
                                      </div>
                                      <div class="info-content">
                                          <h4 class="title">Address</h4>
                                          <em>3rd Floor UAC House. 1-5 Odunlami Street Idumota Lagos.</em>
                                      </div>
                                  </div>
                                  <div class="address-list">
                                      <div class="info-icon">
                                          <i class="flaticon-email"></i>
                                      </div>
                                      <div class="info-content">
                                          <h4 class="title">Email</h4>
                                          <em><a href="mailto:info@myprocurementagent.com">info@myprocurementagent.com</a></em>
                                      </div>
                                  </div>
                                  <div class="address-list">
                                      <div class="info-icon">
                                          <i class="flaticon-call"></i>
                                      </div>
                                      <div class="info-content">
                                          <h4 class="title">Phone</h4>
                                          <em>+234 702 6960 951</em>
                                      </div>
                                  </div>
                              </div>
                        </div>
                    </nav>
                </header>
            </div>
            </div>
        </>
    )
}

export default HeaderNav