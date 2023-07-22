## adarsh.fyi

This is my personal website / blog.

## Tech stack

- NextJS 13 (app dir with RSC)
- React
- Typescript
- TailwindCSS
- Vercel

## Running Locally

1. Create a `.env.local` file in the root of the project and add paste this in it.

```bash
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REFRESH_TOKEN=
```

2. Obtain `client_id` and `client_secret` from [Spotify](https://developer.spotify.com/dashboard/applications) and add them to `.env.local` file.

3. Obtain `refresh_token`. Follow this [blog post](https://benwiz.com/blog/create-spotify-refresh-token/) to obtain it.

```bash
git clone https://github.com/adarsh500/adarsh.fyi.git
cd adarsh.fyi
pnpm i
pnpm dev
```
