import { Link } from "wouter";
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import styles from "./SocialIcons.module.css";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Cygnus */}
          <div>
            <h3 className="font-semibold mb-4">About Cygnus</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer">Careers</span>
                </Link>
              </li>
              <li>
                <Link href="/press">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer">Press Releases</span>
                </Link>
              </li>
              <li>
                <Link href="/investment">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer">Investment</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer">Get in Touch</span>
                </Link>
              </li>
              <li>
                <Link href="/support">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer">Customer Support</span>
                </Link>
              </li>
              <li>
                <Link href="/stores">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer">Store Locator</span>
                </Link>
              </li>
              <li>
                <Link href="/email">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer">Email Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Let Us Help You */}
          <div>
            <h3 className="font-semibold mb-4">Let Us Help You</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/account">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer">Your Account</span>
                </Link>
              </li>
              <li>
                <Link href="/orders">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer">Your Orders</span>
                </Link>
              </li>
              <li>
                <Link href="/shipping">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer">Shipping Rates & Policies</span>
                </Link>
              </li>
              <li>
                <Link href="/returns">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer">Returns & Replacements</span>
                </Link>
              </li>
              <li>
                <Link href="/help">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer">Help Center</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <ul className={styles.socialIcons}>
              <li className={styles.iconWrapper}>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${styles.iconLink} ${styles.linkedin}`}
                  aria-label="LinkedIn"
                >
                  <div className={styles.filled}></div>
                  <FaLinkedin className="w-6 h-6 relative z-10" />
                </a>
                <div className={styles.tooltip}>LinkedIn</div>
              </li>
              <li className={styles.iconWrapper}>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${styles.iconLink} ${styles.github}`}
                  aria-label="GitHub"
                >
                  <div className={styles.filled}></div>
                  <FaGithub className="w-6 h-6 relative z-10" />
                </a>
                <div className={styles.tooltip}>GitHub</div>
              </li>
              <li className={styles.iconWrapper}>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${styles.iconLink} ${styles.instagram}`}
                  aria-label="Instagram"
                >
                  <div className={styles.filled}></div>
                  <FaInstagram className="w-6 h-6 relative z-10" />
                </a>
                <div className={styles.tooltip}>Instagram</div>
              </li>
              <li className={styles.iconWrapper}>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${styles.iconLink} ${styles.youtube}`}
                  aria-label="YouTube"
                >
                  <div className={styles.filled}></div>
                  <FaYoutube className="w-6 h-6 relative z-10" />
                </a>
                <div className={styles.tooltip}>YouTube</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Cygnus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}