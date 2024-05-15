import axios from 'axios';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import UrlDetails from './UrlDetails';

export default function Hero() {
  const [urlInput, setUrlInput] = useState('');
  const [msg, setMsg] = useState('Paste your URL and click Shorten');
  const [shortUrl, setShortUrl] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [longUrl, setLongUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUrlInputChange = e => setUrlInput(e.target.value);

  const handleUrlSubmit = () => {
    if (urlInput == '') {
      return setMsg("URL cannot be empty. Try again");
    }

    setLoading(true);
    const currentDate = new Date();
    const expireDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate());
    const token = currentDate.toISOString().replace(/\D/g, "").slice(4, 14);

    axios
      .post('https://unelma.io/api/v1/link',
        {
          'alias': token,
          'type': 'direct',
          'password': null,
          'active': true,
          'expires_at': expireDate.toISOString().split("T")[0],
          'activates_at': currentDate.toISOString().split("T")[0],
          'utm': 'utm_source=google&utm_medium=banner',
          'domain_id': null,
          'title': token,
          'description': token,
          'pixels': [495],
          'groups': [54],
          'rules': [
            {
              'type': 'geo',
              'key': 'us',
              'value': 'https://facebook.com'
            }
          ],
          'long_url': urlInput
        },
        {
          headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_UNELMA_API_TOKEN}`,
            'Content-Type': 'application/json'
          }
        }
      )
      .then(response => {
        const link = response.data.link;
        setMsg("Thank you for using Short URL! Here is your short URL: ");
        setShortUrl(link.short_url);
        setLongUrl(link.long_url);
        setExpireDate(link.expires_at);
      })
      .catch(error => console.log(error.toJSON()))
      .finally(() => setLoading(false))
  }

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 25 },
          pb: { xs: 8, sm: 20 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            Free URL&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              Shortener
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            {msg}
            <Link href={shortUrl} target="_blank" color="primary">
              {shortUrl}
            </Link>
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your URL"
              placeholder="Enter your URL"
              inputProps={{
                autoComplete: 'off',
              }}
              onChange={handleUrlInputChange}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleUrlSubmit}
              disabled={loading}
            >
              {loading ? 'Shortening...' : 'Shorten'}
            </Button>
          </Stack>
          <UrlDetails
            urlInput={urlInput}
            shortUrl={shortUrl}
            longUrl={longUrl}
            expireDate={expireDate}
          />
        </Stack>
      </Container>
    </Box>
  );
}