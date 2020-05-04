import React, { useEffect } from "react";
import { Link } from "gatsby";

const isPartiallyActive = ({ isPartiallyCurrent, location }) => {
  return isPartiallyCurrent
    ? { className: "sub-navigation__item--active" }
    : {};
};

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "sub-navigation__item--active sub-nav-active" } : {}
};

const SubNavigation = (props) => {
  let isBrowser = typeof window !== `undefined`;
  useEffect(() => {
    isBrowser = typeof window !== `undefined`;
  });

  if (props.isHelp) {
    return (
      <div className="sub-navigation-custom-help sub-nav-sticky">
        <nav>
          <ol>
            {props.navItems.map((value, index) => {
              return <div key={index}>
                <li className="sub-navigation__item">
                  <Link style={{ color: "black" }}
                        className="govuk-link subnav" to={value.href}
                        getProps={isPartiallyActive}>
                    <span>{value.name}</span>
                  </Link>
                </li>


                {value.subItems.map((v, i) => {
                  if (isBrowser) {
                  if (window.location.pathname.includes(value.href)) {
                    return <li
                      className="sub-navigation__item"
                      key={i} style={{ paddingLeft: "30px" }}>
                      <Link style={{ color: "#005ea5" }} getProps={isActive}
                            className="govuk-link subnav" to={v.href}>
                        <span>{v.name}</span>
                      </Link>
                    </li>;
                  }
                }
                })}


              </div>;
            })}
          </ol>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="sub-navigation-custom">
        <nav>
          <ol>
            {props.navItems.map((value, index) => {
              return <li
                className="sub-navigation__item"
                key={index}>
                <Link activeClassName="sub-navigation__item--active" style={{ color: "black" }}
                      className="govuk-link subnav" to={value.href}>
                  <span>{value.name}</span>
                </Link>
              </li>;
            })}
          </ol>
        </nav>
      </div>
    );
  }
};
export default SubNavigation;

