const HARDWARE = [
  {
    key: "Laptop (work)",
    name: 'Macbook Pro M3 Pro 16"',
    description: "A money minting machine",
    link: "https://www.apple.com/macbook-pro-16/",
  },
  {
    key: "Laptop (personal)",
    name: 'Macbook Air M1 13"',
    description: "Another money minting machine",
    link: "https://www.apple.com/macbook-pro-13/",
  },
  {
    key: "Phone",
    name: "iPhone 15",
    description: "Great phone, great camera, great battery",
    link: "https://www.apple.com/iphone-15/",
  },
  {
    key: "Headphones",
    name: "Sony WH-1000XM4",
    description: "Favorite pair of headphones",
    link: "https://www.sony.com/electronics/headband-headphones/wh-1000xm4",
  },
  {
    key: "Earphones",
    name: "AirPods Pro 2",
    description: "I use these when my headphones die",
    link: "https://www.apple.com/airpods-pro/",
  },
  {
    key: "Mice",
    name: "MX Master 3S",
    description: "A super fucntional and ergonomic mouse",
    link: "https://www.logitech.com/en-in/products/mice/mx-master-3s.html",
  },
  {
    key: "Keyboard",
    name: "Keychron K2V2",
    description: "A hot-swappable keyboard that feels and sounds great",
    link: "https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard",
  },
  {
    key: "Monitor",
    name: "Gigabyte G27F",
    description: 'A 1080p 27" monitor with height adjustment',
    link: "https://www.gigabyte.com/Monitor/G27F#kf",
  },
  {
    key: "Monitor",
    name: "MSI MAG QRF E2 QD",
    description: 'A 1080p 27" monitor with height adjustment',
    link: "https://www.msi.com/Monitor/MAG-274QRF-QD-E2",
  },
  {
    key: "Speakers",
    name: "Amazon Echo Dot 3rd Gen",
    description: "I don't know why i have this",
    link: "https://www.amazon.com/Echo-Dot-3rd-Gen-Smart-speaker-with-Alexa-Charcoal/dp/B07FZ8S74R",
  },
  {
    key: "Monitor Light Bar",
    name: "Quntis ML214",
    description: "Adds vibes✨ to my setup",
    link: "https://www.amazon.in/dp/B0CRZ4NCQL?ref=ppx_pop_mob_ap_share",
  },
  {
    key: "Monitor Light Bar",
    name: "Quntis HY214 Pro",
    description: "Adds vibes✨ to my setup",
    link: "https://www.amazon.in/Quntis-Backlight-Weighted-Adjustable-Stepless/dp/B0CZLBG794?crid=2E0ADLN0MLEFS&dib=eyJ2IjoiMSJ9.EmzIU93U_iGYPEn9jjRVmuaV_aFEg14axqgaO10EW0XxU3MC16U_X4tw-I9iFlJ6BmhcqxKSlOj7Yrmkj-98Mb0iJ4jSM3LgIbhFymnzLRmADoBsIiNzqRpPNpidRFgGTaSVEB6W1eACbzBb1hHkWWuC-BtF01IPp35Mra5Dl2ZgN8rDDVK82jElm4RcXX5xWjZcYiVMgsZzkWNScpMHnY_-ekgD84WdxXA0ddqxdBWEArreI_WJaSRlk7T_PWolvGCDJQVg6uILwiEjW1PQpEMCD6_3QdNdt5se-M1RsFs.FikA3TLaX-mOfuliLYMWkJ47dI6ht6JH6ylbGpQnj70&dib_tag=se&keywords=quntis%2Bmonitor%2Blight&nsdOptOutParam=true&qid=1743961944&sprefix=quntis%2Bmon%2Caps%2C219&sr=8-5&th=1",
  },
  {
    key: "Gaming",
    name: "PS5 slim",
    description: "Too OP",
    link: "https://www.amazon.in/Sony-CFI-2008A01X-PlayStation%C2%AE5-Console-slim/dp/B0CY5HVDS2",
  },
  {
    key: "Monitor arm",
    name: "Jin office dual monitor arm",
    description: "Too OP",
    link: "https://www.jin.net.in/product/dual-monitor-table-stand/",
  },
  {
    key: "Desk",
    name: "Ergo You sit-stand desk",
    description: "Too OP",
    link: "https://www.ergoyou.in/products/ergoyou-height-adjustable-desk-with-wood-grain-table-top-dual-motor-3-stage",
  },
  {
    key: "Watch",
    name: "Seiko Sports 5 GMT",
    description: "A magnificent timepiece",
    link: "https://seikowatches.co.in/products/seiko-5-skx-sports-style-gmt-series-ssk003k1",
  },
];

const SOFTWARE = [
  {
    key: "IDE",
    name: "VS Code",
    description: "The current editor of choice, might switch to neovim",
    link: "https://code.visualstudio.com/",
  },
  {
    key: "Terminal",
    name: "Warp",
    description: "Best terminal for MacOS",
    link: "https://www.warp.dev/",
  },
  {
    key: "Browser",
    name: "Chrome",
    description: "The browser of choice",
    link: "https://thebrowser.company/",
  },
  {
    key: "Calendar",
    name: "Notion Calendar (Cron)",
    description: "Best calendar for productivity",
    link: "https://cron.com/",
  },
  {
    key: "Spotlight",
    name: "Raycast",
    description: "The GOAT productivity tool for MacOS",
    link: "https://www.raycast.com/",
  },
  {
    key: "Music",
    name: "Apple Music",
    description: "The music provider of choice",
    link: "https://www.apple.com/apple-music/",
  },
  {
    key: "theme",
    name: "Github Dark",
    description: "The theme of choice",
    link: "https://github.com/sindresorhus/github-dark-css",
  },
  {
    key: "font",
    name: "JetBrains Mono",
    description: "The font of choice",
    link: "https://www.jetbrains.com/lp/mono/",
  },
  {
    key: "Copilot",
    name: "Supermaven",
    description: "A blazding fast code completion tool",
    link: "https://supermaven.com/",
  },
];

const CONFIGS = [
  {
    key: "dotfiles",
    name: "Dotfiles",
    description: "Dotfiles",
    link: "https://github.com/adarsh500/dotfiles",
  },
];

export { HARDWARE, SOFTWARE, CONFIGS };
