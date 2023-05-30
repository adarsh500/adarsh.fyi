import styles from './uses.module.scss';

const hardware = [
  {
    key: 'Laptop',
    name: 'Macbook Air M1 13"',
    link: 'https://www.apple.com/macbook-pro-13/',
  },
  {
    key: 'Earphones',
    name: 'Nothing ear(1)',
    link: 'https://www.nothing.tech/products/nothing-ear-1',
  },
  {
    key: 'Mouse',
    name: 'Apple magic mouse 2',
    link: 'https://www.apple.com/shop/product/MLA02LL/A/magic-mouse-2-silver',
  },
  {
    key: 'Keyboard',
    name: 'Keychron K2V2',
    link: 'https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard',
  },
  {
    key: 'Monitor',
    name: 'LG 27UL850-W 27" 4K',
    link: 'https://www.lg.com/us/monitors/lg-27UL850-W-4k-uhd-led-monitor',
  },
  {
    key: 'Speakers',
    name: 'Amazon Echo Dot 3rd Gen',
    link: 'https://www.amazon.com/Echo-Dot-3rd-Gen-Smart-speaker-with-Alexa-Charcoal/dp/B07FZ8S74R',
  },
];

const software = [
  {
    key: 'IDE',
    name: 'Visual Studio Code',
    link: 'https://code.visualstudio.com/',
  },
  {
    key: 'Terminal',
    name: 'iTerm2',
    link: 'https://iterm2.com/',
  },
  {
    key: 'Browser',
    name: 'Arc',
    link: 'https://thebrowser.company/',
  },
  {
    key: 'Calendar',
    name: 'Cron',
    link: 'https://cron.com/',
  },
  {
    key: 'Spotlight',
    name: 'Raycast',
    link: 'https://www.raycast.com/',
  },
  {
    key: 'Music',
    name: 'Apple Music',
    link: 'https://www.apple.com/apple-music/',
  },
];

export default async function Tracks() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <p className={styles.title}>Gear that i use</p>
        <div className={styles.section}>
          <h2 className={styles.subtitle}>Hardware</h2>
          <div className={styles.list}>
            {hardware.map((item) => (
              <li className={styles.item} key={item.key}>
                <span>
                  {item.key}:{' '}
                  <a className={styles.link} href={item.link}>
                    {item.name}
                  </a>
                </span>
              </li>
            ))}
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.subtitle}>Software</h2>
          <div className={styles.list}>
            {software.map((item) => (
              <li className={styles.item} key={item.key}>
                <span>
                  {item.key}: <a className={styles.link}>{item.name}</a>
                </span>
              </li>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
