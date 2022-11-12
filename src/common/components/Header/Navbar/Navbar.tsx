import styles from "./Navbar.module.scss"
import {CustomLink} from "../../CustomLink/CustomLink";

type Link = {
  id: string
  path: string
  label: string
}

export const Navbar = () => {

  const links: Array<Link> = [
    {id: "1", path: "home", label: "home"},
    {id: "2", path: "about", label: "about"},
    {id: "3", path: "features", label: "features"},
    {id: "4", path: "pricing", label: "pricing"},
    {id: "5", path: "trainers", label: "trainers"},
    {id: "6", path: "blogs", label: "blogs"},
  ]

  return (
    <nav className={styles.navbar}>
      <ul className={styles.menuList}>
        {
          links.map(link => <li key={link.id}>
              <CustomLink to={link.path}>{link.label}</CustomLink>
            </li>
          )
        }
      </ul>
    </nav>
  )
}