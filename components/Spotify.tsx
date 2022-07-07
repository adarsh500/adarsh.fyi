import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import styles from './Spotify.module.scss';

export const Spotify = () => {
  const [token, setToken] = useState('');

  const id = '06HL4z0CvFAxyc27GXpf02';
  const market = 'US';

  useEffect(() => {
    // Api call for retrieving token
    axios('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' +
          Buffer.from(
            'e793fdc9be3d423c98c2d8287f852ca5' +
              ':' +
              '5bb9489317144851a3e7445b8bea630f'
          ).toString('base64'),
      },
      //   body: querystring.stringify({
      //     grant_type: 'refresh_token',
      //     refresh_token,
      //   }),
      data: 'grant_type=client_credentials',
    })
      .then((tokenresponse) => {
        console.log('token is', tokenresponse.data);
        setToken(tokenresponse.data.access_token);

        // Api call for retrieving tracks data
        axios(
          `https://api.spotify.com/v1/artists/${id}/top-tracks?market=${market}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: 'Bearer ' + tokenresponse.data.access_token,
            },
          }
        )
          .then((trackresponse) => {
            console.log(trackresponse.data.tracks);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(
    'bugger',
    Buffer.from(
      'e793fdc9be3d423c98c2d8287f852ca5' +
        ':' +
        '5bb9489317144851a3e7445b8bea630f'
    ).toString('base64')
  );
  return <h1>fml</h1>;
};
