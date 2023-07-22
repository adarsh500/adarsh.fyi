const hardware = [
  {
    key: "Laptop",
    name: 'Macbook Air M1 13"',
    link: "https://www.apple.com/macbook-pro-13/",
  },
  {
    key: "Earphones",
    name: "Nothing ear(1)",
    link: "https://www.nothing.tech/products/nothing-ear-1",
  },
  {
    key: "Mouse",
    name: "Apple magic mouse 2",
    link: "https://www.apple.com/shop/product/MLA02LL/A/magic-mouse-2-silver",
  },
  {
    key: "Keyboard",
    name: "Keychron K2V2",
    link: "https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard",
  },
  {
    key: "Monitor",
    name: 'LG 27UL850-W 27" 4K',
    link: "https://www.lg.com/us/monitors/lg-27UL850-W-4k-uhd-led-monitor",
  },
  {
    key: "Speakers",
    name: "Amazon Echo Dot 3rd Gen",
    link: "https://www.amazon.com/Echo-Dot-3rd-Gen-Smart-speaker-with-Alexa-Charcoal/dp/B07FZ8S74R",
  },
];

const software = [
  {
    key: "IDE",
    name: "Visual Studio Code",
    link: "https://code.visualstudio.com/",
  },
  {
    key: "Terminal",
    name: "iTerm2",
    link: "https://iterm2.com/",
  },
  {
    key: "Browser",
    name: "Arc",
    link: "https://thebrowser.company/",
  },
  {
    key: "Calendar",
    name: "Cron",
    link: "https://cron.com/",
  },
  {
    key: "Spotlight",
    name: "Raycast",
    link: "https://www.raycast.com/",
  },
  {
    key: "Music",
    name: "Apple Music",
    link: "https://www.apple.com/apple-music/",
  },
];

export default async function Uses() {
  return (
    <main className="flex justify-start items-start flex-col break-words text-xl text-left mt-32 mb-24 flex-1 text-light-primary dark:text-dark-primary mobile:py-6 mobile:px-4 mobile:mt-12 mobile:mb-20 mobile:text-base">
      <div className="flex justify-center align-top flex-col w-full animate-fadeInUp">
        <p className="text-5xl font-extrabold mobile:text-4xl mobile:font-bold">
          Gear that i use
        </p>
        <div className="my-12 mobile:my-8 last:mb-0">
          <h2 className="mb-4 text-2xl font-semibold">Hardware</h2>
          <div>
            {hardware.map((item) => (
              <li className="my-2 mx-0" key={item.key}>
                <span>
                  {item.key}:{" "}
                  <a
                    className="text-light-secondary dark:text-dark-secondary"
                    href={item.link}
                  >
                    {item.name}
                  </a>
                </span>
              </li>
            ))}
          </div>
        </div>
        <div className="mb-12 last:mb-0">
          <h2 className="mb-4 text-xl font-semibold">Software</h2>
          <div>
            {software.map((item) => (
              <li className="my-2 mx-0" key={item.key}>
                <span>
                  {item.key}:{" "}
                  <a className="text-light-secondary dark:text-dark-secondary">
                    {item.name}
                  </a>
                </span>
              </li>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
