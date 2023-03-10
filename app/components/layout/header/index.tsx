import { Link } from '@remix-run/react'
import cn from 'classnames'
import { Dispatch, ReactElement, SetStateAction } from 'react'
import Image from 'remix-image'
import Dropdown from '~/components/base/dropdown'
import { logoDarkURL, logoURL, name } from '~/lib/info'
import useIsMobile from '~/lib/utils/hooks/useIsMobile'
import styles from '~/styles/header.module.css'

interface HeaderProps {
  isMenuOpen: boolean
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

export interface MenuItemProps {
  title: string
  path: string
}

const MenuItems: MenuItemProps[] = [
  {
    title: 'About',
    path: '/about'
  },
  {
    title: 'Blog',
    path: '/blog'
  },
  {
    title: 'Contact',
    path: '/contact'
  }
]

const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps): ReactElement => {
  const isMobile = useIsMobile()

  return (
    <>
      <header className={styles.header}>
        <div
          className={cn(styles.navContainer, {
            [styles.noBorder]: isMobile || isMenuOpen
          })}
        >
          <Dropdown items={MenuItems} setIsMenuOpen={setIsMenuOpen} className={styles.navDropdown} />
          <nav className={styles.logoContainer}>
            <Link to="/" aria-label={name} role="link" onClick={() => setIsMenuOpen(false)}>
              {!isMenuOpen ? (
                <Image src={logoURL} height={78} width={90} alt={name} />
              ) : (
                <Image src={logoDarkURL} height={78} width={90} alt={name} />
              )}
            </Link>
          </nav>
          <nav className={styles.linkContainer}>
            {!isMobile && !isMenuOpen && (
              <ul>
                {MenuItems.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path} aria-label={`${name} ${item.title}`} role="link">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <button
              className={cn(styles.hamburger, {
                [styles.open]: isMenuOpen
              })}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <i
                className={cn(styles.lineTop, {
                  [styles.activeTop]: isMenuOpen
                })}
              />
              <i
                className={cn(styles.lineBottom, {
                  [styles.activeBottom]: isMenuOpen
                })}
              />
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}
export default Header
