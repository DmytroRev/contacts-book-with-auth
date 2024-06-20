import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <div className={css.border}>
        <h2 className={css.title}>Welcome to Contact List! 📇</h2>
        <p className={css.p}>
          Organize and manage your contacts easily and conveniently with our
          app. No matter how many friends, colleagues or acquaintances you have,
          you will always be able to quickly find the right contact and be in
          touch at the right moment. 📱
        </p>
        <ul className={css.list}>
          <h3 className={css.title}>Features of the app:</h3>
          <li className={css.li}>
            Easily add and edit contacts: Easily add new contacts, edit existing
            ones and delete unwanted ones. ✏️
          </li>
          <li className={css.li}>
            Search & Filter: Quickly find the contacts you need with powerful
            search and filters. 🔍
          </li>
          <li className={css.li}>
            Group contacts: Organize your contacts into groups for easy and
            quick access. 📁
          </li>
          <li className={css.li}>
            Data Security: We keep your data secure so you can be confident that
            your data is safe. 🔒
          </li>
          <li>
            Integration with other services: Synchronize your contacts with
            other apps and devices. 🔄
          </li>
        </ul>
        <h3>Start now</h3>
        <p className={css.p}>
          Create an account and start using Contact List today. Enter your
          contacts and enjoy the convenience and ease of managing them. 🚀
        </p>
      </div>
    </div>
  );
}
