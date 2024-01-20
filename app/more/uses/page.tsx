import Link from "next/link";

const hardware = [
  {
    key: "Laptop (work)",
    name: 'Macbook Pro M1 Pro 16"',
    link: "https://www.apple.com/macbook-pro-13/",
    icon: "💻",
  },
  {
    key: "Laptop (personal)",
    name: 'Macbook Air M1 13"',
    link: "https://www.apple.com/macbook-pro-13/",
    icon: "💻",
  },
  {
    key: "Headphones",
    name: "Sony WH-1000XM4",
    link: "https://www.sony.com/electronics/headband-headphones/wh-1000xm4",
    icon: "🎧",
  },
  {
    key: "Mouse",
    name: "Apple magic mouse 2",
    link: "https://www.amazon.in/Apple-Magic-Mouse-Bluetooth-Enabled-iPadOS/dp/B09BTNQ6MM/ref=sr_1_1?crid=33M7V0RVX2KGK&dib=eyJ2IjoiMSJ9.Ag0hfEY36nlJIGg4h_pmRuq4bxp7UqOsSumHQUJzbMGX2GNzrQzJGDt9yWt9nSQpnSvjXGC_Fj-ITSUQRNUVHSKwqU0wTnHxSqiRzhb9ZFBWuX_rnzayBHo9CVJ-pB6KgOsbiaVaWcGqew9YEVVijvsFMt4ZdDjklOHL9bC_qMZrowVSwl2QrygFe4u5dF1t1XkO9zpipVC5veIrgrxiPEWDDr50WY_sGgP0ZEJ60Hk.BDJK8WLrVEtWCksaCli2alQvAKo2qRe8-rdHCAJjfHs&dib_tag=se&keywords=magic+mouse+2&qid=1705736659&sprefix=magic+mouse+%2Caps%2C184&sr=8-1",
    icon: "🖱",
  },
  {
    key: "Keyboard",
    name: "Keychron K2V2",
    link: "https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard",
    icon: "⌨️",
  },
  {
    key: "Monitor",
    name: 'Gigabyte G27 27"',
    link: "https://www.gigabyte.com/Monitor/G27F#kf",
    icon: "🖥",
  },
  {
    key: "Speakers",
    name: "Amazon Echo Dot 3rd Gen",
    link: "https://www.amazon.com/Echo-Dot-3rd-Gen-Smart-speaker-with-Alexa-Charcoal/dp/B07FZ8S74R",
    icon: "🔊",
  },
  {
    key: "Watch",
    name: "Seiko Series 5 GMT",
    link: "https://seikowatches.co.in/products/seiko-5-skx-sports-style-gmt-series-ssk003k1",
    icon: "⌚️",
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
    <main
      className="flex justify-start items-start flex-col break-words text-xl text-left 
    mt-20 mb-16 flex-1 text-light-primary dark:text-dark-primary mobile:py-6 mobile:px-4 
    mobile:mt-6 mobile:mb-10 mobile:text-base"
    >
      <p className="text-5xl font-extrabold mobile:text-4xl mobile:font-bold mb-4 slide-enter-content">
        Gear that i use
      </p>
      <div className="slide-enter-content">
        <div className="my-12 mobile:my-8 last:mb-0">
          <h2 className="mb-4 text-3xl font-semibold">Hardware</h2>
          <div className="my-10 flex justify-start items-center flex-wrap mobile:my-8 w-full">
            {hardware.map((item) => {
              const { key, name, link, icon } = item;
              return (
                <Link
                  key={key}
                  className="flex mr-8 mb-8 rounded-lg w-[calc(50%-16px)] p-[18px] bg-bg-light border border-solid border-border-light dark:bg-bg-dark dark:border-border-dark hover:scale-101 hover:transition-all hover:duration-300 hover:ease-in-out hover:dark:border-white even:mr-0 mobile:my-2 mobile:w-full mobile:mr-0"
                  href={link}
                  target="_blank"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                      {icon}
                      <span className="text-dark-primary font-medium text-lg">
                        {key}
                      </span>
                    </div>
                    <span className="text-dark-secondary text-base">
                      {name}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
