import { Link, Typography } from "@mui/material";

export default function UrlDetails({urlInput, shortUrl, longUrl, expireDate}) {
  expireDate = expireDate.split("T")[0].split("-").reverse().join("/");
  return (
    <>
        <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
          {urlInput !== '' && `Input: ${urlInput}`}
        </Typography>

        {longUrl !== '' && 
          <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
              Long URL:&nbsp;
              <Link href={longUrl} target="_blank" color="primary">
                  {longUrl}
              </Link>
          </Typography>
        }

        {shortUrl !== '' && 
          <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
              Short URL:&nbsp;
              <Link href={shortUrl} target="_blank" color="primary">
                  {shortUrl}
              </Link>
          </Typography>
        }

        <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
          {expireDate !== '' && `Expiration: ${expireDate}`}
        </Typography>

    </>
  )
}
