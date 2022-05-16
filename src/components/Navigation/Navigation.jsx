import classNames from "classnames";
import React, { useCallback, useState } from "react";

import Icon from "../Icon/Icon";
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import { VIEW_MODES } from "../../contexts/ViewMode/ViewMode.constants";
import { useViewModeContext } from "../../contexts/ViewMode/ViewMode.context";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  const { viewMode } = useViewModeContext();
  const isSimpleView = viewMode === VIEW_MODES.SIMPLE;

  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const openMenu = useCallback(() => setIsMenuExpanded(true), []);
  const closeMenu = useCallback(() => setIsMenuExpanded(false), []);

  return (
    <div
      className={classNames(styles.navigation, {
        [styles["navigation-simple"]]: isSimpleView,
        [styles["navigation-collapsed"]]: !isMenuExpanded,
      })}
    >
      <h2 className={styles.logo}>Projecto</h2>
      {isSimpleView && (
        <>
          <button
            className={isMenuExpanded ? styles.close : styles.open}
            onClick={isMenuExpanded ? closeMenu : openMenu}
          >
            {isMenuExpanded ? (
              <Icon name="iconClose" className={styles["close-icon"]} />
            ) : (
              <Icon name="iconMenu" className={styles["open-icon"]} />
            )}
          </button>
          {isMenuExpanded && <NavigationMenu closeMenu={closeMenu} />}
        </>
      )}
      {!isSimpleView && <NavigationMenu />}
    </div>
  );
};

export default Navigation;
