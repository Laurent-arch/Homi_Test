import { SignIn } from "@clerk/clerk-react";
import styles from './form.module.css'

export default function Page() {
  return (
    <div className={styles.clerkForm}>
      <SignIn />;
    </div>
  );
}
