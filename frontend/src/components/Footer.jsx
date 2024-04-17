import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      <Link href="https://alextran.dev">Alex Tran&nbsp;</Link>
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '0%',
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Copyright />
          <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
            API provided by &nbsp;
            <Link href="https://unelma.io" color="primary">
              Unema
            </Link>
          </Typography>
        </div>
      </Box>
    </Container>
  );
}