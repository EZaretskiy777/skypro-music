import Link from "next/link";
import styles from "./layout.module.css";
import MainNav from "@components/MainNav/MainNav";
import Bar from "@components/Bar/Bar";
import Sidebar from "@components/Sidebar/Sidebar";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      {" "}
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <main className={styles.main}>
            <MainNav />
            {children}
            <Sidebar />
          </main>
          <Bar />
          <footer className="footer"></footer>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
