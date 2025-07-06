"use client";

import styles from "./signup.module.css";
import classNames from "classnames";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { userSignUp } from "@/services/auth/authApi";
import { useRouter } from "next/navigation";

type Inputs = {
  login: string;
  password: string;
  checkPassword: string;
};

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = () => {
    userSignUp({
      email: watch("login"),
      password: watch("password"),
      username: watch("login"),
    })
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
      <Link href="/music/main">
        <div className={styles.modal__logo}>
          <img src="/img/logo_modal.png" alt="logo" />
        </div>
      </Link>
      <div className={styles.modal__inputContainer}>
        <input
          className={classNames(styles.modal__input, styles.login)}
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
          className={styles.modal__input}
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
      <div className={styles.modal__inputContainer}>
        <input
          className={styles.modal__input}
          type="password"
          placeholder="Повторите пароль"
          {...register("checkPassword", {
            required: "Повторите пароль",
            validate: (value) =>
              value === watch("password") || "Пароли не совпадают",
          })}
        />
        <div className={styles.errorContainer}>
          {errors.checkPassword?.message}
        </div>
      </div>
      <button className={styles.modal__btnSignupEnt}>Зарегистрироваться</button>
    </form>
  );
}
