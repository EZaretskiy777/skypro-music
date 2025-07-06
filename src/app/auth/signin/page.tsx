"use client";

import styles from "./signin.module.css";
import classNames from "classnames";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { urerSignIn } from "@/services/auth/authApi";
import { useRouter } from "next/router";

type Inputs = {
  login: string;
  password: string;
};

export default function Signin() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = () => {
    urerSignIn({ email: watch("login"), password: watch("password") })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.data.token);
          useRouter().push("/music/main");
        }
        if (res.status === 401) {
          alert("Неверный логин или пароль");
        }
        if (res.status === 500) {
          alert("Ошибка сервера. Пожалуйста, попробуйте позже.");
        }
      })
      .catch((error) => {
        console.error("Ошибка входа:", error);
        alert("Произошла ошибка при входе. Пожалуйста, попробуйте позже.");
      });
  };

  return (
    <form className={styles.modal__form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.modal__logo}>
        <img src="/img/logo_modal.png" alt="logo" />
      </div>

      <div className={styles.modal__inputContainer}>
        <input
          className={classNames(styles.modal__input)}
          type="text"
          placeholder="Почта"
          {...register("login", {
            required: "Введите почту",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Неверный формат почты",
            },
          })}
        />
        <div className={classNames(styles.errorContainer, styles.login)}>
          {errors.login?.message}
        </div>
      </div>
      <div className={styles.modal__inputContainer}>
        <input
          className={classNames(styles.modal__input)}
          type="password"
          placeholder="Пароль"
          {...register("password", {
            required: "Введите пароль",
            minLength: {
              value: 6,
              message: "Минимум 6 символов",
            },
          })}
        />
        <div className={styles.errorContainer}>{errors.password?.message}</div>
      </div>
      <button className={styles.modal__btnEnter}>Войти</button>

      <Link href="/auth/signup" className={styles.modal__btnSignup}>
        Зарегистрироваться
      </Link>
    </form>
  );
}
