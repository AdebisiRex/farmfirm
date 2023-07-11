import React from "react";

const ThisComp = () => {
//   let navigationColor = localStorage.getItem("navigationColor"),
//     navbar = document.getElementById("mainNavbar");

//   if (navigationColor != null && navbar != null) {
//     if (navigationColor == "inverted") {
//       navbar.classList.add("bg-dark", "navbar-dark");
//       navbar.classList.remove("bg-white", "navbar-light");
//     } else {
//       navbar.classList.add("bg-white", "navbar-light");
//       navbar.classList.remove("bg-dark", "navbar-dark");
//     }
//   }
  return (
    <nav
      ref="mainNavbar"
      class="navbar navbar-vertical navbar-expand-lg scrollbar bg-dark navbar-dark"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="./index.html">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/33193ecc0db7caa7d7efee3dca8af1b145fa2135/16978/assets/images/logo-small.svg"
            class="navbar-brand-img logo-light logo-small"
            alt="..."
            width="19"
            height="25"
          />
          <img
            src="https://d33wubrfki0l68.cloudfront.net/ba6b91b7d508187d153e48318c22d0773a9cedfc/36afa/assets/images/logo.svg"
            class="navbar-brand-img logo-light logo-large"
            alt="..."
            width="125"
            height="25"
          />

          <img
            src="https://d33wubrfki0l68.cloudfront.net/8b6c92837e3b7aa8c9017d33298ead6b9b859d79/fa79b/assets/images/logo-dark-small.svg"
            class="navbar-brand-img logo-dark logo-small"
            alt="..."
            width="19"
            height="25"
          />
          <img
            src="https://d33wubrfki0l68.cloudfront.net/55307694d1a6b107d2d87c838a1aaede85cd3d84/66f18/assets/images/logo-dark.svg"
            class="navbar-brand-img logo-dark logo-large"
            alt="..."
            width="125"
            height="25"
          />
        </a>

        <a
          href="javascript: void(0);"
          class="navbar-toggler collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#sidenavCollapse"
          aria-controls="sidenavCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </a>

        <div class="navbar-collapse collapse" id="sidenavCollapse" style="">
          <ul class="navbar-nav mb-lg-7">
            <li class="nav-item dropdown">
              <a
                class="nav-link active"
                href="#dashboardsCollapse"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="true"
                aria-controls="dashboardsCollapse"
              >
                <svg
                  viewBox="0 0 24 24"
                  class="nav-link-icon"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.753,13.944v8.25h6v-6a1.5,1.5,0,0,1,1.5-1.5h1.5a1.5,1.5,0,0,1,1.5,1.5v6h6v-8.25"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  ></path>
                  <path
                    d="M.753,12.444,10.942,2.255a1.5,1.5,0,0,1,2.122,0L23.253,12.444"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  ></path>
                </svg>
                <span>Dashboards</span>
              </a>
              <div class="collapse show" id="dashboardsCollapse">
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a href="./index.html" class="nav-link active">
                      Default
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="./dashboard-ecommerce.html" class="nav-link ">
                      E-commerce
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link " href="./chat.html">
                <svg
                  viewBox="0 0 24 24"
                  class="nav-link-icon"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.25,18.75a1.5,1.5,0,0,1-1.5-1.5V9.75a1.5,1.5,0,0,1,1.5-1.5h10.5a1.5,1.5,0,0,1,1.5,1.5v7.5a1.5,1.5,0,0,1-1.5,1.5h-1.5v4.5l-4.5-4.5Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  ></path>
                  <path
                    d="M6.75,12.75l-3,3v-4.5H2.25a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75h10.5a1.5,1.5,0,0,1,1.5,1.5v3"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  ></path>
                </svg>
                <span>Chat</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ThisComp;
