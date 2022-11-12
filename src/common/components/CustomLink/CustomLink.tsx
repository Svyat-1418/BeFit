import styles from "./CustomLink.module.scss"
import {FC, ReactNode} from "react";
import {Link, useMatch} from "react-router-dom";

type Props = {
  children?: ReactNode
  to: string
}

export const CustomLink: FC<Props> = ({children, to, ...restProps}) => {
  const match = useMatch(to)

  return (
    <>
     <Link
       to={to}
       className={match ? styles.activeLink : ""}

       {...restProps}
     >
       {children}
     </Link>
    </>
  )
}